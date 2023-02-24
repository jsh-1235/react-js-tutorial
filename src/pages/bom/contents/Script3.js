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
                <div className={styles.summary_title}>window.location</div>
                <div className={styles.summary_description}>The Window.location read-only property returns a Location object with information about the current location of the document.</div>
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
  const source = "http://localhost:3001/bom/window object";

  const url = encodeURI(source);

  console.log(url);

  console.log(decodeURI(url));
};

const fun2 = () => {
  // Returns the Location object for the window.
  console.log(window.location);

  for (const item in window.location) {
    console.log(item, "→", window.location[item]);
  }
};

const fun3 = () => {
  // Reloading the current page

  window.location.reload();
};

const fun4 = () => {
  window.location.href = "/";
};

const fun5 = () => {
  // window.location = "https://www.naver.com";

  //The Location.assign() method causes the window to load and display the document at the URL specified.
  // After the navigation occurs, the user can navigate back to the page that called Location.assign() by pressing the "back" button.

  window.location.assign("https://www.naver.com");
};

const fun6 = () => {
  const search = "car";

  // The replace() method of the Location interface replaces the current resource with the one at the provided URL.
  // The difference from the assign() method is that after using replace() the current page will not be saved in session History.
  // meaning the user won't be able to use the back button to navigate to it.

  window.location.replace(`https://www.google.com/search?q=${search}`);
};

const fun7 = () => {
  window.location.search = "search=id";
};

const items = [
  {
    title: "URL",
    description: "encodeURI / decodeURI",
    func: fun1,
  },
  {
    title: "window.location",
    description: "window.location",
    func: fun2,
  },
  {
    title: "window.reload",
    description: "reload",
    func: fun3,
  },
  {
    title: "window.location.href",
    description: "Redirection",
    func: fun4,
  },
  {
    title: "location.assign",
    description: "Navigate to a new page",
    func: fun5,
  },
  {
    title: "location.replace",
    description: "Navigate to a new page",
    func: fun6,
  },
  {
    title: "window.location.search",
    description: "window.location.search",
    func: fun7,
  },
];
