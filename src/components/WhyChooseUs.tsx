import {
  Briefcase,
  GraduationCap,
  Laptop,
  Award,
  Users,
  Code2,
} from "lucide-react";

const features = [
  {
    icon: <Code2 size={28} />,
    title: "Live Projects",
    description: "Build real-world software projects with expert guidance.",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Expert Trainers",
    description: "Learn from experienced software developers.",
  },
  {
    icon: <Award size={28} />,
    title: "Certification",
    description: "Receive an industry-recognized course certificate.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Placement Support",
    description: "Resume building, mock interviews & job assistance.",
  },
  {
    icon: <Laptop size={28} />,
    title: "Online & Offline",
    description: "Flexible batches for students and professionals.",
  },
  {
    icon: <Users size={28} />,
    title: "Career Guidance",
    description: "One-to-one mentorship throughout your learning journey.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-[#BB983C] font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Learn Smarter. Build Faster.
          </h2>

          <p className="max-w-1xl mx-auto mt-4 text-slate-600">
            Dhyana Technologies helps students become industry-ready through
            practical learning, live projects, certification, and career
            guidance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-[#BB983C]
              "
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#BB983C]/10 text-[#BB983C]">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold">{feature.title}</h3>

              <p className="mt-3 text-slate-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
