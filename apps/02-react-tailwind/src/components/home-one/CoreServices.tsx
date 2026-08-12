import { assets } from "../../constants/assets";
import { SectionHeading } from "../common/SectionHeading";

const services = [
  {
    id: "consultation",
    asset: assets.homeOne.animationOne,
    title: "Beauty consultation",
    description: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
  },
  {
    id: "treatments",
    asset: assets.homeOne.animationTwo,
    title: "Skin treatments",
    description: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
  },
  {
    id: "product",
    asset: assets.homeOne.animationThree,
    title: "Beauty product",
    description: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
  },
];
export function CoreServices() {
  return (
    <section id="services" aria-labelledby="services-title" className="z-10 mx-auto mt-24 flex w-full max-w-[1440px] flex-col px-6 sm:px-12 xl:mt-[131px] xl:px-[calc((100%_-_1140px)_/_2)]">
      <SectionHeading
        className="mx-auto flex w-full max-w-[848px] flex-col items-center gap-3 xl:h-[192px] xl:w-[848px] xl:max-w-none"
        eyebrow="Main Services"
        eyebrowClassName="h-5 w-[113px]"
        title={"Learn services to focus\non your beauty"}
        titleId="services-title"
        titleClassName="w-full max-w-[732px] whitespace-pre-line leading-tight xl:h-[97px] xl:w-[732px] xl:max-w-none"
        description="Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        descriptionClassName="w-full max-w-[848px] leading-6 xl:h-[51px]"
      />

      <div className="mx-auto mt-16 flex w-full max-w-[1140px] flex-col items-center gap-8 md:flex-row md:flex-wrap md:items-stretch md:justify-center xl:mt-[82px] xl:flex-nowrap xl:justify-between xl:gap-0">
        {services.map((service) => (
          <article key={service.id} className="flex min-h-[458px] w-full max-w-[343px] flex-col items-center overflow-hidden rounded-[42px] bg-white px-6 pb-9 pt-[59px] text-center shadow-card xl:h-[458px] xl:flex-[0_0_343px] xl:pb-0">
            <img src={service.asset} alt="" aria-hidden="true" className="h-[166px] w-[166px] object-contain" />
            <h3 className="m-0 mt-[58px] h-[37px] w-full max-w-[263px] text-center text-lg font-semibold leading-tight text-primary">{service.title}</h3>
            <p className="m-0 mt-1.5 h-20 w-full max-w-[274px] text-sm font-normal leading-[1.5] tracking-widest text-muted">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
