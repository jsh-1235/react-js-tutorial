import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script13({ ...props }) {
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
              <div className={styles.summary_description}>배열 비구조화는 배열의 여러 속성값을 변수로 쉽게 할당 할 수 있는 문법이다.</div>
              <div className={styles.summary_description}>배열 비구조화에서는 배열의 순서가 중요했지만 객체 비구조화에서는 순서는 무의미 하다.</div>
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

const fun1 = () => {
  console.log("배열 비구조화는 배열의 속성값을 변수로 쉽게 할당할 수 있는 문법이다.");

  let a, b;

  [a, b] = [1, 2];

  console.log(`a=${a} b=${b}`);
};

const fun2 = () => {
  const arr = [1, 2];

  const [a, b, c = 3] = arr;

  console.log(`a=${a} b=${b} c=${c}`);
};

const fun3 = () => {
  console.log("배열 비구조화를 이용해서 두 변수의 값을 교환하기");

  let a = 1;
  let b = 2;

  console.log(`a=${a} b=${b}`);

  [a, b] = [b, a];

  console.log(`a=${a} b=${b}`);
};

const fun4 = () => {
  console.log("쉼표를 이용해서 일부 속성값을 건너뛰기");

  const arr = [1, 2, 3, 4];

  const [a, , , d] = arr;

  console.log(`a=${a} d=${d}`);
};

const fun5 = () => {
  console.log("나머지 값을 별도의 배열로 만들기");

  const arr5 = [1, 2, 3, 4];

  const [first, ...rest] = arr5;

  console.log(`first=${first} rest=${rest}`);
};

const items = [
  {
    title: "Array Destructuring 1",
    description: "Basic Syntax",
    func: fun1,
  },
  {
    title: "Array Destructuring 2",
    description: "Default value",
    func: fun2,
  },
  {
    title: "Array Destructuring 3",
    description: "Swapping the Values of Two Variables Using Array Destructuring",
    func: fun3,
  },
  {
    title: "Array Destructuring 4",
    description: "Skip some attribute values using commas",
    func: fun4,
  },
  {
    title: "Array Destructuring 5",
    description: "Make the rest of the values into a separate array",
    func: fun5,
  },
];
