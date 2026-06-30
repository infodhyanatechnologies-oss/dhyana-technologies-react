import { Card, CardContent } from "./ui/card";
import {
  Briefcase,
  FileText,
  Receipt,
  BadgePercent,
  FileCheck,
  BookOpen,
  Building,
} from "lucide-react";

interface FinancialServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const financialServiceList: FinancialServiceProps[] = [
  {
    title: "TDS Return",
    description:
      "Accurate and timely TDS return filing services to ensure compliance and avoid penalties.",
    icon: <BadgePercent size={20} />,
  },
  {
    title: "ITR Filing",
    description:
      "Professional income tax return filing services for individuals, professionals, and businesses.",
    icon: <FileText size={20} />,
  },
  {
    title: "GST Return",
    description:
      "Hassle-free GST return filing with expert support to keep your business tax compliant.",
    icon: <Receipt size={20} />,
  },
  {
    title: "GST Registration",
    description:
      "Quick and seamless GST registration services for startups, businesses, and professionals.",
    icon: <FileCheck size={20} />,
  },
  {
    title: "Accounting Services",
    description:
      "Professional bookkeeping and accounting solutions to keep your financial records accurate and organized.",
    icon: <BookOpen size={20} />,
  },
  {
    title: "Business Registration",
    description:
      "End-to-end assistance for company, LLP, partnership, and proprietorship registrations.",
    icon: <Building size={20} />,
  },
];

export const FinancialService = () => {
  return (
    <section id="financial-services" className="relative overflow-hidden py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Financial & Tax Services
            </h2>
          </div>

          <p className="mt-3 text-base text-slate-600">
            Expert guidance and tailored financial solutions to help individuals
            and businesses achieve their goals with confidence.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {financialServiceList.map((service) => (
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
