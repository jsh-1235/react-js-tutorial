import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script5({ ...props }) {
  const [name, setName] = useState({});

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

  console.log("props", props);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{props.title}</span>
      <span className={styles.border} />
      <div className={styles.note}>
        <ul title={name.title}>
          {items.map((item) => {
            return (
              <li key={item.func.name}>
                <div className={styles.menu}>
                  <button className="button" name={item.func.name} onClick={handleClick}>
                    {item.title}
                  </button>
                  <div className={styles.description}>{item.description}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.note}>
        <ul title="Summary"></ul>
      </div>
    </div>
  );
}

const fun1 = () => {};

const fun2 = () => {};

const fun3 = () => {};

const fun4 = () => {};

const fun5 = () => {};

const items = [
  {
    title: "1",
    description: "",
    func: fun1,
  },
  {
    title: "2",
    description: "",
    func: fun2,
  },
  {
    title: "3",
    description: "",
    func: fun3,
  },
  {
    title: "4",
    description: "",
    func: fun4,
  },
  {
    title: "5",
    description: "",
    func: fun5,
  },
];
