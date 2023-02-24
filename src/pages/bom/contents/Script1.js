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
                <div className={styles.summary_title}>Window Object</div>
                <div className={styles.summary_description}>The window object represents an open window in a browser.</div>
                <div className={styles.summary_description}>If a document contain frames, the browser creates one window object for the HTML document, and one additional window object for each frame.</div>
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
  console.log(window);

  // Returns the topmost browser window
  console.log(window.top);

  // Returns the current window
  console.log(window.self);

  // Sets or returns the name of a window
  console.log(window.name);

  // Returns the parent window of the current window
  console.log(window.parent);
};

const fun2 = () => {
  // Returns the Screen object for the window See also The Screen object
  console.log(window.screen);

  // Returns the width or height of the browser window, including toolbars/scrollbars
  console.log(window.outerWidth, window.outerHeight);

  // Returns the width or height of the window's content area (viewport) including scrollbars
  console.log(window.innerWidth, window.innerHeight);

  // Returns the horizontal or vertical  coordinate of the window relative to the screen
  console.log(window.screenX, window.screenY);

  // Returns the horizontal or vertical coordinate of the window relative to the screen
  console.log(window.screenLeft, window.screenTop);

  // Returns the width or height of the browser window, including toolbars/scrollbars
  console.log(window.pageXOffset, window.pageYOffset);

  // An alias of pageXOffset, pageYOffset
  console.log(window.scrollX, window.scrollY);
};

const fun3 = () => {
  // Returns all window objects running in the window.
  console.log(window.frames);

  // Returns the frame in which the window runs.
  console.log(window.frameElement);

  // Returns the number of <iframe> elements in the current window
  console.log(window.length);
};

const fun4 = () => {
  // Returns the Navigator object for the window.
  console.log(window.navigator);
};

const fun5 = () => {
  // Returns the Location object for the window.
  console.log(window.location);

  for (const item in window.location) {
    console.log(item, "→", window.location[item]);
  }
};

const fun6 = () => {
  // Returns the History object for the window.
  console.log(window.history);
};

const fun7 = () => {
  // Allows to save key/value pairs in a web browser. Stores the data with no expiration date
  console.log(window.localStorage);
};

const fun8 = () => {
  // Returns a reference to the window that created the window
  console.log(window.opener);

  // Returns a boolean true if a window is closed.
  console.log(window.closed);

  // Returns the Console Object for the window. See also The Console Object.
  console.log(window.console);
};

const items = [
  {
    title: "window",
    description: "window",
    func: fun1,
  },
  {
    title: "window.screen",
    description: "window.screen",
    func: fun2,
  },
  {
    title: "window.frames",
    description: "window.frames",
    func: fun3,
  },
  {
    title: "window.navigator",
    description: "window.navigator",
    func: fun4,
  },
  {
    title: "window.location",
    description: "window.location",
    func: fun5,
  },
  {
    title: "window.history",
    description: "window.history",
    func: fun6,
  },
  {
    title: "window.localStorage",
    description: "window.localStorage",
    func: fun7,
  },
  {
    title: "window.opener",
    description: "window.opener",
    func: fun8,
  },
];
