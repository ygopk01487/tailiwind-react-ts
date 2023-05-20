import { BiHomeAlt, BiMoviePlay, BiInfoCircle, BiMenu } from "react-icons/bi";
import NavItem from "./navItem";
import { useState } from "react";

const defaultSize = "1.875rem";

const items = [
  { label: "Home", icon: <BiHomeAlt size={defaultSize} />, active: true },
  { label: "Moveis", icon: <BiMoviePlay size={defaultSize} />, active: false },
  { label: "About", icon: <BiInfoCircle size={defaultSize} />, active: false },
];

const NavItemsContainer = () => {
  return (
    <>
      {items.map((item, index) => {
        return <NavItem item={item} key={index} />;
      })}
    </>
  );
};

const Index = () => {
  const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false);
  return (
    <nav className="col-span-1 bg-cyan-300">
      <div className="mx-4 flex justify-between items-center md:block">
        <h4 className="text-2xl uppercase font-bold text-primary py-4 border-b text-right border-primary">
          Phimmoi.net
        </h4>
        <BiMenu
          className="cursor-pointer md:hidden"
          size={defaultSize}
          onClick={() => setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}
        />
      </div>

      <ul
        className={`mx-4 my-2 ${isNavMenuMobileOpen ? "" : "hidden"} md:block`}
      >
        <NavItemsContainer />
      </ul>
    </nav>
  );
};

export default Index;
