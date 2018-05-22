import { Component } from 'react'
import { Carousel,Button,Icon } from 'antd'
import "./carousel.scss"
class CustomCarousel extends Component {
    render() {
        return (
            <div className="carousel-container">
                <Button className="carousel-left" onClick={()=>console.log(this)}>
                    <Icon type="left" />
                </Button>
                <Button className="carousel-right">
                    <Icon type="right" />
                </Button>
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </div>
        )
    }
}
export default CustomCarousel