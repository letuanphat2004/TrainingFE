import { assets } from "../../constants/assets";
import { Button } from "../common/Button";
import { SectionHeading } from "../common/SectionHeading";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.\n\nId dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.";

export function AboutUs() {
  return (
    <section id="about" aria-labelledby="about-us-title" className="relative isolate mx-auto flex w-[calc(100%-48px)] max-w-[1140px] flex-col px-6 pt-24 desktop:w-full desktop:max-w-none desktop:px-[150px] desktop:pt-[134.44px]">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <img
          src={assets.homeOne.servicesAboutBackground}
          alt=""
          className="absolute right-0 top-0 h-auto w-full max-w-[948.15px] -translate-y-[230px] desktop:left-[493px] desktop:right-auto desktop:h-[1028.89px] desktop:w-[948.15px] desktop:max-w-none desktop:-translate-y-[249px]"
        />
      </div>

      <div className="grid w-full grid-cols-1 gap-7 min-[801px]:grid-cols-2 min-[801px]:gap-x-16 desktop:grid-cols-[664px_476px] desktop:gap-0">
        <div className="order-2 min-[801px]:order-1 min-[801px]:col-start-1 min-[801px]:row-start-1">
          <SectionHeading
            className="desktop:text-left"
            eyebrow="About Us"
            eyebrowClassName="mx-auto w-[73px] desktop:mx-0"
            title="We are the best beauty clinic"
            titleId="about-us-title"
            titleClassName="mx-auto mt-3 w-full desktop:mx-0"
            description={description}
            descriptionClassName="mx-auto mt-[18px] max-w-[483px] whitespace-pre-line leading-[1.55] desktop:mx-0 desktop:leading-[1.5]"
          />
        </div>

        <div className="order-3 flex flex-wrap items-center justify-center gap-5 min-[801px]:col-start-1 min-[801px]:row-start-2 min-[801px]:flex-nowrap min-[801px]:gap-11 desktop:mt-[49.44px] desktop:justify-start">
          <Button className="h-[58.36px] w-[200px]" href="#contact">Learn More</Button>
          <a href="#video" className="inline-flex min-w-[213px] items-center gap-[13px] font-semibold tracking-[0.1em] text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
            <span className="flex h-[49px] w-[49px] items-center justify-center rounded-full bg-primary shadow-card">
              <span className="ml-1 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-white" />
            </span>
            Watch Video
          </a>
        </div>

        <div className="order-1 overflow-hidden rounded-[50px] shadow-[0_0_50px_25px_rgb(196_196_196_/_20%)] min-[801px]:order-2 min-[801px]:col-start-2 min-[801px]:row-span-2 min-[801px]:row-start-1 min-[801px]:self-center desktop:mt-[44.56px] desktop:h-[350px] desktop:w-[476px] desktop:self-start">
          <img src={assets.homeOne.aboutClinic} alt="Modern beauty clinic interior" className="aspect-[476/350] h-full w-full scale-[1.32] object-cover" />
        </div>
      </div>
    </section>
  );
}
