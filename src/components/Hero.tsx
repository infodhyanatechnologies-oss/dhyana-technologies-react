import { Button } from "./ui/button";
import { CheckCircle2, Code2, Briefcase } from "lucide-react";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden py-5 lg:py-10">
      <div className="container relative mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Build Your Future With
            <span className="block bg-gradient-to-r from-[#0B4DBB] via-[#1565C0] to-[#38A800] bg-clip-text text-transparent">
              Industry Ready Skills
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Learn the most in-demand technologies from industry experts. Master
            Full Stack Development, Python, React, Node.js, Artificial
            Intelligence and more through live projects, practical training and
            career-focused mentorship.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#38A800]" size={22} />

              <span className="font-medium text-slate-700">
                Live Project Training
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#38A800]" size={22} />

              <span className="font-medium text-slate-700">
                Placement Assistance
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#38A800]" size={22} />

              <span className="font-medium text-slate-700">
                Industry Mentors
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#38A800]" size={22} />

              <span className="font-medium text-slate-700">
                Course Certificate
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-xl bg-gradient-to-r from-[#0B4DBB] via-[#1565C0] to-[#38A800] px-8 py-6 text-white shadow-xl hover:scale-105 transition-all"
              onClick={() =>
                document.getElementById("courses")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <Code2 className="mr-2 h-5 w-5" />
              Explore Courses
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-xl border-2 border-[#0B4DBB] px-8 py-6 text-[#0B4DBB] hover:bg-[#0B4DBB] hover:text-white"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>

        <HeroCards />
      </div>
    </section>
  );
};
