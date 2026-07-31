import { assets } from "../../../constants/assets.js";
import { Button } from "../../common/Button/index.js";
import { Description, Title } from "../../common/Typography/index.js";
import "./AboutUs.css";

export function AboutUs() {
  return (
    <section className="home-two-about-us" id="about" aria-labelledby="home-two-about-title">
      <img
        className="home-two-about-us__illustration"
        src={assets.homeTwo.aboutIllustration}
        alt="Beauty clinic facial analysis illustration"
      />

      <div className="home-two-about-us__copy">
        <p className="home-two-about-us__eyebrow">About Us</p>
        <Title as="h2" id="home-two-about-title" className="home-two-about-us__title">
          We are the best beauty clinic
        </Title>
        <Description className="home-two-about-us__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus
          donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam
          quis enim. Varius tellus in suspendisse placerat.
        </Description>
        <Button className="home-two-about-us__button" href="#services">
          Learn More
        </Button>
      </div>
    </section>
  );
}
