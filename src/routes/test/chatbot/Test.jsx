import React, { useState } from 'react'
import './Test.css'
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'

const choose = (a, b, c) => (a ? b : c);

const Test = () => {

    const [toggle, setToggle] = useState(1)

    const [message, setMessage] = useState('')

    const [messages, setMessages] = useState([['bot-message', 'Hi! How can i help you?']])

    function sendMessage(e) {
        e.preventDefault()
        if (message == '') return
        if (message == 'clear'){
            setMessages([])
            setMessage('')
            return
        }
        var objDiv = document.getElementById("messages");
        objDiv.scrollTop = objDiv.scrollHeight;
        setMessage('')

        messages.push(['user-message', message])
        setMessages(messages)
        messages.push(['bot-message', message])
        setMessages(messages)
        setTimeout(() => {
            var objDiv = document.getElementById("messages");
            objDiv.scrollTop = objDiv.scrollHeight;
        }, 10)

    }

    return (
        <div className='chatbot'>
            <div className='toggle-button' onClick={() => setToggle(!toggle)}>


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
                                    <div className={msg[0]}>
                                        <img src={MathmysticLogo} alt="" />
                                        <p>{msg[1]}</p>
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
            </div>
        </div>
    )
}

export default Test
