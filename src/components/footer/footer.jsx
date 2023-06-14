import { memo } from "react";
import { useScroll } from "../../hooks";
import { Container } from "../container";

import { TextField } from "@mui/material";
import "./footer.scss";

export const Footer = memo(() => {
  const scrollY = useScroll();
  // console.log(Math.floor(scrollY).toString().slice(2));
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__form">
            <h3 className="footer__title" data-aos="zoom-in-up">
              STAY UP TO BATE
            </h3>
            <p className="footer__info" data-aos="zoom-in-up">
              get our newsletter
            </p>

            <form className="footer__form-form" data-aos="zoom-in-up">
              <TextField
                className="footer__input"
                label="Email/phone"
                variant="standard"
                color=""
              />
              <button className="footer__button"></button>
            </form>
          </div>

          <div className="footer__address">
            <h3 className="footer__title" data-aos="zoom-in-up">
              get in touch
            </h3>

            <div className="footer__address-content">
              <a
                className="footer__address-link"
                href="mailto:kivi@gmail.com"
                target="_blank"
                data-aos="zoom-in-up"
              >
                KIVI@GMAIL.COM
              </a>
              <a
                className="footer__address-link"
                href="tel:+998716606060"
                target="_blank"
                data-aos="zoom-in-up"
              >
                +998 (71) 660 60 60
              </a>
              <a
                className="footer__address-link"
                href="https://goo.gl/maps/LQms22LCNBhG2DraA"
                target="_blank"
                data-aos="zoom-in-up"
              >
                Tashkent.s A.Navoiy.k 89-uy
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="footer__line"></div>
    </footer>
  );
});
