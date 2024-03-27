/*Module before File after */
import { useState, useEffect, React, useRef } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'


import db from '../../../../firebase'
import './Audio.css'
import MathmysticPet from '../../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../../assets/img/MathmysticLogo.png'
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';

import hdtr1 from '../../../assets/audio/hdtr1.mp3'
import hdtr2 from '../../../assets/audio/hdtr2.mp3'
import hdtr4 from '../../../assets/audio/hdtr4.mp3'
import hdtr5 from '../../../assets/audio/hdtr5.mp3'
import hdtr6 from '../../../assets/audio/hdtr6.mp3'
import hdtr7 from '../../../assets/audio/hdtr7.mp3'
import hdtr8 from '../../../assets/audio/hdtr8.mp3'
import hdtr9 from '../../../assets/audio/hdtr9.mp3'
import hdtr10 from '../../../assets/audio/hdtr10.mp3'
import hdtr11 from '../../../assets/audio/hdtr11.mp3'
import hdtr12 from '../../../assets/audio/hdtr12.mp3'
import hdtr13 from '../../../assets/audio/hdtr13.mp3'
import hdtr14 from '../../../assets/audio/hdtr14.mp3'
import muclucta from '../../../assets/audio/muclucta.mp3'
import tr1tv from '../../../assets/audio/tr1tv.mp3'
import tr3tv from '../../../assets/audio/tr3tv.mp3'
import tr5tv from '../../../assets/audio/tr5tv.mp3'
import tr7tv from '../../../assets/audio/tr7tv.mp3'
import tr9tv from '../../../assets/audio/tr9tv.mp3'
import tr11tv from '../../../assets/audio/tr11tv.mp3'
import tr13tv from '../../../assets/audio/tr13tv.mp3'
import tr15tv from '../../../assets/audio/tr15tv.mp3'
import tr17tv from '../../../assets/audio/tr17tv.mp3'
import tr19tv from '../../../assets/audio/tr19tv.mp3'
import tr21tv from '../../../assets/audio/tr21tv.mp3'
import tr23tv from '../../../assets/audio/tr23tv.mp3'
import tr25tv from '../../../assets/audio/tr25tv.mp3'
import tr27tv from '../../../assets/audio/tr27tv.mp3'
import tr29tv from '../../../assets/audio/tr29tv.mp3'
import tr31tv from '../../../assets/audio/tr31tv.mp3'
import tr33tv from '../../../assets/audio/tr33tv.mp3'
import tr35tv from '../../../assets/audio/tr35tv.mp3'
import tr37tv from '../../../assets/audio/tr37tv.mp3'
// import tr39tv from '../../../assets/audio/tr39tv.mp3'
import tr41tv from '../../../assets/audio/tr41tv.mp3'
import tr2ta from '../../../assets/audio/tr2ta.mp3'
import tr4ta from '../../../assets/audio/tr4ta.mp3'
import tr6ta from '../../../assets/audio/tr6ta.mp3'
import tr8ta from '../../../assets/audio/tr8ta.mp3'
import tr10ta from '../../../assets/audio/tr10ta.mp3'
import tr12ta from '../../../assets/audio/tr12ta.mp3'
import tr14ta from '../../../assets/audio/tr14ta.mp3'
import tr16ta from '../../../assets/audio/tr16ta.mp3'
import tr18ta from '../../../assets/audio/tr18ta.mp3'
import tr20ta from '../../../assets/audio/tr20ta.mp3'
import tr22ta from '../../../assets/audio/tr22ta.mp3'
import tr24ta from '../../../assets/audio/tr24ta.mp3'
import tr26ta from '../../../assets/audio/tr26ta.mp3'
import tr28ta from '../../../assets/audio/tr28ta.mp3'
import tr30ta from '../../../assets/audio/tr30ta.mp3'
import tr32ta from '../../../assets/audio/tr32ta.mp3'
import tr34ta from '../../../assets/audio/tr34ta.mp3'
import tr36ta from '../../../assets/audio/tr36ta.mp3'
import tr38ta from '../../../assets/audio/tr38ta.mp3'
// import tr40ta from '../../../assets/audio/tr40ta.mp3'
import tr42ta from '../../../assets/audio/tr42ta.mp3'

