import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./styles/index.css";
import {
  assistants,
  blogPosts,
  galleryImages,
  navigation,
  professionals,
  services,
} from "./data.js";

const asset = (fileName) => `/assets/${encodeURIComponent(fileName)}`;
const app = document.querySelector("#app");

function icon(name, label = "") {
  return `<img src="${asset(name)}" alt="${label}" />`;
}

function header({ dark = false, overlay = false } = {}) {
  const logo = dark ? "Site Header.png" : "Site Header-1.png";
  return `
    <header class="site-header ${dark ? "site-header--dark" : ""} ${overlay ? "site-header--overlay" : ""}">
      <div class="container site-header__inner">
        <a class="brand-link" href="/" data-link aria-label="Beautice home">
          ${icon(logo, "Beautice")}
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <nav class="site-nav" aria-label="Primary navigation">
          ${navigation
            .map(
              (item) => `
                <a href="${item.path}" data-link>
                  ${item.label}${item.homeMenu ? '<span aria-hidden="true">+</span>' : ""}
                </a>
              `,
            )
            .join("")}
          <a class="button button--small" href="/contact" data-link>Contact</a>
        </nav>
      </div>
    </header>
  `;
}

function socialLinks({ dark = false } = {}) {
  const items = [
    ["Twitter.png", "Twitter"],
    ["facebook-f.png", "Facebook"],
    ["Instagram.png", "Instagram"],
  ];
  return `
    <div class="social-links ${dark ? "social-links--dark" : ""}">
      ${items
        .map(
          ([file, label]) =>
            `<a href="#" aria-label="${label}">${icon(file, "")}</a>`,
        )
        .join("")}
    </div>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="container site-footer__content">
        <div class="site-footer__brand">
          ${icon("Footer Logo.png", "Beautice")}
          <p><strong>Beautice</strong> is a Beauty Clinic WordPress Theme.</p>
          <address>
            Baker Street 101, NY, United States.<br />
            +521 569 8966. &nbsp;&nbsp; <u>mail@company.com</u>
          </address>
        </div>
        <div>
          <h3>Pages</h3>
          <a href="/" data-link>› Home</a>
          <a href="/about" data-link>› About</a>
          <a href="/services" data-link>› Services</a>
          <a href="/gallery" data-link>› Gallery</a>
          <a href="/team" data-link>› Team</a>
        </div>
        <div>
          <h3>Informations</h3>
          <a href="#">› Terms &amp; conditions</a>
          <a href="#">› Privacy policy</a>
          <a href="/blog" data-link>› Blog</a>
          <a href="/contact" data-link>› Contact</a>
        </div>
      </div>
      <div class="container site-footer__bottom">
        <div class="footer-social">
          ${["facebook-f.png", "Twitter.png", "linkedin-in.png", "youtube.png", "Instagram.png"]
            .map((file) => `<a href="#" aria-label="Social network">${icon(file)}</a>`)
            .join("")}
        </div>
        <p>© AltDesain Studio 2021 - All right reserved.</p>
      </div>
      <button class="back-to-top" type="button" aria-label="Back to top">↑</button>
    </footer>
  `;
}

function sectionHeading(eyebrow, title, description = "", centered = true) {
  return `
    <div class="section-heading ${centered ? "section-heading--center" : ""}">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
      ${description ? `<p class="section-heading__description">${description}</p>` : ""}
    </div>
  `;
}

