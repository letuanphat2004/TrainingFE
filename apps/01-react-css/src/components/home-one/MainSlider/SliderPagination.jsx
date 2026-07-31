const slides = ["Previous slide", "Current slide", "Next slide"];
export function SliderPagination() {
    return (<div className="slider-pagination" aria-label="Slider navigation">
      {slides.map((label, index) => (<button aria-current={index === 1 ? "true" : undefined} aria-label={label} className="slider-pagination__indicator" key={label} type="button"/>))}
    </div>);
}
