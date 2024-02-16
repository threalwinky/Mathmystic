import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";
import './Document.css'

export const DocumentCard = ({ title, description, imgUrl }) => {
    return (

        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx2">
                <img src={imgUrl} />
                <div className="proj-txtx2">
                    <br></br>
                </div>
            </div>
        </Col>

    )
}