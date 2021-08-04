import React, { Component } from "react";
import Slider from "react-slick";
import Credit from './credit-slide';
import AdsSlide from './ads-slide';
import FindUsSlide from './find-us-slide';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// слайдер при простом изменении ширины браузера не обновляется - надо перезагружать
// страницу, можно сделать через UseEffect но зачем,
// тк пользователь вряд ли будет менять ширину браузера
// при использовании сайта с одного устройства

export default class MainSlider extends Component {
    render() {
      const settings = {
        swipe: document.documentElement.clientWidth < 1024 ? true : false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,    
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        className: `slider`
      };
        return (
            <Slider {...settings}>
                <Credit />

                <AdsSlide />

                <FindUsSlide />
            </Slider>
        )
    }
}