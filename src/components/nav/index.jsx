import { navLinks } from "../../constants/text";
import PropTypes from "prop-types";
import "./styles.css";

const Navbar = ({ id }) => {
  return (
    <ul className={id} id={id}>
      {navLinks.map((item) => (
        <div key={item.item}>
          <a href="">{item.text}</a>
        </div>
      ))}
    </ul>
  );
};

Navbar.propTypes = {
  id: PropTypes.string,
};

Navbar.defaultProps = {
  id: "",
};

export default Navbar;
