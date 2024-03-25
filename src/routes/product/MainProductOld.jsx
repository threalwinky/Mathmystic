import React from 'react'
import 'react-medium-image-zoom/dist/styles.css'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import { translate, Trans, withTranslation, useTranslation } from 'react-i18next'
import Zoom from 'react-medium-image-zoom'
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import { Button, Popup } from "semantic-ui-react";
import { BsThreeDotsVertical } from "react-icons/bs";

import MathmysticPet from '../../assets/img/MathmysticPet.png'
import './MainProduct.css'
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore';
import db from '../../firebase'
import { Loading } from '../../containers';
import { toast } from 'react-toastify';
import PopupSuccessStore1 from '../../containers/modal/PopupSuccessStore1';
import PopupFailStore1 from '../../containers/modal/PopupFailStore1';
const MainProduct = ({ productInfo }) => {
  const [t, i18n]= useTranslation();
  const [zoom, setZoom] = useState(false)

  const [mainImg, setMainImg] = useState(productInfo.imgUrl[0])

  const [mainImgIndex, setMainImgIndex] = useState(0)
  const [productCount, setProductCount] = useState(1)
  const [foundUser, setFoundUser] = useState([])
  const [loading, setLoading] = useState(0)
  const [pcomment, setPcomment] = useState([])
  const [pcommentInput, setPcommentInput] = useState('')
  const [stars, setStars] = useState(5)
  const [isOpenPopupSuccessStore1, setIsOpenPopupSuccessStore1] = useState(0)
  const [isOpenPopupFailStore1, setIsOpenPopupFailStore1] =useState(0)
  const Stars = ({ starscnt }) => {
    return (
      <div>
        {/* {starscnt} */}
        <div className='stars'>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            color={starscnt > 0 ? 'yellow' : 'gray'}
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
          </svg>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            color={starscnt > 1 ? 'yellow' : 'gray'}
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
          </svg>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            color={starscnt > 2 ? 'yellow' : 'gray'}
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
          </svg>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            color={starscnt > 3 ? 'yellow' : 'gray'}
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
          </svg>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            color={starscnt > 4 ? 'yellow' : 'gray'}
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
          </svg>

        </div>

      </div>
    )
  }

  const Stars2 = () => {
    return (
      <div>
        <div className='stars'>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            color={stars > 0 ? 'yellow' : 'gray'}
            onClick={() => setStars(1)}
            style={{ cursor: 'pointer' }}
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
          </svg>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            color={stars > 1 ? 'yellow' : 'gray'}
            onClick={() => setStars(2)}
            style={{ cursor: 'pointer' }}
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
          </svg>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            color={stars > 2 ? 'yellow' : 'gray'}
            onClick={() => setStars(3)}
            style={{ cursor: 'pointer' }}
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
          </svg>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            color={stars > 3 ? 'yellow' : 'gray'}
            onClick={() => setStars(4)}
            style={{ cursor: 'pointer' }}
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
          </svg>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            color={stars > 4 ? 'yellow' : 'gray'}
            onClick={() => setStars(5)}
            style={{ cursor: 'pointer' }}
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
          </svg>

        </div>
      </div>
    )
  }



  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "pcomment")), (doc) => {
      getDocs(collection(db, "pcomment"))
        .then((querySnapshot) => {
          const newData = querySnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }));
          const newData2 = []
          newData.forEach(element => {
            if (element.createdIn == productInfo.id)
              newData2.push(element)
          });
          setPcomment(newData2.sort(function (a, b) { return b.createdAt - a.createdAt }))
          // console.log(newData.sort(function (b, a) { return b.createdAt - a.createdAt }))
          setLoading(1)
        })
    });
    getDocs(collection(db, "account"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const foundUser2 = (newData.find(x => x.email == localStorage.getItem('user')))
        setFoundUser(foundUser2)
        console.log(foundUser2)
        setLoading(1)
      })

  }, [])

  const addProductToCart = () => {
    if (localStorage.getItem('user') == null) {
      // PopUp('Vui long dang nhap de dat hang')
      setIsOpenPopupFailStore1(1)
    }
    else {
      // PopUp('Sản phẩm đã được thêm vào giỏ hàng')
      setIsOpenPopupSuccessStore1(1)
      addDoc(collection(db, "cart"), {
        productCount,
        product: productInfo,
        createdBy: foundUser,
        createdAt: Timestamp.now().seconds,
        pick: 1
      });
    }
  }

  const changeMoney = (money) => {
    var m = ((money).toLocaleString(
      undefined,

      { minimumFractionDigits: 2 }
    ))
    return m.substring(0, m.length - 3)
  }

  const addPcomment = () => {
    console.log(pcommentInput)
    addDoc(collection(db, 'pcomment'), {
      content: pcommentInput.replace(/\n/g, "<br>"),
      createdAt: Timestamp.now().seconds,
      createdBy: foundUser,
      createdIn: productInfo.id,
      stars,
    })
    setPcommentInput('')
  }

  const deletePcomment = (idDeletePcomment) => {
    deleteDoc(doc(db, 'pcomment', idDeletePcomment))
  }

  return (
    <div>
      {!loading ? <Loading /> :

        <div className='product-container'>


          <div className='product' id='home'>
            <div className='product-direct-link'>
              <span>
                <span><HashLink to={'/#home'}><Trans>Home</Trans></HashLink></span>
                <span>/</span>
                <span><HashLink to={'/#store'}><Trans>Store</Trans></HashLink></span><span>/</span>
                <span><Trans>{productInfo.name}</Trans></span>
              </span>

            </div>
            <div className='product-img'>
              {/* {mainImgIndex} */}
              <img src={mainImg} alt='' className='main' />
              <div className='sub'>
                {productInfo.imgUrl.map((img, index) => (
                  <div key={index}>
                    <img src={img} className={index == mainImgIndex ? "choose" : ""} onClick={() => { setMainImg(img); setMainImgIndex(index) }} />
                  </div>
                ))}
              </div>
            </div>
            <div className='product-content'>
              <div className='main'>
                <span>{productInfo.description}</span>
                <h1><Trans>{productInfo.name}</Trans></h1>
              </div>
              <p className='intro'>
                {productInfo.about.map((img, index) => (
                  <div key={index}>
                    <li><Trans>{img}</Trans></li>
                  </div>
                ))}
              </p>
              <h6 className='price'>{changeMoney(productInfo.price)}₫</h6>
              <div className='sub'>
                <div className='content'>
                  <button disabled={productInfo.available == "0" || productCount == 1} onClick={() => setProductCount(productCount - 1)}>-</button>
                  <span>{productCount}</span>
                  {/* <input type="text" value={productCount} /> */}
                  <button disabled={productInfo.available == "0"} onClick={() => setProductCount(productCount + 1)}>+</button>
                </div>
                <button onClick={addProductToCart} disabled={productInfo.available == "0"}> <Trans>{productInfo.available == "0" ? "Out of stock" : "Add to cart"}</Trans> </button>
              </div>
            </div>

          </div>
          <div className='product-comment'>
            <h1><Trans>Product Review</Trans></h1>
            <div className='product-comment-container'>
              <div className='product-comments'>
                {
                  pcomment?.map((cmt, id) => (
                    <div key={id}>
                      <div className='product-comment-box'>
                        <div className='product-comment-info'>
                          <img src={cmt.createdBy.avatar} alt="" />
                        </div>
                        <div className='product-comment-all'>
                          <div className='product-comment-content'>
                            <div>

                            </div>
                            <h5>{cmt.createdBy.name}</h5>
                            <Stars starscnt={cmt.stars} />
                            {/* {typeof cmt.stars} */}
                            <h6>{cmt.createdAt}</h6>
                            <h5>{cmt.content}</h5>
                    
                          </div>
                          <div>
                            
                            <Popup
                              content={<button className="abc" onClick={() => deletePcomment(cmt.id)}> <Trans>Delete</Trans></button>}
                              on='click'
                              pinned
                              position="top right"
                              trigger={<BsThreeDotsVertical size={20} />}>
                            </Popup>
                          </div>

                        </div>

                      </div>

                    </div>
                  ))
                }
              </div>

              <div className='product-comment-input'>
                <Stars2 />
                <textarea placeholder={t('Push a comment')} value={pcommentInput} onChange={evt => setPcommentInput(evt.target.value)} type="text" />
                <button onClick={addPcomment}><Trans>Send</Trans></button>
              </div>
            </div>
          </div>
          {isOpenPopupSuccessStore1 ? <PopupSuccessStore1 setIsOpenPopupSuccessStore1={setIsOpenPopupSuccessStore1} /> : ""}
          {isOpenPopupFailStore1 ? <PopupFailStore1 setIsOpenPopupFailStore1={setIsOpenPopupFailStore1} /> : ""}
        </div>
      }

    </div>
  )
}

export default MainProduct
