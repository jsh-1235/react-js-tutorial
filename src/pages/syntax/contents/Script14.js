import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script14({ ...props }) {
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
                <div className={styles.summary_title}>Immutable</div>
                <div className={styles.summary_description}>이름 및 내용의 불변성</div>
                <div className={styles.summary_description}>불변의 객체</div>
                <div className={styles.summary_description}>불변의 함수</div>
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
  // Primitive : Number, String, Boolean, Null, Undefined, Symbol

  const number = 1;

  console.log("number", number);

  try {
    number = 2;
  } catch (e) {
    // Uncaught TypeError: Assignment to constant variable.
    console.error(e);
  }
};

const fun2 = () => {
  // Object : Object, Array, Function

  const student1 = { name: "jsh" };
  const student2 = { name: "kar" };

  console.log(student1, student2);
  console.log(student1 == student2, student1 === student2, student1.name === student2.name);

  try {
    student1 = student2;
  } catch (err) {
    console.error(err);
  } finally {
    console.log(student1);
  }
};

const fun3 = () => {
  const student1 = { name: "jsh", grades: [1, 2, 3] };

  // const student2 = { name: "kar", grades: [1, 2, 3] };
  const student2 = Object.assign({}, student1);
  // const student2 = student1;

  student1.name = "kar";
  student1.grades.push(4);

  console.log(student1 === student2, student1.name === student2.name, student1.grades === student2.grades);

  console.log(student1.name, student1.grades);
  console.log(student2.name, student2.grades);
};

const fun4 = () => {
  const student1 = { name: "jsh", grades: [1, 2, 3] };

  // const student2 = { name: "kar", grades: [1, 2, 3] };
  const student2 = Object.assign({}, student1);
  // const student2 = student1;

  student2.grades = student2.grades.concat(); // create new array

  student1.name = "kar";
  student1.grades.push(4);

  console.log(student1 === student2, student1.name === student2.name, student1.grades === student2.grades);

  console.log(student1.name, student1.grades);
  console.log(student2.name, student2.grades);
};

function changeName(person) {
  person.name = "dog";
  console.log("change", person.name);
}

const fun5 = () => {
  const person = { name: "jeong" };

  console.log("before", person.name);

  changeName(person);

  console.log("after", person.name);
};

const fun6 = () => {
  const person = { name: "jeong" };

  console.log("before", person.name);

  changeName(Object.assign({}, person)); // create new object

  console.log("after", person.name);
};

const fun7 = () => {
  const student = { name: "jsh", grades: [1, 2, 3] };

  Object.freeze(student);
  Object.freeze(student.grades);

  console.log("before", student);

  try {
    student.grades.push(4); // immutable
    student.name = "kar"; // immutable
  } catch (err) {
    console.error(err);
  } finally {
    console.log("after", student);
  }
};

const items = [
  {
    title: "Primitive data types",
    description: "Prevent assignment to constant variable",
    func: fun1,
  },
  {
    title: "Object data types",
    description: "Prevent assignment to constant variable",
    func: fun2,
  },
  {
    title: "Array Clone",
    description: "Shallow copy",
    func: fun3,
  },
  {
    title: "Array Clone",
    description: "Deep copy → concat()",
    func: fun4,
  },
  {
    title: "Function Mutable",
    description: "Pass object reference",
    func: fun5,
  },
  {
    title: "Function Immutable",
    description: "Object.assign()",
    func: fun6,
  },
  {
    title: "Object Immutable",
    description: "Object.freeze()",
    func: fun7,
  },
];
