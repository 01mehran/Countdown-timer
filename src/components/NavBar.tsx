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

  const routes = [
    {
      title: "Gregorian New Year ",
      path: "/",
    },
    {
      title: "Persian New Year (Nowruz)",
      path: "/Nowruz",
    },
    {
      title: "Custom Countdown",
      path: "/customCountdown",
    },
  ];

  return (
    <nav className=" relative w-full h-16 flex items-center justify-between sm:px-14 px-4 shadow   ">
      <p className=" font-medium text-sm text-nowrap">Countdonw_Timer</p>
      <ul
        className={`md:flex items-center  ${
          isMenuOpen
            ? " w-full gap-2 bg-linear-to-t bg-slate-900/80 to-black/60 fixed top-0 left-0 flex text-white flex-col py-4 rounded-b-xl items-center"
            : "hidden gap-6"
        } `}
      >
        {isMenuOpen && (
          <span
            onClick={handleCloseMenu}
            className="absolute font-semibold hover:text-red-500 right-5 text-xl cursor-pointer "
          >
            X
          </span>
        )}
        {routes.map((route) => (
          <li className="font-medium text-sm">
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
      <div
        className="w-6 h-6 cursor-pointer md:hidden block"
        onClick={handleToggleMenu}
      >
        <img className="h-full w-full" src={menu_icon} alt="menu icon" />
      </div>
    </nav>
  );
}

export default NavBar;
