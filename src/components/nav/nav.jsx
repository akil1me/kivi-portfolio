import { navList } from "./nav-list";
import "./nav.scss";
import { motion } from "framer-motion";

export const Nav = ({ className }) => {
  return className === "drawer-open" ? (
    <nav className="nav">
      <ul className="nav__list">
        {navList.map((item, index) => (
          <li className="nav__item" key={index}>
            <a
              className="nav__link"
              href={`#${item.title.toLocaleLowerCase()}`}
            >
              <motion.span
                className="nav__link-text"
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                {item.title.split("").map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </motion.span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  ) : null;
};
