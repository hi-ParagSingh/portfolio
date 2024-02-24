import ContactItem from "./contactItem";
import { CONTACT_MAPPING } from "./utils";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <h4>Don't hold back! I'm am looking for your message.</h4>
      <div className="contact_container">
        {CONTACT_MAPPING.map((el) => (
          <ContactItem
            icon={el.icon}
            headline={el.headline}
            desc={el.desc}
            url={el.url}
          />
        ))}
      </div>
    </div>
  );
}
