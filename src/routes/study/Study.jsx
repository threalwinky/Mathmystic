/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import Navbar from '../../components/navbar/Navbar';

import db from '../../../firebase'
import './Study.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import { Loading } from '../../containers';
import Footer from '../../components/footer/Footer';
import StudyFree from './StudyFree';
import StudyPro from './StudyPro';
import Model from './component/Model';
import AR from './component/AR';
import Audio from './component/Audio'
import { useParams, useLocation } from 'react-router-dom';
import Document from './component/Document';
import Videos from './component/Videos';

const Study = () => {
  /* Necessary function */
  const [t, i18n] = useTranslation()
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })
  const [loading, setLoading] = useState(0)
  const [mode, setMode] = useState('no')
  const [choose, setChoose] = useState(1)
  useEffect(() => {
    setLoading(1)

  }, [])
  const params = useParams()
  // useEffect(() => { if (params != {}) setChoose(2) })
  const defaultParams = {id: 'hdtr1', check: 1}

  const defaultParamsDoc = {id: 'so-tay-hinh-hoc', check: 1}

  // console.log)
  const loc = useLocation()
  const [cnt, setCnt] = useState(0)
  useEffect(() => {
    // console.log(params.id.startsWith('h'))
    
    // console.log(test.pathname.includes("audio"))
    if (loc.pathname.includes("audio") && params.id != undefined && cnt == 0){
      setChoose(2)
      // window.location.href('/')
    }
    if (loc.pathname.includes("doc") && params.id != undefined && cnt == 0){
      setChoose(3)
      // window.location.href('/')
    }
    if (loc.pathname.includes("videos")){
      setChoose(4)
      // window.location.href('/')
    } 
    setCnt(cnt+1);
  }, [])

  

  const Choose = () => {
    // const check = params.id == undefined || params.id.includes()

    if (choose == 1) {
      return <Model />
    }
    if (choose == 2) {
      console.log(loc.pathname.includes('doc'))
      return <Audio
       params={(params.id == undefined || loc.pathname.includes('doc')) ? 
       defaultParams : params}  />
    }
    if (choose == 3) {
      return <Document 
      params={(params.id == undefined || loc.pathname.includes('audio')) ?
       defaultParamsDoc : params}/>
    }
    if (choose == 4) {
      return <Videos/>
    }
    if (choose == 5) {
      return (
        <AR />
      )
    }
  }




  return (
    <div>
      {!loading ? <Loading /> :

        <div>
          <Navbar show={"1"} />

          <div className='study header-background-color2'>
            <Choose />
          </div>

          <div className='study-toolbar font-rbt'>
            <div
              className={'elm ' + (choose == 1 ? "choose" : " ")}
              onClick={() => { setChoose(1) }} >

              <p><Trans>Models</Trans></p>
            </div>
            
              <div className={'elm ' + (choose == 2 ? "choose" : " ")}
              onClick={() => { setChoose(2) }} >
              <p><Trans>Audios</Trans></p>
            </div>

            <div className={'elm ' + (choose == 3 ? "choose" : " ")}
              onClick={() => { setChoose(3) }}>
              <Trans>Document</Trans>
            </div>
            <div className={'elm ' + (choose == 4 ? "choose" : " ")}
              onClick={() => { setChoose(4) }}>
              Videos
            </div>
            <div className={'elm ' + (choose == 5 ? "choose" : " ")}
              onClick={() => { setChoose(5) }}>

              3D AR
            </div>
          </div>

          <Footer>

          </Footer>

        </div>

      }
    </div>
  )
}

export default Study
