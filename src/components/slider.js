import React from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';

import Image from 'gatsby-image';



const MyFunkySlider = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        fadeIn: false,
        autoplay: true,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // destructuring
    console.log(props.pictures);

    props.pictures.map((image) => {
        console.log(image)
        console.log(image.image)
    })
    return (

        <Slider {...settings}>
            {props.pictures.map((image, i) => (
                <Image fluid={image.image.childImageSharp.fluid} />
            ))}
        </Slider>
    )
};

export default MyFunkySlider;
