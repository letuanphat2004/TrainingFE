import { assets } from "../../constants/assets";
import { Button } from "../common/Button";
import { SectionHeading } from "../common/SectionHeading";

const fieldClasses = "h-[61.58px] w-full rounded-[15px] border border-border bg-white px-6 text-base tracking-[0.1em] text-muted outline-none placeholder:text-placeholder focus:border-[#7B87D9] focus:ring-2 focus:ring-[#7B87D9]/20";

export function ContactUs() {
  return (
    <section id="contact" aria-labelledby="contact-us-title" className="mx-auto my-24 w-[calc(100%-48px)] max-w-[1140px] desktop:my-0 desktop:w-full desktop:max-w-none">
      <div className="relative isolate w-full">
        <img
          src={assets.homeOne.contactBackground}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 -z-10 h-auto w-full max-w-[1175.73px] desktop:left-[-0.33px] desktop:h-[929px] desktop:w-[1175.73px] desktop:max-w-none desktop:translate-y-[4.76px]"
        />

        <div className="grid w-full grid-cols-1 gap-y-7 min-[801px]:grid-cols-2 min-[801px]:grid-rows-[auto_auto] min-[801px]:items-center min-[801px]:gap-x-16 min-[801px]:gap-y-8 desktop:min-h-[1072px] desktop:grid-cols-[520px_520px] desktop:grid-rows-[169px_652px] desktop:items-start desktop:gap-x-[100px] desktop:gap-y-11 desktop:px-[150px] desktop:pt-[235px]">
          <img src={assets.homeOne.contactAnimation} alt="" aria-hidden="true" className="h-auto w-full max-w-[520px] justify-self-center object-contain min-[801px]:col-start-1 min-[801px]:row-span-2 min-[801px]:row-start-1 desktop:mt-[159px] desktop:h-[614px] desktop:w-[520px]" />

      <SectionHeading
        className="w-full text-center min-[801px]:col-start-2 min-[801px]:row-start-1 desktop:h-[169px] desktop:w-[497px] desktop:text-left"
        eyebrow="Contact Us"
        eyebrowClassName="mx-auto w-[90px] desktop:mx-0 desktop:ml-px"
        title="Send your inquiry to our expert team"
        titleId="contact-us-title"
        titleClassName="mx-auto mt-3 max-w-[404px] desktop:mx-0"
        description="Lorem ipsum dolor sit amet nulla turapis tellus."
        descriptionClassName="mx-auto mt-[18px] max-w-[497px] leading-6 desktop:mx-0 desktop:leading-none"
      />

          <form className="grid w-full grid-cols-1 gap-5 min-[481px]:grid-cols-2 min-[801px]:col-start-2 min-[801px]:row-start-2 desktop:h-[652px] desktop:w-[520px] desktop:grid-cols-[242.21px_242.21px] desktop:grid-rows-[61.58px_61.58px_61.58px_239.47px_58px] desktop:gap-x-[35.58px] desktop:gap-y-[38.31px]" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="tailwind-first-name">First name</label>
          <input id="tailwind-first-name" name="firstName" placeholder="First name" className={fieldClasses} />
          <label className="sr-only" htmlFor="tailwind-last-name">Last name</label>
          <input id="tailwind-last-name" name="lastName" placeholder="Last name" className={fieldClasses} />
          <label className="sr-only" htmlFor="tailwind-email">Email address</label>
          <input id="tailwind-email" name="email" type="email" placeholder="Email address" className={`${fieldClasses} min-[481px]:col-span-2`} />
          <label className="sr-only" htmlFor="tailwind-subject">Subject message</label>
          <input id="tailwind-subject" name="subject" placeholder="Subject message" className={`${fieldClasses} min-[481px]:col-span-2`} />
          <label className="sr-only" htmlFor="tailwind-inquiry">Your inquiry</label>
          <textarea id="tailwind-inquiry" name="inquiry" placeholder="Your inquiry here" className={`${fieldClasses} h-[239.47px] min-h-[180px] resize-y py-5 min-[481px]:col-span-2`} />
          <Button className="h-[58px] w-full max-w-[248px] justify-self-center min-[481px]:col-span-2 desktop:justify-self-start" type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
