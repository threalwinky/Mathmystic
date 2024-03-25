import React, { useEffect, useState } from 'react'
import { Loading } from '../../containers'
import './Test.css'
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import { unidecode } from 'unidecode'
const choose = (a, b, c) => (a ? b : c);

const Test = () => {

  const [toggle, setToggle] = useState(1)

  const [message, setMessage] = useState('')

  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi! How can i help you?'
    }

  ])

  useEffect(() => {
    const fetchMessage = async (msg) => {
      fetch(`https://threalwinky.pythonanywhere.com/abc/${msg}`)
        .then(response => response.json())
        .then(json => console.log(123))
    }

  }, [])

  var c = ''
  const f = async (message) => {
    await fetch(`http://threalwinky.pythonanywhere.com/abc/${message}`)
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data.answer)
        // c = data
        await messages.push({ type: 'user', content: message })
        setMessages([...messages, { type: 'user', content: message }])
        // setTimeout(() => {}, 1000)
        // console.log(fe)
        await messages.push({ type: 'bot', content: '123' })
        await setMessages(messages)
        setTimeout(() => {
          var objDiv = document.getElementById("messages");
          objDiv.scrollTop = objDiv.scrollHeight;
        }, 10)
        return data;
      })
      .catch(error => {
        console.error(error);
      });

  }

  const sendMessage = async (e) => {
    e.preventDefault()
    setMessage('')
    const newMessage = message
    if (message == '') return
    if (message == 'clear') {
      setMessages([])
      return
    }

    const newMessages = [...messages, { type: 'user', content: newMessage }];
    messages.push({ type: 'user', content: newMessage })
    setMessages(newMessages);
    setTimeout(() => {
      var objDiv = document.getElementById("messages");
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 10)

    // var objDiv = document.getElementById("messages");
    // objDiv.scrollTop = objDiv.scrollHeight;
    // messages.push({ type: 'user', content: message })
    // setMessages([...messages, { type: 'user', content: message }])
    // messages.push({ type: 'bot', content: message })
    // setMessages(messages)

    await processMessage(newMessage)
  }
  async function processMessage(newMessage) {
    console.log(newMessage)
    // console.log(newMessages.content)
    await fetch(`http://threalwinky.pythonanywhere.com/abc/${newMessage}`,
      {
        method: "GET",
      }).then((data) => {
        return data.json();
      }).then((data) => {
        console.log(data);
        // setMessages([...chatMessages, {
        //   message: data.choices[0].message.content,
        //   sender: "ChatGPT"
        // }]);
        // setIsTyping(false);
        const newMessages = [...messages, { type: 'bot', content: data.answer }];
        messages.push({ type: 'bot', content: data.answer })

        setMessages(newMessages);
        setTimeout(() => {
          var objDiv = document.getElementById("messages");
          objDiv.scrollTop = objDiv.scrollHeight;
        }, 10)
      });

  }
  return (
    <div className='doccc'>
      {/* <div className='toggle-button' onClick={() => setToggle(!toggle)}>

        {choose(toggle,

          <svg
            fontSize={20}
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            className='logo'
          >
            <path d="M2 0a2 2 0 00-2 2v12.793a.5.5 0 00.854.353l2.853-2.853A1 1 0 014.414 12H14a2 2 0 002-2V2a2 2 0 00-2-2H2z" />
          </svg>

          ,

          <svg
            fontSize={20}
            fontWeight={30}
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
            className='logo'
          >
            <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" />
          </svg>

        )}


      </div>

      <div className={'chat-box' + (choose(toggle, " toggle", ""))}>
        <div className={'content' + (choose(toggle, " toggle", ""))}>
          <p>Chat bot</p>
          <div className='messages' id='messages'>
            {
              messages?.map((msg, index) => (
                <div key={index}>
                  <div className={msg.type}>
                    <img style={{ borderRadius: '50%' }} src={msg.type == 'bot' ? MathmysticLogo :

                      (localStorage.getItem('userAvatar') == undefined ?
                        "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" :
                        localStorage.getItem('userAvatar'))

                    }
                    />
                    <p>{msg.content}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='typer'>
            <form action="">
              <input required={true} onChange={evt => setMessage(evt.target.value)} value={message} type="text" placeholder='Type the message...' />
              <button type='submit' onClick={sendMessage}>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  fontSize={25}
                >
                  <defs>
                    <style />
                  </defs>
                  <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z" />
                </svg>

              </button>
            </form>

          </div>
        </div>
      </div> */}
      <iframe scrolling="no" 
      title="KHỐI LĂNG TRỤ" 
      src="https://www.geogebra.org/material/iframe/id/nf6e6pad/width/1432/height/778/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/true/ctl/false" 
      width="100%" height="100%" style={{border:"0px"}}> </iframe>
    </div>
  )
}

export default Test
