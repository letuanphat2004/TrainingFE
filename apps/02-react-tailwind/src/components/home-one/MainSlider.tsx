import { assets } from "../../constants/assets";
import { Button } from "../common/Button";

export function MainSlider() {
  return (
    <section id="home" aria-labelledby="home-title" className="relative z-10 flex min-h-0 w-full flex-col px-6 pb-10 pt-12 min-[721px]:min-h-[620px] min-[721px]:px-12 min-[721px]:pb-14 min-[721px]:pt-[72px] desktop:min-h-[701px] desktop:px-[150px] desktop:pb-0 desktop:pt-[159px]">
      <div className="flex w-full flex-col items-center gap-8 min-[721px]:flex-row min-[721px]:items-center desktop:items-start desktop:gap-0">
        <div className="flex min-w-0 flex-1 flex-col items-start desktop:flex-[0_0_535px] desktop:pl-[39px] desktop:pt-[53px]">
          <h1 id="home-title" className="m-0 max-w-[430px] text-[clamp(34px,10vw,42px)] font-semibold leading-[1.25] text-primary tablet:text-[clamp(36px,4vw,48px)] desktop:w-[430px] desktop:text-5xl">
            Clinic & beauty consultant
          </h1>
          <p className="mt-5 w-full max-w-[474px] text-base font-medium leading-[1.45] tracking-[0.1em] text-primary desktop:mt-[14px] desktop:w-[474px] desktop:leading-[1.2]">
            It is a long established fact that a reader will be by the readable content of a page.
          </p>
          <Button className="mt-7 h-[58.36px] w-[200px] desktop:mt-[18px]" href="#services">More Details</Button>
        </div>

        <div className="flex min-w-0 flex-1 justify-center desktop:flex-[0_1_601.5px] desktop:justify-start">
          <img src={assets.homeOne.frameOne} alt="" aria-hidden="true" className="h-auto w-full max-w-[601.5px] object-contain desktop:h-[397.5px] desktop:w-[601.5px]" />
        </div>
      </div>

      <div className="mt-10 flex self-center desktop:mt-[135px]">
        <img src={assets.homeOne.slideButton} alt="" aria-hidden="true" className="h-[8.15px] w-[71px]" />
      </div>
    </section>
  );
}
