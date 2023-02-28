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
      <span className={styles.title}>{props.title}</span>
      <span className={styles.border} />
      <div className={styles.content}>
        <ul title={name.title}>
          <div className={styles.summary}>
            <details open>
              <summary>summary</summary>
              <div className={styles.summary_container}>
                <div className={styles.summary_title}>Indexed DB</div>
                <div className={styles.summary_description}>IndexedDB는 사용자의 브라우저에 데이터를 영구적으로 저장할 수 있는 방법 중 하나입니다.</div>
                <div className={styles.summary_description}>IndexedDB를 사용하여 네트워크 상태에 상관없이 풍부한 쿼리 기능을 이용할 수 있는 웹 어플리케이션을 만들 수 있기 때문에, 여러분의 웹 어플리케이션은 온라인과 오프라인 환경에서 모두 동작할 수 있습니다.</div>
                <div className={styles.summary_title}>작업 순서</div>
                <div className={styles.summary_description}>데이터베이스를 엽니다.</div>
                <div className={styles.summary_description}>객체 저장소(Object store)를 생성합니다.</div>
                <div className={styles.summary_description}>트랜젝션(Transaction)을 시작하고, 데이터를 추가하거나 읽어들이는 등의 데이터베이스 작업을 요청합니다.</div>
                <div className={styles.summary_description}>DOM 이벤트 리스너를 사용하여 요청이 완료될때까지 기다립니다.</div>
                <div className={styles.summary_description}>요청 객체에서 찾을 수 있는 결과를 가지고 무언가를 합니다.</div>
                <div className={styles.summary_description}>IndexedDB 는 javascript 가 이해하는 어떠한 값이라도 모두 저장할 수 있다</div>
                <div className={styles.summary_description}>IndexedDB 는 용량 제한은 특별히 없으나, HDD 저장소 상태 나 브라우저의 상태에 따라서 달라 질 수 있다.</div>
                <div className={styles.summary_description}>시크릿 모드에서 IndexedDB, Storage 를 사용하면, 값은 저장되지 않고 브라우저 종료시 사라진다.</div>
                <div className={styles.summary_description}>IndexedDB 를 잘 활용하면 PWA 같은 SPA 페이지를 만들때 매우 도움이 될 것 같다.</div>
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

const DATABASE = {
  name: "bt",
  version: 1,
  store: "products",
};

let db;

const fun1 = () => {
  // // This is what our customer data looks like.

  const request = window.indexedDB.open(DATABASE.name, DATABASE.version);

  request.onsuccess = function (event) {
    console.log("success", event.target.result);

    db = event.target.result;
  };

  request.onerror = function (event) {
    console.error("error", event.target.errorCode);
  };

  request.onupgradeneeded = (event) => {
    const db = event.target.result;

    let oldVersion = event.oldVersion;

    console.log("onupgradeneeded", oldVersion);

    // Create an objectStore for this database
    const objectStore = db.createObjectStore(DATABASE.store, { keyPath: "id", autoIncrement: true });

    objectStore.createIndex("name", "name", {
      unique: true,
    });

    console.log(objectStore);

    if (oldVersion < 1) {
    }

    if (oldVersion < 2) {
    }

    if (oldVersion < 3) {
    }
  };
};

const fun2 = () => {
  if (db) {
    console.log(db);

    const store = db.transaction(DATABASE.store, "readonly").objectStore(DATABASE.store);

    console.log(store);

    const request = store.getAll();

    request.onsuccess = function (event) {
      console.table(event.target.result);
    };

    request.onerror = function (event) {
      console.error(event.target);
    };

    // request.addEventListener("success", (event) => {
    //   console.log(event.target.result);
    // });

    // request.addEventListener("error", (event) => {
    //   console.log(event);
    // });
  }
};

const fun3 = () => {
  if (db) {
    // console.log(db);

    // const store = db.transaction(DATABASE.store, "readwrite").objectStore(DATABASE.store);

    const transaction = db.transaction(DATABASE.store, "readwrite");
    const store = transaction.objectStore(DATABASE.store);

    transaction.oncomplete = () => {
      console.log("oncomplete");
    };

    const request = store.add({
      name: `house${Date.now().toLocaleString()}`,
    });

    request.onsuccess = function (event) {
      console.log(event.target.result);

      store.get(event.target.result).onsuccess = (event) => {
        console.log(event.target.result);
      };
    };

    request.onerror = function (event) {
      console.error(event.target);
    };
  }
};

const fun4 = () => {
  if (db) {
    const store = db.transaction(DATABASE.store, "readwrite").objectStore(DATABASE.store);

    store.get(1).onsuccess = (event) => {
      const data = event.target.result;

      data.name = "car";

      store.put(data).onsuccess = function (event) {
        // console.log(event.target.result);

        store.getAll().onsuccess = (event) => {
          console.table(event.target.result);
        };
      };
    };
  }
};

const fun5 = () => {
  if (db) {
    // console.log(db);

    const transaction = db.transaction(DATABASE.store, "readwrite");
    const store = transaction.objectStore(DATABASE.store);
    // let store = db.transaction(DATABASE.store, "readwrite").objectStore(DATABASE.store);

    const request = store.delete(1);

    transaction.oncomplete = () => {};

    request.onsuccess = function (event) {
      console.log(event.target.result);

      store.getAll().onsuccess = (event) => {
        console.table(event.target.result);
      };
    };

    request.onerror = function (event) {
      console.error(event.target);
    };
  }
};

const fun6 = () => {
  if (db) {
    // console.log(db);

    const store = db.transaction(DATABASE.store, "readwrite").objectStore(DATABASE.store);

    const request = store.clear();

    request.onsuccess = function (event) {
      store.getAll().onsuccess = (event) => {
        console.table(event.target.result);
      };
    };

    request.onerror = function (event) {
      console.error(event.target);
    };
  }
};

const fun7 = () => {
  const request = window.indexedDB.deleteDatabase(DATABASE.name);

  request.onsuccess = function (event) {
    console.log("Database deleted successfully");

    console.log(event.result); // should be undefined
  };

  request.onerror = function (event) {
    console.error("Error deleting database.");
  };
};

const fun8 = () => {
  const promise = window.indexedDB.databases().then((databases) => {
    console.log(databases);

    if (databases.length) {
      console.log(databases[0].name, databases[0].version);
    }
  });
};

const items = [
  {
    title: "Indexed DB - open()",
    description: "open",
    func: fun1,
  },
  {
    title: "Indexed DB - getAll()",
    description: "read",
    func: fun2,
  },
  {
    title: "Indexed DB - add()",
    description: "add",
    func: fun3,
  },
  {
    title: "Indexed DB - put()",
    description: "update",
    func: fun4,
  },
  {
    title: "Indexed DB - deleted()",
    description: "remove",
    func: fun5,
  },
  {
    title: "Indexed DB - clear()",
    description: "clear",
    func: fun6,
  },
  {
    title: "Indexed DB - deleteDatabase()",
    description: "drop",
    func: fun7,
  },
  {
    title: "Indexed DB - databases()",
    description: "info",
    func: fun8,
  },
];
