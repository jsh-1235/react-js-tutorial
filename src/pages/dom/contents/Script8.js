import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script8({ ...props }) {
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
              <div className={styles.summary_container}>
                <div className={styles.summary_container}>
                  <div className={styles.summary_title}>CSS</div>
                  <div className={styles.summary_description}>Cascading Style Sheet</div>
                  <div className={styles.summary_description}>The style read-only property returns the inline style of an element in the form of a CSSStyleDeclaration object that contains a list of all styles properties for that element with values assigned for the attributes that are defined in the element's inline style attribute.</div>
                  <div className={styles.summary_title}>Basic Selectors</div>
                  <div className={styles.summary_description}>Universal selector (*)</div>
                  <div className={styles.summary_description}>Tag / Type selector (elementname)</div>
                  <div className={styles.summary_description}>Class selector (.classname)</div>
                  <div className={styles.summary_description}>ID selector (#idname)</div>
                  <div className={styles.summary_title}>Grouping Selectors</div>
                  <div className={styles.summary_description}>Selector list (A, B)</div>
                  <div className={styles.summary_description}>Descendant combinator (A B)</div>
                  <div className={styles.summary_description}>Child combinator (A > B)</div>
                  <div className={styles.summary_description}>General sibling combinator (A ~ B)</div>
                  <div className={styles.summary_description}>Adjacent sibling combinator (A + B)</div>
                  <div className={styles.summary_description}>Column combinator (A || B)</div>
                  <div className={styles.summary_title}>Pseudo-classes and pseudo-elements</div>
                  <div className={styles.summary_description}>Pseudo classes (a:visited) </div>
                  <div className={styles.summary_description}>Pseudo elements (p::first-line)</div>
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
  const element = document.getElementById("title");

  console.log(element);

  element.style.color = "red";
};

const fun2 = () => {
  const element = document.getElementById("title");

  console.log(element);

  element.style.background = "blue";
};

const fun3 = () => {
  const element = document.getElementById("title");

  const computedStyle = window.getComputedStyle(element, null);

  let result = "";

  for (const property in element.style) {
    if (Object.hasOwn(element.style, property)) {
      result += `  ${property} = '${element.style[property]}' > '${computedStyle[property]}'\n`;
    }
  }

  console.log(result);
};

const fun4 = () => {
  const element = document.getElementById("title");

  console.log(element.classList);
};

const fun5 = () => {
  const element = document.getElementById("title");

  console.log(element.classList.contains("Script_title__kh9VV"));
};

const fun6 = () => {
  const element = document.getElementById("title");

  element.classList.add("emphasis");

  console.log(element.classList);
};

const fun7 = () => {
  const element = document.getElementById("title");

  element.classList.remove("emphasis");

  console.log(element.classList);
};

const fun8 = () => {
  const element = document.getElementById("title");

  element.classList.toggle("emphasis");

  console.log(element.classList);
};

const fun9 = () => {
  const element = document.getElementById("title");

  element.classList.replace("Script_title__kh9VV", "emphasis");

  console.log(element.classList);
};

const items = [
  {
    title: "HTMLElement.style.color",
    description: "color",
    func: fun1,
  },
  {
    title: "HTMLElement.style.background",
    description: "background",
    func: fun2,
  },
  {
    title: "window.getComputedStyle",
    description: "Returns an object containing the values of all CSS properties of an element.",
    func: fun3,
  },
  {
    title: "classList",
    description: "returns a live DOMTokenList collection of the class attributes of the element.",
    func: fun4,
  },
  {
    title: "classList",
    description: "contains",
    func: fun5,
  },
  {
    title: "classList",
    description: "add",
    func: fun6,
  },
  {
    title: "classList",
    description: "remove",
    func: fun7,
  },
  {
    title: "classList",
    description: "toggle",
    func: fun8,
  },
  {
    title: "classList",
    description: "replace",
    func: fun9,
  },
];
