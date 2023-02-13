import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script9({ ...props }) {
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
          <li>Hoisting is JavaScript's default behavior of moving declarations to the top.</li>
        </ul>
      </div>
    </div>
  );
}

const fun1 = () => {
  console.log("정의되지 않은 변수도 사용이 가능하다.");

  console.log(number);

  var number = 1234;

  console.log(number);
};

const fun2 = () => {
  console.log("for 문을 벗어나도 변수가 사라지지 않는다.");

  for (var i = 0; i < 10; i++) {
    console.log(i);
  }

  console.log(`i = ${i}`);
};

const fun3 = () => {
  try {
    console.log("const, let은 호이스팅이 발생하지 않는다.");

    console.log(number);

    const number = 1234;
    // let number = 1234;

    console.log(number);
  } catch (e) {
    console.error(e.message);
  }
};

const items = [
  {
    title: "Hoisting 1",
    description: "정의되지 않은 변수도 사용이 가능하다.",
    func: fun1,
  },
  {
    title: "Hoisting 2",
    description: "for 문을 벗어나도 변수가 사라지지 않는다.",
    func: fun2,
  },
  {
    title: "Hoisting 3",
    description: "const, let은 호이스팅이 발생하지 않는다.",
    func: fun3,
  },
];
