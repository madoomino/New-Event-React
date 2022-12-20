import classes from "./RegisterHere.module.css";
const RegisterHere = () => {
  return (
    <div className={classes.container}>
      <div className={classes["text-container"]}>
        <h2>
          Register <span>Here</span>
        </h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
          provident.
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          illum voluptate repellat odit quae, pariatur iusto earum. Corporis
          accusantium, vel mollitia distinctio ea dolore minima maxime harum
          ipsam. Ducimus, eum.
        </p>
      </div>
      <form>
        <input type="text" className="first-name" placeholder="First Name" />
        <input type="text" className="last-name" placeholder="Last Name" />
        <input type="text" className="phone" placeholder="Phone Number" />
        <input type="text" className="email" placeholder="Email Address" />
        <button>Register</button>
      </form>
    </div>
  );
};
export default RegisterHere;
