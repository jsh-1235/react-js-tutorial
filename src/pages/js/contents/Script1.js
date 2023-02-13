import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script1({ ...props }) {
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
          <li>객체 비구조화 (object destructuring)</li>
          <li>객체 비구조화는 객체의 여러 속성값을 변수로 쉽게 할당 할 수 있는 문법이다.</li>
          <li>배열 비구조화에서는 배열의 순서가 중요했지만 객체 비구조화에서는 순서는 무의미 하다.</li>
        </ul>
      </div>
    </div>
  );
}

const fun1 = () => {
  const student = { name: "jsh", age: 40 };

  const { age, name } = student;
  // const { name, age } = student;

  console.log(`${age} ${name}`);

  const { a, b } = student;

  console.log(`${a} ${b}`);
};

const fun2 = () => {
  console.log("객체 비구조화에서 별칭 사용하기");

  const student = { name: "jsh", age: 40 };

  const { name: theName, age: theAge } = student;

  console.log(`${theName} ${theAge}`);
};

const fun3 = () => {
  console.log("객체 비구조화에서의 기본값");

  const student = { name: undefined, age: undefined, grade: "A" };

  const { name = "noname", age = 0, grade = "F" } = student;

  console.log(name, age, grade);

  console.log({ ...student });
};

function getDefaultAge() {
  return 10;
}

const fun4 = () => {
  console.log("함수를 이용한 기본값");

  const student = { age: undefined, grade: "A" };

  const { age = getDefaultAge(), grade } = student;

  console.log(age, grade);
};

const fun5 = () => {
  console.log("객체 비구조화에서 나머지 속성들을 별도의 객체로 생성하기");

  const student = { name: "mike", age: 21, grade: "A" };
  const { name, ...rest } = student;

  console.log(rest);
};

const fun6 = () => {
  console.log("for문에서 객체 비구조화 순회");

  const students = [
    { name: "mike", age: 21, grade: "A" },
    { name: "jsh", age: 40, name: "jsh", grade: "B" },
  ];

  for (const { name, age } of students) {
    console.log(`${name} ${age}`);
  }
};

const fun7 = () => {
  console.log("비구조화는 객체와 배열이 중첩되어 있을 때도 사용 할 수 있다.");

  const student = { name: "jsh", mother: { name: "sara" } };

  const {
    name,
    mother: { name: motherName },
  } = student;

  console.log(name, motherName);
};

const fun8 = () => {
  console.log("기본값은 변수 단위가 아니라 패턴 단위로 적용된다.");

  const [{ name } = { age: 40 }] = [{ name: "jsh" }];
  console.log("object", name);

  const [{ age } = { age: 40 }] = [];
  console.log("array", age);
};

const fun9 = () => {
  console.log("객체 비구조화에 계산된 속성명 사용하기");
  console.log("계산된 속성명을 사용하기 위해서는 반드시 별칭을 입력한다.");

  const index = 1;
  const { [`key${index}`]: valueOfTheIndex } = { key1: 123 };
  console.log(valueOfTheIndex);
};

const fun10 = () => {
  console.log("별칭을 이용해서 다른 객체와 배열의 속성값 할당");

  const obj = {};
  const arr = [];

  ({ name: obj.name, age: arr[0] } = { name: "jsh", age: 40 });

  console.log(obj);
  console.log(arr);
};

const items = [
  {
    title: "Object Destructuring 1",
    description: "Basic syntax",
    func: fun1,
  },
  {
    title: "Object Destructuring 2",
    description: "Aliasing",
    func: fun2,
  },
  {
    title: "Object Destructuring 3",
    description: "Default value",
    func: fun3,
  },
  {
    title: "Object Destructuring 4",
    description: "Default value using function",
    func: fun4,
  },
  {
    title: "Object Destructuring 5",
    description: "...rest",
    func: fun5,
  },
  {
    title: "Object Destructuring 6",
    description: "Traversal (for of)",
    func: fun6,
  },
  {
    title: "Object Destructuring 7",
    description: "Nested Object",
    func: fun7,
  },
  {
    title: "object destructuring 8",
    description: "Default value - Pattern",
    func: fun8,
  },
  {
    title: "object destructuring 9",
    description: "Computed Property",
    func: fun9,
  },
  {
    title: "object destructuring 10",
    description: "Attribute value assignment - using aliasing",
    func: fun10,
  },
];
