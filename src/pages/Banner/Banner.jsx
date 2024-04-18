import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Banner = () => {
    return (
        <div className="container mx-auto mt-6">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src="https://i.ibb.co/yQjv5L3/images.jpg" className="w-full" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/2jMrBW6/download.jpg" className="w-full" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/GMBTwPF/images.jpg" className="w-full" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/TWpDpv0/images.jpg" className="w-full" /></SwiperSlide>
            </Swiper>


            {/* <div className="carousel w-full rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    
                    <img src="https://i.ibb.co/yQjv5L3/images.jpg" className="w-full" />
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/2jMrBW6/download.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/GMBTwPF/images.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/TWpDpv0/images.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;