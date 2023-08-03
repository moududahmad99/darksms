import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import './Styles.css';

const MyNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <div id="navbar-wrapper">
            <Navbar expand="lg" expanded={expanded}>
                <Container>
                    <Navbar.Brand>
                        <img src="/assets/logo-w.png" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="navbar-toggler"
                        onClick={handleToggle}
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto mb-2 mb-lg-0">

                            <Nav.Link href="#features" className="nav-link">
                                Features
                            </Nav.Link>
                            <Nav.Link href="#how" className="nav-link">
                                How It Works
                            </Nav.Link>
                            <Nav.Link href="#faq" className="nav-link">
                                F.A.Q
                            </Nav.Link>
                            <Nav.Link href="#blog" className="nav-link">
                                Blog
                            </Nav.Link>
                            <Nav.Link href="#customer-blog" className="nav-link customer-button">
                                Customer Panel
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {expanded && (
                <>
                    <div className="close-button" onClick={handleToggle}>
                        <span>&times;</span>
                    </div>

                    <div className="sidebar-bottom">
                        <img src="/assets/logo-w.png" alt="logo" className="sidebar-logo" />

                        <div className="social-links">
                        <p>If you need help, open a ticket <br /> Send us an e-mail<br /></p>
                            <a href="https://twitter.com/"><FaTwitter /></a>
                            <a href="https://www.facebook.com/"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/"><FaInstagram /></a>
                            <a href="https://www.youtube.com/"><FaYoutube /></a>
                        </div>
                    </div>
                </>

            )}
        </div>
    );
};

export default MyNavbar;
