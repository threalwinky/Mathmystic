import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/file'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import 'react-slideshow-image/dist/styles.css'
import { Fade, Slide } from 'react-slideshow-image';
import { useMediaQuery } from 'react-responsive'

import './Document.css'
import { Trans } from 'react-i18next';

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

const Document2 = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 800px)'
  })
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
    console.log(docContent)

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
      <iframe
      allowfullscreen="allowfullscreen"
      scrolling="no" class="fp-iframe"
      style={{ border: "1px solid lightgray", width: isDesktopOrLaptop ? "80%" : '90%', height: isDesktopOrLaptop ? "1000px" : "250px", padding: 20 }}
      src="https://heyzine.com/flip-book/11dd3247df.html">
    </iframe>
      </>
    )
    
  }

  const DocElement2 = () => {
    return (
      <>
        <div className="slide-container document-slide">
          <Slide {...{ duration: 100, autoplay: false, indicators: true }}>
            {projects2.map((fadeImage, index) => (
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

  const DocElement3 = () => {
    return (
      <>
        <div className="slide-container document-slide">
          <Slide {...{ duration: 100, autoplay: false, indicators: true }}>
            {projects3.map((fadeImage, index) => (
              <div key={index}>
                <img style={{ width: '50%', borderRadius: 30 }} src={fadeImage.imgUrl} />
                {/* <h2>{fadeImage.caption}</h2> */}
              </div>
            ))}
          </Slide>
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

  const DocElement = [DocElement1]
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
      <div className='document-content'>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          {!isDesktopOrLaptop ?

            <div>
              <select
                value={docContent}
                // onChange={this.handleChange} 
                aria-label="Default select example"
                className='nav-pills-phone'
                onChange={e => setDocContent(e.target.value)}
              >
                {/* <option value="">123</option> */}
                <option value='1' onClick={() => setDocContent(1)}>

                  <Nav.Item>
                    <Nav.Link eventKey="first" ><Trans>

                      Handbook
                    </Trans>
                    </Nav.Link>
                  </Nav.Item>
                </option >
                {/* <option value='2' onClick={() => setDocContent(2)}>
                  <Nav.Item>
                    <Nav.Link eventKey="second" ><Trans>Handbook(English)</Trans></Nav.Link>
                  </Nav.Item>
                </option > */}
                <option value='3' onClick={() => setDocContent(3)}><Trans>Manual</Trans></option>
                <option value="4" onClick={() => setDocContent(4)}><Trans>Instructional video</Trans></option>

              </select>

            </div>

            : <div>
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey={"first"} onClick={() => setDocContent('1')} ><Trans>Handbook</Trans></Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey={"second"} onClick={() => setDocContent('2')} ><Trans>Handbook(English)</Trans></Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link eventKey={"third"} onClick={() => setDocContent('3')} ><Trans>Manual</Trans></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={"fourth"} onClick={() => setDocContent('4')} ><Trans>Instructional video</Trans></Nav.Link>
                </Nav.Item>
              </Nav>

            </div>}

          <Tab.Content id="slideInUp" >

            <Choose>

            </Choose>


          </Tab.Content>
        </Tab.Container>
      </div>

    </div>
  )
}

export default Document
