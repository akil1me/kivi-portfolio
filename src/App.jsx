import { motion } from "framer-motion";
import "./assets/styles/app.scss";
import { Header, Hero } from "./components";
import { useCursor } from "./hooks";

const App = () => {
  const mousePosition = useCursor();

  const variants = {
    default: {
      x: mousePosition.x - 290,
      y: mousePosition.y - 290,
    },
  };

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
        transition={{
          duration: 0.7,
        }}
      ></motion.div>

      <Header />

      <main>
        <Hero />
      </main>
    </>
  );
};

export default App;
