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
      <span id="title" className={styles.title}>
        {props.title}
      </span>
      <span className={styles.border} />
      <div className={styles.content}>
        <ul title={name.title}>
          <div className={styles.summary}>
            <details open>
              <summary>summary</summary>
              <div id="summary_container" className={styles.summary_container}>
                <div className={styles.summary_title}>Selector</div>
                <div className={styles.summary_description}>Tag Selector</div>
                <div className={styles.summary_description}>Class Selector</div>
                <div className={styles.summary_description}>ID Selector</div>
                <div className={styles.summary_title}>CRUD</div>
                <div id="summary_description" className={styles.summary_description}></div>
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
  const target = document.getElementById("summary_description");

  // console.log(target.constructor.name);

  console.log(target.children.length, target.hasChildNodes());

  if (!target.hasChildNodes()) {
    const span = window.document.createElement("span");
    const text = window.document.createTextNode("create");

    // The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node.
    span.appendChild(text);

    // The insertBefore() method of the Node interface inserts a node before a reference node as a child of a specified parent node.
    target.insertBefore(span, target.firstChild);

    console.log(target);
  }
};

const fun2 = () => {
  const target = document.getElementById("summary_description");

  if (target.hasChildNodes()) {
    console.log(target.firstChild);

    const span = window.document.createElement("span");
    const text = window.document.createTextNode("update");

    span.style.color = "red";

    span.appendChild(text);

    target.replaceChild(span, target.firstChild);

    console.log(target);
  }
};

const fun3 = () => {
  const target = document.getElementById("summary_description");

  if (target.hasChildNodes()) {
    console.log(target.firstChild);

    target.removeChild(target.firstChild);

    console.log(target);
  }
};

const fun4 = () => {
  const target = document.getElementById("summary_description");

  const clone = target.cloneNode(target);

  console.log(target.isEqualNode(clone));
};

const fun5 = () => {
  const container = document.getElementById("summary_container");
  const target = document.getElementById("summary_description");

  console.log(container.contains(target));
};

const items = [
  {
    title: "create",
    description: "createElement / createTextNode / appendChild / insertBefore",
    func: fun1,
  },
  {
    title: "update",
    description: "replaceChild",
    func: fun2,
  },
  {
    title: "remove",
    description: "removeChild",
    func: fun3,
  },
  {
    title: "isEqualNode()",
    description: "It tests whether two nodes are the same.",
    func: fun4,
  },
  {
    title: "contains()",
    description: "A boolean value that is true if otherNode is contained in the node, false if not.",
    func: fun5,
  },
];
