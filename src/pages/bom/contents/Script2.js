import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script2({ ...props }) {
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
                <div className={styles.summary_title}>window.open()</div>
                <div className={styles.summary_description}>The open() method of the Window interface loads a specified resource into a new or existing browsing context (that is, a tab, a window, or an iframe) under a specified name.</div>
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
  window.alert(window.location);
};

const fun3 = () => {
  let id = window.prompt("What is your id?");

  if (id) {
    let result = window.confirm("ok?");

    if (result) {
      alert(id);
    } else {
      alert("cancel");
    }
  }
};

const fun4 = () => {
  window.open("http://www.google.com", "_blank");
};

const fun5 = () => {
  window.open("http://www.google.com", "_self");
};

const fun6 = () => {
  window.open("http://www.google.com", "ot");
};

let google;

const fun7 = () => {
  // 브라우저는 같은 도메인에서만 팝업을 허용하며 사용자가 명시적으로 사용 여부를 선택할 수 있게 정책을 펴고 있다.

  // url, target, windowFeatures
  // google = window.open("http://www.google.com", "_blank", "width=200, height=200, resizable=no");

  // google = window.open("../popup.html", "google", "width=400, height=400, resizable=no");

  google = window.open("../popup.html", "google", "width=400px, height=400px");
};

const fun8 = () => {
  google.document.getElementById("content").innerText = "server message";
};

const fun9 = () => {
  google?.close();
};

const items = [
  {
    title: "window",
    description: "top / self / name / parent",
    func: fun1,
  },
  {
    title: "window.alert",
    description: "window.alert",
    func: fun2,
  },
  {
    title: "prompt",
    description: "confirm",
    func: fun3,
  },
  {
    title: "target _blank",
    description: "window.open",
    func: fun4,
  },
  {
    title: "target _self",
    description: "window.open",
    func: fun5,
  },
  {
    title: "target name",
    description: "window.open",
    func: fun6,
  },
  {
    title: "popup",
    description: "open",
    func: fun7,
  },
  {
    title: "popup",
    description: "update",
    func: fun8,
  },
  {
    title: "popup",
    description: "close",
    func: fun9,
  },
];
