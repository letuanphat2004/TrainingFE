import { assets } from "../../../constants/assets.js";
import { Input } from "../../common/Input/index.js";
import { Description, Title } from "../../common/Typography/index.js";
import "./RequestCallServices.css";

export function RequestCallServices() {
  return (
    <section className="home-two-request-call" aria-labelledby="home-two-request-call-title">
      <img
        className="home-two-request-call__elements"
        src={assets.homeTwo.requestCallElements}
        alt=""
        aria-hidden="true"
      />

      <div className="home-two-request-call__copy">
        <Title as="h2" id="home-two-request-call-title" className="home-two-request-call__title">
          Request call services
        </Title>
        <Description className="home-two-request-call__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href="#contact">Contact Us.</a>
        </Description>
      </div>

      <form className="home-two-request-call__form" onSubmit={(event) => event.preventDefault()}>
        <div className="home-two-request-call__field">
          <Input type="tel" aria-label="Phone number" placeholder="Insert your phone number here ..." />
          <button className="home-two-request-call__submit" type="submit" aria-label="Request a call">
            <img src={assets.homeTwo.phoneVolume} alt="" aria-hidden="true" />
          </button>
        </div>
        <Description className="home-two-request-call__note">Toll free for our coverage areas.</Description>
      </form>
    </section>
  );
}
