import AmericanExpressLogo from "../../assets/logo/american-express.svg";
import MultiverseLogo from "../../assets/logo/multiverse.svg";
import WholeFoodMarketLogo from "../../assets/logo/whole-foods-market.svg";
import StarbucksLogo from "../../assets/logo/starbucks.svg";
import MarsLogo from "../../assets/logo/mars.svg";
import HiltonLogo from "../../assets/logo/hilton.svg";
import ChemtreatLogo from "../../assets/logo/chemtreat.svg";

import PropTypes from "prop-types";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-30, -70, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller flex" style={{ x }}>
        <span className="flex-shrink-0">{children} </span> 
        <span className="flex-shrink-0">{children} </span> 
        <span className="flex-shrink-0">{children} </span> 
      </motion.div>
    </div>
  );
}

const ScrollIconLine = ({baseVelocity, direction}) => {
  let bgDirection;
  direction === "topToBottom"
    ? (bgDirection = "bg-gradient-to-b")
    : (bgDirection = "bg-gradient-to-t");
  return (
    <section className="">
      <div
        className="bg-zinc-950"
      >
        <ParallaxText baseVelocity={baseVelocity}>
          <div className="flex gap-3 ">
            <img src={AmericanExpressLogo} alt="" />
            <img src={MultiverseLogo} alt="" />
            <img src={WholeFoodMarketLogo} alt="" />
            <img src={StarbucksLogo} alt="" />
            <img src={MarsLogo} alt="" />
            <img src={HiltonLogo} alt="" />
            <img src={ChemtreatLogo} alt="" />
          </div>
        </ParallaxText>
      </div>
    </section>
  );
};

ScrollIconLine.propTypes = {
  baseVelocity: PropTypes.number,
  direction: PropTypes.string,
}
ParallaxText.propTypes = {
  children: PropTypes.node,
  baseVelocity: PropTypes.number,
}


export default ScrollIconLine;
