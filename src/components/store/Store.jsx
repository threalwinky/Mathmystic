import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

import Store1_1 from '../../assets/img/Store/Store1/Store1_1.webp';
import Store2_1 from '../../assets/img/Store/Store2/Store2_1.webp';
import './Store.css'
import PopUp from '../../containers/popup/PopUp'

const Store = () => {

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
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='mmt__store' id='store'>
      <h1 ><Trans>Store</Trans></h1>
      <div>
        <Carousel
          responsive={responsive}
          className='owl-carousel owl-theme mmt__store-skill-slider'
        >
          <Link to={'/product/bo-dung-cu-hoc-tap-hinh-hoc-cho-hoc-sinh-khiem-thi'}>
            <div className="item">
              <img src={Store1_1} alt="Image" />
              <h5><Trans>Geometry learning kit for visually impaired students</Trans></h5>
              <h3><Trans>Out of stock</Trans></h3>
            </div>
          </Link>

          <Link to={'/product/bo-dung-cu-hinh-hoc'}>
            <div className="item">
              <img src={Store2_1} alt="Image" />
              <h5><Trans>Geometry learning kit</Trans></h5>
              <h3><Trans>249,000₫</Trans></h3>
            </div>
          </Link>

        </Carousel>
      </div>
    </div>
  )
}

export default Store
