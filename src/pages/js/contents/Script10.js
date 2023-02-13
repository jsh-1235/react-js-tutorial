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
      <span />
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
          <li>A closure is the combination of a function and the lexical environment within which that function was declared.</li>
          <li>Lexical Scoping : Scope is determined by where the function is declared, not when the function is called.</li>
        </ul>
      </div>
    </div>
  );
}

const sum = (initial) => {
  const add = (n) => {
    return initial + n;
  };

  return add;
};

const fun1 = () => {
  console.log("A closure is the combination of a function and the lexical environment within which that function was declared.");

  console.log("Lexical Scoping");

  console.log("스코프는 함수를 호출할 때가 아니라 함수를 어디에 선언하였는지에 따라 결정된다.");

  console.log(sum(10)(5));
};

const items = [
  {
    title: "Closure 1",
    description: "",
    func: fun1,
  },
];
