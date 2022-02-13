import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion/dist/framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  view ? controls.start("show") : controls.start("hidden");
  return [element, controls];
};
