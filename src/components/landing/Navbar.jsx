import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 md:px-8 sm:px-5 lg:px-10 lg:w-full xl:px-32 w-[1440px] sm:w-full md:w-full fixed top-0 left-1/2 -translate-x-1/2">
      <h1 className="font-bold text-2xl text-offWhite">do.something</h1>

      <NavbarLinks />
    </div>
  );
};

export default Navbar;
