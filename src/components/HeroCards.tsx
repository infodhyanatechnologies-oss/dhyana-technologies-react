import TeamImage from "../assets/Gemini_Generated_Image_ss1rghss1rghss1r.png";

export function HeroCards() {
  return (
    <div className="hidden lg:flex items-center justify-center h-[650px]">
      <div className="relative">
        <img
          src={TeamImage}
          alt="Dhyana Technologies Team"
          className="relative z-10 w-[700px] h-[600px] object-contain"
        />
      </div>
    </div>
  );
}
