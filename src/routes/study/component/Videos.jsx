/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import ReactPlayer from 'react-player/file'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Slide } from 'react-slideshow-image';
import { motion } from 'framer-motion';



import Document1 from '../../../assets/vid/V1.mp4'
import Document2 from '../../../assets/vid/V2.mp4'
import Document3 from '../../../assets/vid/V3.mp4'
import Document4 from '../../../assets/vid/V4.mp4'
import Document5 from '../../../assets/vid/V5.mp4'
import gioithieu from '../../../assets/vid/gioithieu.mp4'
import hdsd from '../../../assets/vid/hdsd.mp4'
import hinhtru from '../../../assets/vid/hinhtru.mp4'
import bomohinh from '../../../assets/vid/gioithieu.mp4'

import Document1tn from '../../../assets/vid/thumbnail/V1.png'
import Document2tn from '../../../assets/vid/thumbnail/V2.png'
import Document3tn from '../../../assets/vid/thumbnail/V3.png'
import gioithieutn from '../../../assets/vid/thumbnail/gioithieu.png'
import hdsdtn from '../../../assets/vid/thumbnail/hdsd.png'
import hinhtrutn from '../../../assets/vid/thumbnail/hinhtru.png'
import bomohinhtn from '../../../assets/vid/thumbnail/gioithieu.png'

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
      url: gioithieu,
      tn: gioithieutn,
      title: "Giới thiệu sản phẩm Mô hình toán học Mathmystic",
      index: "1",
      description: "Là một lựa chọn tối ưu, từ một bộ học cụ có thể tạo ra các loại hình học từ hình học phẳng đến hình học không gian",
    },
    {
      url: hdsd,
      tn: hdsdtn,
      title: "Hướng dẫn sử dụng bộ học cụ Mathmystic",
      index: "2",
      description: "Là một lựa chọn tối ưu, từ một bộ học cụ có thể tạo ra các loại hình học từ hình học phẳng đến hình học không gian",
    },
    {
      url: bomohinh,
      tn: bomohinhtn,
      title: "Bộ mô hình Mathmystic - gồm những gỉ ??",
      index: "3",
      description: "Là một lựa chọn tối ưu, từ một bộ học cụ có thể tạo ra các loại hình học từ hình học phẳng đến hình học không gian",
    },
    {
      url: hinhtru,
      tn: hinhtrutn,
      title: "Cách dựng hình trụ bằng Mô hình toán học",
      index: "4",
      description: "Cách dựng hình trụ từ Mathmystic",
    },
    {
      url: Document1,
      tn: Document1tn,
      title: "Cách dựng hình chóp bằng Mathmystic",
      index: "5"
    },

    {
      url: Document2,
      tn: Document2tn,
      title: "Cách dựng hình chóp bằng Mathmystic có ",
      index: "6"
    },

    {
      url: Document3,
      tn: Document3tn,
      title: "Cách dựng hình chóp bằng Mathmystic",
      index: "7"
    },

    {
      url: Document4,
      tn: Document3tn,
      title: "Cách dựng hình chóp bằng Mathmystic",
      index: "8"
    },

    {
      url: Document5,
      tn: Document3tn,
      title: "Cách dựng hình chóp bằng Mathmystic",
      index: "9"
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
          <div className='flex flex-col w-full '>
            <ReactPlayer
              {...{ controls: true, width: '90%' }}
              style={{ margin: 'auto' }}
              url={i.url}
              className="aspect-video bg-sky-300 p-3 rounded-xl"

            />
            <div className=' p-20 max-xl:p-6 py-4 overflow-y-scroll'>
              <div className='bg-sky-300 rounded-xl p-3'>
                <p className='font-semibold text-2xl'>{i.title}</p>
                <p className='font-normal text-lg mt-5 text-sm'>Được đăng bởi </p>
                <div className='flex items-center gap-3 mt-2'>
                  <img src={MathmysticLogo} alt="" className='w-10' />
                  <div><p className='font-medium'>Mathmystic</p>
                    <p className='text-sm'>103 người theo dõi</p></div>

                  <button className='save-button rounded-lg p-2 px-5
                                            
                                    bg-white        
                                            p-1 px-5 rounded-lg font-rbt text-base
                                 capitalize
                                 text-black
                                [text-shadow:_-3px_3px_15px_#fff]
                                 border-solid  '>Xem trang cá nhân</button>
                </div>
                <div className='flex gap-2 mt-6 self-end justify-end'>
                  <div className='flex bg-sky-200 p-3 gap-3 rounded-xl'>
                    <div className='flex items-center justify-center '>
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"

                      >
                        <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0142.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z" />
                      </svg>
                      <p>12</p>
                    </div>
                    <div className='w-[0.1rem] h-full bg-slate-500'>

                    </div>
                    <div className='flex items-center justify-center'>
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"

                      >
                        <path d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 00-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 01-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0133.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0119.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0119.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19a56.76 56.76 0 0119.6 43c0 19.1-11 37.5-28.8 48.4z" />
                      </svg>
                      <p >0</p>
                    </div>
                  </div>

                  <div className='flex items-center justify-center  bg-sky-200 p-3 gap-3 rounded-xl'>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="1em"
                      width="1em"

                    >
                      <path d="M11 7.05V4a1 1 0 00-1-1 1 1 0 00-.7.29l-7 7a1 1 0 000 1.42l7 7A1 1 0 0011 18v-3.1h.85a10.89 10.89 0 018.36 3.72 1 1 0 001.11.35A1 1 0 0022 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 00-2 .13A1 1 0 009 14v1.59L4.42 11 9 6.41V8a1 1 0 001 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 00-7.82-2.55z" />
                    </svg>
                    <p><Trans>Share</Trans></p>
                  </div>
                  <div className='flex items-center justify-center  bg-sky-200 p-3 gap-3 rounded-xl'>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="1em"
                      width="1em"

                    >
                      <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h7.81c-.36-.62-.61-1.3-.73-2H5V5h11.17L19 7.83v4.25c.7.12 1.38.37 2 .73V7l-4-4H5m1 3v4h9V6H6m6 6c-1.66 0-3 1.34-3 3s1.34 3 3 3c0-1.89.89-3.66 2.39-4.79C13.85 12.5 13 12 12 12m5 2v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />
                    </svg>
                    <p><Trans>Save</Trans></p>
                  </div>

                </div>
                <div>
                  <p className='text-lg font-semibold mt-2'>
                    <Trans>Description</Trans>
                  </p>
                  <p>
                    {i.description}
                  </p>
                </div>
                <div>
                  <p className='text-lg font-semibold mt-4'> <Trans>Comments</Trans></p>
                </div>
                <div>
                  <p className='text-lg font-semibold mt-2 h-0'> <Trans> </Trans></p>
                </div>

              </div>


            </div>
          </div>



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
      {foundUser.paid == 'free' ? <NotPaid /> :
        <div className='w-full flex  h-screen flex-col pt-24 max-xl:pt-[8rem] font-rbt  overflow-y-scroll'>

          <div className='flex max-xl:flex-col-reverse'>
            <motion.div


              className='mt-3 mx-10 flex flex-col overflow-y-scroll h-screen bg-sky-300 gap-4 rounded-xl'>
              {/* <select name="" id="" value={selected} onChange={evt => setSelected(evt.target.value)}>
                <option value="1">Cách dựng hình chóp</option>
                <option value="2">Cách dựng hình chóp đáy tứ giác</option>
                <option value="3">Cách dựng hình chóp có cạnh bên vuông với đáy</option>
                <option value="4">Cách dựng hình nón</option>
              </select> */}

              {videos?.map((vd, id) => (
                <motion.div
                  whileTap={{ scale: [1.1, 1] }}
                  onClick={() => { setSelected(vd.index) }}

                  key={id} className='bg-sky-200  m-2 mr-5 rounded-xl flex gap-3 hover:scale-105 cursor-pointer
                py-3
                
                p-2 px-5'>

                  <img src={vd.tn} alt="" className='w-32 aspect-square rounded-xl' />
                  <p className='truncate 
                  
                  w-40 max-xl:w-full'>{vd.title}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className='w-full'>
              <Choose />
            </div>

          </div>
        </div>

      }

    </>
  )
}

export default Videos
