import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  const phoneNumber = "+918780183269";

  const message = `
Hello Dhyana Technologies,

I visited your website and I'm interested in learning more about your courses and services.

I would like information regarding:

□ Python Development
□ Django Development
□ Full Stack Development
□ React.js Training
□ Node.js Training
□ Next.js Training
□ Nest.js Training
□ JavaScript Training
□ Software Development Services
□ Internship / Placement Assistance

Please contact me with more details.

Thank you.
`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
    >
      <FaWhatsapp size={34} />
    </a>
  );
};
