import React from "react";
import "./NavBar.css";

import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <div className="Navbar-wrapper">
      <div className="navbartop">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <Link
                activeClass="active"
                className="nav-item-text"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={0}
              >
                Epicon
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#">
                  <Link
                    activeClass="active"
                    className="nav-item-text"
                    to="reviews"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-52}
                  >
                    Reviews
                  </Link>
                </Nav.Link>
                <Nav.Link href="#">
                  <Link
                    activeClass="active"
                    className="nav-item-text"
                    to="pricing"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    Pricing
                  </Link>
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
