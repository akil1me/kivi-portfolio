import { memo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FreeMode, Parallax, Virtual, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCursor } from "../../hooks";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/parallax";
import "swiper/css/virtual";
import "swiper/css/zoom";
import "./carousel.scss";
import { skillsList } from "../skills/skills-list";

export const Carousel = memo(() => {
  const mousePosition = useCursor();
  const swiperRef = useRef(null);

  const handleScroll = () => {
    swiperRef.current.translateTo(-1 * window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="corousel">
      <Swiper
        className="corousel__swiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Zoom, FreeMode, Parallax, Virtual]}
        zoom
        freeMode
        loopedSlides={8}
        parallax={true}
        spaceBetween={20}
        slidesPerView={"auto"}
        speed={1000}
      >
        {[...skillsList, ...skillsList, ...skillsList].map((texts, index) => (
          <SwiperSlide className="corousel__item" key={index}>
            <div className="corousel__block">
              <div
                data-swiper-parallax="8%"
                className="corousel__img"
                style={{
                  backgroundImage: `url(https://picsum.photos/id/${
                    index + 60
                  }/600/600)`,
                }}
              >
                <a className="corousel__link" href="/"></a>
              </div>
            </div>

            <div className="corousel__texts">
              <p>{texts.text}</p>
              <h3>{texts.title}</h3>
              <span>reed</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.span
        animate={{
          x: mousePosition.x - 130,
          y: mousePosition.y - 2200,
        }}
        transition={{
          duration: 0.6,
          type: "tween",
        }}
        className="corousel__drag"
      >
        drag or click
      </motion.span>
    </div>
  );
});
