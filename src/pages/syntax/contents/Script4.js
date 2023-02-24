import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script4({ ...props }) {
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
                <div className={styles.summary_title}>Operator</div>
                <div className={styles.summary_description}>assignment</div>
                <div className={styles.summary_description}>comparison</div>
                <div className={styles.summary_description}>arithmetic</div>
                <div className={styles.summary_description}>bitwise</div>
                <div className={styles.summary_description}>logical</div>
                <div className={styles.summary_description}>string</div>
                <div className={styles.summary_description}>ternary </div>
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
  let num1 = 5;
  let num2 = 2;

  console.log(num1 + num2); // add
  console.log(num1 - num2); // subtract
  console.log(num1 * num2); // divide
  console.log(num1 / num2); // multiply
  console.log(num1 % num2); // remainder
  console.log(num1 ** num2); // exponentiation
};

const fun2 = () => {
  let counter1 = 0;
  let counter2 = 0;

  console.log("postIncrement", counter1++);
  console.log("preIncrement", ++counter2);
  console.log(counter1, counter2);

  counter1 = counter2 = 0;

  console.log("postDecrement", counter1--);
  console.log("preDecrement", --counter2);
  console.log(counter1, counter2);
};

const fun3 = () => {
  let x = 3;
  let y = 6;

  console.log((x += y));
  console.log((x -= y));
  console.log((x *= y));
  console.log((x /= y));
};

const fun4 = () => {
  let num1 = 5;
  let num2 = 2;

  console.log(num1 > num2);
  console.log(num1 < num2);
  console.log(num1 >= num2);
  console.log(num1 <= num2);
};

const fun5 = () => {
  const expression = 1 === 2;

  console.log(expression || "😃" || show("or"));
  console.log("😃" && !expression && show("and"));

  function show(name) {
    return name;
  }
};

const fun6 = () => {
  const a = 5; // 00000000000000000000000000000101
  const b = 3; // 00000000000000000000000000000011

  console.log(a | b); // 00000000000000000000000000000111
  console.log(a & b); // 00000000000000000000000000000001
};

const fun7 = () => {
  console.log("I " + "am " + "a " + "boy.");
  console.log("1" + 2);
  console.log(`string literals: 1 + 2 = ${1 + 2}`);
};

const fun8 = () => {
  const stringFive = "5";
  const numberFive = 5;

  // 동등 연산자 (loose equality operator)
  console.log("loose equality", stringFive == numberFive, stringFive != numberFive);

  // 일치 연산자 (strict equality operator)
  console.log("strict equality", stringFive === numberFive, stringFive !== numberFive);

  // object equality by reference
  const ellie1 = { name: "ellie" };
  const ellie2 = { name: "ellie" };
  const ellie3 = ellie1;

  console.log("object equality", ellie1 == ellie2, ellie1 === ellie2);
  console.log("reference equality", ellie1 == ellie3, ellie1 === ellie3);

  console.log("value", 0 == false, "" == false, null == undefined);
  console.log("type and value", 0 === false, "" === false, null === undefined);
};

const fun9 = () => {
  const name = "jsh";

  if (name === "jsh") {
    console.log("Welcome, jsh");
  } else {
    console.log("unknown");
  }
};

const fun10 = () => {
  const name = "jsh";

  console.log("Ternary operator", name === "kar" ? "😀" : "🤣");
};

const fun11 = () => {
  let browser = "IE";

  switch (browser) {
    case "IE":
      console.log("go away");
      break;
    case "Chrome":
      console.log("love away");
      break;
    case "Firefox":
      console.log("love away");
      break;
    default:
      console.log("same all");
      break;
  }
};

const fun12 = () => {
  let i = 0;

  while (i < 10) {
    i++;

    if (i % 2 === 0) {
      console.log(i);

      continue;
    }
  }
};

const fun13 = () => {
  let i = 5;

  do {
    console.log(i);

    i++;

    if (i === 8) {
      break;
    }
  } while (i < 10);
};

const fun14 = () => {
  // nested loops
  for (let i = 0; i < 10; i++) {
    // inline variable declaration
    for (let j = 0; j < 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
};

const fun15 = () => {
  const list = Array.from({ length: 10 }, (v, k) => {
    return k + 10;
  });

  console.log(list);

  list.forEach((item, index) => {
    console.log(`list[${index}]=${item}`);
  });
};

const items = [
  {
    title: "Numeric Operator",
    description: "Numeric Operator",
    func: fun1,
  },
  {
    title: "increment / decrement operator",
    description: "post / pre",
    func: fun2,
  },
  {
    title: "Unary Operator",
    description: "Unary Operator",
    func: fun3,
  },
  {
    title: "Comparison Operator",
    description: "Comparison Operator",
    func: fun4,
  },
  {
    title: "Logical Operator",
    description: "Logical Operator",
    func: fun5,
  },
  {
    title: "Bitwise Operator",
    description: "Bitwise Operator",
    func: fun6,
  },
  {
    title: "String concatenation",
    description: "String Concatenation",
    func: fun7,
  },
  {
    title: "Equality",
    description: "Loose vs Strict",
    func: fun8,
  },
  {
    title: "if statement",
    description: "Conditional Operator",
    func: fun9,
  },
  {
    title: "Ternary operators",
    description: "Conditional Operator",
    func: fun10,
  },
  {
    title: "Switch statement",
    description: "Conditional Operator",
    func: fun11,
  },
  {
    title: "While statement",
    description: "Loops",
    func: fun12,
  },
  {
    title: "do while statement",
    description: "Loops",
    func: fun13,
  },
  {
    title: "for statement",
    description: "Nested Loops",
    func: fun14,
  },
  {
    title: "forEach",
    description: "Iterator",
    func: fun15,
  },
];
