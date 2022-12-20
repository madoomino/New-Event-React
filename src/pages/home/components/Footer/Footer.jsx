import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.container}>
      <h2>
        Copyright &copy; 2022 Your Company | Design: <span>Madoo Mino</span>
      </h2>
      <ul className={classes["icons-container"]}>
        <li>
          <FontAwesomeIcon icon={faFacebookF} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGoogle} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />
        </li>
      </ul>
    </div>
  );
};
export default Footer;
