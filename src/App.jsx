import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./assets/styles/app.scss";
import { Header, Hero, Skills, Slider } from "./components";
import { useCursor, useScroll } from "./hooks";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const mousePosition = useCursor();
  const scroll = useScroll();

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <motion.div
        className={`cursor ${scroll > 500 ? "cursor-green" : ""}`}
        animate={{
          x: mousePosition.x - 290,
          y: mousePosition.y - 290,
        }}
        transition={{
          duration: 0.7,
        }}
      ></motion.div>

      <Header />

      <main>
        <Hero />
        <Slider />
        <Skills />
      </main>
    </>
  );
};

export default App;
