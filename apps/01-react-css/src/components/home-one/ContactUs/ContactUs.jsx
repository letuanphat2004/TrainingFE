import { Button } from "../../common/Button";
import { Input } from "../../common/Input";
import { SectionHeading } from "../../common/SectionHeading";
import { assets } from "../../../constants/assets.js";
import "./ContactUs.css";
const fields = [
    { id: "first-name", name: "firstName", placeholder: "First name", className: "contact-us__field--first-name" },
    { id: "last-name", name: "lastName", placeholder: "Last name", className: "contact-us__field--last-name" },
    { id: "email", name: "email", placeholder: "Email address", type: "email", className: "contact-us__field--email" },
    { id: "subject", name: "subject", placeholder: "Subject message", className: "contact-us__field--subject" },
    { id: "inquiry", name: "inquiry", placeholder: "Your inquiry here", as: "textarea", className: "contact-us__field--inquiry" },
];
export function ContactUs() {
    return (<section className="contact-us" id="contact" aria-labelledby="contact-us-title">
      <img className="contact-us__background" src={assets.homeOne.contactBackground} alt="" aria-hidden="true"/>
      <img className="contact-us__animation" src={assets.homeOne.contactAnimation} alt="" aria-hidden="true"/>
      <SectionHeading className="contact-us__heading" eyebrow="Contact Us" title="Send your inquiry to our expert team" titleId="contact-us-title" description="Lorem ipsum dolor sit amet nulla turapis tellus."/>
      <form className="contact-us__form" onSubmit={(event) => event.preventDefault()}>
        {fields.map((field) => (<Input as={field.as} className={["contact-us__field", field.className].join(" ")} id={field.id} key={field.id} name={field.name} placeholder={field.placeholder} type={field.type}/>))}
        <Button className="contact-us__submit" type="submit">
          Send Message
        </Button>
      </form>
    </section>);
}
