import { Card, CardContent } from "./ui/card";
import {
  Building,
  ClipboardCheck,
  BadgeCheck,
  FileSignature,
  Store,
  CreditCard,
  Briefcase,
} from "lucide-react";

interface GovernmentServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const GovernmentServiceList: GovernmentServiceProps[] = [
  {
    title: "MSME Registration",
    description:
      "Get your business registered under MSME and unlock government benefits, subsidies, and support schemes.",
    icon: <Building size={20} />,
  },
  {
    title: "Gumasta License",
    description:
      "Quick and hassle-free Gumasta registration services for shops, businesses, and commercial establishments.",
    icon: <ClipboardCheck size={20} />,
  },
  {
    title: "FSSAI Certificate",
    description:
      "Complete assistance for obtaining FSSAI licenses and registrations for food-related businesses.",
    icon: <BadgeCheck size={20} />,
  },
  {
    title: "Sale Deed Services",
    description:
      "Professional support for drafting, verification, and registration of sale deed documents.",
    icon: <FileSignature size={20} />,
  },
  {
    title: "Shop & Establishment Registration",
    description:
      "Register your business under the Shop & Establishment Act with expert guidance and documentation support.",
    icon: <Store size={20} />,
  },
  {
    title: "PAN Card Services",
    description:
      "Assistance with new PAN applications, corrections, updates, and related documentation.",
    icon: <CreditCard size={20} />,
  },
];

export const GovernmentService = () => {
  return (
    <section
      id="registration-services"
      className="relative overflow-hidden py-16"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Registration & Legal Services
            </h2>
          </div>

          <p className="mt-3 text-base text-slate-600">
            Simplifying government documentation, registrations, and compliance
            processes with reliable guidance and end-to-end support.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GovernmentServiceList.map((service) => (
            <Card
              key={service.title}
              className="
                border
                border-[#BB983C]/15
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <CardContent className="p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#BB983C]/20 bg-[#FDF9EE]">
                  <div className="text-[#BB983C]">{service.icon}</div>
                </div>

                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mb-4 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <button
                  className="text-sm font-semibold text-[#BB983C] transition-colors hover:text-[#A6852F]"
                  onClick={() => {
                    window.location.href = "#contact";
                  }}
                >
                  Get Consultation →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
