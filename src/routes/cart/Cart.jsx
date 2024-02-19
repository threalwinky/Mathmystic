import React, { useEffect, useState } from 'react'
import './Cart.css'
import NavBarWoutMenu from '../../components/navbar/NavBarWoutMenu'
import { HashLink } from 'react-router-hash-link'
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import db from '../../firebase'
import { Loading, PopUp } from '../../containers'
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Image,
  Modal,
  Icon,
} from 'semantic-ui-react'
import { Trans } from 'react-i18next'
const Cart = () => {
  const [open2, setOpen2] = React.useState(false)

  const [foundUser, setFoundUser] = useState([])
  const [foundProduct, setFoundProduct] = useState([])
  const [loading, setLoading] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const fetchUser = async (e) => {
    await getDocs(collection(db, "account"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setFoundUser(newData.find((userId) => {
          return userId.email == localStorage.getItem('user')
        }))
        setLoading(1)
      })

    await getDocs(collection(db, "cart"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const newData2 = []
        var total = 0
        newData.forEach(element => {
          if (element.createdBy.email == localStorage.getItem('user')) {
            newData2.push(element)
            total += element.product.price * element.productCount
          }
        });
        setTotalPrice(total)
        console.log(newData2)
        setFoundProduct(newData2.sort(function (a, b) { return b.createdAt - a.createdAt }));
        setLoading(1)
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
          });
          setTotalPrice(total)
          console.log(newData2)
          setFoundProduct(newData2.sort(function (a, b) { return b.createdAt - a.createdAt }));
          setLoading(1)
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
      PopUp('Vui long dang nhap de dat hang')
    }
    else {
      PopUp('Don hang da duoc dat thanh cong! Chung toi se lien he voi ban')
      addDoc(collection(db, "buy"), {
        a, b
      });
    }
  }

  return (
    <div>
      {!loading ? <Loading /> :

        <div>
          <div>
            <NavBarWoutMenu />
            <div className='mmt__cart-body'>

              <div className='mmt__cart-container'>
                <div className='mmt__product-direct-link'>
                  <span>
                    <span><HashLink to={'/#home'}> <Trans>Home</Trans></HashLink></span>
                    <span>/</span>
                    <span><HashLink to={'/cart'}><Trans>Cart</Trans></HashLink></span>
                  </span>
                </div>
                <div className='mmt__cart-list'>
                  {localStorage.getItem('user') == undefined ? "Vui long dat hang qua facebook hoac sdt hoac dang nhap de dat hang online " :

                    <div>



                      {/* {foundUser.name} */}

                      {foundProduct?.map((product, index) => (
                        <p key={index}>

                          <div className='mmt__productInCart-container'>
                            <input type="checkbox" checked={product.pick} onClick={() => { updateCartPick(product.id, product.pick) }} />
                            <div className='mmt__productInCart-info'>
                              <img src={product.product.imgUrl[0]} alt="" />
                              <p>  <Trans>{product.product.name}</Trans> </p>
                            </div>
                            <div className='mmt__productInCart-control'>
                              <div className='mmt__productInCart-count'>
                                <button
                                  size={10}
                                  onClick={() => updateCart(product.id, product.productCount - 1)}
                                  disabled={product.productCount == 0}
                                >-</button>
                                {product.productCount}
                                <button
                                  size={10}
                                  onClick={() => updateCart(product.id, product.productCount + 1)}

                                >+</button>
                              </div>
                              <div className='mmt__productInCart-pricePerProduct'>
                                <p><Trans>Price per product</Trans></p>
                                <p>{changeMoney(product.product.price)}₫</p>
                              </div>
                              <div className='mmt__productInCart-pricePerProduct'>
                                <p><Trans>Total price</Trans></p>
                                <p>{changeMoney(product.product.price * product.productCount)}₫</p>
                              </div>
                              <div className='mmt__productInCart-count'>
                                <button size={10} onClick={() => deleteCart(product.id)}> <Trans>Delete</Trans> </button>

                              </div>
                            </div>

                          </div>


                        </p>

                      ))}

                    </div>

                  }
                </div>

                <div className='mmt__cart-control'>

                  <button className='info'> <Trans>Total</Trans> : {changeMoney(totalPrice)}₫</button>
                  <button onClick={() => { addBuy(foundUser.name, changeMoney(totalPrice)) }}
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

        </div>

      }

    </div>
  )
}
export default Cart
