import classes from "./Venue.module.css";
const Venue = () => {
  return (
    <div className={classes.container}>
      <h2>Venue</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
        explicabo nulla veritatis commodi eaque quidem aperiam maiores officiis
        rerum natus.
      </p>
      <div className={classes["spans-container"]}>
        <span>New Event</span>
        <span>120 Market Street, Suite 110</span>
        <span>Hong Kong, CH 10110</span>
        <span>Tel: 010-020-0120</span>
      </div>
    </div>
  );
};
export default Venue;
