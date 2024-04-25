import React from "react";
import Slider from "react-slick";
import { Card,CardHeader,CardBody,CardText,CardTitle} from "reactstrap";
import "./CardSlider.css"

function CardSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container slider">
       <Slider {...settings}>
         <div>
           <div className="card1">
                 <Card className="my-2 cardbackground" inverse style={{width: '18rem'}}>
                     <CardHeader>Mission</CardHeader>
                     <CardBody>
                     <CardTitle tag="h5">Special Title Treatment</CardTitle>
                     <CardText>
                         With supporting text below as a natural lead-in to additional content.
                     </CardText>
                     </CardBody>
                 </Card>
         </div>
         </div>
         <div>
           <div className="card2">
                 <Card className="my-2 cardbackground" inverse style={{width: '18rem'}}>
                     <CardHeader>Vision</CardHeader>
                     <CardBody>
                     <CardTitle tag="h5">
                         Special Title Treatment
                     </CardTitle>
                     <CardText>
                         With supporting text below as a natural lead-in to additional content.
                     </CardText>
                    </CardBody>
                 </Card>
             </div>
         </div>
         <div>

           <div className="card3">
                 <Card className="my-2 cardbackground" inverse style={{width: '18rem'}}>
                     <CardHeader>Stratergy</CardHeader>
                     <CardBody>
                     <CardTitle tag="h5">
                         Special Title Treatment
                     </CardTitle>
                     <CardText>
                         With supporting text below as a natural lead-in to additional content.
                     </CardText>
                     </CardBody>
                 </Card>
             </div>
         </div>
       </Slider>
     </div>
  );
}

export default CardSlider;
