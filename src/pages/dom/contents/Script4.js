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
                <div className={styles.summary_title}>Node</div>
                <div className={styles.summary_description}>Document → HTMLDocument</div>
                <div className={styles.summary_description}>CharacterData → Text → Comment</div>
                <div className={styles.summary_description}>Element → HTMLElement</div>
                <div className={styles.summary_description}>Attr</div>
              </div>
              <div className={styles.summary_container}>
                <div className={styles.summary_title}>Node Type</div>
                <div className={styles.summary_description}>1 → ELEMENT_NODE</div>
                <div className={styles.summary_description}>2 → ATTRIBUTE_NODE</div>
                <div className={styles.summary_description}>3 → TEXT_NODE</div>
                <div className={styles.summary_description}>4 → CDATA_SECTION_NODE</div>
                <div className={styles.summary_description}>5 → ENTITY_REFERENCE_NODE</div>
                <div className={styles.summary_description}>6 → ENTITY_NODE</div>
                <div className={styles.summary_description}>7 → PROCESSING_INSTRUCTION_NODE</div>
                <div className={styles.summary_description}>8 → COMMENT_NODE</div>
                <div className={styles.summary_description}>9 → DOCUMENT_NODE</div>
                <div className={styles.summary_description}>10 → DOCUMENT_TYPE_NODE</div>
                <div className={styles.summary_description}>11 → DOCUMENT_FRAGMENT_NODE</div>
                <div className={styles.summary_description}>12 → NOTATION_NODE</div>
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
  const elements = document.getElementsByClassName("list-item");

  console.log(elements.constructor.name);
  console.log(elements);
  console.log(elements.length);
};

const fun2 = () => {
  const element = document.getElementById("details");

  console.log(element.constructor.name);

  console.log(element);

  console.log("nodeType", element.nodeType);
  console.log("nodeName", element.nodeName);
  // A boolean value that is true if the node is connected to its relevant context object, and false if not.
  console.log("isConnected", element.isConnected);
};

const fun3 = () => {
  const element = document.getElementById("details");

  console.log(element);

  console.log("hasChildNodes", element.hasChildNodes());
};

const fun4 = () => {
  const element = document.getElementById("details");

  console.log(element);

  console.log(element.children);
};

const fun5 = () => {
  const element = document.getElementById("details");

  console.log(element.children);

  console.log("firstChild", element.firstChild);
};

const fun6 = () => {
  const element = document.getElementById("details");

  console.log(element.children);

  console.log("lastChild", element.lastChild);
};

const fun7 = () => {
  const element = document.getElementById("details");

  console.log("firstChild", element.firstChild);

  console.log("nextSibling", element.firstChild.nextSibling);
};

const fun8 = () => {
  const element = document.getElementById("details");

  console.log("lastChild", element.lastChild);

  console.log("previousSibling", element.lastChild.previousSibling);
};

const fun9 = () => {
  const element = document.getElementById("details");

  console.log(element.firstChild);

  console.log("contains()", element.contains(element.firstChild));
};

const fun10 = () => {
  const element = document.getElementById("details");

  console.log("firstChild", element.firstChild);

  console.log("childNodes", element.firstChild.childNodes);

  console.log("nodeValue", element.firstChild.childNodes[0].nodeValue);
};

const fun11 = () => {
  const element = document.getElementById("details");

  console.log("firstChild", element.firstChild);

  console.log("textContent", element.firstChild.textContent);
};

const fun12 = () => {
  const element = document.getElementById("details");

  console.log("firstChild", element.firstChild);

  console.log("parentElement", element.firstChild.parentElement);
};

function traverse(target, callback) {
  if (target.nodeType === 1) {
    callback(target);

    var child = target.childNodes;

    for (let i = 0; i < child.length; i++) {
      const element = child[i];
      traverse(element, callback);
    }
  }
}

const fun13 = () => {
  const element = document.getElementById("details");

  // console.log(element.childNodes);

  traverse(element, function (element) {
    console.log(element.textContent);
  });
};

const items = [
  {
    title: "HTMLCollection",
    description: "The HTMLCollection interface represents a generic collection of elements.",
    func: fun1,
  },
  {
    title: "HTMLElement",
    description: "nodeType & nodeName",
    func: fun2,
  },
  {
    title: "Node.hasChildNodes()",
    description: "Returns a boolean value indicating whether the given Node has child nodes or not.",
    func: fun3,
  },
  {
    title: "Node.children",
    description: "Returns a live HTMLCollection which contains all of the child elements of the element upon which it was called.",
    func: fun4,
  },
  {
    title: "Node.firstChild",
    description: "Returns a Node representing the first direct child node of the node, or null if the node has no child.",
    func: fun5,
  },
  {
    title: "Node.lastChild",
    description: "Returns a Node representing the last direct child node of the node, or null if the node has no child.",
    func: fun6,
  },
  {
    title: "Node.nextSibling",
    description: "Returns a Node representing the next node in the tree, or null if there isn't such node.",
    func: fun7,
  },
  {
    title: "Node.previousSibling",
    description: "Returns a Node representing the previous node in the tree, or null if there isn't such node.",
    func: fun8,
  },
  {
    title: "Node.contains()",
    description: "Returns true or false value indicating whether or not a node is a descendant of the calling node.",
    func: fun9,
  },
  {
    title: "nodeValue",
    description: "Returns or sets the value of the current node",
    func: fun10,
  },
  {
    title: "textContent",
    description: "The textContent property of the Node interface represents the text content of the node and its descendants.",
    func: fun11,
  },
  {
    title: "parentElement",
    description: "Returns the DOM node's parent Element, or null if the node either has no parent, or its parent isn't a DOM Element.",
    func: fun12,
  },
  {
    title: "childNodes",
    description: "The read-only childNodes property of the Node interface returns a live NodeList of child nodes of the given element where the first child node is assigned index 0.",
    func: fun13,
  },
];
