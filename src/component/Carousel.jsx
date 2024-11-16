import React,{ component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../component/Carousel.css";

function Arrow(props){
    const { className, style, onClick } = props;
    return (
        <div className={className}
        style={{ ...style, display:"block", background: "black" }}
        onClick = {onClick}/>
  
    );
}

function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive : [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                                   }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                                   }

            },
        ]
    };

    return(
        <div className="container">
            <Slider {...settings}>

            <div className="card">
                    <img src="Image/Ojas01.jpg" alt="" className="photo"/>
                    <div className="card-body">
                        <h3>01th Month</h3>

                    </div>
                </div>

                <div className="card">
                    <img src="Image/Ojas02.jpg" alt="" className="photo"/>
                    <div className="card-body">
                        <h3>02th Month</h3>

                    </div>
                </div>

                <div className="card">
                    <img src="Image/Ojas03.jpg" alt="" className="photo"/>
                    <div className="card-body">
                        <h3>03th Month</h3>

                    </div>
                </div>
               
                <div className="card">
                    <img src="Image/Ojas04.jpg" alt="" className="photo"/>
                    <div className="card-body">
                        <h3>04th Month</h3>

                    </div>
                </div>
               
                <div className="card">
                    <img src="Image/Ojas05.jpg" alt="" className="photo"/>
                    <div className="card-body">
                        <h3>05th Month</h3>

                    </div>
                </div>
               
                <div className="card">
                    <img src="Image/Ojas06.jpg" alt="" className="photo"/>
                    <div className="card-body">
                        <h3>06th Month</h3>

                    </div>
                </div>
               
                <div className="card">
                    <img src="Image/Ojas07.jpg" alt="" className="photo"/>
                    <div className="card-body">
                        <h3>07th Month</h3>

                    </div>
                </div>
                <div className="card">
                    <img src="Image/Ojas08.jpg" alt="" className="photo"/>
                    <div className="card-body">
                        <h3>08th Month</h3>

                    </div>
                </div>
               
                <div className="card">
                    <img src="Image/Ojas09.jpg" alt="" className="photo"/>
                    <div className="card-body">
                        <h3>09th Month</h3>

                    </div>
                </div>
                <div className="card">
                    <img src="Image/Ojas10.jpg" alt="" className="photo"/>
                    <div className="card-body">
                        <h3>10th Month</h3>

                    </div>
                </div>
                <div className="card">
                    <img src="Image/Ojas11.jpg" alt="" className="photo"/>
                    <div className="card-body">
                        <h3>11th Month</h3>

                    </div>
                </div>
                <div className="card">
                    <img src="Image/Ojas12.jpg" alt="" className="photo"/>
                    <div className="card-body">
                        <h3>Birthday Month</h3>

                    </div>
                </div>
               

            </Slider>
        </div>
    )
}

export default Carousel;