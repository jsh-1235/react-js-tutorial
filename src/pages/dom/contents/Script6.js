import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script6({ ...props }) {
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
                <div href="http://www.google.com" className={styles.summary_title}>
                  CharacterData
                </div>
                <div className={styles.summary_description}>CharacterData 노드는 DOM에서 실질적인 데이터가 저장되는 객체이이다.</div>
                <div className={styles.summary_description}>CharacterData = Text + Comment</div>
                <div id="target" className={styles.summary_description}>
                  TEXT
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
  const target = window.document.getElementById("target");

  if (target.hasChildNodes()) {
    target.firstChild.appendData("→");
  } else {
    const text = window.document.createTextNode("TEXT");

    target.appendChild(text);

    target.firstChild.appendData("→");
  }
};

const fun2 = () => {
  const target = window.document.getElementById("target");

  if (target.hasChildNodes()) {
    target.firstChild.insertData(0, "←");
  } else {
    const text = window.document.createTextNode("TEXT");

    target.appendChild(text);

    target.firstChild.insertData(0, "←");
  }
};

const fun3 = () => {
  const target = window.document.getElementById("target");

  const div = window.document.createElement("div");
  div.setAttribute("class", styles.summary_description);

  const text = window.document.createTextNode("before");
  div.appendChild(text);

  target.before(div);
};

const fun4 = () => {
  const target = window.document.getElementById("target");

  const div = window.document.createElement("div");
  div.setAttribute("class", styles.summary_description);

  const text = window.document.createTextNode("after");
  div.appendChild(text);

  target.after(div);
};

const fun5 = () => {
  const target = window.document.getElementById("target");

  if (target.hasChildNodes()) {
    target.firstChild.deleteData(0, 1);
  }
};

const fun6 = () => {
  const target = window.document.getElementById("target");

  if (target.hasChildNodes()) {
    target.firstChild.remove();
  }
};

const fun7 = () => {
  const target = window.document.getElementById("target");

  if (target.hasChildNodes()) {
    const text = target.firstChild;

    console.log(text, target.innerText);

    text.replaceData(0, text.length, "-");
  }
};

const fun8 = () => {
  const target = window.document.getElementById("target");

  if (target.hasChildNodes()) {
    const text = target.firstChild;

    const result = text.substringData(0, text.length);

    console.log(result, target.innerText);
  }
};

// insertAdjacentText(where, data)
const fun9 = () => {
  const target = window.document.getElementById("target");

  target.insertAdjacentText("beforebegin", "beforebegin");
};

const fun10 = () => {
  const target = window.document.getElementById("target");

  target.insertAdjacentText("afterbegin", "afterbegin");
};

const fun11 = () => {
  const target = window.document.getElementById("target");

  target.insertAdjacentText("beforeend", "beforeend");
};

const fun12 = () => {
  const target = window.document.getElementById("target");

  target.insertAdjacentText("afterend", "afterend");
};

const fun13 = () => {
  const target = window.document.getElementById("target");

  target.innerText = "innerText";
};

const fun14 = () => {
  const target = window.document.getElementById("target");

  target.outerText = "outerText";
};

const fun15 = () => {
  const target = window.document.getElementById("target");

  target.innerHTML = "<button>innerHTML</button>";
};

const fun16 = () => {
  const target = window.document.getElementById("target");

  target.outerHTML = "<button>innerHTML</button>";
};

const items = [
  {
    title: "appendData()",
    description: "Adds the provided data to the end of the node's current data.",
    func: fun1,
  },
  {
    title: "insertData()",
    description: "Inserts the provided data into this CharacterData node's current data.",
    func: fun2,
  },
  {
    title: "before()",
    description: "Inserts a set of Node objects and strings in the children list of the CharacterData's parent, just before the CharacterData node.",
    func: fun3,
  },
  {
    title: "after()",
    description: "Inserts a set of Node objects or strings in the children list of the object's parent, just after the object itself.",
    func: fun4,
  },
  {
    title: "deleteData()",
    description: "removes all or part of the data from this CharacterData node.",
    func: fun5,
  },
  {
    title: "remove()",
    description: "The remove() method of the CharacterData removes the text contained in the node.",
    func: fun6,
  },
  {
    title: "replaceData",
    description: "removes a certain number of characters of the existing text in a given CharacterData node.",
    func: fun7,
  },
  {
    title: "substringData",
    description: "Returns a portion of the existing data, starting at the specified index and extending for a given number of characters afterwards.",
    func: fun8,
  },
  {
    title: "insertAdjacentText",
    description: "(beforebegin, Before the element itself.)",
    func: fun9,
  },
  {
    title: "insertAdjacentText",
    description: "(afterbegin, Just inside the element, before its first child.)",
    func: fun10,
  },
  {
    title: "insertAdjacentText",
    description: "(beforeend, Just inside the element, after its last child.)",
    func: fun11,
  },
  {
    title: "insertAdjacentText",
    description: "(afterend, After the element itself.)",
    func: fun12,
  },
  {
    title: "innerText",
    description: "Represents the rendered text content of a node and its descendants.",
    func: fun13,
  },
  {
    title: "outerText",
    description: "When used as a setter it replaces the whole current node with the given text.",
    func: fun14,
  },
  {
    title: "innerHTML",
    description: "The Element property innerHTML gets or sets the HTML or XML markup contained within the element.",
    func: fun15,
  },
  {
    title: "outerHTML",
    description: "It can also be set to replace the element with nodes parsed from the given string.",
    func: fun16,
  },
];
