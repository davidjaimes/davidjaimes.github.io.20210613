
// React Dependencies
import React from 'react'

// Bootstrap Dependencies
import {Navbar, Nav, Container, Image, Row, Col} from 'react-bootstrap'
import { FaGithub, FaInfo, FaApple, FaBalanceScale, FaSignal, FaGlobeAmericas, FaQuinscape, FaJsSquare } from 'react-icons/fa'

import {Logo} from "../images/logo.png"

export default function Navigation ({children}) {

  return (
    <Container fluid>
      <Row>
        <Col className="col-12 col-lg-4 col-xl-3 bg-dark">
          <Navbar bg="dark" expand="lg" variant="dark" className="align-items-start flex-lg-column flex-md-row">
            <Navbar.Brand href="/" >
              <Image src={Logo} style={{height: "30px", marginRight: "20px"}}/>David Jaimes
            </Navbar.Brand>
 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
                <Nav.Link href="/about"><FaInfo size={25}/> About</Nav.Link>
                <Nav.Link href="https://github.com/davidjaimes"><FaGithub size={25}/> GitHub</Nav.Link>
                <Nav.Link href="/macOS-config"><FaApple size={25}/> macOS Configuration</Nav.Link>
                <Nav.Link href="/legal"><FaBalanceScale size={25}/> Terms of Use</Nav.Link>
                <Nav.Link href="/linear-regression"><FaSignal size={25}/> Linear Regression</Nav.Link>
                <Nav.Link href="/jskycalc"><FaGlobeAmericas size={25}/> JSkyCalc</Nav.Link>
                <Nav.Link href="/eclipsing-binaries"><FaQuinscape size={25}/> Eclipsing Binaries</Nav.Link>
                <Nav.Link href="/gatsby-config"><FaJsSquare size={25}/> Gatsby Configuration</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>

        <Col>
          <Container className="col-xl-10 pt-5 pb-5">
            {children}
          </Container>
        </Col>

      </Row>
    </Container>
  )}