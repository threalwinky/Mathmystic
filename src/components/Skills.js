import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

import hctgd from "../assets/img/hctgd.png";
import lttgd from "../assets/img/lttgd.png";
import hnon from "../assets/img/hnon.png";
import hlp from "../assets/img/hlp.png";
import zz from "../assets/img/zz.png";
import dt from "../assets/img/dt.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section className="skill" id="about">
        <div className="container">
            <div className="row">
                <div className="col-1a2">
                    <div className="skill-bx wow zoomIn">
                        <h2 style={{paddingBottom: 40}}>Bộ sưu tập</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={hctgd} alt="Image" />
                                <h5>Hình chóp tam giác đều</h5>
                            </div>
                            
                            <div className="item">
                                <img src={lttgd} alt="Image" />
                                <h5>Hình lăng trụ tam giác</h5>
                            </div>

                            <div className="item">
                                <img src={hnon} alt="Image" />
                                <h5>Hình nón</h5>
                            </div>

                            <div className="item">
                                <img src={hlp} alt="Image" />
                                <h5>Hình hộp chữ nhật</h5>
                            </div>

                            <div className="item">
                                <img src={zz} alt="Image" />
                                <h5>Đường zigzag</h5>
                            </div>

                            <div className="item">
                                <img src={dt} alt="Image" />
                                <h5>Đường thẳng</h5>
                            </div>
                            <div className="item">
                                <img src={hctgd} alt="Image" />
                                <h5>Hình chóp tam giác đều</h5>
                            </div>
                            
                            <div className="item">
                                <img src={lttgd} alt="Image" />
                                <h5>Hình lăng trụ tam giác</h5>
                            </div>

                            <div className="item">
                                <img src={hnon} alt="Image" />
                                <h5>Hình nón</h5>
                            </div>

                            <div className="item">
                                <img src={hlp} alt="Image" />
                                <h5>Hình hộp chữ nhật</h5>
                            </div>

                            <div className="item">
                                <img src={zz} alt="Image" />
                                <h5>Đường zigzag</h5>
                            </div>

                            <div className="item">
                                <img src={dt} alt="Image" />
                                <h5>Đường thẳng</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
