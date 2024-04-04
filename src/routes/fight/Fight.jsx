/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'


import db from '../../../firebase'
import './Fight.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import { Link } from 'react-router-dom';

const Fight = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })
    const [fights, setFights] = useState([])

    let a = 2

    const up = () => {

        // console.log(fights[0])
        console.log(a)
        a-=1
        updateDoc(doc(db, "fight", 'QzvP6qCDgUIZwA60q1WR'), {
            a: a,
        })
    }


    useEffect(() => {

        const unsub = onSnapshot(query(collection(db, "fight")), (doc) => {
            getDocs(collection(db, "fight"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));
                    setFights(newData)
                    // console.log(newData)
                    // setLoading(1)
                })
        });

        getDocs(collection(db, "fight"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setFights(newData)
                // console.log(newData)
                // setLoading(1)
            })
        // setInterval(() => {
            // console.log(123)
            // up()
        // }, 1000)
    }, [])



    return (
        <div>
            <button>Tao</button>
            
            {fights?.map((fight, id) => (
                <div key={id}>

                    {/* {fight.a} */}
                    <Link to={`fight/${fight.id}`}><button>Join</button></Link>
                </div>

            ))
            }
        </div>
    )
}

export default Fight
