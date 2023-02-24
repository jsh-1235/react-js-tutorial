import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script5({ ...props }) {
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
                <div className={styles.summary_title}>Feature</div>
                <div className={styles.summary_description}>fundamental building block in the program</div>
                <div className={styles.summary_description}>subprogram can be used multiple times</div>
                <div className={styles.summary_description}>performs a task or calculates a value</div>
                <div className={styles.summary_description}>function is object : First Class Function</div>
                <div className={styles.summary_title}>Function Hoisting</div>
                <div className={styles.summary_description}>a function declaration can be called earlier than it is defined. (hoisted)</div>
                <div className={styles.summary_description}>a function expression is created when the execution reaches it.</div>
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

function printAll(...args) {
  // for (let i = 0; i < args.length; i++) {
  //   console.log(args[i]);
  // }

  // for (const arg of args) {
  //   console.log(arg);
  // }

  args.forEach((arg, index, arr) => {
    console.log(arg, index, arr);
  });
}

const fun1 = () => {
  printAll(1, 2, 3, 4, 5);
};

function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}

const fun2 = () => {
  showMessage("hello", "jsh");
  showMessage("hello");
};

let global = "global";

const fun3 = () => {
  // You can't see inside from the outside, but you can see outside from the inside.
  function layer1() {
    let parent = "parent";

    function layer2() {
      let child = "child";

      console.log(global, parent, child);
    }

    layer2();

    // console.log(global, parent, child);
  }

  layer1();

  // console.log(global, parent, child);
};

const fun4 = () => {
  const point = 0;

  if (point <= 10) {
    console.log("Early return, early exit");
    return;
  }

  console.log("long upgrade logic...");
};

const fun5 = () => {
  const print1 = function () {
    console.log("anonymous function");
  };

  // named function
  const print2 = function namedFunction() {
    console.log("named function");
  };

  const print3 = print1;

  print1();

  print2();

  print3();
};

function calculator(operation, data, add, subtract) {
  if (operation === "add") {
    add(data);
  } else if (operation === "subtract") {
    subtract(data);
  }
}

const fun6 = () => {
  // anonymous function
  const add = function (data) {
    console.log(data[0] + data[1]);
  };

  // named function
  // better debugging in debugger's stack traces
  // recursions
  function subtract(data) {
    console.log(data[0] - data[1]);
  }

  calculator("add", [10, 5], add, subtract);
  calculator("subtract", [10, 5], add, subtract);
};

function sum(n) {
  if (n === 1) {
    console.log(n, n);

    return 1;
  } else {
    const result = sum(n - 1) + n;

    console.log(n, result);

    return result;
  }
}

const fun7 = () => {
  console.log(sum(10));
};

const fun8 = () => {
  const add = (a, b) => a + b;

  const subtract = (a, b) => {
    return a - b;
  };

  console.log(add(1, 2));
  console.log(subtract(1, 2));
};

const fun9 = () => {
  (function hello() {
    console.log("Immediately Invoked Function Expression");
  })();
};

const fun10 = () => {
  window.print();
};

function random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// function rotto(min, max, length) {
//   const items = [];

//   while (items.length !== length) {
//     const number = Math.floor(Math.random() * (max + 1 - min) + min);

//     const isDuplicated = items.filter((item) => item === number).length === 0 ? false : true;

//     console.log(items.length, isDuplicated);

//     // debugger;

//     if (!isDuplicated) {
//       items.push(number);
//     }
//   }

//   return items;
// }

function rotto(min, max, length) {
  const items = [];

  while (items.length !== length) {
    const number = Math.floor(Math.random() * (max + 1 - min) + min);

    items.filter((item) => item === number).length === 0 && items.push(number);
  }

  return items;
}

const fun11 = () => {
  const items = Array.from({ length: 10 }, (v, k) => {
    return random(1, 10);
  });

  console.log(items);

  // list.reverse();
  items.sort((a, b) => a - b);

  console.log(items);
};

const fun12 = () => {
  const items = rotto(1, 45, 6);

  console.log(items);

  items.sort((a, b) => a - b);

  console.log(items);
};

const fun13 = () => {
  function calculator(mode) {
    const result = {
      add: function (...args) {
        return args[0] + args[1];
      },
      subtract: function (...args) {
        return args[0] - args[1];
      },
    };

    return result[mode];
  }

  console.log(calculator("add")(2, 1));
  console.log(calculator("subtract")(2, 1));
};

function accumulate(add, subtract) {
  return this.reduce((a, b) => a + b) + add - subtract;
}

const fun14 = () => {
  console.log(accumulate.bind([1, 2, 3, 4, 5], 10, 5)());
  console.log(accumulate.bind([6, 7, 8, 9, 10], 10, 5)());
};

const fun15 = () => {
  console.log(accumulate.call([1, 2, 3, 4, 5], 10, 5));
  console.log(accumulate.call([6, 7, 8, 9, 10], 10, 5));
};

function execute(...args) {
  console.log(args);
  console.log(arguments);

  return this.operation(args);
}

const fun16 = () => {
  const object1 = {
    items: [1, 2, 3],
    operation: function (args) {
      return [...this.items, ...args];
    },
  };

  const object2 = {
    items: ["a", "b", "c"],
    operation: function (args) {
      // return [...this.items, ...args];
      return [...this.items, ...args].join("+");
    },
  };

  console.log(execute.apply(object1, [4, 5, 6]));
  console.log(execute.apply(object2, ["d", "e", "f"]));
};

const fun17 = () => {
  function factory(title) {
    return {
      getTitle: function () {
        return title;
      },
      setTitle: function (_title) {
        if (typeof _title === "string") {
          title = _title;
        } else {
          console.error("Title must be a string.");
        }
      },
    };
  }

  const ghost = factory("Ghost");
  const matrix = factory("Matrix");

  console.log(ghost.getTitle());
  console.log(matrix.getTitle());

  ghost.setTitle("Top Gun");
  matrix.setTitle(1004);

  console.log(ghost.getTitle());
  console.log(matrix.getTitle());
};

const items = [
  {
    title: "Rest parameters",
    description: "Rest parameters",
    func: fun1,
  },
  {
    title: "Default parameters",
    description: "Default parameters",
    func: fun2,
  },
  {
    title: "Local scope",
    description: "Local scope",
    func: fun3,
  },
  {
    title: "Early return, early exit",
    description: "Early return, early exit",
    func: fun4,
  },
  {
    title: "Anonymous function",
    description: "Anonymous function",
    func: fun5,
  },
  {
    title: "Callback",
    description: "Callback",
    func: fun6,
  },
  {
    title: "Recursions",
    description: "Recursions",
    func: fun7,
  },
  {
    title: "Arrow function",
    description: "Arrow function",
    func: fun8,
  },
  {
    title: "IIFE",
    description: "Immediately Invoked Function Expression",
    func: fun9,
  },
  {
    title: "print",
    description: "window.print()",
    func: fun10,
  },
  {
    title: "random",
    description: "duplicated",
    func: fun11,
  },
  {
    title: "rotto",
    description: "unique",
    func: fun12,
  },
  {
    title: "calculator",
    description: "calculator",
    func: fun13,
  },
  {
    title: "bind",
    description: "accumulate",
    func: fun14,
  },
  {
    title: "call",
    description: "accumulate",
    func: fun15,
  },
  {
    title: "apply",
    description: "merge array",
    func: fun16,
  },
  {
    title: "Encapsulation",
    description: "setter & getter",
    func: fun17,
  },
];
