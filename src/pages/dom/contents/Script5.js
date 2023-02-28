import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script5({ ...props }) {
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
                <div href="http://www.google.com" id="target" className={styles.summary_title}>
                  Attribute
                </div>
                <div className={styles.summary_description}></div>
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
  const target = document.getElementById("target");

  // console.log(target.constructor.name);
  // console.log("nodeType", target.nodeType);
  // console.log("nodeName", target.nodeName);
  // console.log("nodeValue", target.childNodes[0].nodeValue);

  console.log(target.getAttribute("href"));
};

const fun2 = () => {
  const target = document.getElementById("target");

  console.log(target.getAttributeNode("href"));
};

const fun3 = () => {
  const target = document.getElementById("target");

  console.log(target.getAttributeNames("href"));
};

const fun4 = () => {
  const target = document.getElementById("target");

  target.setAttribute("href", "https://www.naver.com");

  console.log(target.getAttribute("href"));
};

const fun5 = () => {
  const target = document.getElementById("target");

  console.log("hasAttribute", target.hasAttribute("href"));
};

const fun6 = () => {
  const target = document.getElementById("target");

  target.removeAttribute("href");

  console.log("hasAttribute", target.hasAttribute("href"));

  console.log(target.getAttribute("href"));

  // element.setAttribute("class", "Script_title__kh9VV");
};

const fun7 = () => {
  const target = document.getElementById("target");

  target.setAttribute("class", "emphasis");

  console.log("class", target.getAttribute("emphasis"));
};

const items = [
  {
    title: "getAttribute",
    description: "Retrieves the value of the named attribute from the current node and returns it as a string.",
    func: fun1,
  },
  {
    title: "getAttributeNode",
    description: "Retrieves the node representation of the named attribute from the current node and returns it as an Attr.",
    func: fun2,
  },
  {
    title: "getAttributeNames",
    description: "Returns an array of attribute names from the current element.",
    func: fun3,
  },
  {
    title: "setAttribute",
    description: "iterator",
    func: fun4,
  },
  {
    title: "hasAttribute",
    description: "Returns a boolean value indicating if the element has the specified attribute or not.",
    func: fun5,
  },
  {
    title: "removeAttribute",
    description: "Removes the named attribute from the current node.",
    func: fun6,
  },
  {
    title: "css",
    description: "class",
    func: fun7,
  },
];
