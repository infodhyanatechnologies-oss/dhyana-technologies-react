import { Phone, Mail, MapPin } from "lucide-react";
import image from "../assets/logo.jpeg";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#F9F9FA] border-t border-slate-200 mt-20"
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_1fr_1fr] lg:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center ">
                {" "}
                <img
                  src={image}
                  alt="Dhyana Technologies"
                  className="h-10 w-10 object-contain mr-2"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Dhyana Technologies
              </h3>
            </div>

            <p className="text-slate-600 leading-8">
              Dhyana Technologies is committed to delivering industry-oriented
              IT training and software development services. We empower students
              and professionals with practical skills, live projects, expert
              mentorship, and career support to succeed in today's
              technology-driven world.
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
                Courses
              </a>

              <a
                href="#why-choose-us"
                className="block text-slate-700 transition hover:text-[#BB983C]"
              >
                Why Choose Us
              </a>

              <a
                href="#contact"
                className="block text-slate-700 transition hover:text-[#BB983C]"
              >
                Contact Us
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
                511-Samruddhi Business Hub,
                <br />
                Hanspura Gam Rd, Nava Naroda,
                <br />
                Ahmedabad, Gujarat - 382330
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
                    href="tel:+918780183269"
                    className="block text-slate-900 transition hover:text-[#BB983C]"
                  >
                    +91 87801 83269
                  </a>

                  <a
                    href="tel:+919664566344"
                    className="block text-slate-900 transition hover:text-[#BB983C]"
                  >
                    +91 96645 66344
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={20} className="mt-1 shrink-0 text-[#BB983C]" />

                <a
                  href="mailto:info.dhyanatechnologies@gmail.com"
                  className="text-slate-900 transition hover:text-[#BB983C] whitespace-nowrap overflow-x-auto"
                >
                  info.dhyanatechnologies@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-slate-500">
              © 2026 Dhyana Technologies. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
