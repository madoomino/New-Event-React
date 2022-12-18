import classes from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import creativeSpeakersDate from "../../../../design-system/components/CreativeSpeakersList/creativeSpeakersData";
import CreativeSpeaker from "../../../../design-system/components/CreativeSpeaker/CreativeSpeaker";

const Slider = () => {
  return (
    <section className={classes.container}>
      <h3>
        Creative <span className={classes.speakers}>Speakers</span>
      </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {creativeSpeakersDate.map((item) => (
          <SwiperSlide key={item.id}>
            <CreativeSpeaker {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Slider;
