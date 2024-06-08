import styles from "../../utils/styles";
import Icons from "../../utils/Icon";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import menu from "../data/menu";
import Images from "../../utils/Images";
import "./navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);
  function HandleShow() {
    setShow(!show);
  }
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[1];

  function Linkness(type = null) {
    if (subpage === "") {
      subpage = "FindJob";
    }
    let classes = " text-brendBlue";

    if (type === subpage) {
      classes += " tex-brendBlue";
    } else {
      classes = " tex-titleBlack";
    }
    return classes;
  }

  return (
    <div className="navbar">
      <nav
        className={`${styles.container}  border-b-[1px] border-[borderColor] flex items-center justify-between py-[30px]   `}
      >
        <div className="logo ">{Icons.logo} </div>
        <ul
          className={`${
            show
              ? "w-[100%] sm:w-auto md:w-auto lg:w-auto  " // Show state
              : "hidden" // Hide state
          } 
          lg:flex md:flex sm:flex lg:pt-0 md:pt-0 sm:pt-0
          lg:flex-row md:flex-row sm:flex-row lg:gap-[48px] md:gap-[32px] sm:gap-[24px]
          lg:sticky md:sticky sm:sticky lg:bg-transparent md:bg-transparent sm:bg-transparent
          absolute bg-[#E3E3FF] sm:h-[32px] md:h-[32px] lg:h-[40px]
          right-0 top-[84px] h-[100vh] flex flex-col gap-[20px] pt-[30px] `}
        >
          {menu.map((item, index) => (
            <Link
              onClick={HandleShow}
              key={index}
              to={item.to}
              className={` ${Linkness(
                item.page.split("/")?.[0]
              )} flex items-center justify-center gap-[8px] lg:gap-[8px] md:gap-[5px] sm:gap-[5px] lg:text-[16px] md:text-[14px] sm:text-[14px]   `}
            >
              <span>{item.icon}</span>
              {item.page}
            </Link>
          ))}
        </ul>
        <div className="navIcon flex gap-[20px] items-center">
          {Icons.notification}
          {Icons.message}
          <div>
            <img
              src={Images.user}
              alt="user"
              className="lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] sm:w-[32px] sm:h-[32px] w-[24px] h-[24px] "
            />
          </div>
        </div>
        <div className="bar lg:hidden md:hidden sm:hidden" onClick={HandleShow}>
          {show ? "x" : "#"}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
