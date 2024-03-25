/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'


import db from '../../../firebase'
import './Setting.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'

const Setting = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    //variables
    const circleWidth = "200";
    const radius = 85
    const [percentage, setPercentage] = useState(75)
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;
    const [ta, setTa] = useState(25*60*1000)
    const [tl, setTl] = useState(25*60*1000)
    const [use, setUse] = useState(0)
    const [sleep, setSleep] = useState(0)

    const changeTime = () => {
        
        setUse(!use)
    }

    const stopTime = () => {

        setSleep(!sleep)
    }
    
    const format = (timeE) => {
        timeE = timeE/1000
        const hhh = Math.floor(timeE / (60*60))
        const mmm = Math.floor(timeE / (60))
        const sss = Math.floor(timeE % (60))
        let str = ""
        if (hhh < 10){
            str += '0'
        }
        str += String(hhh) + ":"
        if (mmm < 10){
            str += '0'
        }
        str += String(mmm) + ":"
        if (sss < 10){
            str += '0'
        }
        str += String(sss) 
        console.log(hhh, mmm, sss)
        return str
    }


    useEffect(() => {
        let interval = null;
        if (use == 1){
            if (sleep == 0){
                const timePast = new Date()
                timePast.setTime(timePast.getTime() + 62*1000)
                interval = setInterval(() => {
                    const timeNow = new Date()
                    console.log(timePast.getTime())
                    console.log(timeNow.getTime())
                    
                    console.log(timePast.getTime() - timeNow.getTime())
                    setTl(timePast.getTime() - timeNow.getTime())
                    // setTl(tl - 1000)
                    // console.log(tl)
                    // console.log(use)
                }, 1000)
            }
            
            else{
                clearInterval(interval)
                return () => {
                    clearInterval(interval);
                };
            }
        }
         else{
            clearInterval(interval)
            
         }
         return () => {
            clearInterval(interval);
        };

    }, [use])
    
    return (
        <div>
            <div className='clock-container'>
                <svg
                    width={circleWidth}
                    height={circleWidth}
                    viewBox={`0 0 ${circleWidth} ${circleWidth}`}
                >
                    <circle
                        cx={circleWidth / 2}
                        cy={circleWidth / 2}
                        strokeWidth={"15px "}
                        r={radius}
                        className='circle-background'
                    >

                    </circle>
                    <circle
                        cx={circleWidth / 2}
                        cy={circleWidth / 2}
                        strokeWidth={"15px "}
                        r={radius}
                        className='circle-progress'
                        style={{
                            strokeDasharray: dashArray,
                            strokeDashoffset: dashOffset,
                            stroke: sleep ? "rgb(125, 166, 255)" : "rgb(255, 255, 155)"
                        }}
                        transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
                    >

                    </circle>
                    <text x={"50%"} y={"50%"} dy="0.3em" textAnchor='middle' className='circle-text'>
                        {format(tl)}
                    </text>
                </svg>
                {/* <input type="range" min={1} max={100} onChange={e => {setPercentage(e.target.value)}}/> */}
                {/* <div>{time}</div> */}
                {tl}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
               
                <button onClick={() => changeTime()}>
                    Start
                </button>
                <button onClick={() => stopTime()}>
                    stop
                </button>

            </div>
        </div>
    )
}

export default Setting
