import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script12({ ...props }) {
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
                <div className={styles.summary_title}>표준 내장 객체</div>
                <div className={styles.summary_description}>Standard Built-in Object</div>
                <div className={styles.summary_description}>자바스크립트가 기본적으로 가지고 있는 객체이다.</div>
                <div className={styles.summary_description}>표준 내장 객체 + 호스트 환경 객체 + 사용자 정의 객체</div>
                <div className={styles.summary_description}>String, Number, Boolean, Array, Function, Object, Math, Date, RegExp</div>
                <div className={styles.summary_title}>Object</div>
                <div className={styles.summary_description}>Object 객체는 객체의 가장 기본적인 형태를 가지고 있다.</div>
                <div className={styles.summary_description}>아무것도 상속받지 않은 모든 객체의 부모 객체이다.</div>
                <div className={styles.summary_description}>hasOwnProperty 인자로 전달된 속성의 이름이 객체의 속성인지 여부를 판단한다.</div>
                <div className={styles.summary_title}>Primitive type</div>
                <div className={styles.summary_description}>객체가 아닌 데이터 타입을 원시 데이터 타입(Primitive type)이라고 한다.</div>
                <div className={styles.summary_description}>Number, String, Boolean, null, undefined, symbol</div>
                <div className={styles.summary_title}>Wrapper Object</div>
                <div className={styles.summary_description}>래퍼 객체로는 String, Number, Boolean이 있다.</div>
                <div className={styles.summary_description}>null과 undefined는 존재하지 않는다.</div>
                <div className={styles.summary_title}>참조 vs 복제</div>
                <div className={styles.summary_description}>원본 파일에 대한 심볼릭 링크(Symbolic Link)를 통해서 저장된 원본의 주소를 참조해서 원본의 위치를 알아내고 원본에 대한 작업을 하게 된다.</div>
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

const fun1 = () => {
  const name = new String("jsh");

  console.log(name, typeof name);
  console.log(name.toString());

  for (const i of name) {
    console.log(i);
  }

  for (let i = 0; i < name.length; i++) {
    console.log(i, name[i], name.charAt(i));
  }

  // let msg1 = "coding";
  // msg1.prop = "everybody";
  // console.log(msg1, msg1.prop);

  let msg2 = new String("coding");
  msg2.prop = "everybody";
  console.log(msg2.toString(), msg2.prop);
};

const fun2 = () => {
  const age = new Number(41);

  console.log(age, typeof age);
  console.log(age.toString());
};

const fun3 = () => {
  const isMan = new Boolean(true);

  console.log(isMan, typeof isMan);
  console.log(isMan.toString());
};

const fun4 = () => {
  const city = new Array("seoul", "new york", "goyang", "pusan", "paris");

  Array.prototype.random = function () {
    console.log(this);

    return this[Math.floor(this.length * Math.random())];
  };

  console.log(city.random());
};

const fun5 = () => {
  const city = ["seoul", "new york", "goyang", "pusan", "paris"];

  console.log(Object.keys(city));
  console.log(city.toString());

  const person = {
    name: "jsh",
    age: 41,
    city: "goyang",
  };

  console.log(Object.keys(person));
  console.log(person.toString());
};

const fun6 = () => {
  Object.prototype.contain = function (target) {
    for (const key in this) {
      // console.log(key, this[key]);

      if (this[key] === target) {
        return true;
      }
    }

    return false;
  };

  const person1 = {
    name: "jsh",
    age: 41,
    city: "goyang",
  };

  const person2 = {
    name: "kar",
    age: 27,
    city: "seoul",
  };

  console.log(person1.contain("jsh"), person1.contain(41), person1.contain("goyang"));
  console.log(person2.contain("kar"), person2.contain(41), person2.contain("goyang"));
};

const fun7 = () => {
  const peoples = [
    {
      name: "jsh",
      age: 41,
      city: "goyang",
    },
    {
      name: "kar",
      age: 27,
      city: "seoul",
    },
    {
      name: "yjs",
      age: 17,
      city: "pusan",
    },
  ];

  for (const key in peoples) {
    if (peoples.hasOwnProperty(key)) {
      console.log(key, peoples[key]);
    }
  }
};

const fun8 = () => {
  // Primitive Data Type : duplicate
  let a = 1;
  let b = a; // duplicate
  b = 2;

  console.log(a, b);
};

const fun9 = () => {
  // Object Data Type : reference

  let jsh = {
    name: "jsh",
  };

  let kar = jsh;

  kar.name = "kar";

  console.log(jsh, kar);
};

const items = [
  {
    title: "Wrapper Object",
    description: "new String()",
    func: fun1,
  },
  {
    title: "Wrapper Object",
    description: "new Number()",
    func: fun2,
  },
  {
    title: "Wrapper Object",
    description: "new Boolean()",
    func: fun3,
  },
  {
    title: "Array.prototype",
    description: "Array.prototype",
    func: fun4,
  },
  {
    title: "Object.keys",
    description: "Object.keys",
    func: fun5,
  },
  {
    title: "Object.prototype",
    description: "contain",
    func: fun6,
  },
  {
    title: "hasOwnProperty",
    description: "hasOwnProperty",
    func: fun7,
  },
  {
    title: "Primitive Data Type",
    description: "Call by value",
    func: fun8,
  },
  {
    title: "Object Data Type",
    description: "Call by reference",
    func: fun9,
  },
];
