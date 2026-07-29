import { useState } from "react";
import { Link } from "react-router-dom";
import { AssetImage } from "../components/common/AssetImage";
import { PlayButton } from "../components/common/PlayButton";
import { SectionHeading } from "../components/common/SectionHeading";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { asset } from "../lib/assets";
import type { BackgroundImageStyle } from "../types";

const serviceImages = [
  "unsplash_5TJ0Hoy5FLY.png",
  "unsplash_ZOT2Mewzmh8.png",
  "unsplash_gzfIO69Q6eM.png",
  "unsplash_pTrhfmj2jDA.png",
] as const;

const serviceRows = [
  ["Animation1.png", "Beauty Consultation", "We services beauty consultation"],
  ["Animation2.png", "Skin Treatments", "Skin care and treatment by expert"],
  ["Animation3.png", "Beauty Product", "We present quality beauty products"],
] as const;

const questions = [
  "Is beauty consultation handled thoroughly?",
  "Can I be beautiful in an instant time?",
  "Are there any side effects to the treatment methods or treatments at this clinic?",
  "Do professionals have accreditation in their respective fields?",
] as const;

const treatmentsVideoStyle: BackgroundImageStyle = {
  "--background-image": `url('${asset("unsplash_NPjNtTExSJ4.png")}')`,
};

function ServicesAccordion() {
  const [openItems, setOpenItems] = useState<Set<number>>(
    () => new Set([0]),
  );

  function toggleItem(index: number) {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div className="accordion" data-accordion>
      {questions.map((question, index) => {
        const isOpen = openItems.has(index);
        return (
          <article
            className={`accordion__item ${isOpen ? "is-open" : ""}`}
            key={question}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggleItem(index)}
            >
              <span>{question}</span>
              <b>⌄</b>
            </button>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis.
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function ServicesPage() {
  return (
    <main className="page page--services">
      <Header />
      <section className="section services-gallery">
        <div className="container">
          <SectionHeading
            eyebrow="Our Services"
            title="We focus on your beauty"
            description="Lorem ipsum dolor sit amet."
          />
          <div className="services-mosaic">
            {serviceImages.map((image) => (
              <AssetImage
                fileName={image}
                alt="Beautice service"
                key={image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section service-details">
        <div className="container">
          {serviceRows.map(([image, eyebrow, title], index) => (
            <article
              className={`service-detail ${index % 2 ? "service-detail--reverse" : ""}`}
              key={title}
            >
              <AssetImage fileName={image} alt={title} />
              <div>
                <SectionHeading
                  eyebrow={eyebrow}
                  title={title}
                  centered={false}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                  quam suscipit purus donec amet.
                </p>
                <Link className="appointment-link" to="/contact">
                  Make an Appointment&nbsp; »
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="wide-video wide-video--interactive image-overlay"
        style={treatmentsVideoStyle}
      >
        <div className="container wide-video__row">
          <div>
            <h2>
              Best responsibility and service
              <br />
              for our customers
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <PlayButton label="Treatments Videos" />
        </div>
      </section>

      <section className="section faq-section">
        <div className="container container--narrow">
          <SectionHeading title="Services FAQ’s" eyebrow="" />
          <ServicesAccordion />
        </div>
      </section>
      <Footer />
    </main>
  );
}
