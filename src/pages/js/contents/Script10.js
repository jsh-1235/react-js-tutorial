import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script10({ ...props }) {
  const [name, setName] = useState({});

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

    setName({
      func: e.target.name,
      title: e.target.innerText,
    });
  };

  console.log("props", props);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{props.title}</span>
      <span className={styles.border} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <details open>
            <summary>summary</summary>
            <div className={styles.summary_container}>
              <div className={styles.summary_title}>Basic Theory</div>
              <div className={styles.summary_description}>A closure is the combination of a function and the lexical environment within which that function was declared.</div>
              <div className={styles.summary_description}>Lexical Scoping : Scope is determined by where the function is declared, not when the function is called.</div>
              <div className={styles.summary_description}>클로저는 내부 함수가 외부 함수의 맥락(context)에 접근할 수 있는 것을 가르킨다.</div>
              <div className={styles.summary_description}>내부 함수는 외부 함수의 지역 변수에 접근할 수 있는데 외부 함수의 실행이 끝나서 외부 함수가 소멸된 이후에도 내부 함수가 외부 함수의 변수에 접근할 수 있다.</div>
              <div className={styles.summary_description}>클로저란 내부 함수가 외부 함수의 지역 변수에 접근할 수 있고 외부 함수는 외부 함수의 지역 변수를 사용하는 내부 함수가 소멸될 때까지 소멸되지 않는 특성을 의미한다.</div>
            </div>
          </details>
        </div>
        <ul title={name.title}>
          {items.map((item) => {
            return (
              <li key={item.func.name}>
                <div className={styles.menu}>
                  <button className="button" name={item.func.name} onClick={handleClick}>
                    {item.title}
                  </button>
                  <div className={styles.description}>{item.description}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const sum = (items) => {
  const square = (n) => {
    return items.reduce((a, b) => a + b) ** n;
  };

  return square;
};

const fun1 = () => {
  console.log(sum([1, 2, 3, 4])(3));
};

const fun2 = () => {
  function outer() {
    var title = "variable in external function";

    function inner() {
      console.log(title);
    }

    inner();
  }

  outer();
};

const fun3 = () => {
  function outer() {
    var title = "variable in external function";

    return function inner() {
      console.log(title);
    };
  }

  const inner = outer();

  inner();
};

const items = [
  {
    title: "Closure 1",
    description: "Closure 1",
    func: fun1,
  },
  {
    title: "Closure 2",
    description: "Closure 2",
    func: fun2,
  },
  {
    title: "Closure 3",
    description: "Closure 3",
    func: fun3,
  },
];
