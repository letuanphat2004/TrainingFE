import { assets } from "../../../constants/assets";
import { HeroCopy } from "./HeroCopy";
import { SliderPagination } from "./SliderPagination";
import "./MainSlider.css";
export function MainSlider() {
    return (<section className="main-slider page-component" id="home" aria-labelledby="home-title">
      <img alt="" aria-hidden="true" className="main-slider__background" src={assets.homeOne.slideBackground}/>
      <HeroCopy />
      <img alt="" aria-hidden="true" className="main-slider__frame-one" src={assets.homeOne.frameOne}/>
      <SliderPagination />
    </section>);
}
