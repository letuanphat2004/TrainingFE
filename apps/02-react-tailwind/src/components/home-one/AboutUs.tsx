import { assets } from "../../constants/assets";
import { Button } from "../common/Button";
import { SectionHeading } from "../common/SectionHeading";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.\n\nId dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.";

export function AboutUs() {
  return (
    <section id="about" aria-labelledby="about-us-title" className="w-full">
      <div className="relative isolate z-0 mx-auto flex w-full max-w-[1440px] flex-col px-6 pt-24 sm:px-8 lg:px-6 xl:px-[calc((100%_-_1140px)_/_2)] xl:pt-[134.44px]">
        <img
          src={assets.homeOne.servicesAboutBackground}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 -z-10 w-full max-w-[948.15px] -translate-y-[21.382%] xl:left-[493px] xl:right-auto xl:h-[1028.89px]"
        />

        <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-8 xl:grid-cols-[664px_476px] xl:gap-0">
          <div className="flex min-w-0 flex-col items-center lg:items-start">
            <SectionHeading
              className="flex w-full max-w-[664px] flex-col items-center gap-3 lg:items-start lg:text-left xl:h-[292px]"
              eyebrow="About Us"
              eyebrowClassName="h-5 w-[73px] lg:mx-0 xl:ml-px"
              title="We are the best beauty clinic"
              titleId="about-us-title"
              titleClassName="w-full max-w-[664px] xl:h-[52px]"
              description={description}
              descriptionClassName="w-full max-w-[483px] whitespace-pre-line leading-[1.5] xl:h-[196px]"
            />

            <div className="mt-12 flex w-full flex-wrap items-start justify-center gap-5 lg:justify-start xl:mt-[49px] xl:gap-11">
              <Button className="h-[58.36px] w-[200px] shrink-0" href="#contact">Learn More</Button>
              <a href="#video" className="mt-1 block h-[49px] w-[213px] shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary xl:mt-[5px]">
                <img src={assets.homeOne.playButton} alt="Watch Video" className="h-[49px] w-[213px] object-contain" />
              </a>
            </div>
          </div>

          <div className="aspect-[476/350] w-full max-w-[476px] self-start justify-self-center overflow-hidden rounded-[50px] shadow-[0_0_50px_25px_rgb(196_196_196_/_20%)] lg:mt-12 lg:justify-self-end xl:mt-[44.56px] xl:h-[350px] xl:w-[476px]">
            <img src={assets.homeOne.aboutClinic} alt="Modern beauty clinic interior" className="h-full w-full scale-[1.32] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
