/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { Fade, Slide } from 'react-slideshow-image';
import { Worker } from '@react-pdf-viewer/core';
import ReactPlayer from 'react-player/file'
import 'react-slideshow-image/dist/styles.css'

import db from '../../../firebase'
import './Document.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import Document1 from '../../assets/vid/V1.mp4'
import Document2 from '../../assets/vid/V2.mp4'
import Document3 from '../../assets/vid/V3.mp4'
import Document4 from '../../assets/vid/V4.mp4'
import Document5 from '../../assets/vid/V5.mp4'
import DocEn1 from '../../assets/img/Doc/En/DocEn1.png'
import DocEn2 from '../../assets/img/Doc/En/DocEn2.png'
import DocEn3 from '../../assets/img/Doc/En/DocEn3.png'
import DocEn4 from '../../assets/img/Doc/En/DocEn4.png'
import DocEn5 from '../../assets/img/Doc/En/DocEn5.png'
import DocEn6 from '../../assets/img/Doc/En/DocEn6.png'
import DocEn7 from '../../assets/img/Doc/En/DocEn7.png'
import DocEn8 from '../../assets/img/Doc/En/DocEn8.png'
import DocEn9 from '../../assets/img/Doc/En/DocEn9.png'
import DocEn10 from '../../assets/img/Doc/En/DocEn10.png'

import DocVn1 from '../../assets/img/Doc/Vn/DocVn1.png'
import DocVn2 from '../../assets/img/Doc/Vn/DocVn2.png'
import DocVn3 from '../../assets/img/Doc/Vn/DocVn3.png'
import DocVn4 from '../../assets/img/Doc/Vn/DocVn4.png'
import DocVn5 from '../../assets/img/Doc/Vn/DocVn5.png'
import DocVn6 from '../../assets/img/Doc/Vn/DocVn6.png'
import DocVn7 from '../../assets/img/Doc/Vn/DocVn7.png'
import DocVn8 from '../../assets/img/Doc/Vn/DocVn8.png'
import DocVn9 from '../../assets/img/Doc/Vn/DocVn9.png'
import DocVn10 from '../../assets/img/Doc/Vn/DocVn10.png'


import Ins1 from '../../assets/img/Doc/Ins/Ins1.png'
import Ins2 from '../../assets/img/Doc/Ins/Ins2.png'
import Ins3 from '../../assets/img/Doc/Ins/Ins3.png'
import Ins4 from '../../assets/img/Doc/Ins/Ins4.png'
import Ins5 from '../../assets/img/Doc/Ins/Ins5.png'

