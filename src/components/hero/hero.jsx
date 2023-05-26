import { Container } from "../container";
import { Parallax } from "react-parallax";
import Tilt from "react-parallax-tilt";
import heroImg from "../../assets/images/hero-img.png";
import "./hero.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__inner">
          <Tilt tiltReverse scale={false} className="hero__img-content">
            <Parallax bgImage={heroImg} className="hero__img"></Parallax>
          </Tilt>
        </div>
      </Container>
    </section>
  );
};
