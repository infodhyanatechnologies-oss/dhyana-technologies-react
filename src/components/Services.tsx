import { Card, CardContent } from "./ui/card";
import {
  Home,
  Briefcase,
  Landmark,
  HandCoins,
  GraduationCap,
  Car,
} from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Home Loan",
    description:
      "Get expert guidance and competitive rates to make your dream home a reality.",
    icon: <Home size={20} />,
  },
  {
    title: "Personal Loan",
    description:
      "Quick and flexible financing solutions tailored to your personal needs.",
    icon: <HandCoins size={20} />,
  },
  {
    title: "Business Loan",
    description:
      "Funding solutions designed to support growth and business expansion.",
    icon: <Briefcase size={20} />,
  },
  {
    title: "Mortgage Loan",
    description: "Unlock your property's value with flexible mortgage options.",
    icon: <Landmark size={20} />,
  },
  // {
  //   title: "Machinery Loan",
  //   description: "Affordable financing for machinery and equipment purchases.",
  //   icon: <Tractor size={20} />,
  // },
  {
    title: "Education Loan",
    description:
      "Achieve your academic goals with flexible education financing for higher studies in India and abroad.",
    icon: <GraduationCap size={20} />,
  },
  {
    title: "Car Loan",
    description:
      "Drive home your dream vehicle with affordable car loan options, quick approvals, and flexible repayment plans.",
    icon: <Car size={20} />,
  },
];

export const Services = () => {
  return (
    <section id="premium-services" className="relative overflow-hidden py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Our Premium Services
            </h2>
          </div>

          <p className="mt-3 text-base text-slate-600">
            Professional guidance for taxation, GST, TDS, and financial
            services, helping you manage your finances efficiently and stay
            compliant.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service) => (
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
