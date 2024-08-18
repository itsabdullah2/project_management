import { Link } from "react-router-dom";
import { styleLinksInNav } from "../../data/dummy";
import { OpenMenuIcon } from "../../";

const NavbarLinks = () => {
  return (
    <>
      <div className="flex items-center gap-8 text-offWhite sm:hidden md:hidden">
        <ul className="flex items-center gap-4">
          <li className={`${styleLinksInNav}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${styleLinksInNav}`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`${styleLinksInNav}`}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Link
          to="/app"
          className="text-offWhite py-2 px-5 rounded-[10px] bg-purple hover:bg-offWhite hover:text-purple duration-300 font-medium text-[17px]"
        >
          Go to App
        </Link>
      </div>
      <OpenMenuIcon />
    </>
  );
};

export default NavbarLinks;
