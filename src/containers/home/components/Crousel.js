import React from 'react';
import Slider from 'react-slick';
import './styles/Crousel.css';
import promo1 from '../../../images/promos/promo1.jpg';
import promo2 from '../../../images/promos/promo2.jpg';
import promo3 from '../../../images/promos/promo3.jpg';
import promo4 from '../../../images/promos/promo4.jpg';
import promo5 from '../../../images/promos/promo5.jpg';
import promo6 from '../../../images/promos/promo6.jpg';
import promo7 from '../../../images/promos/promo7.jpg';

export default class Crousel extends React.PureComponent {
    constructor() {
        super();

        this.settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000        
        }
    }
    render() {
        return (
            <div className='carouselCon'>
                <Slider {...this.settings}>
                    <div><img className='pImg' src={promo1} alt="" /></div>
                    <div><img className='pImg' src={promo2} alt="" /></div>
                    <div><img className='pImg' src={promo3} alt="" /></div>
                    <div><img className='pImg' src={promo4} alt="" /></div>
                    <div><img className='pImg' src={promo5} alt="" /></div>
                    <div><img className='pImg' src={promo6} alt="" /></div>
                    <div><img className='pImg' src={promo7} alt="" /></div>
                </Slider>
            </div>
        )
    }
}
