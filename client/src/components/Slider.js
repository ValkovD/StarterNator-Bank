import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import FirstImg from "./img/1.jpg";
import SecondImg from "./img/2.jpg";
import ThirdImg from "./img/3.jpg";
import FourthImg from "./img/4.jpg";

const Slider = () => {
  return (
    <Container>
      <Carousel slide={true} indicators={true} wrap={true}>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-auto h-auto"
            src={FirstImg}
            alt="First slide"
          />
          <Carousel.Caption className="text-black bg-success">
            <h2>Best Tool for you workshop</h2>
            <p>You can search by car registration or vin number</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-auto h-auto"
            src={SecondImg}
            alt="First slide"
          />
          <Carousel.Caption className="text-black bg-success">
            <h2>Real data based on real faults</h2>
            <p>
              Our data base is product of many mechanics logging faults
              world-wide
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          {/* <ThirdImg text="Third slide" /> */}
          <img
            className="d-block w-auto h-auto"
            src={ThirdImg}
            alt="First slide"
          />
          <Carousel.Caption className="text-black bg-success">
            <h2>Easy to acces from any devise</h2>
            <p>Works on any PC,Laptop,Tablet or mobile phone</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          {/* <FourthImg text="Third slide" /> */}
          <img
            className="d-block w-auto h-auto"
            src={FourthImg}
            alt="First slide"
          />
          <Carousel.Caption className="text-black bg-success">
            <h2>Easy logging in system </h2>
            <p>Just create your Profile today and start using it immediately</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;
