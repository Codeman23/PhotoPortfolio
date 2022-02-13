import React from "react";
//Import Icons and image
import clock from "../img/icons/clock.svg";
import photo from "../img/icons/photo.svg";
import money from "../img/icons/money.svg";
import teamwork from "../img/icons/teamwork.svg";

import home2 from "../img/home2.jpg";

//Animation
import { scrollReveal } from "../animation";
import { useScroll } from "../components/useScroll";

//Styled components
import styled from "styled-components";
import { Layout, Description, Image } from "../styles";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2 className="services__title">
          High <span className="">quality</span> services
        </h2>

        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3 className="services__subTitle">Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={photo} alt="icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>

      <Image>
        <img src={home2} alt="img" />
      </Image>
    </Services>
  );
};

//Styled components
const Services = styled(Layout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 1.5rem 0 3rem;
    font-size: 1.4rem;
  }
  @media (max-width: 576px) {
    h2 {
      padding-bottom: 4rem;
    }
    p {
      width: 100%;
      text-align: left;
      padding: 0.7rem 0 3rem;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 18rem;
  @media (max-width: 576px) {
    flex-basis: 45%;
    padding-right: 1rem;
  }
  @media (max-width: 375px) {
    flex-basis: auto;
    padding-right: 0;
  }
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: #161616;
      color: #eef2ff;
      padding: 0.5rem 0.8rem;
      boreder-radius: 3px;
    }
  }
  @media (max-width: 576px) {
    .icon h3 {
      padding: 0.6rem;
      margin-left: 0.5rem;
    }
  }
`;

export default ServicesSection;
