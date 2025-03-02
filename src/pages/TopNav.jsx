import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import CartDetail from './CartDetail';
import { useDispatch } from 'react-redux'
import {signOut} from '../redux/slices/userSlice'

function TopNav() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSignOut = () => {
      dispatch(signOut())
    }

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: '#491d90', fontWeight: 'bolder', fontSize: '30px' }}>Redux-Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search Products"
                  className="me-2"
                  aria-label="Search"
                  value={searchProducts}
                  onChange={(e) => setSearchProducts(e.target.value)}
                />
                <Button style={{ backgroundColor: '#491d90', border: 'none' }} >Search</Button>
              </Form>
            </Nav.Link> */}
          </Nav>
          <Button variant="primary" onClick={handleShow} style={{ backgroundColor: '#491d90', border: 'none' }}>
            <FaShoppingCart />
          </Button>
          <CartDetail  show={show} onHide={handleClose}/>
          &nbsp; &nbsp;
          <Button variant="outline-danger" onClick={handleSignOut} >LogOut</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;