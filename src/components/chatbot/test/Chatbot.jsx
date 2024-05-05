
import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import './Chatbot.css'
const Chatbot = () => {

  const theme = {
    background: '#f5f8fb',
    botAvatar: "https://www.meta-freelancer.com/images/meta-freelancer-it-solutions.webp",
    fontFamily: '',
    headerBgColor: '#710b42',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#710b42',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
    userAvatar: "https://www.meta-freelancer.com/images/meta-freelancer-it-solutions.webp"
  };

  const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme} >
      <ChatBot steps={steps} floating={true} style={{ height: 520 }} recognitionEnable={true} />
    </ThemeProvider>
  )
}

export default Chatbot
