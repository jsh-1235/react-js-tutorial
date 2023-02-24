import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script11({ ...props }) {
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
                <div className={styles.summary_title}>Async / await</div>
                <div className={styles.summary_description}>The async function declaration declares an async function where the await keyword is permitted within the function body.</div>
                <div className={styles.summary_description}>The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.</div>
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

// Promise pending
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("jsh");
    }, 1000);
  });
}

const fun1 = () => {
  const user = fetchUser();

  console.log(user);
};

const fun2 = () => {
  fetchUser().then(console.log);
};

const fun3 = async () => {
  const user = await fetchUser();

  console.log(user);
};

const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

async function getApple() {
  await delay(1000);

  return "🍎";
}

async function getBanana() {
  await delay(500);

  return "🍌";
}

async function getMelon() {
  await delay(1500);

  // throw new Error("The data does not exist.");

  return "🍈";
}

const fun4 = () => {
  console.time("Promise Chaining");

  getApple().then((apple) => {
    return getBanana().then((banana) => {
      return getMelon().then((melon) => {
        console.log(`${apple} → ${banana} → ${melon}`);

        console.timeEnd("Promise Chaining");
      });
    });
  });
};

const fun5 = async () => {
  try {
    console.time("Serial Execution");

    const apple = await getApple();
    const banana = await getBanana();
    const melon = await getMelon();

    console.log(`${apple} → ${banana} → ${melon}`);

    console.timeEnd("Serial Execution");
  } catch (err) {
    console.error(err);
  }
};

const fun6 = async () => {
  try {
    console.time("Parallel Execution");

    // Promise state is pending.
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const melonPromise = getMelon();

    console.log(applePromise, bananaPromise, melonPromise);

    const apple = await applePromise;
    const banana = await bananaPromise;
    const melon = await melonPromise;

    console.log(`${apple} → ${banana} → ${melon}`);

    console.timeEnd("Parallel Execution");
  } catch (err) {
    console.error(err);
  }
};

const fun7 = () => {
  console.time("Promise.all");

  Promise.all([getApple(), getBanana(), getMelon()])
    .then((fruit) => fruit.join("→"))
    .then(console.log)
    .catch(console.error)
    .finally(() => {
      console.timeEnd("Promise.all");
    });
};

const fun8 = () => {
  console.time("Promise.race");

  Promise.race([getApple(), getBanana(), getMelon()])
    .then(console.log)
    .catch(console.error)
    .finally(() => {
      console.timeEnd("Promise.race");
    });
};

const items = [
  {
    title: "Synchronous Execute",
    description: "Promise pending",
    func: fun1,
  },
  {
    title: "Asynchronous Execute",
    description: "Promise fulfilled or rejected",
    func: fun2,
  },
  {
    title: "Asynchronous Execute",
    description: "async / await",
    func: fun3,
  },
  {
    title: "Promise Hell",
    description: "Promise chaining too complicated",
    func: fun4,
  },
  {
    title: "Serial Execution",
    description: "await",
    func: fun5,
  },
  {
    title: "Parallel Execution",
    description: "dirty code",
    func: fun6,
  },
  {
    title: "Promise.all",
    description: "The Promise.all() static method takes an iterable of promises as input and returns a single Promise.",
    func: fun7,
  },
  {
    title: " Promise.race",
    description: "The Promise.race() static method takes an iterable of promises as input and returns a single Promise. ",
    func: fun8,
  },
];
