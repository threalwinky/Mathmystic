import React, { useEffect, useState } from 'react'
import { Modal, Loading, Chatbot, Headpage } from "../../containers";

// import { NavBar, Header, Introduction, Store, About, Document, Footer, Contact } from "../../components";
import { NavBar, Header, Introduction, Store, About, Document, Contact, Footer } from "../../components";

const Home = () => {
  const [loading, setLoading] = useState(0)

  useEffect(() => {
    setTimeout(() => {setLoading(1)}, 1000)
    
  }, [])

  return (
    <div id='abc'>
      {!loading ? <Headpage /> :

        <div>
          <NavBar></NavBar>
           <Header></Header>
          <Introduction></Introduction>
          <Store></Store>
          <About></About>
          <Document></Document>
          <Contact></Contact>
          <Footer></Footer>
          <Chatbot></Chatbot>

        </div>

      }


    </div>
  )
}

export default Home
