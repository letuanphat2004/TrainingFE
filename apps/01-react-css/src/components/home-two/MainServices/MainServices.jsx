import { assets } from "../../../constants/assets.js";
import { SectionHeading } from "../../common/SectionHeading/index.js";
import { ServiceCard } from "../../common/ServiceCard/index.js";
import "./MainServices.css";

const services = [
  {
    asset: assets.homeTwo.serviceProduct,
    className: "home-two-main-services__card--consultation",
    title: "Beauty consultation",
  },
  {
    asset: assets.homeTwo.serviceSkinTreatment,
    className: "home-two-main-services__card--skin-treatment",
    title: "Skin treatments",
  },
  {
    asset: assets.homeTwo.serviceConsultation,
    className: "home-two-main-services__card--product",
    title: "Beauty product",
  },
];

const cardDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing.";

export function MainServices() {
  return (
    <section className="home-two-main-services" id="services" aria-labelledby="home-two-services-title">
      <SectionHeading
        className="home-two-main-services__heading"
        eyebrow="Main Services"
        title="Our focus services"
        titleId="home-two-services-title"
        description="Lorem ipsum dolor sit amet."
      />

      <img
        className="home-two-main-services__wave"
        src={assets.homeTwo.servicesWave}
        alt=""
        aria-hidden="true"
      />

      <div className="home-two-main-services__cards">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
            description={cardDescription}
            action={{ href: "#contact", label: "Learn more" }}
          />
        ))}
      </div>
    </section>
  );
}
