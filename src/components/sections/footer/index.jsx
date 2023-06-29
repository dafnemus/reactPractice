import { footerText } from "../../../constants/text";
import Navbar from "../../nav";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <p>{footerText}</p>
      <Navbar id="menu2" />
    </footer>
  );
};

export default Footer;
