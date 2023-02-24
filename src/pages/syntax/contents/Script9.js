import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script9({ ...props }) {
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
                <div className={styles.summary_title}>Callback</div>
                <div className={styles.summary_description}>A callback function is a function passed into another function as an argument.</div>
                <div className={styles.summary_description}>which is then invoked inside the outer function to complete some kind of routine or action.</div>
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
  console.log(1);
  console.log(2);
  console.log(3);
};

const fun2 = () => {
  console.log(1);
  setTimeout(() => console.log(2), 1000);
  console.log(3);
};

function print(callback) {
  callback();
}

const fun3 = () => {
  console.log(1);

  print(() => {
    console.log(2);
  });

  console.log(3);
};

function printWithDelay(callback, delay) {
  setTimeout(() => {
    callback();
  }, delay);
}

const fun4 = () => {
  console.log(1);

  console.time("elapsed time");

  printWithDelay(() => {
    console.log(2);
    console.timeEnd("elapsed time");
  }, 2000);

  console.log(3);
};

class Storage {
  login(id, password, onSuccess, onError) {
    setTimeout(() => {
      if ((id === "jsh" && password === "12345") || (id === "kar" && password === "12345")) {
        onSuccess(id);
      } else {
        onError(new Error("You do not have access."));
      }
    }, 1000);
  }
  getRoles(id, onSuccess, onError) {
    setTimeout(() => {
      if (id === "jsh") {
        onSuccess({
          id: "jsh",
          role: "admin",
        });
      } else {
        onError(new Error("You are not an admin."));
      }
    }, 1000);
  }
}

const fun5 = () => {
  const storage = new Storage();

  storage.login(
    "jsh",
    "12345",
    (id) => {
      console.log(`${id} is logged in.`);

      storage.getRoles(
        id,
        (user) => {
          console.log(`${user.id} → ${user.role}`);
        },
        console.error
      );
    },
    console.error
  );
};

const items = [
  {
    title: "Synchronous Execute",
    description: "Synchronous Execute",
    func: fun1,
  },
  {
    title: "Asynchronous Execute",
    description: ">Asynchronous Execute",
    func: fun2,
  },
  {
    title: "Synchronous Callback",
    description: "Synchronous Callback",
    func: fun3,
  },
  {
    title: "Asynchronous Callback",
    description: "Asynchronous Callback",
    func: fun4,
  },
  {
    title: "Callback Hell",
    description: "Callback Hell",
    func: fun5,
  },
];
