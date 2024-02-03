import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";


export const ProjectCard = ({ title, description, imgUrl }) => {
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
            {description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="outline-warning">Close</Button>
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
        <img src={imgUrl} style={{width: 800, height: 400}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          {/* <span>{description}</span> */}
          <br></br>
          {/* <br></br> */}
          <Button variant="warning" onClick={() => setModalShow(true)}>Xem chi tiết</Button>{' '}
        </div>
      </div>
    </Col>


    
  )
}
