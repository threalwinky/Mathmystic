/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import NavBarWoutMenu from '../../components/navbar/NavBarWoutMenu'


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

  const Choose = () =>{
    if (choose == 1){
      return <Model/>
    }
    if (choose == 2){
      return 2
    }
    if (choose == 3){
      return 3
    }
    if (choose == 4){
      return (
        <AR/>
      )
    }
  }

  return (
    <div>
      {!loading ? <Loading /> :

        <div>
          <NavBarWoutMenu />

          <div className='study'>
            <Choose/>
          </div>

          <div className='study-toolbar'>
            <div 
            className={'elm ' + (choose == 1 ? "choose" : " ")}
            onClick={() => {setChoose(1)}} >
              
              <p>Mo hinh</p>
            </div>
            <div className={'elm ' + (choose == 2 ? "choose" : " ")}
            onClick={() => {setChoose(2)}} >
              <p>Am thanh</p>
            </div>
            <div className={'elm ' + (choose == 3 ? "choose" : " ")}
            onClick={() => {setChoose(3)}}>
              Tai lieu
            </div>
            <div className={'elm ' + (choose == 4 ? "choose" : " ")}
            onClick={() => {setChoose(4)}}>
              
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
