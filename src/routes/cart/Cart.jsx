/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { HashLink } from 'react-router-hash-link'

import db from '../../../firebase'
import './Cart.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import NavBarWoutMenu from '../../components/navbar/NavBarWoutMenu'
import { Headpage, Loading } from '../../containers'
import PopupSuccessCart1 from '../../containers/modal/PopupSuccessCart1'
import PopupSuccessCart2 from '../../containers/modal/PopupSuccessCart2'
import PopupFailCart1 from '../../containers/modal/PopupFailCart1';
import Store1_1 from '../../assets/img/Store/Store1/Store1_1.jpeg'

const Cart = () => {
  /* Necessary function */
  const [t, i18n] = useTranslation()
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })


  const [open2, setOpen2] = useState(false)

  const [foundUser, setFoundUser] = useState([])
  const [foundProduct, setFoundProduct] = useState([])
  const [loading, setLoading] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const [isOpenPopupSuccessCart1, setIsOpenPopupSuccessCart1] = useState(0)
  const [isOpenPopupSuccessCart2, setIsOpenPopupSuccessCart2] = useState(0)

  const [isOpenPopupFailCart1, setIsOpenPopupFailCart1] = useState(0)
  const fetchUser = async (e) => {
    await getDocs(collection(db, "account"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));

        setFoundUser(newData.find((userId) => {
          return userId.email == localStorage.getItem('user')
        }))
        if (localStorage.getItem('user') == undefined) setFoundUser([{ name: 'guest' }])
        setLoading(1)
      })

    await getDocs(collection(db, "cart"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const newData2 = []
        var total = 0
        newData.forEach(element => {
          // console.log(element.createdBy.email, localStorage.getItem('user'))
          if (element.createdBy.email == localStorage.getItem('user')) {
            // console.log(element)
            newData2.push(element)
            total += element.product.price * element.productCount
          }
          // console.log(total)
          // console.log(newData2)
          setTotalPrice(total)
          // console.log(newData2)
          setFoundProduct(newData2.sort(function (a, b) { return b.createdAt - a.createdAt }));
          setLoading(1)
        });

      })
  }

  useEffect(() => {

    const unsub = onSnapshot(query(collection(db, "cart")), (doc) => {
      getDocs(collection(db, "cart"))
        .then((querySnapshot) => {
          const newData = querySnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }));

          const newData2 = []
          var total = 0
          newData.forEach(element => {
            if (element.createdBy.email == localStorage.getItem('user')) {
              newData2.push(element)
              total += element.product.price * element.productCount * element.pick
            }
            setTotalPrice(total)
          // console.log(newData2)
          setFoundProduct(newData2.sort(function (a, b) { return b.createdAt - a.createdAt }));
          setLoading(1)
          });
          
        })
    });

    fetchUser()
  }, [])

  const changeMoney = (money) => {
    var m = ((money).toLocaleString(
      undefined,

      { minimumFractionDigits: 2 }
    ))
    return m.substring(0, m.length - 3)
  }

  const deleteCart = (cartId) => {
    deleteDoc(doc(db, 'cart', cartId))
  }

  const updateCart = (cartId, num) => {
    updateDoc(doc(db, 'cart', cartId), {
      productCount: num
    })
  }

  const updateCartPick = (cartId, num) => {
    updateDoc(doc(db, 'cart', cartId), {
      pick: !num
    })
  }

  const addBuy = (a, b) => {
    if (localStorage.getItem('user') == null) {
      // PopUp('Vui lòng đăng nhập để đặt hàng')
      setIsOpenPopupFailCart1(1)
    }
    else {
      // PopUp('Đơn hàng đã được đặt thành công! Chúng tôi sẽ giao hàng trong thời gian sớm nhất')
      // addDoc(collection(db, "buy"), {
      //   a, b
      // });
      setIsOpenPopupSuccessCart1(1)
    }
  }

  return (
    <div>
      {!loading ? <Headpage /> :

        <div>
          <div>
            <NavBarWoutMenu />
            <div className='cart-body'>

              <div className='cart-container'>

                <div className='cart-list'>
                  <div className='mmt__product-direct-link'>
                    <span>
                      <span><HashLink to={'/#home'}> <Trans>Home</Trans></HashLink></span>
                      <span>/</span>
                      <span><HashLink to={'/cart'}><Trans>Cart</Trans></HashLink></span>
                    </span>
                  </div>
                  {localStorage.getItem('user') == undefined ?
                    <div>
                      Vui long lien he qua thong tin lien lac sau hoac dang nhap de dat hang
                      <br></br>
                      Địa chỉ : Số 18, đường Lê Thúc Hoạch, P. Phú Thọ Hoà, Q. Tân Phú, Tp. Hồ Chí Minh
                      <br></br>
                      Email : mathmystic12345@gmail.com
                      <br></br>
                      Số điện thoại : 0794746779
                      <br></br>
                      hoac <a href="/signin" style={{ textDecoration: "underline" }}>dang nhap</a> de dat hang online
                    </div>

                    :

                    <div className='cart-list2'>

                      <section className="h-100" style={{ 'backgroundColor': '#eee' }}>
                        <div className="container h-100">
                          <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-10">

                              {/* <div class="d-flex justify-content-between align-items-center mb-4">
                                <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                                <div>
                                  <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                                    class="fas fa-angle-down mt-1"></i></a></p>
                                </div>
                              </div> */}





                              {/* <div class="card mb-4">
                                <div class="card-body p-4 d-flex flex-row">
                                  <div class="form-outline flex-fill">
                                    <input type="text" id="form1" class="form-control form-control-lg" />
                                    <label class="form-label" for="form1">Discound code</label>
                                  </div>
                                  <button type="button" class="btn btn-outline-warning btn-lg ms-3">Apply</button>
                                </div>
                              </div>

                              <div class="card">
                                <div class="card-body">
                                  <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                                </div>
                              </div> */}

                            </div>
                          </div>
                        </div>
                      </section>

                      {/* {foundUser.name} */}

                      {foundProduct?.map((product, index) => (
                        <div key={index}>
                          {/* <p>1123</p> */}
                          {/* <div class="card rounded-3 mb-4">
                            <div class="card-body p-4">
                              <div class="row d-flex justify-content-between align-items-center">

                                <div class="col-md-2 col-lg-2 col-xl-2">
                                  <div className='d-flex'>
                                    <input style={{ accentColor: 'rgb(189, 189, 255)' }} type="checkbox" checked={product.pick} onClick={() => { updateCartPick(product.id, product.pick) }} />                        
                                    <img
                                      src={product.product.imgUrl[0]}
                                      class="img-fluid rounded-3" alt="Cotton T-shirt" />
                                  </div>

                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-3">
                                  <p class="lead fw-normal mb-2"><Trans>{product.product.name}</Trans></p>
                                  
                                  <p style={{ fontSize: 15, color: 'GrayText' }}><span><Trans>Price per product</Trans> : {changeMoney(product.product.price)}₫</span></p>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex mmt__productInCart-count">
                                  <button
                                    // fontSize={30}
                                    className='prdt-btn'
                                    onClick={() => updateCart(product.id, product.productCount - 1)}
                                    disabled={product.productCount == 0}
                                  >-</button>
                                  <p>{product.productCount}</p>

                                  <button
                                    className='prdt-btn'
                                    onClick={() => updateCart(product.id, product.productCount + 1)}

                                  >+</button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                  <h5 class="mb-0">{changeMoney(product.product.price * product.productCount)}₫ </h5>
                                  <button className='prdt-btn' onClick={() => deleteCart(product.id)}>Delete</button>
                                </div>

                                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                  <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                                </div>
                              </div>
                            </div>
                          </div> */}


                          {/* <p>{ product.productCount }</p> */}

                          <div className='cart-elm'>
                            <div className='cart-elm-content'>
                              <div className='cart-elm-left'>
                                <div className='cart-elm-left-1'>
                                  <input
                                    style={{ accentColor: 'rgb(189, 189, 255)' }}
                                    type="checkbox" checked={product.pick}
                                    onClick={() => { updateCartPick(product.id, product.pick) }} />
                                  <img
                                    src={product.product.imgUrl[0]}
                                    className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                </div>
                                <div className='cart-elm-left-2'>
                                  <p className="lead fw-normal mb-2 text1"><Trans>{product.product.name}</Trans></p>

                                  <p style={{  color: 'GrayText' }} className='text2'>
                                    <span>
                                      <Trans>Price per product</Trans> :
                                      {changeMoney(product.product.price)}₫
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className='cart-elm-2'>
                                <div className='cart-elm-center'>
                                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex mmt__productInCart-count">
                                    <button
                                      // fontSize={30}
                                      className='prdt-btn'
                                      onClick={() => updateCart(product.id, product.productCount - 1)}
                                      disabled={product.productCount == 0}
                                    >-</button>
                                    <p>{product.productCount}</p>

                                    <button
                                      className='prdt-btn'
                                      onClick={() => updateCart(product.id, product.productCount + 1)}

                                    >+</button>
                                  </div>
                                </div>
                                <div className='cart-elm-right'>
                                  <h5 className="mb-0">{changeMoney(product.product.price * product.productCount)}₫ </h5>
                                  <button className='prdt-btn' onClick={() => deleteCart(product.id)}>Delete</button>
                                </div>
                              </div>

                            </div>
                          </div>




                          {/* <div className='pic-container'>
                            <div className='pic-img'>
                            <img src={product.product.imgUrl[0]} alt="" />
                            </div>
                            <div className='pic-content'>
                            {product.createdAt}
                            </div>
                            
                            
                          </div> */}
                        </div>
                      ))}

                    </div>

                  }
                </div>

                <div className='cart-control'>

                  <button className='info'> <Trans>Total</Trans> : {changeMoney(totalPrice)}₫</button>
                  <button className='buy-button' onClick={() => { addBuy(foundUser.name, changeMoney(totalPrice)) }}
                  > <Trans>Buy</Trans></button>
                  {/* <Modal
                    closeIcon
                    open2={open2}
                    trigger={<button >Buy</button>}
                    onClose={() => setOpen2(false)}
                    onOpen={() => setOpen2(true)}
                  >
                    <Header icon='archive' content='Archive Old Messages' />
                    <ModalContent>
                      <p>
                        Your inbox is getting full, would you like us to enable automatic
                        archiving of old messages?
                      </p>
                    </ModalContent>
                    <ModalActions>
                      <Button color='red' onClick={() => setOpen2(false)}>
                        <Icon name='remove' /> No
                      </Button>
                      <Button color='green' onClick={() => setOpen2(false)}>
                        <Icon name='checkmark' /> Yes
                      </Button>
                    </ModalActions>
                  </Modal> */}


                </div>
              </div>
            </div>
          </div>
          {isOpenPopupSuccessCart1 ? <PopupSuccessCart1
            setIsOpenPopupSuccessCart1={setIsOpenPopupSuccessCart1}
            fu={foundUser}
            imgUrl={"https://firebasestorage.googleapis.com/v0/b/mathmystic-81270.appspot.com/o/store%2FStore2_1.png?alt=media&token=0b045f15-cd8e-4315-bb4d-fb409e05bf16"}
            totalMoney={totalPrice} /> : ""

          }
          {isOpenPopupSuccessCart2 ? <PopupSuccessCart2 setIsOpenPopupSuccessCart2={setIsOpenPopupSuccessCart2} /> : ""}
          {isOpenPopupFailCart1 ? <PopupFailCart1 setIsOpenPopupFailCart1={setIsOpenPopupFailCart1} /> : ""}
        </div>

      }

    </div>
  )
}

export default Cart
