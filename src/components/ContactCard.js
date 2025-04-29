import { Link } from "react-router-dom";
import user from "../images/ai.webp"; // or your image

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link 
          to={`/contact/${id}`} 
          state={{ contact: props.contact }}  // ✅ SEND the contact data here
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
        <i 
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
