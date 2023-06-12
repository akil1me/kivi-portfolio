import "./skills.scss";
import { Button } from "../button";
import { Container } from "../container";
import { skillsList } from "./skills-list";
import { useCursor } from "../../hooks";
// import { motion } from "framer-motion";

export const Skills = () => {
  const mousePosition = useCursor();
  return (
    <section className="skills">
      <Container>
        <div>
          <div data-aos="fade-up-right">
            <Button
              className="skills__button hero__button"
              color="#E2B671"
              hover="#fff"
              bg="#36A112"
              bgLine="#fff"
              width="289"
            >
              Get in touch
            </Button>
            <Button
              className="skills__button hero__button-bottom"
              color="#E2B671"
              hover="#fff"
              bg="#36A112"
              bgLine="#fff"
              width="171"
            >
              Get in touch
            </Button>
          </div>

          <ul className="skills__list">
            {skillsList.map((skill, index) => (
              <li className="skills__item" key={index} data-aos="zoom-in-up">
                {/* <motion.div
                  className="skills__item-img"
                  animate={{
                    x: mousePosition.x + skill.x,
                    y: mousePosition.y - skill.y,
                    rotate: 25,
                  }}
                  transition={{
                    duration: 1,
                  }}
                ></motion.div> */}
                <h2 style={{ color: skill.color }} className="skills__title">
                  {skill.title}
                </h2>
                <p className="skills__text">{skill.text}</p>

                <a className="skills__contiune" href="/">
                  Continue reading
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
