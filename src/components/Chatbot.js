
import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

// all available props
const theme = {
  background: '#f5f8fb',
  botAvatar: 'https://mathmystic.vercel.app/_next/image?url=https%253A%252F%252Fi.ibb.co%252FtcG6RMQ%252FIMG-20231205-210439.jpg',
  fontFamily: '',
  headerBgColor: '#710b42',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#710b42',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  
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

export const ThemedExample = () => {
    return(
        <ThemeProvider theme={theme} >
        <ChatBot steps={steps} className="chatbot" floating={true} style={{height : 520}} />;
      </ThemeProvider>
    )
}