const Audio = ({ params }) => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    console.log(params)

    const audios = [

        {
            src: hdtr1,
            pr: 'hdtr1',
            title: 'n'
        },

        {
            src: hdtr2,
            pr: 'hdtr2',
            title: 'n'
        },

        {
            src: hdtr4,
            pr: 'hdtr4',
            title: 'n'
        },

        {
            src: hdtr5,
            pr: 'hdtr5',
            title: 'n'
        },

        {
            src: hdtr6,
            pr: 'hdtr6',
            title: 'n'
        },

        {
            src: hdtr7,
            pr: 'hdtr7',
            title: 'n'
        },

        {
            src: hdtr8,
            pr: 'hdtr8',
            title: 'n'
        },

        {
            src: hdtr9,
            pr: 'hdtr9',
            title: 'n'
        },

        {
            src: hdtr10,
            pr: 'hdtr10',
            title: 'n'
        },

        {
            src: hdtr11,
            pr: 'hdtr11',
            title: 'n'
        },

        {
            src: hdtr12,
            pr: 'hdtr12',
            title: 'n'
        },

        {
            src: hdtr13,
            pr: 'hdtr13',
            title: 'n'
        },

        {
            src: hdtr14,
            pr: 'hdtr14',
            title: 'n'
        },

        {
            src: muclucta,
            pr: 'muclucta',
            title: 'n'
        },

        {
            src: tr1tv,
            pr: 'tr1tv',
            title: 'n'
        },

        {
            src: tr3tv,
            pr: 'tr3tv',
            title: 'n'
        },

        {
            src: tr5tv,
            pr: 'tr5tv',
            title: 'n'
        },

        {
            src: tr7tv,
            pr: 'tr7tv',
            title: 'n'
        },

        {
            src: tr9tv,
            pr: 'tr9tv',
            title: 'n'
        },

        {
            src: tr11tv,
            pr: 'tr11tv',
            title: 'n'
        },

        {
            src: tr13tv,
            pr: 'tr13tv',
            title: 'n'
        },

        {
            src: tr15tv,
            pr: 'tr15tv',
            title: 'n'
        },

        {
            src: tr17tv,
            pr: 'tr17tv',
            title: 'n'
        },

        {
            src: tr19tv,
            pr: 'tr19tv',
            title: 'n'
        },

        {
            src: tr21tv,
            pr: 'tr21tv',
            title: 'n'
        },

        {
            src: tr23tv,
            pr: 'tr23tv',
            title: 'n'
        },

        {
            src: tr25tv,
            pr: 'tr25tv',
            title: 'n'
        },

        {
            src: tr27tv,
            pr: 'tr27tv',
            title: 'n'
        },

        {
            src: tr29tv,
            pr: 'tr29tv',
            title: 'n'
        },

        {
            src: tr31tv,
            pr: 'tr31tv',
            title: 'n'
        },

        {
            src: tr33tv,
            pr: 'tr33tv',
            title: 'n'
        },

        {
            src: tr35tv,
            pr: 'tr35tv',
            title: 'n'
        },

        {
            src: tr37tv,
            pr: 'tr37tv',
            title: 'n'
        },

        {
            src: tr41tv,
            pr: 'tr41tv',
            title: 'n'
        },

        {
            src: tr2ta,
            pr: 'tr2ta',
            title: 'n'
        },

        {
            src: tr4ta,
            pr: 'tr4ta',
            title: 'n'
        },

        {
            src: tr6ta,
            pr: 'tr6ta',
            title: 'n'
        },

        {
            src: tr8ta,
            pr: 'tr8ta',
            title: 'n'
        },

        {
            src: tr10ta,
            pr: 'tr10ta',
            title: 'n'
        },

        {
            src: tr12ta,
            pr: 'tr12ta',
            title: 'n'
        },

        {
            src: tr14ta,
            pr: 'tr14ta',
            title: 'n'
        },

        {
            src: tr16ta,
            pr: 'tr16ta',
            title: 'n'
        },

        {
            src: tr18ta,
            pr: 'tr18ta',
            title: 'n'
        },

        {
            src: tr20ta,
            pr: 'tr20ta',
            title: 'n'
        },

        {
            src: tr22ta,
            pr: 'tr22ta',
            title: 'n'
        },

        {
            src: tr24ta,
            pr: 'tr24ta',
            title: 'n'
        },

        {
            src: tr26ta,
            pr: 'tr26ta',
            title: 'n'
        },

        {
            src: tr28ta,
            pr: 'tr28ta',
            title: 'n'
        },

        {
            src: tr30ta,
            pr: 'tr30ta',
            title: 'n'
        },

        {
            src: tr32ta,
            pr: 'tr32ta',
            title: 'n'
        },

        {
            src: tr34ta,
            pr: 'tr34ta',
            title: 'n'
        },

        {
            src: tr36ta,
            pr: 'tr36ta',
            title: 'n'
        },

        {
            src: tr38ta,
            pr: 'tr38ta',
            title: 'n'
        },

        {
            src: tr42ta,
            pr: 'tr42ta',
            title: 'n'
        },

    ]

    const [selected, setSelected] = useState({ "pr": "123" })
    const audioRef = useRef(null);
    useEffect(() => {
        for (var i of audios) {
            // console.log(typeof params.id, typeof i.pr)
            if (i.pr == params.id) setSelected(i)
        }
    }, [])

    const handle = () => {

        console.log(audioRef.current)
        audioRef.current.onPlay()
    }

    return (
        <div className='audio' onDoubleClick={() => {handle()}}>

            {/* <Link to={"/study/audio/hdtr2"}><button>{params.id}</button></Link> */}
            {/* <Link to={"/study/audio/abc"}><button>{params.id}</button></Link> */}
            {/* <Link to={"/study/audio/abcd"}><button>{params.id}</button></Link> */}
            {/* <Link to={"/study/audio/abcde"}><button>{params.id}</button></Link> */}

            {/* {selected.pr} */}

            <label for="cars">Choose audio:</label>
            {/* {params.check} */}
            <select name="cars" id="cars" 
            onChange={evt => window.location.href = ((params.check != 1) ?  `${evt.target.value}` : `/study/audio/${evt.target.value}`)}>
                <option value='hdtr1'>hdtr1</option>
                <option value='hdtr2'>hdtr2</option>
                <option value='hdtr4'>hdtr4</option>
                <option value='hdtr5'>hdtr5</option>
                <option value='hdtr6'>hdtr6</option>
                <option value='hdtr7'>hdtr7</option>
                <option value='hdtr8'>hdtr8</option>
                <option value='hdtr9'>hdtr9</option>
                <option value='hdtr10'>hdtr10</option>
                <option value='hdtr11'>hdtr11</option>
                <option value='hdtr12'>hdtr12</option>
                <option value='hdtr13'>hdtr13</option>
                <option value='hdtr14'>hdtr14</option>
                <option value='muclucta'>muclucta</option>
                <option value='tr1tv'>tr1tv</option>
                <option value='tr3tv'>tr3tv</option>
                <option value='tr5tv'>tr5tv</option>
                <option value='tr7tv'>tr7tv</option>
                <option value='tr9tv'>tr9tv</option>
                <option value='tr11tv'>tr11tv</option>
                <option value='tr13tv'>tr13tv</option>
                <option value='tr15tv'>tr15tv</option>
                <option value='tr17tv'>tr17tv</option>
                <option value='tr19tv'>tr19tv</option>
                <option value='tr21tv'>tr21tv</option>
                <option value='tr23tv'>tr23tv</option>
                <option value='tr25tv'>tr25tv</option>
                <option value='tr27tv'>tr27tv</option>
                <option value='tr29tv'>tr29tv</option>
                <option value='tr31tv'>tr31tv</option>
                <option value='tr33tv'>tr33tv</option>
                <option value='tr35tv'>tr35tv</option>
                <option value='tr37tv'>tr37tv</option>
                <option value='tr41tv'>tr41tv</option>
                <option value='tr2ta'>tr2ta</option>
                <option value='tr4ta'>tr4ta</option>
                <option value='tr6ta'>tr6ta</option>
                <option value='tr8ta'>tr8ta</option>
                <option value='tr10ta'>tr10ta</option>
                <option value='tr12ta'>tr12ta</option>
                <option value='tr14ta'>tr14ta</option>
                <option value='tr16ta'>tr16ta</option>
                <option value='tr18ta'>tr18ta</option>
                <option value='tr20ta'>tr20ta</option>
                <option value='tr22ta'>tr22ta</option>
                <option value='tr24ta'>tr24ta</option>
                <option value='tr26ta'>tr26ta</option>
                <option value='tr28ta'>tr28ta</option>
                <option value='tr30ta'>tr30ta</option>
                <option value='tr32ta'>tr32ta</option>
                <option value='tr34ta'>tr34ta</option>
                <option value='tr36ta'>tr36ta</option>
                <option value='tr38ta'>tr38ta</option>
                <option value='tr42ta'>tr42ta</option>

            </select>

            <ReactAudioPlayer
            ref={audioRef}
                src={selected.src}
                autoPlay
                controls
            />
        </div>
    )
}

export default Audio
