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
    bg-gradient-to-r from-[#0B4DBB] via-[#1565C0] to-[#38A800]
    hover:from-[#0A43A3] hover:via-[#1459B0] hover:to-[#2F9500]
    text-white
    shadow-lg hover:shadow-xl
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
