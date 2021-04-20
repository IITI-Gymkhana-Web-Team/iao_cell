import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Offer.css";
import {  computer,phy,bio,space,civil,philosophy,material,mech, elec,} from "../../../assets";


export const Offer = () => {

const [images] = useState([{ img: elec, head: "Electrical Sciences", text: [{item : "Electrical engineering"} , {item : " Communication & Signal Processing"}, {item : " VLSI Design & nanoelectronics"}]},
                            { img: mech, head: "Mechanical Sciences", text: [{item : "Mechanical engineering"} , {item : " Production & Industrial engineering"}, {item : " Mechanical systems design"}]},
                            { img: material, head: "Material Sciences", text: [{item : "Metallurgy & Material Sciences"} , {item : " Material Sciences & engineering"}, {item : "Specialization in  Metallurgy"}]},
                            { img: computer, head: "Computer Sciences", text: [{item : "Computer Science & Engineering"}]},
                            { img: phy, head: "Natural Sciences",text : [{item : "Chemistry"} , {item : "Physics"}, {item : "Mathematics"}]},
                            { img: bio, head: "Life Sciences", text: [{item : "Bio-Sciences & Bio-medical Engineering"} , {item : "Biotechnology"}]},
                            { img: space, head: "Space Sciences", text: [{item : "Astronomy"} , {item : "Astrophysics & Space Engineering"}]},
                            { img: civil, head: "Infrastructure", text: [{item : "Civil Engineering"}]},
                            { img: philosophy, head: "HSS", text: [{item : "English"} , {item : "Philosophy"}, {item : "Economics"},{item : "Psychology"},{item : "Sociology"}]}
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
                                    {
                                      img.text.map((item,i) => {
                                        return (<p className="card-text py-0 my-0" key={i}>{item.item}</p>);
                                      })
                                    }
                                </div>
                            </div>
                        );
                    })}

        </Carousel>
</div>
 );
};