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

    console.log(this);

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
          <li>일반 함수의 "this"는 함수를 호출한 객체이다.</li>
          <li>화살표 함수에서는 "this"의 대상이 바뀌지 않는다.</li>
          <li>화살표 함수는 this를 생성하지 않는다.</li>
          <li>The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.</li>
        </ul>
      </div>
    </div>
  );
}

const human = {
  name: "정승훈",
  age: 40,
  introduce: function () {
    console.log(this, typeof this);
  },
  child: {
    name: "정순",
    age: "13",
    introduce: function () {
      console.log(this, typeof this);
    },
  },
  parent: {
    name: "정태균",
    age: "73",
    introduce: () => {
      console.log(this, typeof this);
    },
    bindable: function () {
      console.log(this, typeof this);
    },
  },
};

const student = {
  name: "정승훈",
  age: 40,
  introduce: () => {
    console.log(this, typeof this);
  },
  child: {
    name: "정순",
    age: "13",
    introduce: () => {
      console.log(this, typeof this);
    },
  },
};

const fun1 = () => {
  human.introduce();
  human.child.introduce();

  human.parent.introduce();
  human.parent.introduce.bind({ name: "김혜심", age: 65 })();

  human.parent.bindable();
  human.parent.bindable.bind({ name: "김혜심", age: 65 })();
};

const fun2 = () => {
  student.introduce();
  student.child.introduce();
};

const fun3 = () => {
  console.log("To fix this, use bind function.");

  const woman = human.introduce.bind({ name: "강아름", age: 20 });

  woman();
};

function sum() {
  console.log(this);

  let result = 0;

  this.forEach((element) => {
    result += element;
  });

  return result;
}

const fun4 = () => {
  console.log(sum.bind([1, 2, 3])());
  console.log(sum.bind([4, 5, 6])());
};

const items = [
  {
    title: "this 1",
    description: "this",
    func: fun1,
  },
  {
    title: "this 2",
    description: "Allow Function",
    func: fun2,
  },
  {
    title: "this 3",
    description: "Bind",
    func: fun3,
  },
  {
    title: "this 4",
    description: "Bind sum",
    func: fun4,
  },
];
