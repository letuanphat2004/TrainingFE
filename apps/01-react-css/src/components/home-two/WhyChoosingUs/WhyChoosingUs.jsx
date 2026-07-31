import { assets } from "../../../constants/assets.js";
import { Statistic } from "../../common/Statistic/index.js";
import { Description, Title } from "../../common/Typography/index.js";
import "./WhyChoosingUs.css";

const statistics = [
  { icon: assets.homeTwo.statisticHandshake, label: "trusted clinic", value: "100%" },
  { icon: assets.homeTwo.statisticBrotherhood, label: "customer love", value: "99%" },
  { icon: assets.homeTwo.statisticEarth, label: "asian branch", value: "75+" },
  { icon: assets.homeTwo.statisticDoctor, label: "licensed worker", value: "1.200+" },
];

export function WhyChoosingUs() {
  return (
    <section className="home-two-why" aria-labelledby="home-two-why-title">
      <img
        className="home-two-why__background"
        src={assets.homeTwo.whyBackground}
        alt=""
        aria-hidden="true"
      />
      <div
        className="home-two-why__overlay"
        style={{ "--why-background-mask": `url("${assets.homeTwo.whyBackground}")` }}
        aria-hidden="true"
      />

      <div className="home-two-why__copy">
        <Title as="h2" id="home-two-why-title" className="home-two-why__title">
          Why choosing us?
        </Title>
        <Description className="home-two-why__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
          luctus venenatis.
        </Description>
      </div>

      <div className="home-two-why__statistics">
        {statistics.map((statistic) => (
          <Statistic key={statistic.label} {...statistic} />
        ))}
      </div>
    </section>
  );
}
