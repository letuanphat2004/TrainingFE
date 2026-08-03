import { HomeHero } from "../../components/home-one/HomeHero";
import { CoreServices } from "../../components/home-one/CoreServices";
import { AboutUs } from "../../components/home-one/AboutUs";
import { ProfessionalTeams } from "../../components/home-one/ProfessionalTeams";
import { ContactUs } from "../../components/home-one/ContactUs";
import { Footer } from "../../components/layout/Footer";
import { assets } from "../../constants/assets";
import { homeOneFrames } from "./homeOne.frames";
import type { CssVariableStyle } from "../../types/ui";
import "./HomeOnePage.css";
export function HomeOnePage() {
    const pageStyle: CssVariableStyle = {
        "--page-reference-width": `${homeOneFrames.page.width}px`,
        "--page-reference-height": `${homeOneFrames.page.height}px`,
    };
    const footerStageStyle: CssVariableStyle = {
        "--footer-stage-background": `url("${assets.footer.background}")`,
    };
    return (<main className="home-one-page" data-page="home-one" style={pageStyle}>
      <HomeHero />
      <div className="home-one-page__content-stage">
        <img className="home-one-page__services-about-background" src={assets.homeOne.servicesAboutBackground} alt="" aria-hidden="true" />
        <CoreServices />
        <AboutUs />
        <ProfessionalTeams />
        <img className="home-one-page__team-contact-background" src={assets.homeOne.contactBackground} alt="" aria-hidden="true" />
        <ContactUs />
      </div>
      <div className="home-one-page__footer-stage" style={footerStageStyle}>
        <Footer />
      </div>
    </main>);
}
