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
                <div className={styles.summary_title}>DOM</div>
                <div className={styles.summary_description}>Document Object Model</div>
                <div className={styles.summary_description}>DOM은 웹페이지에 대한 인터페이스이다.</div>
                <div className={styles.summary_description}>기본적으로 여러 프로그램들이 페이지의 콘텐츠 및 구조, 그리고 스타일을 읽고 조작할 수 있도록 API를 제공한다.</div>
                <div className={styles.summary_title}>DOM Tree</div>
                <div className={styles.summary_description}>Document → Root Element → Element → Attribute or Text</div>
                <div className={styles.summary_description}></div>
                <div className={styles.summary_title}>Selector</div>
                <div className={styles.summary_description}>Tag Selector</div>
                <div className={styles.summary_description}>Class Selector</div>
                <div className={styles.summary_description}>ID Selector</div>
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
  const elements = document.getElementsByTagName("li");

  for (const element of elements) {
    console.log(element);

    element.style.backgroundColor = "#6ab7ff";
  }
};

const fun2 = () => {
  const elements = document.getElementsByClassName("list-item");

  for (const element of elements) {
    console.log(element);

    element.style.backgroundColor = "#6ab7ff";
  }
};

const fun3 = () => {
  const element = document.getElementById("title");

  element.style.backgroundColor = "#6ab7ff";
};

const fun4 = () => {
  const element = document.querySelector("#title");

  element.style.backgroundColor = "#4ebaaa";
};

const fun5 = () => {
  const elements = document.querySelectorAll(".list-item");

  for (const element of elements) {
    console.log(element);

    element.style.backgroundColor = "#4ebaaa";
  }
};

const fun6 = () => {
  const elements = document.querySelectorAll(".list-item button");

  console.log(elements.length);

  for (const element of elements) {
    console.log(element);

    element.style.backgroundColor = "#ff6090";
  }
};

const fun7 = () => {
  const elements = document.querySelectorAll(".list-item > div div > span");

  console.log(elements.length);

  for (const element of elements) {
    console.log(element);
  }

  elements[1].style.color = "#ff6090";
};

const fun8 = () => {
  const elements = document.querySelectorAll("#title, .list-item");

  console.log(elements.length);

  for (const element of elements) {
    console.log(element);
    element.style.backgroundColor = "#ff6090";
  }
};

const fun9 = () => {
  const elements = document.querySelectorAll(".list-item > div > button ~ div>span");
  console.log(elements.length);
  for (const element of elements) {
    console.log(element);
    element.style.backgroundColor = "#ff6090";
  }
};

const fun10 = () => {
  const elements = document.querySelectorAll(".list-item > div > button + div>span");

  console.log(elements.length);

  for (const element of elements) {
    console.log(element);
    element.style.backgroundColor = "#4ebaaa";
  }
};

const items = [
  {
    title: "getElementsByTagName",
    description: "getElementsByTagName",
    func: fun1,
  },
  {
    title: "getElementsByClassName",
    description: "getElementsByClassName",
    func: fun2,
  },
  {
    title: "getElementById",
    description: "getElementById",
    func: fun3,
  },
  {
    title: "querySelector",
    description: "querySelector",
    func: fun4,
  },
  {
    title: "querySelectorAll",
    description: "querySelectorAll",
    func: fun5,
  },
  {
    title: "Descendant combinator (A B)",
    description: "Descendant combinator (A B)",
    func: fun6,
  },
  {
    title: "Child combinator (A > B)",
    description: "Child combinator (A > B)",
    func: fun7,
  },
  {
    title: "Selector list (A, B)",
    description: "Selector list (A, B)",
    func: fun8,
  },
  {
    title: "General sibling combinator (A ~ B)",
    description: "General sibling combinator (A ~ B)",
    func: fun9,
  },
  {
    title: "Adjacent sibling combinator (A + B)",
    description: "Adjacent sibling combinator (A + B)",
    func: fun10,
  },
];
