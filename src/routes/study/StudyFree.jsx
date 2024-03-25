/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'


import db from '../../../firebase'
import './StudyFree.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'

const StudyFree = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })
    const [studyFreeModalLeft, setStudyFreeModalLeft] = useState(0)
    const [studyFreeModalRight, setStudyFreeModalRight] = useState(0)
    const [note, setNote] = useState('')
    const [foundUser, setFoundUser] = useState([])
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(0)

    const fetchUser = async (e) => {
        await getDocs(collection(db, "account"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                const foundUser2 = newData.find((userId) => {
                    return userId.email == localStorage.getItem('user')
                })
                setFoundUser(foundUser2)
                // console.log()
                if (localStorage.getItem('user') == 'Guest') setFoundUser([{ name: 'guest' }])
                setLoading(1)
            })

        await getDocs(collection(db, "note"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                const newData2 = []
                var total = 0
                newData.forEach(element => {
                    if (element.createdBy.email == localStorage.getItem('user')) {
                        newData2.push(element)
                        // total += element.product.price * element.productCount
                    }
                    // setTotalPrice(total)
                    // console.log(newData2)
                    setNotes(newData2.sort(function (b, a) { return b.createdAt - a.createdAt }));
                    setLoading(1)
                });
                // console.log(newData)

            })
    }

    useEffect(() => {

        const unsub = onSnapshot(query(collection(db, "note")), (doc) => {
            getDocs(collection(db, "note"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));

                    const newData2 = []
                    var total = 0
                    newData.forEach(element => {
                        if (element.createdBy.email == localStorage.getItem('user')) {
                            newData2.push(element)
                            // total += element.product.price * element.productCount * element.pick
                        }
                        // setTotalPrice(total)
                        // console.log(newData2)
                        setNotes(newData2.sort(function (b, a) { return b.createdAt - a.createdAt }));
                        setLoading(1)
                    });

                })
        });

        fetchUser()
    }, [])


    const addNote = async () => {
        if (note == '') return
        console.log(note)



        // console.log(cartEmail, cartPhoneNumber, cartAddress, totalMoney)
        addDoc(collection(db, 'note'), {
            content: note,
            createdAt: Timestamp.now().seconds,
            createdBy: foundUser,

        })


        setNote('')
    }

    const deleteNote = (noteId) => {

        deleteDoc(doc(db, 'note', noteId))

    }

    return (

        <div className='study-free'>
            <div className='study-free-modal-left-toggle'>
                <div
                    className={'study-free-modal-left-content' +
                        (studyFreeModalLeft ? '' : ' show')}>

                    <div className='study-free-top'>
                        <div className="notes">
                            {notes?.map((nt, index) => (
                                <div key={index}>
                                    <div className='note-elm'>
                                        <div className='left'>
                                            {nt.content}
                                        </div>
                                        <div className='right'>
                                            <button onClick={() => deleteNote(nt.id)}>Xoa</button>
                                        </div>


                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='study-free-bottom'>
                        <input
                            placeholder='Add note'
                            type="text"
                            value={note}
                            onChange={evt => { setNote(evt.target.value) }} />
                        <button onClick={() => { addNote() }}>Add</button>
                    </div>

                </div>
                <div className='study-free-modal-left-button'>
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        style={{ transform: !studyFreeModalLeft ? 'rotate(180deg)' : "" }}
                        onClick={() => setStudyFreeModalLeft(!studyFreeModalLeft)}
                    >
                        <path d="M4.431 12.822l13 9A1 1 0 0019 21V3a1 1 0 00-1.569-.823l-13 9a1.003 1.003 0 000 1.645z" />
                    </svg>
                </div>

            </div>


            <div className='study-free-modal-right-toggle'>
                <div className='study-free-modal-right-button'>
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        style={{ transform: studyFreeModalRight ? 'rotate(180deg)' : "" }}
                        onClick={() => setStudyFreeModalRight(!studyFreeModalRight)}
                    >
                        <path d="M4.431 12.822l13 9A1 1 0 0019 21V3a1 1 0 00-1.569-.823l-13 9a1.003 1.003 0 000 1.645z" />
                    </svg>

                </div>
                <div
                    className={'study-free-modal-right-content' +
                        (studyFreeModalRight ? '' : ' show')}>

                    <div className="wrapper">
                        <div className="leftHalf"></div>
                        <div className="spinner"></div>
                        <div className="rightHalf"></div>
                    </div>

                </div>

                
            </div>
            <iframe src="https://www.geogebra.org/classic/nf6e6pad?embed" width="800" height="600" 
                allowFullScreen style={{border: "1px solid #e4e4e4", borderRadius: 4}}
                 frameBorder="0">

                </iframe>
            
            
        </div>
    )
}

export default StudyFree
