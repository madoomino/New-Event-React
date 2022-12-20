import classes from "./ContactUs.module.css";
const ContactUs = () => {
  return (
    <div className={classes.container}>
      <div className={classes["left-side-container"]}>
        <h2>
          New <span>Event</span>{" "}
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
          cumque dolor! Officia autem animi recusandae velit in quod
          reprehenderit impedit
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
          cumque dolor! Officia autem animi recusandae velit in quod
          reprehenderit impedit
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
          cumque dolor! Officia autem animi recusandae velit in quod
          reprehenderit impedit
        </p>
        <button>Download Now</button>
      </div>
      <div className={classes["right-side-container"]}>
        <h2>
          Keep In <span>Touch</span>
        </h2>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" cols="30" rows="10" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
