import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.overlay}>
        <div className={classes.wrapper}>
          <h3>July 22 - 26 in Hong Kong, CH</h3>
          <h1>Web Design Conference</h1>
          <div className={classes["btns-container"]}>
            <button className={classes["learn-more"]}>LEARN MORE</button>
            <button className={classes["register-now"]}>REGISTER NOW</button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
