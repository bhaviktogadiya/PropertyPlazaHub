import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Header from "./Header";



// import photo1 from '../assets/photo/img3.png'
import photo9898 from '../assets/photo/img3.png'

import home from "../pages/home";
import About from './About'




function Navbared() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center">
            <div className="icon p-2 me-2">
                <img className="img-fluid" src={photo9898} alt="img" style={{width: '30px', height: '30px'}} />
            </div>
          <h1 className="m-0 text-success">Property Plaza Hub</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            <NavDropdown title="Property" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/propertylisting">Property List</NavDropdown.Item>
              <NavDropdown.Item href="/propertytype">
                Property Type
              </NavDropdown.Item>
              <NavDropdown.Item href="/propertyagent">Property Agent</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/testimonial">Testimonial</NavDropdown.Item>
              <NavDropdown.Item href="https://www.moneycontrol.com/news/tags/real-estate.html#goog_rewarded">
                News
              </NavDropdown.Item>
             
            </NavDropdown>

            <Nav.Link href="/contactus">Contact</Nav.Link>

            
          </Nav>
          <Form className="d-flex">
            <div className='App'> 
                <Header /> 
            </div>

            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            <Button  className="btn btn-success " type="submit"><a href="./submitPr.html"
                        style={{color: 'white', textDecoration: 'none'}}>Submit Property</a></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbared;
