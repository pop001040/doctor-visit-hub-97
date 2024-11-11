import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Presentation = () => {
  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="rounded-xl overflow-hidden"
      >
        <SwiperSlide>
          <div className="bg-primary/10 p-8 h-[300px] flex items-center justify-center">
            <h3 className="text-2xl font-bold">الشريحة الأولى</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-secondary/10 p-8 h-[300px] flex items-center justify-center">
            <h3 className="text-2xl font-bold">الشريحة الثانية</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-primary/10 p-8 h-[300px] flex items-center justify-center">
            <h3 className="text-2xl font-bold">الشريحة الثالثة</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Presentation;