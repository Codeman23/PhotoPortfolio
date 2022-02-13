import React from "react";
import home1 from "../img/home1.jpg";
import { Layout, Description, Image, Hide } from "../styles";
import { Link } from "react-router-dom";
//Framer Motion and animation
import { motion } from "framer-motion/dist/framer-motion";
import { titleAnim, fade, photoAnimation } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span className="description__title_green">dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have.
          We&nbsp;have proffesionals withamazing skills.
        </motion.p>
        <motion.div className="button" variants={fade}>
          <Link to="/contact">Contact</Link>
        </motion.div>
      </Description>

      <Image>
        <motion.img variants={photoAnimation} src={home1} alt="img" />
      </Image>
      <Wave />
    </Layout>
  );
};

export default AboutSection;
