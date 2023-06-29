import { articleTexts, title } from "../../../constants/text";
import "./styles.css";

const Articles = () => {
  return (
    <article>
      <h1>{title}</h1>
      {articleTexts.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <br />
        </div>
      ))}
    </article>
  );
};

export default Articles;
