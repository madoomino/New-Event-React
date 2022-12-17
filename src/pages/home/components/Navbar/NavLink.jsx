import classes from "./Navbar.module.css";
const NavLink = ({ navLink, navText, color }) => {
  return (
    <li>
      <a className={color === "active" ? classes.active : ""} href={navLink}>
        {navText}
      </a>
    </li>
  );
};
export default NavLink;
