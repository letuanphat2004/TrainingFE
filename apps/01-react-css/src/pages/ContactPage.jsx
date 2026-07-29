import { AssetImage } from "../components/common/AssetImage.jsx";
import { ContactForm } from "../components/common/ContactForm.jsx";
import { SectionHeading } from "../components/common/SectionHeading.jsx";
import { Footer } from "../components/layout/Footer.jsx";
import { Header } from "../components/layout/Header.jsx";

const contacts = [
  ["●", "Address", "101 Baker Street, NY"],
  ["☎", "Phone", "+896 120 5889"],
  ["✉", "Mail", "mail@company.com"],
];

export function ContactPage() {
  return (
    <main className="page page--contact">
      <Header />
      <section className="section contact-main">
        <div className="container">
          <div className="contact-title-row">
            <SectionHeading
              eyebrow="Contact Us"
              title={
                <>
                  Contact service for our
                  <br />
                  customers
                </>
              }
              centered={false}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </p>
          </div>
          <div className="split-layout split-layout--contact">
            <AssetImage
              fileName="Contact Animations-1.png"
              alt="Customer service specialist"
            />
            <ContactForm />
          </div>
        </div>
      </section>
      <div
        className="contact-map"
        role="img"
        aria-label="Map showing Beautice clinic location"
      />
      <section className="section contact-cards">
        <div className="container">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Get direct handling by us"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
          />
          <div className="contact-card-grid">
            {contacts.map(([symbol, label, value], index) => (
              <article
                className={index === 1 ? "is-featured" : ""}
                key={label}
              >
                <span>{symbol}</span>
                <p className="eyebrow">{label}</p>
                <h3>{value}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
