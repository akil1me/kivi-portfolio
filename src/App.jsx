import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import "./assets/styles/app.scss";
import { Header } from "./components";

const App = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const handleMouseMove = useCallback((mouseEvent) => {
    setMousePosition({
      x: mouseEvent.clientX,
      y: mouseEvent.clientY,
    });
  });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  const variants = {
    default: {
      x: mousePosition.x - 200,
      y: mousePosition.y - 300,
    },
  };

  return (
    <>
      <motion.div
        className="cursor"
        animate="default"
        variants={variants}
      ></motion.div>
      <Header />
      <div style={{ height: 1000 }}></div>
    </>
  );
};

export default App;