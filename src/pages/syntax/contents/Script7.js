import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script7({ ...props }) {
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
                <div className={styles.summary_title}>Feature</div>
                <div className={styles.summary_description}>One of the Javascript's data types.</div>
                <div className={styles.summary_description}>A collection of related data and/or functionality</div>
                <div className={styles.summary_description}>Nearly all objects in JS are instance of Object</div>
                <div className={styles.summary_description}>object key & value pair</div>
                <div className={styles.summary_description}>객체란 서로 연관된 변수(property)와 함수(method)를 묶은 집합이다.</div>
                <div className={styles.summary_description}>모든 객체는 전역 객체(Global Object)의 프로퍼티이다.</div>
                <div className={styles.summary_description}>ECMScript에서는 전역 객체의 API를 정의해두었다. 그 외의 API는 호스트 환경에서 필요에 따라서 추가로 정의하고 있다.</div>
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

// function print(person) {
//   for (let item in person) {
//     console.log(`${item} = ${person[item]}`);
//   }
// }

// Object destructuring
function print({ name, age }) {
  console.log(`${name} ${age}`);
}

const fun1 = () => {
  const person = {
    name: "jsh",
    age: 41,
  };

  print(person);
};

const fun2 = () => {
  const person = new Object();

  person.name = "jsh";
  person.age = 41;

  print(person);
};

const fun3 = () => {
  const person = {
    name: "jsh",
    age: 41,
  };

  // computed properties : runtime
  // key should be always string
  console.log(person.name, person["name"]);
};

const fun4 = () => {
  // Property value shorthand

  const name = "jsh";
  const age = 41;

  const person = {
    name,
    age,
  };

  print(person);
};

// Construct function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

const fun5 = () => {
  const person1 = new Person("person1", 1);
  const person2 = new Person("person1", 2);
  const person3 = new Person("person1", 3);
  const person4 = new Person("person1", 4);

  console.log(person1, person2, person3, person4);
};

const fun6 = () => {
  const person = {
    name: "jsh",
    age: 41,
  };

  console.log("name", "name" in person);
  console.log("age", "age" in person);
  console.log("random", "random" in person);
};

const fun7 = () => {
  const person = {
    name: "jsh",
    age: 41,
  };

  for (const key in person) {
    console.log(`${key} ${person[key]}`);
  }
};

const fun8 = () => {
  const person = {
    name: "jsh",
    age: 41,
  };

  const user = Object.assign(person, { jop: "programmer" });

  for (const key in user) {
    console.log(`${key} ${user[key]}`);
  }
};

const fun9 = () => {
  const person = {
    name: "kar",
    age: 27,
  };

  const user = { ...person, job: "designer" };

  for (const key in user) {
    console.log(`${key} ${user[key]}`);
  }
};

const fun10 = () => {
  const person = {
    name: "jsh",
    age: 41,
  };

  const job = {
    jop: "programmer",
  };

  const employee = Object.assign({}, person, job);

  for (const key in employee) {
    console.log(`${key} ${employee[key]}`);
  }
};

const fun11 = () => {
  const person = {
    name: "jsh",
    age: 41,
    show: function () {
      console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    },
  };

  for (const key of Object.keys(person)) {
    // console.log(`${key} ${person[key]}`);

    console.log(`${key} ${person.hasOwnProperty(key)}`);
  }
};

const fun12 = () => {
  const person = {
    name: "jsh",
    age: 41,
    show: function () {
      console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    },
  };

  for (const key in person) {
    console.log(`${key} ${person[key]}`);
  }

  console.log(Object.keys(person));
};

const items = [
  {
    title: "Object constructor",
    description: "Object literal syntax",
    func: fun1,
  },
  {
    title: "Object constructor",
    description: "Object constructor syntax",
    func: fun2,
  },
  {
    title: "Computed properties",
    description: "Computed properties",
    func: fun3,
  },
  {
    title: "Property value shorthand",
    description: "Property value shorthand",
    func: fun4,
  },
  {
    title: "constructor",
    description: "constructor",
    func: fun5,
  },
  {
    title: "in operator",
    description: "property existence check (key in obj)",
    func: fun6,
  },
  {
    title: "for in",
    description: "Iterator",
    func: fun7,
  },
  {
    title: "Object.assign()",
    description: "Object Clone",
    func: fun8,
  },
  {
    title: "spread syntax",
    description: "{...object}",
    func: fun9,
  },
  {
    title: "mixer",
    description: "Object Clone",
    func: fun10,
  },
  {
    title: "hasOwnProperty()",
    description: "Returns a boolean indicating whether the object has the specified property as its own property.",
    func: fun11,
  },
  {
    title: "Object.keys()",
    description: "Returns an array of a given object's own enumerable string-keyed property names.",
    func: fun12,
  },
];
