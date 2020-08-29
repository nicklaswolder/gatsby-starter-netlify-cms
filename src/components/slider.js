import React from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import Img from 'gatsby-image';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import 'swiper/swiper.scss';



const MyFunkySlider = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // destructuring
    const Image = styled(Img, {
        objectFit: 'cover',
        objectPosition: '100% 0',
        width: '100%',
        height: '100%',
        maxHeight: '25rem',
    });

    SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

    const renderSlides = () => {
        const images = props.pictures.map((image) => {
            const img = image.image.childImageSharp;
            console.log(img.fluid.src)
            return (
                <SwiperSlide>
                    <div className={"slide"} style={{ display: "flex", backgroundImage: "url(" + img.fluid.src + ")", backgroundSize: "300px", width: "300px", height: "300px" }}></div>
                </SwiperSlide>

            );
        });
        return images;
    };


    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {renderSlides()}
        </Swiper>
    );
};

export default MyFunkySlider;
