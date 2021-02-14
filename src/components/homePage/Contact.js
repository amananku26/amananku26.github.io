import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core";
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
              For any information regarding my work kindly, contact me though
              the following phone number or email address.
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
          {/* <Col md={7}>
            <from autoComplete="off">
              <Row>
                <Col className="mb-4" md={6}>
                  <TextField
                    className="w-100 form-textfield"
                    id="standard-basic"
                    label="Name"
                    InputLabelProps={{
                      className: "form-textfield-input",
                    }}
                    InputProps={{
                      className: "form-textfield-input",
                    }}
                  />
                </Col>
                <Col className="mb-4" md={6}>
                  <TextField
                    className="w-100 form-textfield"
                    id="standard-basic"
                    label="Email"
                    InputLabelProps={{
                      className: "form-textfield-input",
                    }}
                    InputProps={{
                      className: "form-textfield-input",
                    }}
                  />
                </Col>
                <Col className="mb-4" md={6}>
                  <TextField
                    className="w-100 form-textfield"
                    id="standard-basic"
                    label="Phone"
                    InputLabelProps={{
                      className: "form-textfield-input",
                    }}
                    InputProps={{
                      className: "form-textfield-input",
                    }}
                  />
                </Col>
                <Col className="mb-4" md={6}>
                  <TextField
                    className="w-100 form-textfield"
                    id="standard-basic"
                    label="Subject"
                    InputLabelProps={{
                      className: "form-textfield-input",
                    }}
                    InputProps={{
                      className: "form-textfield-input",
                    }}
                  />
                </Col>
                <Col className="mb-4" md={12}>
                  <TextField
                    className="w-100 form-textfield"
                    id="standard-basic"
                    label="Message"
                    InputLabelProps={{
                      className: "form-textfield-input",
                    }}
                    InputProps={{
                      className: "form-textfield-input",
                    }}
                  />
                </Col>
              </Row>
              <Button
                color="white"
                variant="outlined"
                className="send-message-btn mt-4"
              >
                Send Message
              </Button>
            </from>
          </Col> */}
        
        </Row>
      </motion.div>
    </div>
  );
};

export default Contact;
