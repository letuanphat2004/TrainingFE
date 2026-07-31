import { assets } from "../../../constants/assets.js";
import { Button } from "../../common/Button/index.js";
import { Description, Title } from "../../common/Typography/index.js";
import { WatchVideo } from "../../common/WatchVideo/index.js";
import "./MainSlider.css";

export function MainSlider() {
  return (
    <section className="home-two-main-slider" id="home" aria-labelledby="home-two-slider-title">
      <img
        className="home-two-main-slider__background"
        src={assets.homeTwo.sliderBackground}
        alt=""
        aria-hidden="true"
      />

      <div className="home-two-main-slider__copy">
        <Title as="h1" id="home-two-slider-title" className="home-two-main-slider__title">
          Your beauty center place
        </Title>
        <Description className="home-two-main-slider__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque
          arcu fusce et magna consequat neque vitae lobortis.
        </Description>
        <Button className="home-two-main-slider__details" href="#about">
          More Details
        </Button>
      </div>

      <WatchVideo
        className="home-two-main-slider__video"
        label="Tour Video"
        playImage={assets.homeTwo.playButton}
      />
    </section>
  );
}
