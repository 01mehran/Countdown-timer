import { Link } from "react-router-dom";
import menu_icon from "../assets/images/menuicon.svg";
import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className=" w-full h-16 flex items-center justify-between sm:px-14 px-4 shadow   ">
      <p className=" font-medium text-sm text-nowrap">Countdonw_Timer</p>
      <ul
        className={`sm:flex items-center space-x-6 ${
          isMenuOpen
            ? " w-full gap-2 bg-linear-to-t bg-slate-900/80 to-black/60 fixed top-0 left-0 flex text-white flex-col py-4 rounded-b-xl"
            : "hidden"
        } `}
      >
        {isMenuOpen && (
          <span
            onClick={handleCloseMenu}
            className="absolute font-semibold hover:text-red-500 right-0 text-xl cursor-pointer "
          >
            X
          </span>
        )}
        <li className="font-medium text-sm">
          <Link to="/">Gregorian New Year </Link>
        </li>
        <li className="font-medium text-sm">
          <Link to="/Nowruz">Persian New Year (Nowruz)</Link>
        </li>
      </ul>
      <div
        className="w-6 h-6 cursor-pointer sm:hidden block"
        onClick={handleToggleMenu}
      >
        <img className="h-full w-full" src={menu_icon} alt="menu icon" />
      </div>
    </nav>
  );
}

export default NavBar;
