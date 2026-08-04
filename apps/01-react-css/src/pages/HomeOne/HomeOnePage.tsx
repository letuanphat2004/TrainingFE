import { MainSlider } from "../../components/home-one/MainSlider";
import { CoreServices } from "../../components/home-one/CoreServices";
import { AboutUs } from "../../components/home-one/AboutUs";
import { ProfessionalTeams } from "../../components/home-one/ProfessionalTeams";
import { ContactUs } from "../../components/home-one/ContactUs";
import { Header } from "../../components/layout/Header";
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
    return (<main className="home-one-page" data-page="home-one" style={pageStyle}>
      <div className="home-one-page__background-layer" aria-hidden="true">
        <img className="home-one-page__background home-one-page__background--bubble-1" src={assets.homeOne.slideBackground} alt="" />
        <img className="home-one-page__background home-one-page__background--bubble-3" src={assets.homeOne.servicesAboutBackground} alt="" />
        <img className="home-one-page__background home-one-page__background--bubble-2" src={assets.homeOne.contactBackground} alt="" />
        <img className="home-one-page__background home-one-page__background--footer" src={assets.footer.background} alt="" />
      </div>
      <div className="home-one-page__content">
        <Header activePage="home" />
        <MainSlider />
        <CoreServices />
        <AboutUs />
        <ProfessionalTeams />
        <ContactUs />
        <Footer />
      </div>
    </main>);
}
