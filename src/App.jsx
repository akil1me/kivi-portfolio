import { useEffect } from "react";
import { motion } from "framer-motion";
import "./assets/styles/app.scss";
import { Header, Hero, Slider } from "./components";
import { useCursor } from "./hooks";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const mousePosition = useCursor();

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <>
      <motion.div
        className="cursor"
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
