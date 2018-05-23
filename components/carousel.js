import { Component } from 'react'
import { Carousel, Button, Icon } from 'antd'
import Slider from "react-slick"
import "./carousel.scss"
class CustomCarousel extends Component {
    render() {
        const setting = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "custom-slider"
        }
        return (
            <div className="carousel-container">
                <Slider autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Slider>
            </div>
        )
    }
}
export default CustomCarousel