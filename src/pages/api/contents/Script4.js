import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script4({ ...props }) {
  const [name, setName] = useState({});
  const [description, setDescription] = useState("");

  const handler = useCallback(() => {
    const result = items.filter((item) => item.func.name === name.func);

    if (result.length !== 0) {
      const func = result[0].func;

      console.clear();

      console.log(func.name);

      func();
    }
  }, [name]);

  useEffect(() => {
    console.log("state", name);

    handler(name);
  }, [handler, name]);

  const handleClick = (e) => {
    // console.clear();

    console.log(this);

    setName({
      func: e.target.name,
      title: e.target.innerText,
    });
  };

  const handleDescription = (func) => {
    console.clear();

    const result = func.toString();

    setDescription(result);

    console.log(result);
  };

  console.log("props", props);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{props.title}</span>
      <span className={styles.border} />
      <div className={styles.content}>
        <ul title={name.title}>
          <div className={styles.summary}>
            <details open>
              <summary>summary</summary>
              <div className={styles.summary_container}>
                <div className={styles.summary_title}>XML</div>
                <div className={styles.summary_description}>XML stands for eXtensible Markup Language</div>
                <div className={styles.summary_description}>XML is a markup language much like HTML</div>
                <div className={styles.summary_description}>XML was designed to store and transport data</div>
                <div className={styles.summary_description}>XML was designed to be self-descriptive</div>
                <div className={styles.summary_description}>XML is a W3C Recommendation</div>
              </div>
            </details>
          </div>
          {items.map((item) => {
            return (
              <li key={item.func.name}>
                <div className={styles.menu}>
                  <button className="button" name={item.func.name} onClick={handleClick}>
                    {item.title}
                  </button>
                  <div className={styles.description}>
                    <span data={item.func.name} onClick={(e) => handleDescription(item.func)}>
                      {item.description}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        {description && <pre className={styles.pre}>{description}</pre>}
      </div>
    </div>
  );
}

const xml = `
  <bookstore>
    <book>
      <title>Javascript</title>
      <author>Seung hun, Jeong</author>
      <year>2023</year>
      </book>
  </bookstore>
  `;

const fun1 = () => {
  const parser = new DOMParser();

  const docs = parser.parseFromString(xml, "text/xml");

  console.log(docs, typeof docs);
};

const fun2 = () => {
  const parser = new DOMParser();

  const docs = parser.parseFromString(xml, "text/xml");

  const title = docs.getElementsByTagName("title");
  const author = docs.getElementsByTagName("author");
  const year = docs.getElementsByTagName("year");

  console.log(title[0].childNodes[0]);
  console.log(author[0].childNodes[0]);
  console.log(year[0].childNodes[0]);
};

const items = [
  {
    title: "DOMParser",
    description: "parseFromString",
    func: fun1,
  },
  {
    title: "getElementsByTagName",
    description: "childNodes",
    func: fun2,
  },
];
