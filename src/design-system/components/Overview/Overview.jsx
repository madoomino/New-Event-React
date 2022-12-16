import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Overview = ({ icon, title, children }) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};
export default Overview;
