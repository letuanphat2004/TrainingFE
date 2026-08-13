import { assets } from "../../constants/assets";
import { Button } from "../common/Button";
import { SectionHeading } from "../common/SectionHeading";

const fieldClasses = "w-full rounded-[15px] border border-border bg-white text-base tracking-widest text-muted outline-none placeholder:text-placeholder focus:border-[#7B87D9] focus:ring-2 focus:ring-[#7B87D9]/20";
const inputClasses = `${fieldClasses} h-[61.58px] px-6 py-[17px]`;
const nameInputClasses = `${inputClasses} min-w-0 flex-1`;
const lastNameClasses = `${fieldClasses} h-[61.58px] min-w-0 flex-1 pl-[28.21px] pr-6 py-[17px]`;

export function ContactUs() {
  return (
    <section id="contact" aria-labelledby="contact-us-title" className="relative isolate mx-auto mt-24 w-full max-w-[1440px] px-6 sm:px-8 lg:px-6 xl:mt-36 xl:px-[calc((100%_-_1140px)_/_2)]">
      <img
        src={assets.homeOne.contactBackground}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 -z-10 h-auto w-full max-w-[1175.73px] -translate-y-24 xl:left-[-0.33px] xl:-translate-y-[207px]"
      />

      <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-[100px]">
        <img
          src={assets.homeOne.contactAnimation}
          alt=""
          aria-hidden="true"
          className="h-auto w-full max-w-[520px] justify-self-center object-contain lg:justify-self-start xl:mt-[159px]"
        />

        <div className="flex w-full max-w-[520px] flex-col justify-self-center lg:justify-self-end">
            <SectionHeading
              className="flex w-full max-w-[497px] flex-col items-center gap-3 lg:items-start lg:text-left xl:h-[169px]"
              eyebrow="Contact Us"
              eyebrowClassName="h-5 w-[90px] xl:ml-px"
              title="Send your inquiry to our expert team"
              titleId="contact-us-title"
              titleClassName="w-full max-w-[404px] xl:h-[97px]"
              description="Lorem ipsum dolor sit amet nulla turapis tellus."
              descriptionClassName="w-full max-w-[497px] leading-6 xl:h-7"
            />

            <form className="mt-11 flex w-full flex-col" onSubmit={(event) => event.preventDefault()}>
              <div className="flex w-full flex-col gap-[38.32px]">
                <div className="flex w-full gap-4 sm:gap-8 xl:gap-[35.58px]">
                  <input id="tailwind-first-name" name="firstName" aria-label="First name" placeholder="First name" className={nameInputClasses} />
                  <input id="tailwind-last-name" name="lastName" aria-label="Last name" placeholder="Last name" className={lastNameClasses} />
                </div>

                <input id="tailwind-email" name="email" type="email" aria-label="Email address" placeholder="Email address" className={inputClasses} />

                <input id="tailwind-subject" name="subject" aria-label="Subject message" placeholder="Subject message" className={inputClasses} />

                <textarea id="tailwind-inquiry" name="inquiry" aria-label="Your inquiry" placeholder="Your inquiry here" className={`${fieldClasses} h-[239.47px] px-6 pb-5 pt-[25.32px]`} />
              </div>

              <Button className="mt-[54.84px] h-[58px] w-full max-w-[248px] self-center lg:self-start xl:ml-px" type="submit">Send Message</Button>
            </form>
        </div>
      </div>
    </section>
  );
}
