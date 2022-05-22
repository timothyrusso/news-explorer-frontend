import "./NothingFound.css";

const NothingFound = ({ title, text, nothingFoundIcom }) => {
  return (
    <div className="nothing-found">
      <img
        src={nothingFoundIcom}
        alt="Nothing found icon"
        className="nothing-found__icon"
      ></img>
      <h2 className="nothing-found__title">{title}</h2>
      <p className="nothing-found__text">{text}</p>
    </div>
  );
};

export default NothingFound;
