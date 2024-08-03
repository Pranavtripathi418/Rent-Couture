import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className="footer_container">
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <div className="footer_logo_container">
              <h4 className="footer_logo">RENT COUTURE</h4>
              <p className="footer_description">
              Rent Couture is a peer-to-peer cloth lending platform that makes high-end fashion accessible. Rent stunning outfits like sarees, lehengas, and suits from fellow fashion enthusiasts or earn extra income by listing your own designer clothing. Enjoy a seamless, secure experience while promoting sustainable fashion. Join us and elevate your style today!                
              </p>
            </div>
          </Col>
          <Col md={3} xs={4}>
            <h5 className="about_us_heading">Visit</h5>
            <ul className="navlinks">
              <li className="navlink">
                <a href="#/">Home</a>
              </li>
              <li className="navlink">
                <a href="#/">Services</a>
              </li>
              <li className="navlink">
                <a href="#/">Online Booking</a>
              </li>
              <li className="navlink">
                <a href="#/">About</a>
              </li>
              <li className="navlink">
                <a href="#/">Blog</a>
              </li>
              <li className="navlink">
                <a href="#/">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3} xs={8}>
            <h5 className="about_us_heading">About Us</h5>
            <ul className="navlinks">
              <li className="nav_li">
                <p className="navlink">+919984604893</p>
              </li>
              <li className="nav_li">
                <p className="navlink">
                "Fashion for All, Style on Demand."
                </p>
              </li>
              <li className="nav_li">
                <p className="navlink">pranavtripathi418@gmail.com</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
