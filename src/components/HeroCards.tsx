import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  Building2,
  BadgeDollarSign,
  Landmark,
  Users,
} from "lucide-react";

const loans = [
  {
    icon: Home,
    title: "Home Loan",
    position: "top-8 left-1/2 -translate-x-1/2",
  },
  {
    icon: BadgeDollarSign,
    title: "Personal Loan",
    position: "top-1/2 right-8 -translate-y-1/2",
  },
  {
    icon: Building2,
    title: "Business Loan",
    position: "bottom-8 left-1/2 -translate-x-1/2",
  },
  {
    icon: Landmark,
    title: "Mortgage Loan",
    position: "top-1/2 left-8 -translate-y-1/2",
  },
];

export function HeroCards() {
  return (
    <div className="relative hidden lg:flex items-center justify-center w-[650px] h-[550px]">
      {/* Glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-[#BB983C]/10 blur-3xl" />

      {/* Orbit Ring */}
      <div className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-[#BB983C]/30" />

      {/* Center Circle */}
      <div className="relative z-20 flex flex-col items-center justify-center h-64 w-64 rounded-full bg-white border-4 border-[#BB983C]/20 shadow-2xl">
        <h2 className="text-6xl font-bold text-[#BB983C]">6+</h2>

        <p className="text-base font-semibold text-slate-800">
          Years Experience
        </p>

        <p className="mt-1 text-sm text-slate-500">Trusted Since 2020</p>

        {/* <div className="mt-5 flex gap-6">
          <div className="text-center">
            <p className="text-xl font-bold text-slate-900">500+</p>
            <p className="text-xs text-slate-500">Clients</p>
          </div>

          <div className="w-px bg-slate-200" />

          <div className="text-center">
            <p className="text-xl font-bold text-slate-900">₹100Cr+</p>
            <p className="text-xs text-slate-500">Processed</p>
          </div>
        </div> */}
      </div>

      {/* Loan Cards */}
      {loans.map((loan, index) => {
        const Icon = loan.icon;

        return (
          <Card
            key={index}
            className={`absolute ${loan.position} w-44 bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
          >
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#BB983C]/10">
                <Icon className="h-5 w-5 text-[#BB983C]" />
              </div>

              <div>
                <h4 className="font-semibold text-slate-800">{loan.title}</h4>

                {/* <p className="text-xs text-slate-500">Quick Approval</p> */}
              </div>
            </CardContent>
          </Card>
        );
      })}

      {/* Stat Card 1 */}
      <Card className="absolute top-12 left-0 w-48 bg-white border-0 shadow-xl">
        <CardContent className="flex items-center gap-3 p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
            <Users className="h-6 w-6 text-green-600" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">500+</h3>
            <p className="text-sm text-slate-500">Happy Clients</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
