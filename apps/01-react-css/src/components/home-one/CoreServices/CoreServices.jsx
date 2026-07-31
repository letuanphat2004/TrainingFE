import { SectionHeading } from "../../common/SectionHeading";
import { ServiceCard } from "../../common/ServiceCard";
import { assets } from "../../../constants/assets.js";
import "./CoreServices.css";
const services = [
    {
        id: "consultation",
        left: 0,
        asset: assets.homeOne.animationOne,
        title: "Beauty consultation",
        description: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
    },
    {
        id: "treatments",
        left: 399,
        asset: assets.homeOne.animationTwo,
        title: "Skin treatments",
        description: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
    },
    {
        id: "product",
        left: 797,
        asset: assets.homeOne.animationThree,
        title: "Beauty product",
        description: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
    },
];
export function CoreServices() {
    return (<section className="core-services page-component" id="services" aria-labelledby="services-title">
      <SectionHeading className="core-services__heading" description="Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis." eyebrow="Main Services" title="Learn services to focus on your beauty" titleId="services-title"/>
      <div className="core-services__cards">
        {services.map((service) => (<ServiceCard className={`core-services__card core-services__card--${service.id}`} key={service.id} style={{ "--service-card-left": `${service.left}px` }} {...service}/>))}
      </div>
    </section>);
}
