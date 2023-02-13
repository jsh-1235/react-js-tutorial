import { useState, useEffect, useCallback } from "react";
import styles from "../../Common.module.css";

export default function Script11({ ...props }) {
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
                <div className={styles.description_container}>
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
          <li>단축 속성명(Shorthand property names)은 객체 리터털 코드를 간편하게 작성할 목적으로 만들어진 문법이다.</li>
          <li>계산된 속성명(Computed property names)은 객체의 속성명을 동적으로 결정하기 위해 나온 문법이다.</li>
        </ul>
      </div>
    </div>
  );
}

const name = "jsh";

const person = {
  age: 40,
  name,
  getName() {
    return this.name;
  },
};

const fun1 = () => {
  console.log("단축 속성명(shorthand property names)은 객체 리터털 코드를 간편하게 작성할 목적으로 만들어진 문법이다.");

  console.log(name, person.getName(), { name });
};

function makePerson(key, value) {
  return { [key]: value };
}

const fun2 = () => {
  console.clear();

  console.log("계산된 속성명은 객체의 속성명을 동적으로 결정하기 위해 나온 문법이다.");

  console.log("계산된 속성명은 컴포넌트의 상태값을 변경할 때 유용하게 쓸수 있다.");

  console.log(makePerson("name", "jsh"));
};

const items = [
  {
    title: "Shorthand property names",
    description: "",
    func: fun1,
  },
  {
    title: "Computed property names",
    description: "",
    func: fun2,
  },
];
