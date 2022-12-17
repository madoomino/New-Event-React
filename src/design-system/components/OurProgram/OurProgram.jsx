import classes from "./OurProgram.module.css";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const OurProgram = ({
  imgUrl,
  imgAlt,
  time,
  roomNumber,
  title,
  name,
  description,
}) => {
  return (
    <div className={classes.container}>
      <img src={imgUrl} alt={imgAlt} width={"150px"} />
      <article className={classes["text-wrapper"]}>
        <div className={classes["time-room"]}>
          <span className={classes.time}>
            <FontAwesomeIcon icon={faClock} /> {time}
          </span>
          <span className={classes.room}>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Room {roomNumber}
          </span>
        </div>
        <h2>{title}</h2>
        <span className={classes.name}>By {name}</span>
        <p className={classes.description}>{description}</p>
      </article>
    </div>
  );
};
export default OurProgram;
