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
    <section id="services" aria-labelledby="services-title" className="relative z-10 mx-auto flex w-[calc(100%-48px)] max-w-[1140px] flex-col pt-24 desktop:w-full desktop:max-w-none desktop:px-[150px] desktop:pt-[131px]">
      <SectionHeading
        className="mx-auto flex min-h-[192px] w-full max-w-[1140px] flex-col items-center"
        eyebrow="Main Services"
        eyebrowClassName="w-full max-w-[113px]"
        title="Learn services to focus on your beauty"
        titleId="services-title"
        titleClassName="mb-5 mt-0.5 min-h-[97px] w-full max-w-[430px] desktop:mb-0 desktop:mt-3"
        description="Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        descriptionClassName="mt-4 min-h-[51px] w-full max-w-[848px] leading-[1.32]"
      />

      <div className="mx-auto mt-16 flex w-full max-w-[1140px] flex-wrap justify-center gap-8 desktop:mt-[82px] desktop:gap-[55.5px]">
        {services.map((service) => (
          <article key={service.id} className="flex min-h-[458px] w-full max-w-[343px] flex-[0_1_343px] flex-col items-center overflow-hidden rounded-[42px] bg-white px-6 pb-9 pt-[58px] text-center shadow-card min-[1101px]:max-w-none min-[1101px]:flex-1 desktop:h-[458px] desktop:max-w-[343px] desktop:flex-[0_0_343px] desktop:pb-0 desktop:pt-[59px]">
            <img src={service.asset} alt="" aria-hidden="true" className="h-[166px] w-[166px] object-contain" />
            <h3 className="mt-12 text-lg font-semibold leading-[1.5] text-primary desktop:mt-[57px] desktop:w-[295px]">{service.title}</h3>
            <p className="mt-[18px] max-w-[269px] text-sm leading-[1.5] tracking-[0.1em] text-muted desktop:mt-[15px] desktop:w-[269px]">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
