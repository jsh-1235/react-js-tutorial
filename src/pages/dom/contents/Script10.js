import { useState, useEffect, useCallback } from "react";
import $ from "jquery";
import styles from "../../Script.module.css";

export default function Script10({ ...props }) {
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
      <span id="title" className={styles.title}>
        {props.title}
      </span>
      <span className={styles.border} />
      <div className={styles.content}>
        <ul title={name.title}>
          <div className={styles.summary}>
            <details id="details" open>
              <summary>summary</summary>
              <div className={styles.summary_container}>
                <div className={styles.summary_title}>JQuery Node</div>
                <div id="source" className={styles.summary_description}>
                  source
                </div>
                <div id="target" className={styles.summary_description}>
                  target
                </div>
              </div>
            </details>
          </div>
          {items.map((item) => {
            return (
              <li className="list-item" key={item.func.name}>
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
  $("#target").before("<div>before</div>");
};

const fun2 = () => {
  $("#target").prepend("<div>prepend</div>");
};

const fun3 = () => {
  $("#target").append("<div>append</div>");
};

const fun4 = () => {
  $("#target").after("<div>after</div>");
};

const fun5 = () => {
  $("#target").remove();
};

const fun6 = () => {
  $("#target").empty();
};

const fun7 = () => {
  $("replaceAll").replaceAll($("#target"));
};

const fun8 = () => {
  $("#target").replaceWith("replaceWith");
};

const fun9 = () => {
  $("#source").clone().replaceAll($("#target"));
};

const fun10 = () => {
  $("#target").replaceWith($("#source").clone());
};

const items = [
  {
    title: "before",
    description: "before",
    func: fun1,
  },
  {
    title: "prepend",
    description: "prepend",
    func: fun2,
  },
  {
    title: "append",
    description: "append",
    func: fun3,
  },
  {
    title: "after",
    description: "after",
    func: fun4,
  },
  {
    title: "remove",
    description: "remove",
    func: fun5,
  },
  {
    title: "empty",
    description: "empty",
    func: fun6,
  },
  {
    title: "replaceAll",
    description: "replaceAll",
    func: fun7,
  },
  {
    title: "replaceWith",
    description: "replaceWith",
    func: fun8,
  },
  {
    title: "clone",
    description: "clone",
    func: fun9,
  },
  {
    title: "replaceWith & clone",
    description: "replaceWith & clone",
    func: fun10,
  },
];
