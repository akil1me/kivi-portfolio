import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./assets/styles/app.scss";
import { Header, Hero, Slider } from "./components";
import { useCursor } from "./hooks";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const mousePosition = useCursor();
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, [scroll]);

  const handleScroll = useCallback(() => {
    setScroll(window.scrollY);
  }, [scroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  return (
    <>
      <motion.div
        className={`cursor ${scroll > 950 ? "cursor-green" : ""}`}
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
      </main>
    </>
  );
};

export default App;
