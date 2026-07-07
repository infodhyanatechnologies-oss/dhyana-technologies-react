import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-30">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6">
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                About{" "}
                <span className="bg-gradient-to-r from-[#0B4DBB] via-[#1565C0] to-[#38A800] text-transparent bg-clip-text">
                  Dhyana Technologies
                </span>
              </h2>

              <p className="text-xl text-muted-foreground mt-4 leading-8">
                Dhyana Technologies is a growing IT company founded by{" "}
                <span className="font-semibold text-foreground">
                  Vishal Prajapati
                </span>{" "}
                and{" "}
                <span className="font-semibold text-foreground">
                  Bhavin Prajapati
                </span>
                . We specialize in delivering innovative digital solutions,
                including custom software development, web applications, mobile
                apps, UI/UX design, cloud solutions, and business automation.
              </p>

              <p className="text-xl text-muted-foreground mt-4 leading-8">
                With over{" "}
                <span className="font-semibold text-foreground">
                  2+ years of experience
                </span>
                , our mission is to help businesses embrace technology with
                scalable, secure, and user-friendly solutions. We are committed
                to quality, innovation, and building long-term partnerships that
                drive digital success.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
