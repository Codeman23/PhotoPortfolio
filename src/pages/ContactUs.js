import React from "react";
import styled from "styled-components";
//Import icons
import message from "../img/icons/message.svg";
import email from "../img/icons/email.svg";
import socials from "../img/icons/socials.svg";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import { pageAnimation, titleAnim } from "../animation";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{
        background: "#1a1a1a",
      }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle>
              <img src={message} alt="icon" />
            </Circle>
            <span>Send Us A Message</span>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle>
              <img src={email} alt="icon" />
            </Circle>
            <span>Send An Email</span>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle>
              <img src={socials} alt="icon" />
            </Circle>
            <span>Social Media</span>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  width: 4rem;
  height: 4rem;
  img {
    width: 100%;
    height: auto;
    opacity: 0.5;
    transition: opacity 0.3s ease, transform 0.6s ease-in-out;
  }
`;

const Social = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    img {
      opacity: 1;
      transform: rotate(360deg);
    }
    span {
      color: #325ddf;
      &:before {
        width: 100%;
      }
    }
  }
  span {
    font-weight: normal;
    margin: 2rem;
    color: #555;
    cursor: pointer;
    position: relative;
    transition: color 0.3s ease;
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background-color: #325ddf;
      transition: width 0.3s ease;
    }

    font-size: 2.5rem;
    @media (max-width: 576px) {
      font-size: 1.75rem;
      margin: 1.5rem;
    }
  }
`;

export default ContactUs;
