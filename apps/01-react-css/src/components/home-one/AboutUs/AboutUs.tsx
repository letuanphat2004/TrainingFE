import { Button } from "../../common/Button";
import { SectionHeading } from "../../common/SectionHeading";
import { WatchVideo } from "../../common/WatchVideo";
import { assets } from "../../../constants/assets";
import "./AboutUs.css";
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.\n\nId dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.";
export function AboutUs() {
  return (
    <section className="about-us" id="about" aria-labelledby="about-us-title">
      <img className="about-us__responsive-background" src={assets.homeOne.servicesAboutBackground} alt="" aria-hidden="true" />
      <div className="about-us__layout">
        <div className="about-us__content">
          <SectionHeading
            className="about-us__heading"
            description={description}
            eyebrow="About Us"
            title="We are the best beauty clinic"
            titleId="about-us-title"
          />
        </div>
        <div className="about-us__actions">
          <Button className="about-us__button" href="#contact">
            Learn More
          </Button>
          <WatchVideo className="about-us__watch-video" />
        </div>
        <div className="about-us__image-frame">
          <img className="about-us__image" src={assets.homeOne.aboutClinic} alt="Modern beauty clinic interior" />
        </div>
      </div>
    </section>
  );
}
