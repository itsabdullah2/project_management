import { useState } from "react";
import { hoverStyling } from "../../data/dummy";

const OpenMenuIcon = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`fixed top-8 right-8 bg-darkGray w-24 h-24 rounded-full cursor-pointer overflow-hidden text-blue z-[1000] hover:text-offWhite duration-200 ease-out ${hoverStyling} sm:block md:block hidden`}
      onClick={handleMenu}
    >
      <span
        className={`w-7 h-[2px] bg-gray absolute bg-offWhite left-1/2 -translate-x-1/2 duration-300 ${
          isMenuOpen
            ? "rotate-45 top-1/2 -translate-x-1/2 -translate-y-1/2"
            : "rotate-0 top-[42px]"
        }`}
      />
      <span
        className={`w-7 h-[2px] bg-offWhite bg-gray absolute left-1/2 -translate-x-1/2 duration-300 ${
          isMenuOpen
            ? "-rotate-45 top-1/2 -translate-x-1/2 -translate-y-1/2"
            : "rotate-0 bottom-[42px]"
        }`}
      />
    </div>
  );
};

export default OpenMenuIcon;
