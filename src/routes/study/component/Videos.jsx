/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import ReactPlayer from 'react-player/file'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Slide } from 'react-slideshow-image';
import Document1 from '../../../assets/vid/V1.mp4'
import Document2 from '../../../assets/vid/V2.mp4'
import Document3 from '../../../assets/vid/V3.mp4'
import Document4 from '../../../assets/vid/V4.mp4'
import Document5 from '../../../assets/vid/V5.mp4'

import db from '../../../../firebase'
// import './Videos.css'
import MathmysticPet from '../../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../../assets/img/MathmysticLogo.png'
import NotPaid from './NotPaid';

const Videos = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const [selected, setSelected] = useState("1")


    const [foundUser, setFoundUser] = useState([])

    const [name, setName] = useState('')

    const [email, setEmail] = useState('')

    const [addr, setAddr] = useState('')

    const [pn, setPn] = useState('')

    const videos = [

        {
            url: Document1,
            title: "n",
            index: "1"
        },

        {
            url: Document2,
            title: "n",
            index: "2"
        },

        {
            url: Document3,
            title: "n",
            index: "3"
        },

        {
            url: Document4,
            title: "n",
            index: "4"
        },

        {
            url: Document5,
            title: "n",
            index: "5"
        }

    ]

    useEffect(() => {
        // console.log(selected)
        getDocs(collection(db, "account"))
        .then((querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }));
            const foundUser2 = (newData.find(x => x.email == localStorage.getItem('user')))
            setFoundUser(foundUser2)
            setName(foundUser2.name)
            setEmail(foundUser2.realEmail)
            setAddr(foundUser2.addr)
            setPn(foundUser2.pn)
            // setLoading(1)
        })
    }, [])

    const [test, setTest] = useState("1")

    const Choose = () => {
        var test = 0
        for (var i of videos) {
            if (i.index == selected) return (
                <>

                    <ReactPlayer
                        {...{ controls: true, width: '80%', height: '90%' }}
                        style={{ margin: 'auto' }}
                        url={i.url} />

                </>
            )
        }
        // console.log(13)




        return (
            <>
                {selected}
            </>
        )
    }

    return (
        <>
          {foundUser.paid == 'free' ? <NotPaid/> : 
            <div className='study-document'>
  {/* <div className="slide-container document-slide2">
          <Slide {...{ duration: 100, autoplay: false, infinite: false, indicators: true }}>
            <div>
              <ReactPlayer
                {...{ controls: true, width: '80%', height: '90%' }}
                style={{ margin: 'auto' }}
                url={Document1} />
              <h3>Cach dung hinh tam giac</h3>
            </div>

            <div>
              <ReactPlayer
                {...{ controls: true, width: '90%', height: '90%' }}
                style={{ margin: 'auto' }}
                url={Document2} />
              <h3>Cach dung hinh tam giac</h3>
            </div>

            <div>
              <ReactPlayer
                {...{ controls: true, width: '100%', height: '90%' }}
                style={{ margin: 'auto' }}
                url={Document3} />
              <h3>Cach dung hinh tam giac</h3>
            </div>

            <div>
              <ReactPlayer
                {...{ controls: true, width: '100%', height: '90%' }}
                style={{ margin: 'auto' }}
                url={Document4} />
              <h3>Cach dung hinh tam giac</h3>
            </div>
            <ReactPlayer
              {...{ controls: true, width: '100%', height: '80%' }}
              style={{ margin: 'auto' }}
              url={Document5} />
          </Slide>
        </div> */}
            {/* <ReactPlayer
                {...{ controls: true, width: '80%', height: '90%' }}
                style={{ margin: 'auto' }}
                url={Document1} /> */}
                <select name="" id="" value={selected} onChange={evt => setSelected(evt.target.value)}>
                <option value="1">Cách dựng hình chóp</option>
                <option value="2">Cách dựng hình chóp đáy tứ giác</option>
                <option value="3">Cách dựng hình chóp có cạnh bên vuông với đáy</option>
                <option value="4">Cách dựng hình nón</option>
            </select>
            <Choose />
            </div>
          
          }
          
        </>
    )
}

export default Videos
