import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";


const Contact = () => {
  const [element, controls] = useScroll();
  return (
    <div className="contact-section-bg" id="contact">
      <motion.div
        variants={scrollReveal}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6 "
      >
        <Row className="justify-content-between">
          <Col md={6}>
            <h1>
              <span className="chonburi-font green-text">Get</span> in Touch
            </h1>
            <p className="mb-5">
              Interested in building a fast, accessible, and scalable frontend
              experience? I’d be glad to connect.
            </p>
            <h5 className="mb-4">
              <span className="chonburi-font green-text">PhoneNo:</span> +91
              8986369752
            </h5>
            <h5 className="mb-4">
              <span className="chonburi-font green-text">Email:</span>{" "}
              amankumaranku@gmail.com
            </h5>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default Contact;
