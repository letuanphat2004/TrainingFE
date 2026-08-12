import { assets } from "../../constants/assets";
import { Button } from "../common/Button";

export function MainSlider() {
  return (
    <section id="home" aria-labelledby="home-title" className="w-full">
      <div className="relative isolate z-10 flex min-h-0 w-full flex-col px-6 pb-10 pt-12 md:min-h-[620px] md:px-12 md:pb-14 md:pt-[72px] xl:min-h-[701px] xl:px-[calc((100%_-_1140px)_/_2)] xl:pb-0 xl:pt-[159px]">
        <img
          src={assets.homeOne.slideBackground}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 -z-10 h-auto w-full max-w-[1266.42px] -translate-y-[79px] -scale-x-100 sm:-translate-y-[104px] xl:h-[743px] xl:w-[1266.42px] xl:max-w-none"
        />

        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-center xl:items-start xl:gap-0">
          <div className="flex min-w-0 flex-1 flex-col items-start xl:flex-[0_0_535px] xl:pl-[39px] xl:pt-[53px]">
            <h1 id="home-title" className="m-0 max-w-[430px] text-[clamp(34px,10vw,42px)] font-semibold leading-tight tracking-normal text-primary md:text-[clamp(36px,4vw,48px)] xl:h-[128px] xl:w-[430px] xl:max-w-none xl:text-[48px]">
              Clinic & beauty consultant
            </h1>
            <p className="mt-5 w-full max-w-[474px] text-base font-medium leading-[1.45] tracking-widest text-primary xl:mt-0 xl:h-[54px] xl:w-[474px] xl:leading-6">
              It is a long established fact that a reader will be by the readable content of a page.
            </p>
            <Button className="mt-7 h-[58.36px] w-[200px]" href="#services">More Details</Button>
          </div>

          <div className="flex min-w-0 flex-1 justify-center xl:flex-[0_1_601.5px] xl:justify-start">
            <img src={assets.homeOne.frameOne} alt="" aria-hidden="true" className="h-auto w-full max-w-[601.5px] object-contain xl:h-[397.5px] xl:w-[601.5px]" />
          </div>
        </div>

        <div className="mt-10 flex self-center xl:mt-auto">
          <img src={assets.homeOne.slideButton} alt="" aria-hidden="true" className="h-[8.15px] w-[71px]" />
        </div>
      </div>
    </section>
  );
}
