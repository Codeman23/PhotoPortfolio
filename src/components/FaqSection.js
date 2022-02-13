import React from "react";
import styled from "styled-components";
import { Layout } from "../styles";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion/dist/framer-motion";

//Animation
import { useScroll } from "../components/useScroll";
import { fade } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={fade} animate={controls} initial="hidden" ref={element}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <LayoutGroup>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>

        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>

        <Toggle title="Other Questions">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(Layout)`
  display: block;
  h2 {
    padding-bottom: 2rem;
  }
  .faqLine {
    background: #222;
    height: 3px;
    margin: 1rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0;
    p {
      padding: 1rem 0;
    }
  }
  @media (max-width: 576px) {
    .question {
      padding: 1rem 0;
    }
    .answer {
      padding: 0;
      p {
        padding: 0.6rem 0;
      }
    }
    .faqLine {
      height: 2px;
    }
  }
`;

export default FaqSection;
