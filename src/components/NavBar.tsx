import { Link } from "react-router-dom";
import menu_icon from "../assets/menuicon.svg";

function NavBar() {
  return (
    <nav className=" w-full h-16 flex items-center justify-between sm:px-14 px-4 shadow   ">
      <p className=" font-medium text-sm text-nowrap">Countdonw_Timer</p>
      <ul className="sm:flex items-center space-x-6 hidden ">
        <li className="font-medium text-sm">
          <Link to="/">Gregorian New Year </Link>
        </li>
        <li className="font-medium text-sm">
          <Link to="/Nowruz">Persian New Year (Nowruz)</Link>
        </li>
      </ul>
      <div className="w-6 h-6 cursor-pointer sm:hidden block">
        <img className="h-full w-full" src={menu_icon} alt="menu icon" />
      </div>
    </nav>
  );
}

export default NavBar;
