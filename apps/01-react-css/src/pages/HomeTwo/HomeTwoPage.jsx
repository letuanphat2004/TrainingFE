import { assets } from "../../constants/assets.js";
import { MainSlider } from "../../components/home-two/MainSlider/index.js";
import { AboutUs } from "../../components/home-two/AboutUs/index.js";
import { MainServices } from "../../components/home-two/MainServices/index.js";
import { WhyChoosingUs } from "../../components/home-two/WhyChoosingUs/index.js";
import { TheBlog } from "../../components/home-two/TheBlog/index.js";
import { RequestCallServices } from "../../components/home-two/RequestCallServices/index.js";
import { SiteHeader } from "../../components/layout/SiteHeader/index.js";
import { SiteFooter } from "../../components/layout/SiteFooter/index.js";
import "./HomeTwoPage.css";

export function HomeTwoPage() {
  return (
    <main className="home-two-page" aria-label="Home 2">
      <MainSlider />
      <SiteHeader activePage="home" variant="home-two" logo={assets.brand.homeTwoLogo} />
      <AboutUs />
      <MainServices />
      <WhyChoosingUs />
      <TheBlog />
      <RequestCallServices />
      <SiteFooter className="home-two-footer" />
    </main>
  );
}
