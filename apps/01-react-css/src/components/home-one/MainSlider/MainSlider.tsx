import { assets } from "../../../constants/assets";
import { HeroCopy } from "./HeroCopy";
import { SliderPagination } from "./SliderPagination";
import "./MainSlider.css";

export function MainSlider() {
  return (
    <section className="main-slider" id="home" aria-labelledby="home-title">
      <div className="main-slider__content">
        <HeroCopy />
        <div className="main-slider__illustration">
          <img
            alt=""
            aria-hidden="true"
            className="main-slider__frame-one"
            src={assets.homeOne.frameOne}
          />
        </div>
      </div>
      <div className="main-slider__pagination-area">
        <SliderPagination />
      </div>
    </section>
  );
}
