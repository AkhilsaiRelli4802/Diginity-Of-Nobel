import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonialscard from './Testimonialscard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear"
  };
  return (
    <div className='testimonials-container' style={{marginTop:"110px"}}>
    <h4><FontAwesomeIcon icon={faAngleDoubleLeft}/>TESTIMONIALS<FontAwesomeIcon icon={faAngleDoubleRight}/></h4>
    <h1>Why they Love us</h1>
      <Slider {...settings}>
        
        <div>
        <Testimonialscard
imageUrl="testimonials1.jpg"
name="Lisa"
designation="Manager"
content="To empower people with barriers as entrepreneurs To support nonprofits/social impact organizations with revenues "
/>
        </div>
        
        
        <div>
        <Testimonialscard
        imageUrl="testimonials2.jpg"
        name="Lisa"
        designation="Manager"
        content="To empower people with barriers as entrepreneurs To support nonprofits/social impact organizations with revenues "
        />
        </div>
        
    
        <div>
        <Testimonialscard
        imageUrl="testimonials3.jpg"
        name="Rosey"
        designation="Manager"
        content="To empower people with barriers as entrepreneurs To support nonprofits/social impact organizations with revenues "
        />
        </div>
        
        
        <div>
        <Testimonialscard
        imageUrl="testimonials4.jpg"
        name="Chris"
        designation="Developer"
        content="To empower people with barriers as entrepreneurs To support nonprofits/social impact organizations with revenues "
        />
        </div>
        

      </Slider>
    </div>
  );
}

export default Testimonials;
