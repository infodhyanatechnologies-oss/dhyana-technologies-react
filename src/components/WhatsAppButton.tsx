import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  const phoneNumber = "+918401434494";

  const message = `
Hello Janhvi Enterprise,

I visited your website and would like more information regarding:

□ Home Loan
□ Personal Loan
□ Business Loan
□ Mortgage Loan
□ CIBIL Improvement

Please contact me.

Thank you.
`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
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
