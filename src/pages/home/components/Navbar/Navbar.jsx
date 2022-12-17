import classes from "./Navbar.module.css";
import NavbarItems from "./NavbarItems";
const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <h3>
        New <span className={classes.event}>Event</span>
      </h3>
      <NavbarItems />
    </nav>
  );
};
export default Navbar;
