import { assets } from "../../../constants/assets";
import { Header } from "../../layout/Header";
import { MainSlider } from "../MainSlider";
import "./HomeHero.css";

/**
 * Owns the visual background shared by the site header and Home 1 hero.
 * Header remains a reusable layout component; MainSlider owns only slider content.
 */
export function HomeHero() {
  return (
    <section className="home-hero page-component" aria-label="Beautice introduction">
      <img
        alt=""
        aria-hidden="true"
        className="home-hero__background"
        src={assets.homeOne.slideBackground}
      />
      <Header activePage="home" />
      <MainSlider />
    </section>
  );
}
