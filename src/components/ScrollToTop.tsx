import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowUpToLine } from "lucide-react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          size="icon"
          className="
    fixed bottom-24 right-6 z-50
    h-12 w-12 rounded-full
    bg-[#BB983C]
    hover:bg-[#a88733]
    text-white
    shadow-lg
    transition-all duration-300
    hover:scale-110
  "
        >
          <ArrowUpToLine className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};
