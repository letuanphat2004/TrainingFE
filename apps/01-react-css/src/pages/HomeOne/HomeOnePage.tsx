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
import { useLayoutEffect, useRef } from "react";
const BUBBLE_3_OFFSET_Y = -350;
const BUBBLE_2_OFFSET_Y = 0;
const FOOTER_OFFSET_Y = 100;

export function HomeOnePage() {
    const pageRef = useRef<HTMLElement>(null);
    const pageStyle: CssVariableStyle = {
        "--page-reference-width": `${homeOneFrames.page.width}px`,
        "--page-reference-height": `${homeOneFrames.page.height}px`,
    };
useLayoutEffect(() => {
        const page = pageRef.current;

        if (!page) {
            return;
        }

        const about = page.querySelector<HTMLElement>(".about-us");
        const contact = page.querySelector<HTMLElement>(".contact-us");
        const footer = page.querySelector<HTMLElement>(".site-footer");

        if (!about || !contact || !footer) {
            return;
        }

        let animationFrame = 0;

        const updateBackgroundAnchors = () => {
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(() => {
                const pageRect = page.getBoundingClientRect();
                const aboutRect = about.getBoundingClientRect();
                const contactRect = contact.getBoundingClientRect();
                const footerRect = footer.getBoundingClientRect();
                const referenceScale = page.clientWidth / homeOneFrames.page.width;
                const bubble3Top = aboutRect.top - pageRect.top + BUBBLE_3_OFFSET_Y * referenceScale;
                const bubble2Top = contactRect.top - pageRect.top + BUBBLE_2_OFFSET_Y * referenceScale;
                const footerRectTop = footerRect.top - pageRect.top + FOOTER_OFFSET_Y * referenceScale;

                page.style.setProperty("--background-reference-scale", `${referenceScale}`);
                page.style.setProperty("--bubble-3-anchor-top", `${bubble3Top}px`);
                page.style.setProperty("--bubble-2-anchor-top", `${bubble2Top}px`);
                page.style.setProperty("--footer-background-anchor-top", `${footerRectTop}px`);
                page.style.setProperty("--footer-background-rendered-height", `${footerRect.height}px`);
            });
        };

        const resizeObserver = new ResizeObserver(updateBackgroundAnchors);

        resizeObserver.observe(page);
        resizeObserver.observe(about);
        resizeObserver.observe(contact);
        resizeObserver.observe(footer);
        window.addEventListener("resize", updateBackgroundAnchors);
        updateBackgroundAnchors();

        return () => {
            cancelAnimationFrame(animationFrame);
            resizeObserver.disconnect();
            window.removeEventListener("resize", updateBackgroundAnchors);
        };
    }, []);

    return (<main ref={pageRef} className="home-one-page" data-page="home-one" style={pageStyle}>
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
