import { Button } from "../../common/Button";
import { Description, Title } from "../../common/Typography";
export function HeroCopy() {
    return (<div className="hero-copy">
      <Title as="h1" className="hero-copy__title" id="home-title">
        Clinic &amp; beauty consultant
      </Title>
      <Description className="hero-copy__description">
        It is a long established fact that a reader will be by the readable content of a page.
      </Description>
      <Button className="hero-copy__button" href="#about">
        More Details
      </Button>
    </div>);
}
