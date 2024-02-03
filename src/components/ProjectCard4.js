import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React from "react";


export const ProjectCard4 = ({ title, description, imgUrl }) => {
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{ color : "black"}}>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4 style={{ color : "black"}}> Centered Modal</h4> */}
          <p style={{ color : "black"}}>
            {/* {description} */} 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control type="username" placeholder="Nguyễn Văn A" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Số điện thoại</Form.Label>
        <Form.Control type="email" placeholder="0xxxxxxxxx" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Số lượng</Form.Label>
        <Form.Control type="number" placeholder="" />
      </Form.Group>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="outline-warning">Đặt hàng</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  return (
    


    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <img src={imgUrl} style={{width: 600, height: 400}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          Giá : 249000đ/bộ
          <br></br>
          <Button variant="warning" onClick={() => setModalShow(true)}>Mua ngay</Button>{' '}
        </div>
      </div>
    </Col>


    
  )
}
