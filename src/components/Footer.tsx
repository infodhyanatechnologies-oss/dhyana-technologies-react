import { Phone, Mail, MapPin } from "lucide-react";
import image from "../assets/compant-logo.jpeg";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#F9F9FA] border-t border-slate-200 mt-20"
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center ">
                {" "}
                <img
                  src={image}
                  alt="Janhvi Enterprise"
                  className="h-10 w-10 object-contain mr-2"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Janhvi Enterprise
              </h3>
            </div>

            <p className="text-slate-600 leading-8">
              Your trusted partner for loans, tax services, government
              registrations, and financial consulting. Helping individuals and
              businesses achieve their goals since 2020.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[3px] text-[#BB983C]">
              Quick Links
            </h4>

            <div className="space-y-4">
              <a
                href="#about"
                className="block text-slate-700 transition hover:text-[#BB983C]"
              >
                About us
              </a>

              <a
                href="#premium-services"
                className="block text-slate-700 transition hover:text-[#BB983C]"
              >
                Our Premium Services
              </a>

              <a
                href="#financial-services"
                className="block text-slate-700 transition hover:text-[#BB983C]"
              >
                Financial & Tax Solutions
              </a>

              <a
                href="#registration-services"
                className="block text-slate-700 transition hover:text-[#BB983C]"
              >
                Registration & Legal Compliance Services
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[3px] text-[#BB983C]">
              Address
            </h4>

            <div className="flex items-start gap-4">
              <MapPin size={20} className="mt-1 shrink-0 text-[#BB983C]" />

              <p className="text-slate-700 leading-8">
                513-Golden Square,
                <br />
                Nr. Kalyan Chowk, Nikol,
                <br />
                Ahmedabad - 382350
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[3px] text-[#BB983C]">
              Contact
            </h4>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone size={20} className="mt-1 shrink-0 text-[#BB983C]" />

                <div className="space-y-2">
                  <a
                    href="tel:+918733884897"
                    className="block  text-slate-900 transition hover:text-[#BB983C]"
                  >
                    +91 87338 84897
                  </a>

                  <a
                    href="tel:+918401434494"
                    className="block  text-slate-900 transition hover:text-[#BB983C]"
                  >
                    +91 84014 34494
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={20} className="mt-1 shrink-0 text-[#BB983C]" />

                <a
                  href="mailto:janhvienterprise12@gmail.com"
                  className=" text-slate-900 break-all transition hover:text-[#BB983C]"
                >
                  janhvienterprise12@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-slate-500">
              © 2026 Janhvi Enterprise. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
