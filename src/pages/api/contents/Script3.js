import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script3({ ...props }) {
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
                <div className={styles.summary_title}>JSON</div>
                <div className={styles.summary_description}>JSON (Javascript Object Notation) : ES3 (1999)</div>
                <div className={styles.summary_description}>simplest data interchange format</div>
                <div className={styles.summary_description}>lightweight text-based structure</div>
                <div className={styles.summary_description}>easy to read</div>
                <div className={styles.summary_description}>key-value pair</div>
                <div className={styles.summary_description}>used for serialization and transmission of data between the network the network connection</div>
                <div className={styles.summary_description}>independent programming language and platform</div>
                <div className={styles.summary_description}>Client → serialize → deserialize → Server</div>
                <div className={styles.summary_description}>JSON Tools : Diff / Beautify / Minify / Parser / Validator</div>
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

const rabbit = {
  name: "tory",
  color: "white",
  size: null,
  birthDay: new Date(),
  symbol: Symbol("id"),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

const fun1 = () => {
  console.log(JSON.stringify(true));
  console.log(JSON.stringify(["apple", "banana"]));
  console.log(JSON.stringify(rabbit, null, 2));
};

const fun2 = () => {
  console.log(JSON.stringify(rabbit, ["name"]));
};

const fun3 = () => {
  const json = JSON.stringify(rabbit, (key, value) => {
    console.log(key, value);

    return key === "name" ? "jsh" : value;
  });

  console.log(json);
};

const fun4 = () => {
  const json = JSON.stringify(rabbit);

  console.log(json);

  const obj = JSON.parse(json);

  console.log(obj);

  console.log(rabbit.birthDay, typeof rabbit.birthDay); // Date Object

  console.log(obj.birthDay, typeof obj.birthDay); // String

  console.log(obj.jump);
};

const fun5 = () => {
  const json = JSON.stringify(rabbit);

  const obj = JSON.parse(json, (key, value) => {
    console.log(key);

    if (key === "birthDay") {
      return new Date(value);
    } else {
      return value;
    }
  });

  console.log(obj);

  console.log(obj.birthDay, typeof obj.birthDay); // Date Object

  obj.jump = () => {
    console.log(`${obj.name} can jump!`);
  };

  obj.jump();
};

const items = [
  {
    title: "JSON.stringify",
    description: "stringify",
    func: fun1,
  },
  {
    title: "JSON.stringify replacer array",
    description: "replacer array",
    func: fun2,
  },
  {
    title: "JSON.stringify replacer callback",
    description: "replacer callback",
    func: fun3,
  },
  {
    title: "JSON.parse",
    description: "parse",
    func: fun4,
  },
  {
    title: "JSON.parse reviver",
    description: "reviver",
    func: fun5,
  },
];
