import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { buttonVariants } from "./ui/button";
  import image from "../assets/compant-logo.jpeg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <NavigationMenu className="mx-auto max-w-none">
        <NavigationMenuList className="container flex h-16 w-screen items-center justify-between px-4">
          {/* Logo */}
          <NavigationMenuItem>
            <a
              href="/"
              className="flex items-center text-xl font-bold text-slate-900"
            >
              <img
                src={image}
                alt="Janhvi Enterprise"
                className="mr-3 h-10 w-10 object-contain"
              />

              <span>Janhvi Enterprise</span>
            </a>
          </NavigationMenuItem>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#home"
              className={`${buttonVariants({
                variant: "ghost",
              })} text-[16px]`}
            >
              Home
            </a>

            <a
              href="#about"
              className={`${buttonVariants({
                variant: "ghost",
              })} text-[16px]`}
            >
              About
            </a>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`${buttonVariants({
                  variant: "ghost",
                })} flex items-center gap-1 text-[16px] pr-0`}
              >
                Services
                <ChevronDown size={16} />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="center"
                className="w-[350px] rounded-2xl border border-[#BB983C]/20 bg-white p-3 shadow-xl"
              >
                <DropdownMenuItem asChild>
                  <a
                    href="#premium-services"
                    className="group flex items-center gap-4 rounded-xl p-4 transition-all hover:bg-[#FDF9EE]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BB983C]/10 text-[#BB983C] font-bold">
                      P
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-[#BB983C]">
                        Premium Services
                      </h4>

                      <p className="text-xs text-slate-500">
                        Loans & financial assistance
                      </p>
                    </div>
                  </a>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <a
                    href="#financial-services"
                    className="group flex items-center gap-4 rounded-xl p-4 transition-all hover:bg-[#FDF9EE]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BB983C]/10 text-[#BB983C] font-bold">
                      F
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-[#BB983C]">
                        Financial & Tax Services
                      </h4>

                      <p className="text-xs text-slate-500">
                        GST, ITR, TDS & accounting
                      </p>
                    </div>
                  </a>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <a
                    href="#registration-services"
                    className="group flex items-center gap-4 rounded-xl p-4 transition-all hover:bg-[#FDF9EE]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BB983C]/10 text-[#BB983C] font-bold">
                      R
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-[#BB983C]">
                        Registration & Legal Services
                      </h4>

                      <p className="text-xs text-slate-500">
                        MSME, FSSAI & registrations
                      </p>
                    </div>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#contact"
              className={`${buttonVariants({
                variant: "ghost",
              })} text-[16px]`}
            >
              Contact
            </a>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
