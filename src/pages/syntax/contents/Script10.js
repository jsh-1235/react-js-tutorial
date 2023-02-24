import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script10({ ...props }) {
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
                <div className={styles.summary_title}>Promise</div>
                <div className={styles.summary_description}>The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.</div>
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
  // Producer : when new Promise is created, the executor runs automatically
  const promise = new Promise((resolve, reject) => {
    console.log("Producer");

    setTimeout(() => {
      // resolve("fulfilled");
      reject("rejected");
    }, 1000);
  });

  // Consumer: then, catch, finally

  promise
    .then((respone) => {
      console.log(respone);
    })
    .catch((err) => console.error(err))
    .finally(() => {
      console.log("finally");
    });
};

const fun2 = () => {
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

  fetchNumber
    .then((number) => number + 1)
    .then((number) => number + 1)
    .then((number) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(number - 1), 1000);
      });
    })
    .then((result) => console.log(result));
};

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    console.log(hen);
    // setTimeout(() => resolve(`${hen} → 🥚`), 1000);

    setTimeout(() => reject(`error ${hen} → 🥚`), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    console.log(egg);
    setTimeout(() => resolve(`${egg} → 👨‍🍳`), 1000);
  });

const fun3 = () => {
  // getHen().then((hen) => getEgg(hen).then((egg) => cook(egg).then((meal) => console.log(meal))));
  // getHen()
  //   .then((hen) => getEgg(hen))
  //   .then((egg) => cook(egg))
  //   .then((meal) => console.log(meal));

  getHen().then(getEgg).then(cook).then(console.log);
};

const fun4 = () => {
  getHen()
    .then(getEgg)
    .catch((err) => "🍞")
    .then(cook)
    .then(console.log);
};

class Storage {
  login(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((id === "jsh" && password === "12345") || (id === "kar" && password === "12345")) {
          resolve(id);
        } else {
          reject(new Error("You do not have access."));
        }
      }, 1000);
    });
  }

  getRoles(id) {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        if (id === "jsh") {
          resolve({
            id: "jsh",
            role: "admin",
          });
        } else {
          reject(new Error("You are not an admin."));
        }
      }, 2000);
    });
  }
}

const fun5 = () => {
  const storage = new Storage();

  // storage
  //   .login("jsh", "12345")
  //   .then((id) => storage.getRoles(id))
  //   .then((user) => console.table(user));

  console.time("elapsed time");

  storage
    .login("jsh", "12345")
    // .login("kar", "12345")
    .then(storage.getRoles)
    .then(console.table)
    .catch(console.error)
    .finally(() => {
      console.timeEnd("elapsed time");
    });
};

const items = [
  {
    title: "Promise constructor",
    description: "Producer / Consumer",
    func: fun1,
  },
  {
    title: "Promise chaining",
    description: "then()",
    func: fun2,
  },
  {
    title: "cooking",
    description: "cooking",
    func: fun3,
  },
  {
    title: "Error Handling",
    description: "try-catch statement",
    func: fun4,
  },
  {
    title: "login",
    description: "login",
    func: fun5,
  },
];
