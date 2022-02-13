import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

const Wave = () => {
  return (
    // <WaveSvg
    //   viewBox="0 0 1440 363"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <motion.path
    //     initial={{ pathLength: 0, pathOffset: 1 }}
    //     animate={{ pathLength: 1, pathOffset: 0 }}
    //     transition={{ duration: 2 }}
    //     d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
    //     stroke="#9c9c9c"
    //     strokeOpacity="0.1"
    //     strokeWidth="10"
    //   />
    // </WaveSvg>
    <WaveSvg
      viewBox="0 0 1504.92 508.543"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(5.485 -536.826)">
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1.5 }}
          d="M1499,3120.941c-90.991-7.952-331.114,22.436-563.681,207.568-290.747,231.425-568.269,133.385-760.082-43.565C47.811,3167.387,6.518,3118.252-1,3103"
          transform="translate(0 -2493.964)"
          stroke="#616161"
          strokeOpacity="0.05"
          strokeWidth="10"
        />

        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 2 }}
          d="M1499,3120.941c-90.991-7.952-331.114,22.436-563.681,207.568-290.747,231.425-568.269,133.385-760.082-43.565C47.811,3167.387,6.518,3118.252-1,3103"
          transform="translate(0 -2423.964)"
          stroke="#616161"
          strokeOpacity="0.05"
          strokeWidth="14"
        />

        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M1499,3120.941c-90.991-7.952-331.114,22.436-563.681,207.568-290.747,231.425-568.269,133.385-760.082-43.565C47.811,3167.387,6.518,3118.252-1,3103"
          transform="translate(0 -2563.964)"
          stroke="#616161"
          strokeOpacity="0.05"
          strokeWidth="7"
        />
      </g>
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
`;

export default Wave;
