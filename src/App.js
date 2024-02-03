import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Skills2 } from "./components/Skills2";
import { Project2 } from "./components/Project2";
import { Projects } from "./components/Projects";
import { Project3 } from "./components/Project3";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemedExample } from "./components/Chatbot";
import { CB } from "./components/ChatbotButton";
import {Routes, Route, useNavigate} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Project2 />
      <Skills />
      <Projects />
      <Project3 />
      <Skills2 />
      <Contact />
      <Footer />
      <ThemedExample />
      {/* <CB/> */}
      
    </div>
  );
}

export default App;
