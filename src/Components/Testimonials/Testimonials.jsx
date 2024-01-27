import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import person1Img from "../../assets/person-1.avif";
import person2Img from "../../assets/person-2.avif";
import person3Img from "../../assets/person-3.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10">
      <div className="container">
        <h1 className="testimonials__title font-bold text-2xl md:text-4xl text-center">
          SMO Customer Testimonials
        </h1>
        <div className="testimonials__wrapper mt-5">
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[Navigation, EffectCreative]}
            slidesPerView={1}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide className="testimonials__person rounded-2xl">
              <div className="testimonials__person-container p-4 bg-ff7d7d flex text-center items-center flex-col h-full">
                <div className="testimonials__person__img w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28">
                  <img
                    src={person1Img}
                    alt="person image"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="testimonials__person-information mt-4">
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-50">
                    Sarah Johnson // Marketing Specialist
                  </p>
                </div>
                <div className="testimonial__person-comment mt-4">
                  <p className="text-base md:text-lg lg:text-xl md:max-w-lg lg:max-w-xl font-semibold text-pink-50">
                    SMO has revolutionized the way I manage my social media
                    accounts. As a marketing specialist, staying organized is
                    crucial, and SMO has become an invaluable tool for
                    streamlining my online presence.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="testimonials__person rounded-2xl">
              <div className="testimonials__person-container p-4 bg-ff7d7d flex text-center items-center flex-col h-full">
                <div className="testimonials__person__img w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28">
                  <img
                    src={person2Img}
                    alt="person image"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="testimonials__person-information mt-4">
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-50">
                    Alex Rodriguez // Fitness Trainer
                  </p>
                </div>
                <div className="testimonial__person-comment mt-4">
                  <p className="text-base md:text-lg lg:text-xl md:max-w-lg lg:max-w-xl font-semibold text-pink-50">
                    Being a fitness trainer requires a strong online presence,
                    and SMO has made it incredibly easy for me to keep track of
                    my social media accounts. Now, I can focus more on helping
                    my clients achieve their fitness goals.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="testimonials__person rounded-2xl">
              <div className="testimonials__person-container p-4 bg-ff7d7d flex text-center items-center flex-col h-full">
                <div className="testimonials__person__img w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28">
                  <img
                    src={person3Img}
                    alt="person image"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="testimonials__person-information mt-4">
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-50">
                    John Wayne // Travel Blogger
                  </p>
                </div>
                <div className="testimonial__person-comment mt-4">
                  <p className="text-base md:text-lg lg:text-xl md:max-w-lg lg:max-w-xl font-semibold text-pink-50">
                    SMO is a game-changer for a travel blogger like me. It
                    simplifies the process of managing various social media
                    accounts, allowing me to share my adventures effortlessly. I
                    highly recommend it!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
