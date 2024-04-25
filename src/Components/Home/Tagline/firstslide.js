import React from "react"
import 'react-slideshow-image/dist/styles.css';
import {Zoom } from "react-slideshow-image";

const slideImages =[

    {
    
    url: 'https://www.shutterstock.com/shutterstock/photos/1932042689/display_1500/stock-photo-businessman-using-mobile-smart-phone-business-global-internet-connection-application-technology-1932042689.jpg',
    caption: 'First Slide'
    
    },
    
    {
    url:'https://img.freepik.com/premium-photo/minimalist-monkey-sitting-colorful-background-free-desktop-wallpaper_899449-271329.jpg?w=996',
    
    caption: 'Second Slide'
    
    },
    
    {
    
    url: 'https://img.freepik.com/premium-photo/plain-yellow-wall_850140-423.jpg?w=996',
    
    caption: 'Third Slide'
    
    },

    {
        url:'https://t3.ftcdn.net/jpg/07/24/48/66/240_F_724486608_1GVZMR7XNp7XNytCohFiUGOC9qLZT8kd.jpg',
        
        caption: 'Fourth Slide'
        
    },
    {
    
        url: 'https://img.freepik.com/premium-photo/businessman-waters-growing-plant-shaped-financial-arrow-surrounded-by-coins-table-business-growth-financial-success-concept_982248-4889.jpg?w=1060',
        caption: 'Fifth Slide'
        
        },
        
        {
        url:'https://img.freepik.com/premium-photo/circle-diverse-hands-intertwined-ar-wallpaper_987764-30571.jpg?w=996',
        
        caption: 'Sixth Slide'
        
        },
        
    ];

const divstyle = {
    display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",backgroundSize:"cover"
}

function FirstSlide(){
    return(
        <div className="slide-container">
            <Zoom autoplay={true} duration={2000}>
                {slideImages.map((image, index) => (
                    <div key={index}>
                        <div style={{...divstyle,backgroundImage: `url(${image.url})`,position: "relative"}}>
                            <span>{image.caption}</span>
                        </div>
                    </div>
                ))}
            </Zoom>
        </div>
    )
}
export default FirstSlide