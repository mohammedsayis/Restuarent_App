import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function RestuarentOpration({oprate}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    console.log(oprate);
  return (
    <>
    <Button variant="dark" onClick={handleShow}>
        Oprating Hours 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Oprating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
             <ListGroup.Item>Monday : {oprate.Monday}</ListGroup.Item>
             <ListGroup.Item>Tuesday: {oprate.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Wednesday : {oprate.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Thursday : {oprate.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday : {oprate.Friday}</ListGroup.Item>
            <ListGroup.Item>Saturday : {oprate.Saturday}</ListGroup.Item>
            <ListGroup.Item> Sunday: {oprate.Sunday}</ListGroup.Item>
            </ListGroup>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default RestuarentOpration