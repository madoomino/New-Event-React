import classes from "./CreativeSpeakerList.module.css";
import CreativeSpeaker from "../CreativeSpeaker/CreativeSpeaker";
import creativeSpeakersData from "./creativeSpeakersData";

const CreativeSpeakerList = () => {
  return (
    <div className={classes.container}>
      {creativeSpeakersData.map(({ imgUrl, imgAlt, name, job, id }) => (
        <CreativeSpeaker
          imgUrl={imgUrl}
          imgAlt={imgAlt}
          name={name}
          job={job}
          key={id}
        />
      ))}
    </div>
  );
};
export default CreativeSpeakerList;
