import { Statistics } from "./Statistics";
import rana from "../assets/rana.jpg";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-30">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={rana}
            alt=""
            className="w-[400px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-[#D4B15A] to-[#BB983C] text-transparent bg-clip-text">
                  RanaPratap{" "}
                </span>
                Rao
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                We empower dreams by helping individuals and businesses secure
                the financial support they need. From home ownership to business
                expansion, we provide tailored loan solutions for every stage of
                life. Our commitment to transparency, trust, and expert guidance
                ensures a smooth borrowing experience. Together, we help build
                stronger futures and turn aspirations into achievements
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
