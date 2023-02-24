import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script7({ ...props }) {
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
                <div className={styles.summary_title}>window.DOCUMENT</div>
                <div className={styles.summary_description}>When an HTML document is loaded into a web browser, it becomes a document object.</div>
                <div className={styles.summary_description}>The document object is the root node of the HTML document.</div>
                <div className={styles.summary_description}>The document object is a property of the window object.</div>
                <div className={styles.summary_description}>The document object is accessed with window.document or just document</div>
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
  console.log(window.document);

  // Returns the <head> element of the current document.
  console.log("head", window.document.head);

  // Returns the <body> or <frameset> node of the current document.
  console.log("body", window.document.body);
};

const fun2 = () => {
  // The read-only childNodes property of the Node interface returns a live NodeList of child nodes of the given element where the first child node is assigned index 0.
  console.log("childNodes", window.document.childNodes);
};

const fun3 = () => {
  // Returns the child elements of the current document.
  console.log("children", window.document.children);

  // Returns the number of child elements of the current document.
  console.log("childElementCount", window.document.childElementCount);
};

const fun4 = () => {
  console.log("URL", window.document.URL);

  // Returns the document location as a string.
  console.log("documentURI", window.document.documentURI);
};

const fun5 = () => {
  // Returns the Document Type Definition (DTD) of the current document.
  console.log("doctype", window.document.doctype);

  console.log("characterSet", window.document.characterSet);

  console.log("contentType", window.document.contentType);

  // Indicates whether the document is rendered in quirks or strict mode.
  console.log("compatMode", window.document.compatMode);

  // The document.title property gets or sets the current title of the document.
  console.log("title", window.document.title);

  // Returns the FontFaceSet interface of the current document.
  console.log("fonts", window.document.fonts);

  // Returns an HTMLCollection of the images in the document.
  console.log("images", window.document.images);
};

const fun6 = () => {
  // Returns the Element within the DOM that currently has focus.
  console.log("activeElement", window.document.activeElement);
};

const items = [
  {
    title: "window.document",
    description: "head & body",
    func: fun1,
  },
  {
    title: "window.document.childNodes",
    description: "The read-only childNodes property of the Node interface returns a live NodeList of child nodes.",
    func: fun2,
  },
  {
    title: "window.document.children",
    description: "Returns the child elements of the current document.",
    func: fun3,
  },
  {
    title: "window.document.URL",
    description: "Returns the document location as a string.",
    func: fun4,
  },
  {
    title: "location.document.doctype",
    description: "Returns the Document Type Definition (DTD) of the current document.",
    func: fun5,
  },
  {
    title: "location.document.activeElement ",
    description: "Returns the Element within the DOM that currently has focus.",
    func: fun6,
  },
];
