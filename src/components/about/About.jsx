/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

import db from '../../../firebase'
import './About.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'

import HinhBinhHanh from '../../assets/img/About/HinhBinhHanh.jpg';
import HinhCau from '../../assets/img/About/HinhCau.jpg';
import HinhChopTamGiac from '../../assets/img/About/HinhChopTamGiac.jpg';
import HinhChopTamGiacCanhVuong from '../../assets/img/About/HinhChopTamGiacCanhVuong.jpg';
import HinhChopTuGiac from '../../assets/img/About/HinhChopTuGiac.jpg';
import HinhChuNhat from '../../assets/img/About/HinhChuNhat.jpg';
import HinhLangTru from '../../assets/img/About/HinhLangTru.jpg';
import HinhLangTruTuGiac from '../../assets/img/About/HinhLangTruTuGiac.jpg';
import HinhNon from '../../assets/img/About/HinhNon.jpg';
import HinhTamGiac from '../../assets/img/About/HinhTamGiac.jpg';
import HinhTamGiacDuongTronNoiTiep from '../../assets/img/About/HinhTamGiacDuongTronNoiTiep.jpg';
import HinhThang from '../../assets/img/About/HinhThang.jpg';
import HinhTron from '../../assets/img/About/HinhTron.jpg';
import HinhTru from '../../assets/img/About/HinhTru.jpg';
import HinhTuGiac from '../../assets/img/About/HinhTuGiac.jpg';
import HinhVuong from '../../assets/img/About/HinhVuong.jpg';

const About = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    
    return (
        <div className='about' id='about'>
            <h1><Trans>Mathematical model</Trans></h1>
            <div className='about-bx'>
                <div className='about-howto'>
                    <h2><Trans>HOW TO USE</Trans></h2>
                    <p>
                        <li>
                            <Trans>
                                Step 1: We need to make the bottom of the shape arbitrarily fixed by selecting the wooden board holes and then attaching wooden buttons</Trans>

                        </li>
                        <li>
                            <Trans>
                                Step 2: Use recycled elastic band to wrap around to create shape for the bottom.
                            </Trans>

                        </li>
                        <li>
                            <Trans>

                                Step 3: Build the height of the model's base with the antenna adjusting the height accordingly.(if needed)
                            </Trans>
                        </li>
                        <li>
                            <Trans>
                                Step 4: Connect the elastic bands from the top of the antenna to the wooden wicks to create the side edges of the model
                            </Trans>
                        </li>
                    </p>
                    <h2><Trans>COLLECTION</Trans></h2>

                </div>

            </div>
            <Carousel
                responsive={responsive}
                className='owl-carousel owl-theme skill-slider'
                
            >
                <div className="item">
                    <img src={HinhTamGiac} alt="Image" />
                    <h5><Trans>Triangle</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhTuGiac} alt="Image" />
                    <h5><Trans>Quadrangle</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhChuNhat} alt="Image" />
                    <h5><Trans>Rectangle</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhTron} alt="Image" />
                    <h5><Trans>Circle</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhTamGiacDuongTronNoiTiep} alt="Image" />
                    <h5><Trans>Triangle with incircle</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhBinhHanh} alt="Image" />
                    <h5><Trans>Parallelogram</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhThang} alt="Image" />
                    <h5><Trans>Trapezoid</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhVuong} alt="Image" />
                    <h5><Trans>Square</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhChopTamGiac} alt="Image" />
                    <h5><Trans>Regular triangular pyramid</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhChopTuGiac} alt="Image" />
                    <h5><Trans>Regular quadrangular pyramid</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhChopTamGiacCanhVuong} alt="Image" />
                    <h5><Trans>Square triangular pyramid</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhLangTru} alt="Image" />
                    <h5><Trans>Regular triangular prism</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhLangTruTuGiac} alt="Image" />
                    <h5><Trans>Regular quadrangular prism</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhNon} alt="Image" />
                    <h5><Trans>Cone</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhTru} alt="Image" />
                    <h5><Trans>Cylinder</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhCau} alt="Image" />
                    <h5><Trans>Globular</Trans></h5>
                </div>

            </Carousel>
        </div>
    )
}

export default About
