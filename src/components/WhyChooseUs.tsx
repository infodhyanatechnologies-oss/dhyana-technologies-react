import {
  ShieldCheck,
  Clock3,
  BadgePercent,
  Users,
  CheckCircle2,
} from "lucide-react";
import WhyChooseUsImage from "../assets/44169408-fc29-4315-85c2-fd44d990fda9.png";

import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-[#BB983C]" />,
    title: "Trusted Expertise",
    description:
      "Over 6 years of experience helping individuals and businesses secure the right financial solutions.",
  },
  {
    icon: <Clock3 className="h-5 w-5 text-[#BB983C]" />,
    title: "Fast Processing",
    description:
      "Quick documentation review and efficient processing to save your valuable time.",
  },
  {
    icon: <BadgePercent className="h-5 w-5 text-[#BB983C]" />,
    title: "Competitive Solutions",
    description:
      "Access to multiple lenders and financial products tailored to your needs.",
  },
  {
    icon: <Users className="h-5 w-5 text-[#BB983C]" />,
    title: "Dedicated Support",
    description:
      "Personalized guidance from consultation to successful approval and beyond.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className=" bg-muted/50 border rounded-lg rounded-[40px] bg-[#F9F9FA] p-6 md:p-8 shadow-sm">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Why Choose Us?
            </h2>

            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#BB983C]" />
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left Side Features */}
            <div className="max-w-[460px] space-y-4">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="
                    max-w-[460px]
                    border
                    border-[#BB983C]/15
                    bg-white
                    shadow-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  <CardContent className="flex items-start gap-3 p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#FDF9EE] border border-[#BB983C]/20 shadow-sm">
                      {feature.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Side Experience Circle */}
            <img src={WhyChooseUsImage} />
          </div>
        </div>
      </div>
    </section>
  );
};
