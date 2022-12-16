import classes from "./CreativeSpeaker.module.css";

const CreativeSpeaker = ({ imgUrl, imgAlt, name, job }) => {
  return (
    <div className={classes.container}>
      <img src={imgUrl} alt={imgAlt} width="100%" />
      <h2>{name}</h2>
      <span>{job}</span>
    </div>
  );
};
export default CreativeSpeaker;
