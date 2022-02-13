import React from "react";
import styled from "styled-components";
//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//Animations
import { motion } from "framer-motion/dist/framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <AboutUsWrap
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </AboutUsWrap>
  );
};

//Styled components
const AboutUsWrap = styled(motion.div)`
  overflow: hidden;
`;

export default AboutUs;