function serviceCards({ compact = false } = {}) {
  return `
    <div class="service-grid ${compact ? "service-grid--compact" : ""}">
      ${services
        .map(
          (service) => `
            <article class="service-card">
              ${icon(compact ? service.smallIcon : service.icon, service.title)}
              <h3>${service.title}</h3>
              <p>${service.description}</p>
              ${compact ? '<a class="text-link" href="/services" data-link>Learn more »</a>' : ""}
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function teamCards() {
  return `
    <div class="team-grid">
      ${professionals
        .map(
          (person, index) => `
            <article class="team-card ${index === 1 ? "team-card--featured" : ""}">
              ${icon(person.image, person.name)}
              <p class="eyebrow">${person.role}</p>
              <h3>${person.name}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.</p>
              ${socialLinks()}
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function blogCards({ large = false } = {}) {
  return `
    <div class="${large ? "blog-list" : "blog-grid"}">
      ${blogPosts
        .map(
          (post) => `
            <article class="blog-card ${large ? "blog-card--large" : ""}">
              ${icon(post.image, post.title)}
              <div class="blog-card__body">
                <p class="eyebrow">▰ &nbsp; ${post.category}</p>
                <h3>${post.title}</h3>
                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                <a class="${large ? "button button--small" : "text-link"}" href="#" aria-label="Read ${post.title}">
                  ${large ? "Read More&nbsp; ›" : "Learn more&nbsp; »"}
                </a>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function playButton(label = "Watch Video") {
  return `
    <button class="video-control" type="button" data-video-trigger>
      <span>${icon("Polygon Play.png", "")}</span>
      <b>${label}</b>
    </button>
  `;
}

function contactForm() {
  return `
    <form class="contact-form" data-contact-form>
      <div class="form-row">
        <label><span>First name</span><input name="firstName" placeholder="First name" required /></label>
        <label><span>Last name</span><input name="lastName" placeholder="Last name" required /></label>
      </div>
      <label><span>Email address</span><input type="email" name="email" placeholder="Email address" required /></label>
      <label><span>Subject message</span><input name="subject" placeholder="Subject message" /></label>
      <label><span>Your inquiry here</span><textarea name="message" placeholder="Your inquiry here" required></textarea></label>
      <button class="button" type="submit">Send Message</button>
      <p class="form-status" role="status" aria-live="polite"></p>
    </form>
  `;
}

function homeOnePage() {
  return `
    <main class="page page--home-one">
      <section class="home-one-hero">
        ${header()}
        <div class="container hero-grid">
          <div class="hero-copy">
            <h1>Clinic &amp; beauty<br />consultant</h1>
            <p>It is a long established fact that a reader will be<br />by the readable content of a page.</p>
            <a class="button" href="/about" data-link>More Details</a>
          </div>
          ${icon("Frame 1.png", "Beauty consultation")}
        </div>
      </section>

      <section class="home-services section">
        <div class="slider-dots" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="container">
          ${sectionHeading(
            "Main Services",
            "Learn services to focus<br />on your beauty",
            "Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
          )}
          ${serviceCards()}
        </div>
      </section>

      <section class="home-about section">
        <div class="container split-layout">
          <div>
            ${sectionHeading("About Us", "We are the best beauty clinic", "", false)}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim.</p>
            <p>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
            <div class="inline-actions">
              <a class="button" href="/about" data-link>Learn More</a>
              ${playButton()}
            </div>
          </div>
          ${icon("unsplash_LRXYS0tSyGc.png", "Beautice clinic interior")}
        </div>
      </section>

      <section class="home-team section">
        <div class="container">
          ${sectionHeading(
            "Professional Teams",
            "The Professional expert",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
          )}
          ${teamCards()}
        </div>
      </section>

      <section class="home-contact section">
        <div class="container split-layout split-layout--contact">
          ${icon("Contact Animations.png", "Customer support specialist")}
          <div>
            ${sectionHeading(
              "Contact Us",
              "Send your inquiry to<br />our expert team",
              "Lorem ipsum dolor sit amet nulla turpis tellus.",
              false,
            )}
            ${contactForm()}
          </div>
        </div>
      </section>
      ${footer()}
    </main>
  `;
}

function homeTwoPage() {
  return `
    <main class="page page--home-two">
      <section class="home-two-hero image-overlay" style="--background-image: url('${asset("unsplash_Pe9IXUuC6QU-1.png")}')">
        ${header({ dark: true, overlay: true })}
        <div class="container home-two-hero__content">
          <div>
            <h1>Your beauty center<br />place</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.</p>
            <a class="button button--outline" href="/about" data-link>More Details</a>
          </div>
          ${playButton("Tour Video")}
        </div>
      </section>

      <section class="section home-two-about">
        <div class="container split-layout">
          ${icon("Illustration-1.png", "Beauty analysis illustration")}
          <div>
            ${sectionHeading("About Us", "We are the best beauty clinic", "", false)}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
            <a class="button" href="/about" data-link>Learn More</a>
          </div>
        </div>
      </section>

      <section class="section home-two-services">
        <div class="container">
          ${sectionHeading("Main Services", "Our focus services", "Lorem ipsum dolor sit amet.")}
          ${serviceCards({ compact: true })}
        </div>
      </section>

      <section class="stats-banner image-overlay" style="--background-image: url('${asset("unsplash_eflLpWC1Geo.png")}')">
        <div class="container stats-banner__content">
          <div>
            <h2>Why choosing us?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
          </div>
          <div class="stats-grid">
            ${[
              ["handshake 1.png", "100%", "trusted clinic"],
              ["brotherhood 1.png", "99%", "customer love"],
              ["earth 1.png", "75+", "asian branch"],
              ["doctor 1.png", "1.200+", "licensed worker"],
            ]
              .map(
                ([image, value, label]) => `
                  <div class="stat">${icon(image)}<p><strong>${value}</strong><span>${label}</span></p></div>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section home-two-blog">
        <div class="container">
          ${sectionHeading("The Blog", "Our latest news", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
          ${blogCards()}
        </div>
      </section>

      <section class="request-call">
        <div class="container request-call__inner">
          <div><h2>Request call services</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Contact Us.</b></p></div>
          <form data-call-form>
            <label><span>Phone number</span><input type="tel" placeholder="Insert your phone number here ..." required /></label>
            <button type="submit" aria-label="Request a call">⌕</button>
          </form>
        </div>
      </section>
      ${footer()}
    </main>
  `;
}

function aboutPage() {
  return `
    <main class="page page--about">
      ${header()}
      <section class="section about-intro">
        <div class="container">
          ${sectionHeading(
            "About",
            "We are a leading beauty clinic that has<br />been around since 2002",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
            false,
          )}
          <div class="video-image">
            ${icon("unsplash_DE6rYp1nAho.png", "Treatment room")}
            ${playButton("")}
          </div>
        </div>
      </section>
      <section class="section about-team">
        <div class="container">
          ${sectionHeading("Professional Teams", "The Professional expert", "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.")}
          ${teamCards()}
        </div>
      </section>
      <section class="wide-video image-overlay" style="--background-image: url('${asset("unsplash_NPjNtTExSJ4.png")}')">
        <div class="wide-video__copy">
          <p class="eyebrow">Business Slogan</p>
          <h2>Best responsibility and service<br />for our customers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
        </div>
      </section>
      <section class="section vision-mission">
        <div class="container">
          <div class="split-layout">${icon("Illustration-1.png", "Our vision")}<div>${sectionHeading("Our Vision", "Be the best and go international", "", false)}<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, ipsum ornare mauris sit quam quis enim.</p></div></div>
          <div class="split-layout split-layout--reverse"><div>${sectionHeading("Our Mission", "Special &amp; premium service to any clients", "", false)}<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, ipsum ornare mauris sit quam quis enim.</p></div>${icon("Illustration-2.png", "Our mission")}</div>
        </div>
      </section>
      <section class="section clients">
        <div class="container">
          ${sectionHeading("Our Clients", "Well-known agencies", "Lorem ipsum dolor sit amet, consectetur adipiscing elit")}
          <div class="logo-row">${[1, 2, 3, 4, 5].map((number) => icon(`LOGO${number}.png`, `Partner ${number}`)).join("")}</div>
        </div>
      </section>
      ${footer()}
    </main>
  `;
}

function servicesPage() {
  const serviceRows = [
    ["Animation1.png", "Beauty Consultation", "We services beauty consultation"],
    ["Animation2.png", "Skin Treatments", "Skin care and treatment by expert"],
    ["Animation3.png", "Beauty Product", "We present quality beauty products"],
  ];
  return `
    <main class="page page--services">
      ${header()}
      <section class="section services-gallery">
        <div class="container">
          ${sectionHeading("Our Services", "We focus on your beauty", "Lorem ipsum dolor sit amet.")}
          <div class="services-mosaic">
            ${["unsplash_5TJ0Hoy5FLY.png", "unsplash_ZOT2Mewzmh8.png", "unsplash_gzfIO69Q6eM.png", "unsplash_pTrhfmj2jDA.png"]
              .map((image) => icon(image, "Beautice service"))
              .join("")}
          </div>
        </div>
      </section>
      <section class="section service-details">
        <div class="container">
          ${serviceRows
            .map(
              ([image, eyebrow, title], index) => `
                <article class="service-detail ${index % 2 ? "service-detail--reverse" : ""}">
                  ${icon(image, title)}
                  <div>
                    ${sectionHeading(eyebrow, title, "", false)}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet.</p>
                    <a class="appointment-link" href="/contact" data-link>Make an Appointment&nbsp; »</a>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
      <section class="wide-video wide-video--interactive image-overlay" style="--background-image: url('${asset("unsplash_NPjNtTExSJ4.png")}')">
        <div class="container wide-video__row">
          <div><h2>Best responsibility and service<br />for our customers</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
          ${playButton("Treatments Videos")}
        </div>
      </section>
      <section class="section faq-section">
        <div class="container container--narrow">
          ${sectionHeading("", "Services FAQ’s")}
          <div class="accordion" data-accordion>
            ${[
              "Is beauty consultation handled thoroughly?",
              "Can I be beautiful in an instant time?",
              "Are there any side effects to the treatment methods or treatments at this clinic?",
              "Do professionals have accreditation in their respective fields?",
            ]
              .map(
                (question, index) => `
                  <article class="accordion__item ${index === 0 ? "is-open" : ""}">
                    <button type="button" aria-expanded="${index === 0}"><span>${question}</span><b>⌄</b></button>
                    <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p></div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>
      ${footer()}
    </main>
  `;
}

function galleryPage() {
  return `
    <main class="page page--gallery">
      ${header()}
      <section class="section gallery-section">
        <div class="container">
          <div class="gallery-heading">
            ${sectionHeading("Our Gallery", "Check out the collection pictures<br />from our clinic", "", false)}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
          </div>
          <div class="gallery-grid">
            ${galleryImages.map((image) => icon(image, "Beautice clinic gallery")).join("")}
          </div>
          <p class="gallery-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <b>our teams.</b></p>
        </div>
      </section>
      <section class="gallery-video image-overlay" style="--background-image: url('${asset("unsplash_eflLpWC1Geo.png")}')">
        <div>${sectionHeading("", "Watch the video tour", "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.")}${playButton("")}</div>
      </section>
      <section class="section gallery-cta">
        <div class="container gallery-cta__inner">
          <div>${sectionHeading("Get The Quota", "Want to be handled by our<br />professional team immediately?", "", false)}<p>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p></div>
          <a class="button" href="/contact" data-link>Make an Appointment</a>
        </div>
      </section>
      ${footer()}
    </main>
  `;
}

function teamPage() {
  return `
    <main class="page page--team">
      ${header()}
      <section class="section team-primary">
        <div class="container">
          ${sectionHeading("Our Team", "We are Professional", "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.")}
          ${teamCards()}
        </div>
      </section>
      <section class="section assistance">
        <div class="container">
          ${sectionHeading("Assistance Team", "Meet the pro assistance", "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.")}
          <div class="assistant-list">
            ${assistants
              .map(
                (person) => `
                  <article>
                    ${icon(person.image, person.name)}
                    <div><h3>${person.name} <em>/ ${person.role}</em></h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</p></div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>
      <section class="wide-video image-overlay" style="--background-image: url('${asset("unsplash_rE6FqsyyqwM.png")}')">
        <div class="wide-video__copy"><h2>Customer satisfaction is<br />our main goal</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p></div>
      </section>
      <section class="section testimonials">
        <div class="container">
          ${sectionHeading("Our Testimonials", "What our customer says", "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.")}
          <div class="testimonial-slider" data-testimonial>
            <button type="button" data-direction="-1" aria-label="Previous testimonial">←</button>
            <article>${icon("unsplash_W7b3eDUb_2I.png", "Customer")}<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultrices condimentum ac integer aliquam.</p><div class="stars">★★★★★</div></article>
            <button type="button" data-direction="1" aria-label="Next testimonial">→</button>
          </div>
        </div>
      </section>
      ${footer()}
    </main>
  `;
}

function blogPage() {
  return `
    <main class="page page--blog">
      ${header()}
      <section class="blog-hero image-overlay" style="--background-image: url('${asset("unsplash_QA9fRIi6sFw.png")}')">
        <div class="container"><h1>Blog</h1><p>Home • Blog</p></div>
      </section>
      <section class="section blog-content">
        <div class="container blog-layout">
          <div>${blogCards({ large: true })}<nav class="pagination" aria-label="Blog pagination"><a class="is-active" href="#">1</a><a href="#">2</a><a href="#">3</a></nav></div>
          <aside class="blog-sidebar">
            <form class="search-box"><label><span>Search</span><input type="search" placeholder="Search here ..." /></label><button type="submit" aria-label="Search">⌕</button></form>
            <section><h3>Recent Posts</h3>${blogPosts.map((post) => `<a href="#"><img src="${asset(post.image)}" alt="" /><span><b>01 jan 2021</b><small>Lorem ipsum dolor sit amet.</small></span></a>`).join("")}</section>
            <section><h3>Categories</h3><p>Consultation<br />Beauty<br />Treatments<br />News</p></section>
            <section><h3>Cloud Tags</h3><div class="tags">${["beauty", "cute", "skin", "glow", "style", "clinic", "great"].map((tag) => `<span>${tag}</span>`).join("")}</div></section>
            <section><h3>Social Connect</h3>${socialLinks()}</section>
          </aside>
        </div>
      </section>
      ${footer()}
    </main>
  `;
}

function contactPage() {
  const contacts = [
    ["●", "Address", "101 Baker Street, NY"],
    ["☎", "Phone", "+896 120 5889"],
    ["✉", "Mail", "mail@company.com"],
  ];
  return `
    <main class="page page--contact">
      ${header()}
      <section class="section contact-main">
        <div class="container">
          <div class="contact-title-row">
            ${sectionHeading("Contact Us", "Contact service for our<br />customers", "", false)}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
          </div>
          <div class="split-layout split-layout--contact">
            ${icon("Contact Animations-1.png", "Customer service specialist")}
            ${contactForm()}
          </div>
        </div>
      </section>
      <div class="contact-map" role="img" aria-label="Map showing Beautice clinic location"></div>
      <section class="section contact-cards">
        <div class="container">
          ${sectionHeading("Get in Touch", "Get direct handling by us", "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.")}
          <div class="contact-card-grid">
            ${contacts
              .map(
                ([symbol, label, value], index) => `
                  <article class="${index === 1 ? "is-featured" : ""}"><span>${symbol}</span><p class="eyebrow">${label}</p><h3>${value}</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p></article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>
      ${footer()}
    </main>
  `;
}

const pageRenderers = {
  "/": homeOnePage,
  "/home-2": homeTwoPage,
  "/about": aboutPage,
  "/services": servicesPage,
  "/gallery": galleryPage,
  "/team": teamPage,
  "/blog": blogPage,
  "/contact": contactPage,
};

function notFoundPage() {
  return `${header()}<main class="not-found"><p class="eyebrow">404</p><h1>Page not found</h1><a class="button" href="/" data-link>Back Home</a></main>${footer()}`;
}

function bindInteractions() {
  document.querySelectorAll("[data-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      history.pushState({}, "", link.getAttribute("href"));
      renderPage();
    });
  });

  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle?.addEventListener("click", () => {
    const headerElement = menuToggle.closest(".site-header");
    const isOpen = headerElement.classList.toggle("is-menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.querySelector(".form-status").textContent =
        "Thank you. Our team will contact you shortly.";
      form.reset();
    });
  });

  document.querySelector("[data-call-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  });

  document.querySelectorAll("[data-video-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("is-playing");
      const label = button.querySelector("b");
      if (label) label.textContent = button.classList.contains("is-playing") ? "Pause Video" : "Watch Video";
    });
  });

  document.querySelectorAll(".accordion__item > button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".accordion__item");
      const open = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });
  });

  document.querySelector(".back-to-top")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function renderPage() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const renderer = pageRenderers[path] ?? notFoundPage;
  document.body.dataset.route = path;
  app.innerHTML = renderer();
  bindInteractions();
  window.scrollTo(0, 0);
}

window.addEventListener("popstate", renderPage);
renderPage();
