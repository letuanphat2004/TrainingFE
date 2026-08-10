import { assets } from "../../../constants/assets";

export function SliderPagination() {
    return (<div className="slider-pagination" aria-hidden="true">
      <img alt="" className="slider-pagination__image" src={assets.homeOne.slideButton}/>
    </div>);
}
