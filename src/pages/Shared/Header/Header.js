import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import brandLogo from '../../../images/logo/logo2.png'

const Header = () => {
    const icon = <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/home#home">
                        <img
                            src={brandLogo}
                            width="150"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav.Link href="#home">{icon}</Nav.Link>
                        <Nav.Link href="#features"><button className='btn btn-outline-danger rounded-pill px-4'>Login</button></Nav.Link>
                        <Nav.Link href="#pricing"><button className='btn btn-danger rounded-pill px-4'>Sign UP</button></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;