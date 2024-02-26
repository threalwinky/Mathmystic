import React, { useEffect, useState } from 'react'

import { NavBar, Header, Introduction, Store, About, Document, Footer, Contact } from "../../components";
import { Modal, Loading, Chatbot } from "../../containers";
const Home = () => {
  const [loading, setLoading] = useState(0)

  useEffect(() => {
    setLoading(1)
  }, [])

  return (
    <div>
      {!loading ? <Loading /> :

        <div>
          <Chatbot></Chatbot>
          <NavBar></NavBar>
          <Header></Header>
          <Introduction></Introduction>
          <Store></Store>
          <About></About>
          <Document></Document>
          <Contact></Contact>
          <Footer></Footer>
        </div>

      }


    </div>
  )
}

export default Home
