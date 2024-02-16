import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Introduction.css'
import Introduction1 from '../../assets/img/Introduction1.png'
import Introduction2 from '../../assets/img/Introduction2.webp'
import Introduction3 from '../../assets/img/Introduction3.webp'
import { useMediaQuery } from 'react-responsive'

const Introduction = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })

  return (
    <div className='mmt__introduction' id='introduction'>
      <h1>Introduction</h1>
      <div className='mmt__introduction-container'>
        <img src={Introduction1} className='mmt__introduction-container_thumbnail' />
        <div className='mmt__introduction-container_content'>
          <h2>​TÍNH NĂNG CỦA WEBSITE</h2>
          <p>
            <li>
              Hướng dẫn từ A đến Z: Trang web của chúng tôi cung cấp hướng dẫn từng
              bước để tạo ra các mô hình hình học không gian từ cơ bản đến phức tạp.
            </li>
            <li>
              Bài giảng tương tác: Bạn sẽ thực hành di chuyển, xoay, và
              tạo các hình học không gian theo hướng dẫn. Điều này giúp
              bạn hiểu sâu hơn và tự tin hơn khi làm việc với các mô hình.
            </li>
            <li>
              Bộ tài liệu và ví dụ: Ngoài hướng dẫn, trang web còn cung
              cấp bộ tài liệu phong phú và ví dụ minh họa. Bạn có thể
              tham khảo chúng để tăng cường kiến thức của mình và sáng
              tạo ra những mô hình độc đáo.
            </li>
          </p>
        </div>

      </div>
      <div className='mmt__introduction-container'>
        {!isDesktopOrLaptop ? <img src={Introduction2} className='mmt__introduction-container_thumbnail'/> : ""}
        <div className='mmt__introduction-container_content'>
          <h2>BỘ MÔ HÌNH HÌNH HỌC KHÔNG GIAN </h2>
          <p>Chúng tôi đã phát triển một bộ dụng cụ mô hình hình học hoàn chỉnh
            với thiết kế đơn giản, dễ sử dụng,thân thiện với môi trường bao gồm
            đế gỗ đục lỗ, các cây ăng ten, dây thun và các phụ kiện cần thiết khác.
            Qua cấu trúc ấy, người dùng có thể tương tác và tạo ra nhiều mô hình
            không gian khác nhau, giúp mô hình học không gian gần gũi hơn
          </p>
        </div>
        {isDesktopOrLaptop ? <img src={Introduction2} className='mmt__introduction-container_thumbnail'/> : ""}
        
      </div>
      <div className='mmt__introduction-container'>
        <img src={Introduction3} className='mmt__introduction-container_thumbnail' />
        <div className='mmt__introduction-container_content'>
          <h2>CHẮP CÁNH TƯ DUY, KẾT NỐI TRI THỨC,</h2> <br/><h2>ÁNH SÁNG CHO MỌI TRÁI TIM</h2>
          <p>
            Điểm đặc biệt của dự án này nằm ở việc đây là một sản phẩm hoàn
            toàn mới trên thị trường, giúp tạo ra một phương tiện giảng dạy
            hình học dễ tiếp cận. Một phần lợi nhuận từ dự án này sẽ được
            trích vào Quỹ Tạo Mô Hình, nhằm hỗ trợ các bạn khiếm thị trong
            việc tiếp cận giáo dục về hình học và thúc đẩy sự sáng tạo của
            mỗi cá nhân. Chúng tôi cam kết đóng góp cho cộng đồng, xã hội
            và công tác giáo dục.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Introduction
