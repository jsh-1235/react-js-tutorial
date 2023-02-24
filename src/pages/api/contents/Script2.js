import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script2({ ...props }) {
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
                <div className={styles.summary_title}>Debugging</div>
                <div className={styles.summary_description}>Define the problem</div>
                <div className={styles.summary_description}>Log file analysis / print log</div>
                <div className={styles.summary_description}>Interactive debugging</div>
                <div className={styles.summary_title}>The effectiveness of debugging</div>
                <div className={styles.summary_description}>UX/UI 개선</div>
                <div className={styles.summary_description}>Logic/Flow 개선</div>
                <div className={styles.summary_description}>Performance 개선</div>
                <div className={styles.summary_description}>Const 절감</div>
                <div className={styles.summary_title}>Test</div>
                <div className={styles.summary_description}>Unit Test</div>
                <div className={styles.summary_description}>Integration Testing</div>
                <div className={styles.summary_description}>Control flow analysis</div>
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
  const list = Array.from({ length: 10 }, (v, k) => {
    console.log(k);

    return k;
  });

  console.log(list);

  for (const number of list) {
    if (number === 5) {
      debugger;
    }

    console.log(number);
  }
};

const items = [
  {
    title: "break point",
    description: "debugger",
    func: fun1,
  },
];
