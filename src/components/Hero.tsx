import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section
      id="home"
      className="container grid lg:grid-cols-2 place-items-center py-20 md:py-20 gap-10"
    >
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h2 className="text-lg font-larg">
            Start Learning with Dhyana Technologies
          </h2>
          <h1 className="inline">
            <span className="inline text-2xl md:text-5xl font-bold text-[#BB983C]">
              Custom Software Solutions Built for Your Success{" "}
            </span>
          </h1>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Get 100% Job Assistance & get placed in your dream company. Join our
          job-oriented courses and advance your career in technology.
        </p>

        <div className="flex justify-center lg:justify-start pt-2">
          <Button
            size="lg"
            className="bg-[#BB983C] hover:bg-[#a7862f] text-white px-8"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Free Consultation
          </Button>
        </div>
      </div>

      <div className="z-10">
        <HeroCards />
      </div>
    </section>
  );
};
