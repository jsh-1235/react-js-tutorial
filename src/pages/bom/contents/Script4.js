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
                <div className={styles.summary_title}>window.navigator</div>
                <div className={styles.summary_description}>The Window.navigator read-only property returns a reference to the Navigator object, which has methods and properties about the application running the script.</div>
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

const fun1 = () => {
  console.log(window.navigator);

  for (const item in window.navigator) {
    console.log(item, "→", window.navigator[item]);
  }
};

const fun2 = () => {
  console.log(`You are using : ${window.navigator.userAgent}`);
};

const fun3 = () => {
  console.log(`language : ${window.navigator.language}`);
  console.log(`languages : ${window.navigator.languages}`);
};

const fun4 = () => {
  console.log(`onLine : ${window.navigator.onLine}`);
};

const fun5 = () => {
  console.log(`deviceMemory : ${window.navigator.deviceMemory}`);
};

const fun6 = () => {
  console.log(`You are using: ${window.navigator.userAgent}`);
};

const fun7 = () => {
  console.log(`You are using: ${window.navigator.userAgent}`);
};

const items = [
  {
    title: "window.navigator",
    description: "navigator",
    func: fun1,
  },
  {
    title: "window.navigator.userAgent",
    description: "userAgent",
    func: fun2,
  },
  {
    title: "window.navigator.language",
    description: "language",
    func: fun3,
  },
  {
    title: "window.navigator.onLine",
    description: "onLine",
    func: fun4,
  },
  {
    title: "location.navigator.deviceMemory ",
    description: "deviceMemory",
    func: fun5,
  },
  {
    title: "location.replace",
    description: "Navigate to a new page",
    func: fun6,
  },
  {
    title: "window.location.search",
    description: "window.location.search",
    func: fun7,
  },
];
