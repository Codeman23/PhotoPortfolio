import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    function scroller() {
      window.scroll({
        top: 0,
        left: 0,
      });
    }
    setTimeout(scroller, 500);
  }, [pathname]);

  return null;
};

export default ScrollTop;
