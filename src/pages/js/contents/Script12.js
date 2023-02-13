import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script12({ ...props }) {
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
          <li>The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.</li>
        </ul>
      </div>
    </div>
  );
}

const fun1 = () => {
  console.log("전개 연산자는 배열이나 객체의 모든 속성을 풀어놓을 때 사용한 문법이다.");

  const numbers = [1, 2, 3, 4, 5];

  console.log(...numbers);
};

const fun2 = () => {
  const numbers = [1, 2, 3, 4, 5];

  console.log("전개 연산자를 사용하면 동적으로 매개 변수를 전달 할 수 있다.");

  console.log(Math.max(1, 2, 3, 4, 5));
  console.log(Math.max(...numbers));
  console.log(Math.max.apply(null, numbers));
};

const fun3 = () => {
  const numbers = [1, 2, 3, 4, 5];

  console.log("전개 연산자는 배열이나 객체를 복사할 때도 유용하다.");

  console.log(...numbers, 6, 7, 8, 9);
  console.log([...numbers, 6, 7, 8, 9]);
  console.log([1, ...[2, 3, 4, 5], 6, 7, 8, 9]);
};

const fun4 = () => {
  console.log("순서가 유지 되어야 하는 상황에서 전개 연산자의 성질을 이용하기 좋다.");

  console.log(new Date([2020, 6, 24]));
  console.log(new Date(...[2020, 6, 24]));
};

const fun5 = () => {
  console.log("전개 연산자를 이용해서 두 객체를 병합하기");

  const obj1 = { name: "jsh", age: 40 };
  const obj2 = { hobby: "soccer" };
  console.log({ ...obj1, ...obj2 });
};

const fun6 = () => {
  console.log("객체 리터럴에서 중복된 속성명 사용 가능하다.");
  console.log("중복된 속성명 사용 시 최종 결과는 마지막 속성명의 값이 된다.");

  console.log({ x: 1, x: 2, y: 1, y: 2 });
};

const fun7 = () => {
  console.log("중복된 속성명과 전개 연산자를 이용하면 객체의 특정 속성값을 변경할 때 이전 객체에 영향을 주지 않고 새로운 객체를 만들어 낼 수 있다.");

  const student = { name: "jsh", age: 40 };

  const new_student = { ...student, name: "kar", hobby: "painting" };

  console.log(new_student);
};

const items = [
  {
    title: "Spread Operator 1",
    description: "Basic Syntax",
    func: fun1,
  },
  {
    title: "Spread Operator 2",
    description: "Pass parameters dynamically",
    func: fun2,
  },
  {
    title: "Spread Operator 3",
    description: "Copy an array or object",
    func: fun3,
  },
  {
    title: "Spread Operator 4",
    description: "Circumstances in which order must be maintained",
    func: fun4,
  },
  {
    title: "Spread Operator 5",
    description: "Merge two objects",
    func: fun5,
  },
  {
    title: "Spread Operator 6",
    description: "Duplicate property names can be used in object literals.",
    func: fun6,
  },
  {
    title: "Spread Operator 7",
    description: "Create New Object",
    func: fun7,
  },
];
