import { Component } from 'react'
import { Carousel, Button, Icon } from 'antd'
import Slider from "react-slick"
import "./carousel.scss"
class CustomCarousel extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
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
            <Slider {...setting} autoplay>
                {
                    this.props.dataList &&
                    this.props.dataList.map((val, index) =>
                        <div key={index}>
                            <img style={{ height: "100%", width: "100%" }} src={val.img_href} />
                            <h3>{val.name}</h3>
                        </div>
                    )
                }
            </Slider>
        )
    }
}
export default CustomCarousel