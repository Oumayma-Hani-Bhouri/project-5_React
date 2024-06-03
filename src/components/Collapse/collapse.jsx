import { useState } from "react";
import ArrowIcon from "../../assets/images/ArrowIcon.png";
import "../Collapse/collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header">
        <h3>{title}</h3>

        <img
          onClick={toggleCollapse}
          alt="flèche collapse"
          src={ArrowIcon}
          className={`arrow ${isOpen ? "open" : "closed"}`}
        />
      </div>
      <div className={`collapse-content ${isOpen ? "open" : "closed"}`}>
        {content}
      </div>
    </div>
  );
};

export default Collapse;
