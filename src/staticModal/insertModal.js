import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Row ,Col} from 'react-bootstrap';
export default function InsertModal(props) {

 
    return (
       <>
            <Modal show={props.show} onHide={props.close}   backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
         </Modal.Header>
        <Modal.Body>
			<Row>
            <Col xs={6} md={4}>
             </Col>
            <Col xs={6} md={4}>
                
 				Record Insert Successfully
             </Col>
            <Col xs={6} md={4}>
             </Col>
          </Row>
		</Modal.Body>
         
      </Modal>
             
             </>
         );
}
