import classes from "./AboutUs.module.css";
import img from "../../../../assets/about-us/about-us.jpeg";
const AboutUs = () => {
  return (
    <section className={classes.container}>
      <div className={classes.text}>
        <h3>
          New Event is fully responsive one-page template for events,
          conferences or workshops.
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tempora
          sit quo minus pariatur animi repellat vel omnis, nihil maiores.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          veniam quod repellendus perferendis suscipit, quae laborum! Molestiae
          consequatur aliquam mollitia assumenda, commodi, harum neque non amet
          similique exercitationem eaque officiis.
        </p>
      </div>
      <img src={img} alt="About-us" />
    </section>
  );
};
export default AboutUs;
