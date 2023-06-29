import { asideTexts, asideTitle } from "../../../constants/text";
import "./styles.css";

const Aside = () => {
  return (
    <aside>
      <h2>{asideTitle}</h2>
      {asideTexts.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <br />
        </div>
      ))}
    </aside>
  );
};

export default Aside;
