import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script13({ ...props }) {
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
                <div className={styles.summary_title}>OOP</div>
                <div className={styles.summary_description}>Object Oriented Programming</div>
                <div className={styles.summary_description}>객체지향 프로그래밍 패러다임은 로직을 상태(state)와 행위(behave)로 이루어진 객체로 구성한다.</div>
                <div className={styles.summary_title}>Prototype-based Programming</div>
                <div className={styles.summary_description}>prototype에 저장된 속성들은 생성자를 통해서 객체가 만들어질 때 그 객체에 연결된다.</div>
                <div className={styles.summary_title}>Object prototypes</div>
                <div className={styles.summary_description}>프로토타입은 JavaScript 객체가 서로 기능을 상속하는 메커니즘입니다.</div>
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

// const adder = {
//   num1: 10,
//   num2: 20,
//   add: function () {
//     return this.num1 + this.num2;
//   },
// };

const fun1 = () => {
  // const person = {};

  // person.name = "jsh";
  // person.age = 41;

  // person.show = function () {
  //   console.log(`My name is ${this.name}. I am ${this.age} years old.`);
  // };

  // person.show();

  const person = {
    name: "jsh",
    age: 41,
    show: function () {
      console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    },
  };

  person.show();
};

// constructor function
// Create an object and initialize its properties.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// shared method
Person.prototype.show = function () {
  console.log(`name : ${this.name} age : ${this.age}`);
};

const fun2 = () => {
  console.log(new Person("jsh", "41"));
};

const fun3 = () => {
  const person = new Person("jsh", "41");

  person.show();
};

const fun4 = () => {
  const person = new Person("jsh", "41");

  person.show = function () {
    console.log(`My name is ${this.name}. I am ${this.age} years old.`);
  };

  person.show();
};

function Adult(name, age, job) {
  // super(name, age)
  Person.call(this, name, age);

  this.job = job;

  console.log(Adult.prototype.constructor);
  console.log(Adult.prototype.constructor === Adult, Adult.prototype.constructor === Person);
}

// Adult.prototype.__proto__ = Person.prototype;
Adult.prototype = Object.create(Person.prototype);
Adult.prototype.constructor = Adult;

// Adult.prototype = new Person();
// Adult.prototype.constructor = Adult;

// 객체를 사용하는 모든 인스턴스가 공용으로 사용한는 메서드 생성 (자원 절약)
Adult.prototype.work = function () {
  console.log(`${this.name}'s job is ${this.job}`);
};

const fun5 = () => {
  const adult = new Adult("jsh", "41", "programmer");

  // adult.show();

  adult.work();

  console.log(Adult.prototype);
  console.log(adult);
};

const fun6 = () => {
  const superObject = { superValue: "super" };

  //===========================================================================
  // const subObject = { subValue: "sub" };
  // subObject.__proto__ = superObject;

  //===========================================================================
  const subObject = Object.create(superObject);
  subObject.subValue = "sub";

  console.log(superObject);
  console.log(subObject.superValue, subObject.subValue);
};

const fun7 = () => {
  const simple = {
    num1: 10,
    num2: 20,
    sum: function () {
      return this.num1 + this.num2;
    },
  };

  const complex = {
    name: "calc2",
    average: function () {
      return (this.num1 + this.num2) / 2;
    },
  };

  // Deprecated
  complex.__proto__ = simple;

  // const complex = Object.assign(Object.create(simple), {
  //   name: "calc2",
  //   average: function () {
  //     return (this.num1 + this.num2) / 2;
  //   },
  // });

  console.log(complex.num1, complex.num2, complex.sum());
  console.log(complex.name, complex.sum(), complex.average());
};

const cat = {
  name: "cat",
  age: "10",
};

const dog = {
  name: "dog",
  age: "20",
};

function show(prefix, postfix) {
  console.log(`${prefix}${this.name} is ${this.age} years old.${postfix}`);
}

const fun8 = () => {
  // Calls a method of an object, substituting another object for the current object.
  show.call(cat, "[", "]");
  show.call(dog, "(", ")");
};

const fun9 = () => {
  // 지정된 함수에 대해 원래 함수와 본문이 동일한 바인딩된 함수를 만듭니다.
  const obj1 = show.bind(cat, "{", "}");
  const obj2 = show.bind(dog, "<", ">");

  obj1();
  obj2();
};

const fun10 = () => {
  // Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
  const items = [1, 2, 3, 4, 5];

  const max = Math.max.apply(null, items);
  const min = Math.min.apply(null, items);

  console.log(`${min} ~ ${max}`);
};

const fun11 = () => {
  // 함수를 호출하여 함수의 this 값을 지정된 객체로 대체하고 함수의 인수를 지정된 배열로 대체합니다.
  let items1 = [1, 2, 3];
  const items2 = [4, 5, 6];

  // items1.push(items2);

  // items1 = items1.concat(items2);

  items1.push.apply(items1, items2);

  console.log(items1);
};

const fun12 = () => {
  function Person(name, age) {
    this.name = name;
    this.age = age;

    this.show = function () {
      console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    };
  }

  var person1 = new Person("jsh", 41);
  person1.show();

  var person2 = new Person("kar", 27);
  person2.show();

  console.log(person1.introduce === person2.introduce);
};

const fun13 = () => {
  function Person(name, age) {
    this.name = name;
    this.age = age;

    this.show = function () {
      console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    };
  }

  console.log(Person.prototype);

  function Programmer(name, age, skill) {
    Person.call(this, name, age);

    this.skill = skill;

    this.work = function () {
      console.log(`I can do ${this.skill}.`);
    };
  }

  Programmer.prototype = new Person();
  Programmer.prototype.constructor = Programmer;

  // Programmer.prototype.work = function () {
  //   console.log(`I can do ${this.skill}.`);
  // };

  const programmer = new Programmer("jsh", 41, "programming");

  console.log(Programmer.prototype);

  console.log(Programmer.prototype.constructor === Person);

  programmer.show();
  programmer.work();
};

const items = [
  {
    title: "Independent Object",
    description: "Each uses an independent memory space.",
    func: fun1,
  },
  {
    title: "Constructor Function",
    description: "Initialization of variables",
    func: fun2,
  },
  {
    title: "Shared Method",
    description: "It shares the memory space of the method.",
    func: fun3,
  },
  {
    title: "Method Overriding",
    description: "method overriding",
    func: fun4,
  },
  {
    title: "Inheritance",
    description: "Object.create & call",
    func: fun5,
  },
  {
    title: "Object inheritance structure",
    description: "Object.create",
    func: fun6,
  },
  {
    title: "Object Inheritance",
    description: "__proto__",
    func: fun7,
  },
  {
    title: "call",
    description: "Calls a method of an object, substituting another object for the current object.",
    func: fun8,
  },
  {
    title: "bind",
    description: "For a given function, creates a bound function that has the same body as the original function.",
    func: fun9,
  },
  {
    title: "apply",
    description: "function",
    func: fun10,
  },
  {
    title: "apply",
    description: "array",
    func: fun11,
  },
  {
    title: "Old Class",
    description: "Old Class",
    func: fun12,
  },
  {
    title: "Old Inheritance",
    description: "Old Inheritance",
    func: fun13,
  },
];
