import Home from "../assets/home2.webp";

export function HeroCards() {
  return (
    <div className="relative hidden lg:flex items-center justify-center w-[650px] h-[520px]">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl" />

      <img src={Home} alt="" />
    </div>
  );
}
