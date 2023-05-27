import { Parallax } from "react-parallax";
import Tilt from "react-parallax-tilt";
import heroImg from "../../assets/images/hero-img.png";
import { Container } from "../container";
import { Button } from "../button";
import { motion } from "framer-motion";

import "./hero.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__inner">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Tilt tiltReverse scale={false} className="hero__img-content">
              <Parallax bgImage={heroImg} className="hero__img"></Parallax>
            </Tilt>
          </motion.div>

          <div className="hero__texts">
            <motion.span
              initial={{
                opacity: 0,
                x: 400,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="hero__conversion"
            >
              conversion
            </motion.span>
            <motion.div
              initial={{
                opacity: 0,
                x: 500,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hero__through"
            >
              <span>through</span>
              <Button
                className="hero__button"
                color="#E2B671"
                hover="#fff"
                bg="#36A112"
              >
                Get in touch
              </Button>
            </motion.div>
            <motion.span
              initial={{
                opacity: 0,
                x: 500,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hero__immersion"
            >
              immersion
            </motion.span>

            <motion.div
              initial={{
                opacity: 0,
                x: 500,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button
                className="hero__button-bottom"
                color="#E2B671"
                hover="#fff"
                bg="#36A112"
              >
                Get in touch
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
