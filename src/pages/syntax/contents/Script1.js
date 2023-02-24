import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script1({ ...props }) {
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
                <div className={styles.summary_title}>this context</div>
                <div className={styles.summary_description}>this는 함수 내에서 함수 호출 맥락(context)를 의미한다.</div>
                <div className={styles.summary_description}>맥락이라는 것은 상황에 따라서 달라진다는 의미인데 즉 함수를 어떻게 호출하느냐에 따라서 this가 가르키는 대상이 달라진다는 뜻이다.</div>
                <div className={styles.summary_description}>일반 함수의 "this"는 함수를 호출한 객체이다.</div>
                <div className={styles.summary_description}>화살표 함수에서는 "this"의 대상이 바뀌지 않는다.</div>
                <div className={styles.summary_description}>화살표 함수는 this를 생성하지 않는다.</div>
                <div className={styles.summary_title}>bind()</div>
                <div className={styles.summary_description}>method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.</div>
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
