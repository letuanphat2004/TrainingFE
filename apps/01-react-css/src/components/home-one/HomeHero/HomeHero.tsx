import { Header } from "../../layout/Header";
import { MainSlider } from "../MainSlider";
import { assets } from "../../../constants/assets";
import type { CSSProperties } from "react";
import "./HomeHero.css";

/**
 * Owns the hero visual layer shared by the reusable Header and MainSlider.
 * Bubble 1 belongs here because it sits behind both components in the design.
 */
export function HomeHero() {
  return (
    <section
      className="home-hero page-component"
      aria-label="Beautice introduction"
      style={{ "--home-hero-bubble": `url(${assets.homeOne.slideBackground})` } as CSSProperties}
    >
      <Header activePage="home" />
      <MainSlider />
    </section>
  );
}
