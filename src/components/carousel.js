import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lb from "./load-balancer.png"
import  fs from "./full-stack-web-development.jpg";
import js from "./js.jpg";
import cloud from "./cloud.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div>
          <img
            className="d-block w-100"
            src={lb}
            style={{height: 600 , width: 800, resizeMode: "contain" }}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fs}
          style={{height: 600 , width: 800, resizeMode: "contain" }}
          alt="Second slide"
        />
  
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={js}
          style={{height: 600 , width: 800, resizeMode: "contain", flex: 1 }}
          alt="Third slide"
        />
  
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cloud}
          style={{height: 600 , width: 800, resizeMode: "contain" }}
          alt="Fourth slide"
        />
  
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
  
// render(<ControlledCarousel />);

export default ControlledCarousel