import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script1({ ...props }) {
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
                <div className={styles.summary_title}>Console</div>
                <div className={styles.summary_description}>The Window.console property returns a reference to the console object, which provides methods for logging information to the browser's console.</div>
                <div className={styles.summary_description}>These methods are intended for debugging purposes only and should not be relied on for presenting information to end users.</div>
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
  console.log("log");
};

const fun2 = () => {
  console.info("info");
};

const fun3 = () => {
  console.warn("warn");
};

const fun4 = () => {
  console.error("error");
};

const fun5 = () => {
  console.assert(2 === 2, "same!");
  console.assert(2 === 3, "not same!");
};

const fun6 = () => {
  const items = Array.from({ length: 10 }, (v, k) => k);

  console.group("before");

  for (const item of items) {
    console.log(item);
  }

  console.groupEnd();

  console.group("after");

  for (const item of items) {
    if (item === 5) break;

    console.log(item);
  }

  console.groupEnd();
};

const fun7 = () => {
  const student = {
    name: "jsh",
    grades: [1, 2, 3],
    parent: {
      father: "father",
      mother: "mother",
    },
  };

  console.log(student);

  console.table(student);
};

const fun8 = () => {
  const student = {
    name: "jsh",
    grades: [1, 2, 3],
    parent: {
      father: "father",
      mother: "mother",
    },
  };

  console.log(student);

  // Tree structure
  console.dir(student);
};

const fun9 = () => {
  for (let i = 0; i < 10; i++) {
    console.count("loop");
  }

  console.countReset("loop");

  for (let i = 0; i < 5; i++) {
    console.count("loop");
  }
};

const fun10 = () => {
  console.time("for loop");

  for (let i = 0; i < 1000 ** 3; i++) {}

  console.timeEnd("for loop");
};

const fun11 = () => {
  function f1() {
    f2();
  }

  function f2() {
    f3();
  }

  function f3() {
    console.trace();
    console.groupEnd();
  }

  console.group("start");

  f1();
};

const items = [
  {
    title: "console.log",
    description: "log",
    func: fun1,
  },
  {
    title: "console.info",
    description: "console.info",
    func: fun2,
  },
  {
    title: "console.warn",
    description: "warn",
    func: fun3,
  },
  {
    title: "console.error",
    description: "error",
    func: fun4,
  },
  {
    title: "console.assert",
    description: "assert",
    func: fun5,
  },
  {
    title: "console.group",
    description: "group",
    func: fun6,
  },
  {
    title: "console.table",
    description: "table",
    func: fun7,
  },
  {
    title: "console.dir",
    description: "dir",
    func: fun8,
  },
  {
    title: "console.count",
    description: "count",
    func: fun9,
  },
  {
    title: "console.time",
    description: "time",
    func: fun10,
  },
  {
    title: "console.trace",
    description: "trace",
    func: fun11,
  },
];
