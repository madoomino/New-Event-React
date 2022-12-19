import classes from "./Navbar.module.css";
import links from "./Links";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";
const NavbarItems = () => {
  const router = useLocation();
  return (
    <ul className={classes["nav-links"]}>
      {links.map((link) => (
        <NavLink
          key={link.id}
          {...link}
          color={router.pathname === link.navLink ? "active" : ""}
        />
      ))}
    </ul>
  );
};
export default NavbarItems;
