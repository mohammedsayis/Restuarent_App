import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Ms4xd8bcMlatjXhd6uAP3a5hYqlCsPa2Ow&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
               Tomato 
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header