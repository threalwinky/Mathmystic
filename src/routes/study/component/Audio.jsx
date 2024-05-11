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
        // console.log(params)
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
        <div className='audio h-screen flex justify-center items-center' onDoubleClick={() => {handle()}}>

            {/* <Link to={"/study/audio/hdtr2"}><button>{params.id}</button></Link> */}
            {/* <Link to={"/study/audio/abc"}><button>{params.id}</button></Link> */}
            {/* <Link to={"/study/audio/abcd"}><button>{params.id}</button></Link> */}
            {/* <Link to={"/study/audio/abcde"}><button>{params.id}</button></Link> */}

            {/* {selected.pr} */}
            <div className='flex justify-center items-center gap-2 bg-white p-2 rounded-2xl'>

            
            <label for="cars"><Trans>Choose audio:</Trans></label>
            {/* {params.check} */}
            <select name="cars" id="cars" value={params.id} className='p-2 outline-none rounded-xl'
            onChange={evt => window.location.href = ((params.check != 1) ?  `${evt.target.value}` : `/study/audio/${evt.target.value}`)}>
                <option value='hdtr1'>Hướng dẫn trang 1</option>
                <option value='hdtr2'>Hướng dẫn trang 2</option>
                <option value='hdtr4'>Hướng dẫn trang 4</option>
                <option value='hdtr5'>Hướng dẫn trang 5</option>
                <option value='hdtr6'>Hướng dẫn trang 6</option>
                <option value='hdtr7'>Hướng dẫn trang 7</option>
                <option value='hdtr8'>Hướng dẫn trang 8</option>
                <option value='hdtr9'>Hướng dẫn trang 9</option>
                <option value='hdtr10'>Hướng dẫn trang 10</option>
                <option value='hdtr11'>Hướng dẫn trang 11</option>
                <option value='hdtr12'>Hướng dẫn trang 12</option>
                <option value='hdtr13'>Hướng dẫn trang 13</option>
                <option value='hdtr14'>Hướng dẫn trang 14</option>
                <option value='muclucta'>Mục lục tiếng Anh</option>
                <option value='tr1tv'>Trang 1 tiếng Việt</option>
                <option value='tr3tv'>Trang 3 tiếng Việt</option>
                <option value='tr5tv'>Trang 5 tiếng Việt</option>
                <option value='tr7tv'>Trang 7 tiếng Việt</option>
                <option value='tr9tv'>Trang 9 tiếng Việt</option>
                <option value='tr11tv'>Trang 11 tiếng Việt</option>
                <option value='tr13tv'>Trang 13 tiếng Việt</option>
                <option value='tr15tv'>Trang 15 tiếng Việt</option>
                <option value='tr17tv'>Trang 17 tiếng Việt</option>
                <option value='tr19tv'>Trang 19 tiếng Việt</option>
                <option value='tr21tv'>Trang 21 tiếng Việt</option>
                <option value='tr23tv'>Trang 23 tiếng Việt</option>
                <option value='tr25tv'>Trang 25 tiếng Việt</option>
                <option value='tr27tv'>Trang 27 tiếng Việt</option>
                <option value='tr29tv'>Trang 29 tiếng Việt</option>
                <option value='tr31tv'>Trang 31 tiếng Việt</option>
                <option value='tr33tv'>Trang 33 tiếng Việt</option>
                <option value='tr35tv'>Trang 35 tiếng Việt</option>
                <option value='tr37tv'>Trang 37 tiếng Việt</option>
                <option value='tr41tv'>Trang 41 tiếng Việt</option>
                <option value='tr2ta'>Trang 2 tiếng Anh</option>
                <option value='tr4ta'>Trang 4 tiếng Anh</option>
                <option value='tr6ta'>Trang 6 tiếng Anh</option>
                <option value='tr8ta'>Trang 8 tiếng Anh</option>
                <option value='tr10ta'>Trang 10 tiếng Anh</option>
                <option value='tr12ta'>Trang 12 tiếng Anh</option>
                <option value='tr14ta'>Trang 14 tiếng Anh</option>
                <option value='tr16ta'>Trang 16 tiếng Anh</option>
                <option value='tr18ta'>Trang 18 tiếng Anh</option>
                <option value='tr20ta'>Trang 20 tiếng Anh</option>
                <option value='tr22ta'>Trang 22 tiếng Anh</option>
                <option value='tr24ta'>Trang 24 tiếng Anh</option>
                <option value='tr26ta'>Trang 26 tiếng Anh</option>
                <option value='tr28ta'>Trang 28 tiếng Anh</option>
                <option value='tr30ta'>Trang 30 tiếng Anh</option>
                <option value='tr32ta'>Trang 32 tiếng Anh</option>
                <option value='tr34ta'>Trang 34 tiếng Anh</option>
                <option value='tr36ta'>Trang 36 tiếng Anh</option>
                <option value='tr38ta'>Trang 38 tiếng Anh</option>
                <option value='tr42ta'>Trang 42 tiếng Anh</option>

            </select>
            </div>
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
