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
                <div className={styles.summary_title}>Local Storage</div>
                <div className={styles.summary_description}>localStorage 읽기 전용 속성을 사용하면 Document 출처의 Storage 객체에 접근할 수 있습니다.</div>
                <div className={styles.summary_description}>저장한 데이터는 브라우저 세션 간에 공유됩니다.</div>
                <div className={styles.summary_description}>localStorage는 sessionStorage와 비슷하지만, localStorage의 데이터는 만료되지 않고 sessionStorage의 데이터는 페이지 세션이 끝날 때, 즉 페이지를 닫을 때 사라지는 점이 다릅니다.</div>
                <div className={styles.summary_description}>"사생활 보호 모드" 중 생성한 localStorage 데이터는 마지막 "사생활 보호" 탭이 닫힐 때 지워집니다.</div>
                <div className={styles.summary_description}>localStorage에 저장한 자료는 페이지 프로토콜별로 구분합니다. 특히 HTTP(http://example.com)로 방문한 페이지에서 저장한 데이터는 같은 페이지의 HTTPS(https://example.com)와는 다른 localStorage에 저장됩니다.</div>
                <div className={styles.summary_description}>키와 값은 항상 각 문자에 2바이트를 할당하는 UTF-16 DOMString의 형태로 저장합니다. 객체와 마찬가지로 정수 키는 자동으로 문자열로 변환합니다.</div>
                <div className={styles.summary_description}>최대 10MB 만 저장이 가능하며, 오직 String 형태만 저장이 가능하다.</div>
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
  const db = {
    product: [{ id: 0, name: "house" }],
  };

  window.localStorage.setItem("db", JSON.stringify(db));
};

const fun2 = () => {
  // The syntax for reading the localStorage item is as follows:
  const db = JSON.parse(window.localStorage.getItem("db"));

  console.log(db);
};

const fun3 = () => {
  const db = JSON.parse(window.localStorage.getItem("db"));

  if (!db) return;

  // The following snippet accesses the current domain's local Storage object and adds a data item to it using Storage.setItem().
  db.product.push({ id: db.product.length + 1, name: "car" });

  window.localStorage.setItem("db", JSON.stringify(db));

  console.log(db);
};

const fun4 = () => {
  const db = JSON.parse(window.localStorage.getItem("db"));

  if (!db) return;

  const target = db.product.find((item) => item.name === "house");

  if (target) {
    target.name = "home";
  }

  window.localStorage.setItem("db", JSON.stringify(db));

  console.log(db);
};

const fun5 = () => {
  const db = JSON.parse(window.localStorage.getItem("db"));

  if (!db) return;

  db.product = db.product.filter((item) => item.name !== "car");

  window.localStorage.setItem("db", JSON.stringify(db));

  console.log(db);
};

const fun6 = () => {
  // The syntax for removing the localStorage item is as follows:
  window.localStorage.removeItem("db");
};

const fun7 = () => {
  // The syntax for removing all the localStorage items is as follows:
  window.localStorage.removeItem("db");
};

const items = [
  {
    title: "Local Storage",
    description: "create",
    func: fun1,
  },
  {
    title: "Local Storage",
    description: "read",
    func: fun2,
  },
  {
    title: "Local Storage",
    description: "add",
    func: fun3,
  },
  {
    title: "Local Storage",
    description: "update",
    func: fun4,
  },
  {
    title: "Local Storage",
    description: "remove",
    func: fun5,
  },
  {
    title: "Local Storage",
    description: "removeItem",
    func: fun6,
  },
  {
    title: "Local Storage",
    description: "clear",
    func: fun7,
  },
];
