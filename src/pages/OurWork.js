import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import basketball1 from "../img/basketball-1.jpg";
import streetRacing1 from "../img/street-racing-1.jpg";
import nightTown1 from "../img/night-town-1.jpg";
//Animations
import { motion } from "framer-motion/dist/framer-motion";
import { useScroll } from "../components/useScroll";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{
        background: "#1a1a1a",
      }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>Night Town</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/night-town">
          <Hide>
            <motion.img variants={photoAnimation} src={nightTown1} alt="img" />
          </Hide>
        </Link>
      </Movie>

      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>Street Racing</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/street-racing">
          <img src={streetRacing1} alt="img" />
        </Link>
      </Movie>

      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Street Ball</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/basketball">
          <img src={basketball1} alt="img" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem;
  }
  h2 {
    padding-left: 1rem;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
    color: white;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 5rem;
  .line {
    height: 1.2rem;
    background: #245bfe;
    position: relative;
    z-index: 0;
    top: -1.6rem;
    opacity: 0.55;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 576px) {
    .line {
      top: -1rem;
      height: 0.8rem;
    }
  }
  @media (max-width: 375px) {
    .line {
      height: 0.6rem;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #0a0635;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #090254;
`;
const Frame3 = styled(Frame1)`
  background: #0d0f70;
`;
const Frame4 = styled(Frame1)`
  background: #1a1180;
`;

export default OurWork;
