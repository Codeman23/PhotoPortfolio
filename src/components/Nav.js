import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import logo from "../img/logo.svg";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <div className="logoWrap">
        <Link id="logo" to="/">
          <img src={logo} alt="img" />
        </Link>
      </div>
      <ul>
        <li>
          <span className="linkWrap">
            <Link className="navLink" to="/">
              About
            </Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "100%" : "0%" }}
            />
          </span>
        </li>
        <li>
          <span className="linkWrap">
            <Link className="navLink" to="/work">
              Portfolio
            </Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/work" ? "100%" : "0%" }}
            />
          </span>
        </li>
        <li>
          <span className="linkWrap">
            <Link className="navLink" to="/contact">
              Contact
            </Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
            />
          </span>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: block;
  position: relative;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 100;
  overflow: hidden;
  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(12, 12, 12, 0.8);
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
  }
  .logoWrap {
    z-index: 1;
    @media (max-width: 1300px) {
      padding-right: 30px;
    }
  }
  a {
    color: #b0b0b0;
    text-decoration: none;
    font-size: 1rem;
  }
  .navLink {
    color: #dadada;
    text-decoration: none;
    font-size: 1.4rem;
    position: relative;
    text-transform: uppercase;
    z-index: 1;
    transition: color 0.3s ease;
    &:hover {
      color: white;
    }
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  .linkWrap {
    position: relative;
    padding: 0 1rem 0 0.3rem;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: lighter;
    width: 100%;
    max-width: 120px;
    display: inline-block;
    @media (max-width: 1300px) {
      max-width: 106px;
    }
    @media (max-width: 576px) {
      max-width: 94px;
    }
    img {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem;
    #logo {
      display: inline-block;
      margin: 0 0 0.5rem;
    }
    ul {
      padding: 1rem;
      justify-content: space-between;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }
  @media (max-width: 576px) {
    .navLink {
      font-size: 1rem;
    }
  }
`;

const Line = styled(motion.span)`
  height: 1rem;
  background: #325ddf;
  width: 0;
  position: absolute;
  bottom: -40%;
  left: 0;
  z-index: 0;
  @media (max-width: 1300px) {
    left: 0%;
  }
  @media (max-width: 576px) {
    height: 0.6rem;
    bottom: -10%;
  }
`;

export default Nav;
