import { memo } from "react";
import { useScroll } from "../../hooks";
import { Container } from "../container";

import "./footer.scss";

export const Footer = memo(() => {
  const scrollY = useScroll();
  console.log(Math.floor(scrollY).toString().slice(2));
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__form"></div>
        </div>
      </Container>

      <div className="footer__line"></div>
    </footer>
  );
});
