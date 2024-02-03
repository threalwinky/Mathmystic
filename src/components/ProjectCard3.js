import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";


export const ProjectCard3= ({ title, description, imgUrl }) => {
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
      <div className="proj-imgbx2">
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <img src={imgUrl} style={{width: 400, height: 300}}/>
        {/* <h4 style={{textAlign: "center"}}>{title}</h4> */}
        <div className="proj-txtx2">
          
          {/* <span>{description}</span> */}
          <br></br>
          {/* <br></br> */}
          <Button variant="warning" onClick={() => setModalShow(true)}>Xem chi tiết</Button>{' '}
        </div>
      </div>
    </Col>


    
  )
}
