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
                <div className={styles.summary_title}>Use strict</div>
                <div className={styles.summary_description}>added in ES 5</div>
                <div className={styles.summary_description}>use this for Vanilla Javascript.</div>
                <div className={styles.summary_title}>dynamically typed language</div>
                <div className={styles.summary_description}>A language is dynamically-typed if the type of a variable is checked during run-time.</div>
                <div className={styles.summary_description}>Common examples of dynamically-typed languages includes JavaScript, Objective-C, PHP, Python, Ruby, Lisp, and Tcl.</div>
                <div className={styles.summary_title}>Variable Structure</div>
                <div className={styles.summary_description}>Access Modifier / Data Type / Size / Value / Scope</div>
                <div className={styles.summary_title}>var</div>
                <div className={styles.summary_description}>var (don't ever use this!)</div>
                <div className={styles.summary_description}>var hoisting</div>
                <div className={styles.summary_description}>has no block scope</div>
                <div className={styles.summary_title}>let</div>
                <div className={styles.summary_description}>let (added in ES6)</div>
                <div className={styles.summary_title}>const</div>
                <div className={styles.summary_description}>favor immutable data type always for a few reasons</div>
                <div className={styles.summary_description}>security</div>
                <div className={styles.summary_description}>thread safety</div>
                <div className={styles.summary_description}>reduce human mistakes</div>
                <div className={styles.summary_title}>Immutable data types</div>
                <div className={styles.summary_description}>primitive types</div>
                <div className={styles.summary_description}>frozen Objects(i.e. Object.freeze())</div>
                <div className={styles.summary_description}>favor immutable data type always for a few reasons</div>
                <div className={styles.summary_title}>Mutable data types</div>
                <div className={styles.summary_description}>all object by default are mutable in JS</div>
                <div className={styles.summary_title}>전역 변수</div>
                <div className={styles.summary_description}>전역 변수의 사용을 자제하자.</div>
                <div className={styles.summary_description}>불가피한 경우 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리한다.</div>
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
  const radius = 10;
  const pi = 3.14;

  console.log(`value : ${radius}, type: ${typeof radius}`); // backtick, quote
  console.log(`value : ${pi}, type: ${typeof pi}`);
};

const fun2 = () => {
  const infinity = 1 / 0;
  const negativeInfinity = -1 / 0;

  console.log(`value : ${infinity}, type: ${typeof infinity}`);
  console.log(`value : ${negativeInfinity}, type: ${typeof negativeInfinity}`);
};

const fun3 = () => {
  // not a number

  const nAn = "not a number" / 2;

  console.log(`value : ${nAn}, type: ${typeof nAn}`);
};

const fun4 = () => {
  // bigInt (fairly new, don't use it yet)

  const bigInt = 123456789123456789123456789123456789123456789123456789n; // over (2^53 - 1)

  console.log(`value : ${bigInt}, type: ${typeof bigInt}`);

  console.log(Number.MAX_SAFE_INTEGER, 2 ** 53 - 1);
};

const fun5 = () => {
  const name = "jsh";
  const greeting = "hello " + name;

  console.log("value : " + greeting + ", type: " + typeof greeting);
  console.log(`value : ${greeting}, type: ${typeof greeting}`); // Template Literal

  for (let element in name) {
    console.log(element, name[element], name.charAt(element));
  }
};

const fun6 = () => {
  const canRead = true;
  const expression = 3 < 1;

  console.log(`value : ${canRead}, type: ${typeof canRead}`);
  console.log(`value : ${expression}, type: ${typeof expression}`);
};

const fun7 = () => {
  const nothing = null;

  console.log(`value : ${nothing}, type: ${typeof nothing}`);
};

const fun8 = () => {
  const nothing = undefined;

  console.log(`value : ${nothing}, type: ${typeof nothing}`);
};

const fun9 = () => {
  // symbol, create unique identifiers for objects;

  const symbol1 = Symbol("id");
  const symbol2 = Symbol("id");
  console.log(symbol1 === symbol2, symbol1.description, symbol2.description, typeof symbol1, typeof symbol2);

  // Returns a Symbol object from the global symbol registry matching the given key if found. Otherwise, returns a new symbol with this key.
  const gSymbol1 = Symbol.for("id");
  const gSymbol2 = Symbol.for("id");
  console.log(gSymbol1 === gSymbol2, gSymbol1.description, gSymbol2.description, typeof gSymbol1, typeof gSymbol2);
};

const fun10 = () => {
  console.log("var hoisting :", nickname);

  {
    var nickname = "jsh";
    let name = "jeong seung hun";

    console.log("Block Scope :", nickname, name);
  }

  console.log("var hoisting :", nickname);
};

const fun11 = () => {
  console.log("0", Boolean(0));
  console.log("-0", Boolean(-0));
  console.log("empty string", Boolean(""));
  console.log("null", Boolean(null));
  console.log("undefined", Boolean(undefined));
};

const fun12 = () => {
  const score = Array.from({ length: 10 }, (v, k) => k);

  console.log(score);

  let sum = 0;

  for (const item of score) {
    sum += item;

    var last = item;
  }

  console.log(sum, last);
};

let number = 5;

function numbering() {
  console.log(number);
}

const fun13 = () => {
  let number = 10;

  numbering();
};

const items = [
  {
    title: "Number",
    description: "Number",
    func: fun1,
  },
  {
    title: "infinity / negativeInfinity",
    description: "special number values",
    func: fun2,
  },
  {
    title: "nan",
    description: "not a number",
    func: fun3,
  },
  {
    title: "bigInt",
    description: "over (2^53 - 1)",
    func: fun4,
  },
  {
    title: "String",
    description: "String",
    func: fun5,
  },
  {
    title: "Boolean",
    description: "Boolean",
    func: fun6,
  },
  {
    title: "null",
    description: "null",
    func: fun7,
  },
  {
    title: "undefined",
    description: "undefined",
    func: fun8,
  },
  {
    title: "Symbol",
    description: "Symbol",
    func: fun9,
  },
  {
    title: "Block Scope",
    description: "var hoisting",
    func: fun10,
  },
  {
    title: "Boolean Test",
    description: "true of false",
    func: fun11,
  },
  {
    title: "hoisting",
    description: "hoisting",
    func: fun12,
  },
  {
    title: "scope",
    description: "static scoping or lexical scoping",
    func: fun13,
  },
];
