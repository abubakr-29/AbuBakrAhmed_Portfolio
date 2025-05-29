import ContactMeText from "./ContactMeText";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <section id="contact" class="pt-14 pb-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactMeText />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactMeLeft />
          <ContactMeRight />
        </div>
      </div>
    </section>
  );
};

export default ContactMeMain;
