import { Button } from "../../common/Button";
import { SectionHeading } from "../../common/SectionHeading";
import { WatchVideo } from "../../common/WatchVideo";
import { assets } from "../../../constants/assets";
import "./AboutUs.css";
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.\n\nId dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.";
export function AboutUs() {
    return (<section className="about-us" id="about" aria-labelledby="about-us-title">
      <SectionHeading className="about-us__heading" eyebrow="About Us" title="We are the best beauty clinic" titleId="about-us-title" description={description}/>
      <Button className="about-us__button" href="#contact">
        Learn More
      </Button>
      <WatchVideo className="about-us__watch-video"/>
      <div className="about-us__image-frame">
        <img className="about-us__image" src={assets.homeOne.aboutClinic} alt="Modern beauty clinic interior"/>
      </div>
    </section>);
}
