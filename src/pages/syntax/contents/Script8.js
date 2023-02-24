import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script8({ ...props }) {
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
                <div className={styles.summary_description}>Classes are a template for creating objects.</div>
                <div className={styles.summary_description}>They encapsulate data with code to work on that data.</div>
                <div className={styles.summary_description}>Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.</div>
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

class User {
  static publisher = "BT";

  nationality = "korea"; // public field
  #zipCode = 80; // private field

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }

  profile() {
    console.log(`${this.lastName}${this.firstName} → ${this.age}`);
  }

  getZipCode() {
    return this.#zipCode;
  }

  static metadata() {
    return `metadata → ${User.publisher}`;
  }
}

const fun1 = () => {
  const user = new User("승훈", "정", 40);

  user.profile();
};

const fun2 = () => {
  const user = new User("승훈", "정", 40);

  user.age = 20;

  console.log(`age : ${user.age}`);
};

const fun3 = () => {
  const user = new User("승훈", "정", 40);

  user.getZipCode();

  console.log(`public field : ${user.nationality}`);
  console.log(`private field : ${user.getZipCode()} ${user.zipCode}`);
};

const fun4 = () => {
  console.log(`static field : ${User.publisher}`);
  console.log(`static method : ${User.metadata()}`);
};

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log("%cpaint the background color", `color:${this.color}`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  // overriding

  draw() {
    super.draw();

    console.log(`cdraw a rectangle → ${this.getArea()}`, `color:${this.color}`);
  }
}

class Triangle extends Shape {
  // overriding

  draw() {
    super.draw();

    console.log(`cdraw a triangle → ${this.getArea()}`, `color:${this.color}`);
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

const fun5 = () => {
  const rectangle = new Rectangle(10, 20, "green");
  const triangle = new Triangle(10, 20, "blue");

  rectangle.draw();
  triangle.draw();
};

const fun6 = () => {
  const rectangle = new Rectangle(10, 20, "green");
  const triangle = new Triangle(10, 20, "blue");

  console.log(rectangle instanceof Rectangle, rectangle instanceof Shape, rectangle instanceof Object, rectangle instanceof Triangle);
  console.log(triangle instanceof Triangle, triangle instanceof Shape, triangle instanceof Object, triangle instanceof Rectangle);
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`name : ${this.name} age : ${this.age}`);
  }
}

// Inheritance (상속)
// Super class → Sub class
class Adult extends Person {
  constructor(name, age, job) {
    super(name, age);

    this.job = job;
  }

  work() {
    console.log(`${this.name}'s job is ${this.job}`);
  }
}

const fun7 = () => {
  const person = new Person("jsh", "41");

  person.show();

  person.show = function () {
    console.log(`My name is ${this.name}. I am ${this.age} years old.`);
  };

  person.show();

  const adult = new Adult("jsh", "41", "programmer");

  adult.show();
  adult.work();
};

const items = [
  {
    title: "Declaration & constructor",
    description: "new Class()",
    func: fun1,
  },
  {
    title: "getter / setter",
    description: "Encapsulation",
    func: fun2,
  },
  {
    title: "public / private Class Fields",
    description: "Class Access Modifiers",
    func: fun3,
  },
  {
    title: "Static properties / methods",
    description: "Class Global Object",
    func: fun4,
  },
  {
    title: "Inheritance",
    description: "overriding",
    func: fun5,
  },
  {
    title: "instanceof",
    description: "instanceof",
    func: fun6,
  },
  {
    title: "Person",
    description: "Person",
    func: fun7,
  },
];
