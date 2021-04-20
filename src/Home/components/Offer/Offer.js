import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Offer.css";
import {  grp2, grp3 } from "../../../assets";


export const Offer = () => {

const [images] = useState([{ img: grp2, head: "Electrical Sciences", text:"electrica"},
                            { img: grp2, head: "Mechanical Sciences", text:"electrica"},
                            { img: grp2, head: "Material Sciences", text:"electrica"},
                            { img: grp2, head: "Computer Sciences", text:"electrica"},
                            { img: grp2, head: "Natural Sciences", text:"electrica"},
                            { img: grp2, head: "Life Sciences", text:"electrica"},
                            { img: grp2, head: "Earth Sciences", text:"electrica"},
                            { img: grp2, head: "Energy", text:"electrica"},
                            { img: grp2, head: "Infrastructure", text:"electrica"},
                            { img: grp2, head: "HSS", text:"electrica"},
                            { img: grp2, head: "Interdisciplinary", text:"electrica"},
                            ]);
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
};

return (
    <div className="OfferCar text-center mt-3">
    
    <h1 className="mainTitle mb-3">WHAT WE OFFER</h1>
        <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="react-multi-carousel-list"
        itemClass="carousel-item-padding-40-px"
        >

                    {images.map((img, index) => {
                        return (
                            <div className="off card mx-3" key={index}>
                                <img className="card-img-top" src={img.img} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title text-uppercase">{img.head}</h5>
                                    <p className="card-text">{img.text}</p>
                                </div>
                            </div>
                        );
                    })}

        </Carousel>
</div>
 );
};