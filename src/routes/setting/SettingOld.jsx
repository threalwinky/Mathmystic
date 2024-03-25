/*Module before File after */
import { useState, useEffect, React, useRef } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import useSound from 'use-sound'
import b from '../../assets/audio/hdtr7.mp3'

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
    const a = useRef(null)

    const test = () => {
        const ad = new Audio(b)
        // ad.muted = true
        ad.play()
        console.log(1234)
    }

    const radius = 85
    const circleWidth = "200"
    const [percentage, setPercentage] = useState(100)
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;

    const [time, setTime] = useState()
    const dateObject2 = new Date()
    const timeadd = 5 * 1000
    dateObject2.setTime(dateObject2.getTime() + timeadd)
    const abc = timeadd
    const [hh, setHH] = useState(0)
    const [mm, setMM] = useState(25)
    const [ss, setSS] = useState(0)
    useEffect(() => {
        window.alert(123)

        setInterval(() => {

            const dateObject = new Date()

            const hour = dateObject.getHours()
            const minute = dateObject.getMinutes()
            const second = dateObject.getSeconds()

            const currentTime = hour + ' : ' + minute + ' : ' + second

            setTime(currentTime)
            console.log(dateObject.getTime())
            console.log(dateObject2.getTime())
            console.log(dateObject2.getTime() - dateObject.getTime())
            const abcd = (dateObject2.getTime() - dateObject.getTime()) / (abc) * 100
            setPercentage(abcd)
        }, 1000)

        // console.log(123)

        // setTimeout(a.current.click(), 100)
        // setInterval(() => {setPercentage(percentage-1), console.log(percentage)}, 1000)
    }, [])

    const format = (num) => {
        if (num < 10) return "0" + num
        return num
    }

    return (
        // <div onDoubleClick={test} className='setting'>
        <div>

            <div>
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
                            strokeDashoffset: dashOffset
                        }}
                        transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
                    >

                    </circle>
                    <text x={"50%"} y={"50%"} dy="0.3em" textAnchor='middle' className='circle-text'>
                        {format(hh)} : {format(mm)} : {format(ss)}
                    </text>
                </svg>
                {/* <input type="range" min={1} max={100} onChange={e => {setPercentage(e.target.value)}}/> */}
                {/* <div>{time}</div> */}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <input type="text" placeholder='hours' />
                <input type="text" placeholder='minutes' />
                <input type="text" placeholder='seconds' />
                <button>
                    Change
                </button>
            </div>

        </div>

    )
}

export default Setting