const Document = () => {
  /* Necessary function */
  const [t, i18n] = useTranslation()
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })

  const [choose, setChoose] = useState(1)

  const [docContent, setDocContent] = useState('1')
  // const [value, setValue] = useState('1')
  const projects = [
    { imgUrl: DocVn1 },
    { imgUrl: DocVn2 },
    { imgUrl: DocVn3 },
    { imgUrl: DocVn4 },
    { imgUrl: DocVn5 },
    { imgUrl: DocVn6 },
    { imgUrl: DocVn7 },
    { imgUrl: DocVn8 },
    { imgUrl: DocVn9 },
    { imgUrl: DocVn10 },
  ];

  const projects2 = [
    { imgUrl: DocEn1 },
    { imgUrl: DocEn2 },
    { imgUrl: DocEn3 },
    { imgUrl: DocEn4 },
    { imgUrl: DocEn5 },
    { imgUrl: DocEn6 },
    { imgUrl: DocEn7 },
    { imgUrl: DocEn8 },
    { imgUrl: DocEn9 },
    { imgUrl: DocEn10 },
  ];
  const projects3 = [
    { imgUrl: Ins1 },
    { imgUrl: Ins2 },
    { imgUrl: Ins3 },
    { imgUrl: Ins4 },
    { imgUrl: Ins5 },

  ];

  useEffect(() => {
    // console.log(docContent)

  }, [])

  const DocElement5 = () => {
    return (
      <>
        <div className="slide-container document-slide">
          <Slide {...{ duration: 100, autoplay: false, indicators: true }}>
            {projects.map((fadeImage, index) => (
              <div key={index}>
                <img style={{ width: '100%', borderRadius: 30 }} src={fadeImage.imgUrl} />
                {/* <h2>{fadeImage.caption}</h2> */}
              </div>
            ))}
          </Slide>
        </div>
      </>
    )
  }

  const DocElement1 = () => {
    return (
      <>
      <div className="slide-container document-slide">
        <iframe
          allowFullScreen="allowfullscreen"
          scrolling="no" className="fp-iframe"
          style={{ border: "1px solid lightgray", width: isDesktopOrLaptop ? "80%" : '90%', height: isDesktopOrLaptop ? "1000px" : "250px", padding: 20 }}
          src="https://heyzine.com/flip-book/2ac410fc4e.html">
        </iframe>
        {/* <iframe allowfullscreen="allowfullscreen" scrolling="no" class="fp-iframe" style="border: 1px solid lightgray; width: 100%; height: 400px;" src="https://heyzine.com/flip-book/2ac410fc4e.html"></iframe> */}
          {/* <div>
            213
          </div> */}
</div>
      </>
    )

  }

  const DocElement2 = () => {
    return (
      <>
        {/* <div className="slide-container document-slide">
          <Slide {...{ duration: 100, autoplay: false, indicators: true }}>
            {projects2.map((fadeImage, index) => (
              <div key={index}>
                <img style={{ width: '100%', borderRadius: 30 }} src={fadeImage.imgUrl} />
              </div>
            ))}
          </Slide>
        </div> */}
        <iframe
          allowfullscreen="allowfullscreen"
          scrolling="no" className="fp-iframe"
          style={{ border: "1px solid lightgray", width: isDesktopOrLaptop ? "80%" : '90%', height: isDesktopOrLaptop ? "1000px" : "250px", padding: 20 }}
          src="https://heyzine.com/flip-book/9f0a65b367.html">
        </iframe>
        {/* <iframe allowfullscreen="allowfullscreen" scrolling="no" class="fp-iframe" style="border: 1px solid lightgray; width: 100%; height: 400px;" src=""></iframe> */}
      </>
    )
  }

  const DocElement3 = () => {
    return (
      <>
        <div className="slide-container document-slide">
          {/* <Slide {...{ duration: 100, autoplay: false, indicators: true }}>
            {projects3.map((fadeImage, index) => (
              <div key={index}>
                <img style={{ width: '50%', borderRadius: 30 }} src={fadeImage.imgUrl} />
              </div>
            ))}
          </Slide> */}
          <iframe
          allowfullscreen="allowfullscreen"
          scrolling="no" clasName="fp-iframe"
          style={{ border: "1px solid lightgray", width: isDesktopOrLaptop ? "80%" : '90%', height: isDesktopOrLaptop ? "1000px" : "250px", padding: 20 }}
          src="https://heyzine.com/flip-book/9f0a65b367.html">
        </iframe>
        </div>
      </>
    )
  }

  const DocElement4 = () => {
    return (
      <>
        <div className="slide-container document-slide2">
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
        </div>
      </>
    )
  }

  const Choose = () => {
    if (docContent == '1') return (
      <DocElement1></DocElement1>
    )
    if (docContent == '2') return (
      <DocElement2></DocElement2>
    )
    if (docContent == '3') return (
      <DocElement3></DocElement3>
    )
    if (docContent == '4') return (
      <DocElement4></DocElement4>
    )
  }
  return (
    <div className='document' id='document'>
      <h1><Trans>Document</Trans></h1>
      <div className='document-choose-container'>
        <div className='document-choose'>
          <div
            className={'document-choose-box document-choose-box-1' + (choose == 1 ? ' choose' : '')}
            onClick={() => { setChoose(1), setDocContent(1) }}
          >
            So tay dien tu
          </div>
          <div
            className={'document-choose-box document-choose-box-2' + (choose == 2 ? ' choose' : '')}
            onClick={() => {setChoose(2), setDocContent(3)}}
          >
            Huong dan su dung
          </div>
          <div
            className={'document-choose-box document-choose-box-3' + (choose == 3 ? ' choose' : '')}
            onClick={() => {setChoose(3), setDocContent(4)}}
          >
            Video huong dan
          </div>

        </div>
      </div>

      <div className='document-content'>
        <Choose></Choose>
      </div>
    </div>
  )
}

export default Document
