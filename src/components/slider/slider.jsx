import { Carousel } from "../carousel";
import { Container } from "../container";
import "./slider.scss";

export const Slider = () => {
  return (
    <section className="slider">
      <Container>
        <div className="slider__text-content flex justify-end">
          <h2 className="slider__title" data-aos="zoom-in-up">
            Contrary to <span style={{ color: "#E2B671" }}>popular belief</span>
            , Lorem Ipsum is not simply random text. Latin literature from 45
            BC, making it over{" "}
            <span style={{ color: "#36A112" }}>2000 years old</span>.
          </h2>
        </div>
      </Container>
      <Carousel />
    </section>
  );
};
