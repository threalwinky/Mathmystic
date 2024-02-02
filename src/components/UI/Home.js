import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../css/home.css";
import girl from "../img/girl.webp";
import Products from "../auth/Products";
export default function Home() {
  return (
    <div className="container">
      <div className="first">
        <div>
          <h1>​MATHMYSTIC XIN CHÀO</h1>
          <a>
            CHẮP CÁNH TƯ DUY, KẾT NỐI TRI THỨC, <br></br>
            ÁNH SÁNG CHO MỌI TRÁI TIM
          </a>
        </div>

        <img src={girl} />
      </div>

      <div className="second">
        <h1>Sản Phẩm Mới Ở Đây</h1>

        <a>Limited time price drop!</a>

        <Products></Products>

      </div>

      <div className="third">
        <h1>Bộ sưu tập</h1>
        {/* <Products></Products> */}
      </div>

      <div className="fourth">
        <h1>
          ​GIỚI THIỆU Chúng tôi sẽ giới thiệu một sản phẩm toán học độc đáo cho
          tất cả các bạn học sinh và giáo viên. Hơn cả một sản phẩm, đây còn là
          một cách thức mới, sáng tạo và thú vị để tìm hiểu và trải nghiệm hình
          học
        </h1>
      </div>

      <div className="fifth">
        <h1>
          ​GIỚI THIỆU Chúng tôi sẽ giới thiệu một sản phẩm toán học độc đáo cho
          tất cả các bạn học sinh và giáo viên. Hơn cả một sản phẩm, đây còn là
          một cách thức mới, sáng tạo và thú vị để tìm hiểu và trải nghiệm hình
          học
        </h1>
      </div>
      <div className="sixth">
        <h1>
          ​GIỚI THIỆU Chúng tôi sẽ giới thiệu một sản phẩm toán học độc đáo cho
          tất cả các bạn học sinh và giáo viên. Hơn cả một sản phẩm, đây còn là
          một cách thức mới, sáng tạo và thú vị để tìm hiểu và trải nghiệm hình
          học
        </h1>
      </div>
    </div>
  );
}
