import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script8({ ...props }) {
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
      <div className={styles.note}>
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
      <div className={styles.note}>
        <ul title="Summary">
          <li>Variables are containers for storing data (storing data values).</li>
          <li>If you want a general rule: always declare variables with const.</li>
          <li>If you think the value of the variable can change, use let.</li>
        </ul>
      </div>
    </div>
  );
}

const fun1 = () => {
  console.log("var 키워드 없이 변수를 정의하면 전역 변수가 된다.");
};

const fun2 = () => {
  console.log("const는 변수를 재할당 불가능하게 만든다.");
  console.log("반대로 let, var로 정의된 변수는 재할당 할 수 있다.");
  console.log("재할당 불가능한 변수는 프로그램의 복잡도를 상당히 낮춰 주기 때문에 되도록이면 재할당 불가능한 변수를 사용하는 게 좋다.");

  const obj = { name: "jsh" };
  obj.name = "kar";
  obj.age = 40;
  console.log(obj);

  const arr = [1, 2, 3];
  arr[0] = 10;
  arr.push(4);
  console.log(arr);
};

const fun3 = () => {
  console.log("var는 함수 스코프지만 const, let은 블록(Block) 스코프이다.");
};

const items = [
  {
    title: "Variable 1",
    description: "Global Variable",
    func: fun1,
  },
  {
    title: "Variable 2",
    description: "Immutable (const)",
    func: fun2,
  },
  {
    title: "Variable 3",
    description: "Function Scope / Block Scope",
    func: fun3,
  },
];
