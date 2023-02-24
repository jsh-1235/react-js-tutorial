import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script6({ ...props }) {
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
                <div className={styles.summary_title}>Dynamically Array</div>
                <div className={styles.summary_description}>A Dynamic array automatically grows when we try to make an insertion and there is no more space left for the new item.</div>
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
  const arr1 = new Array();

  arr1.push(1);
  arr1.push(2);
  arr1.push(3);
  arr1.push(4);
  arr1.push(5);

  console.log(arr1, arr1[arr1.length - 1]);

  const arr2 = [1, 2, 3, 4, 5];

  for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
  }
};

const fun2 = () => {
  const fruits = ["🍎", "🥝", "🍓", "🍑", "🍈"];

  for (const key in fruits) {
    console.log(`${key} ${fruits[key]}`);
  }
};

const fun3 = () => {
  const fruits = ["🍎", "🥝", "🍓", "🍑", "🍈"];

  for (const fruit of fruits) {
    console.log(`${fruit}`);
  }
};

const fun4 = () => {
  const fruits = ["🍎", "🥝", "🍓", "🍑", "🍈"];

  fruits.forEach((item, index, arr) => {
    console.log(`${index} ${item} → ${arr}`);
  });
};

// stack (FILO)
const fun5 = () => {
  const fruits = ["🍎"];

  fruits.push("🥝");
  fruits.push("🍓");

  console.log(fruits);

  fruits.pop();
  console.log(fruits);

  fruits.pop();
  console.log(fruits);

  fruits.pop();
  console.log(fruits);
};

// Queue (FIFO)
const fun6 = () => {
  const fruits = ["🍎"];

  console.log(fruits);

  fruits.unshift("🥝");
  console.log(fruits);

  fruits.unshift("🍓");
  console.log(fruits);

  console.log(fruits.shift(), fruits);

  console.log(fruits.shift(), fruits);
};

const fun7 = () => {
  const fruits = ["🍎", "🥝", "🍓", "🍑", "🍈", "🍎"];

  console.log(fruits);

  console.log(fruits.indexOf("🍎"));
  console.log(fruits.lastIndexOf("🍎"));
};

const fun8 = () => {
  const fruits = ["🍎", "🥝", "🍓", "🍑", "🍈"];

  console.log(fruits);

  console.log(fruits.includes("🍎"));
  console.log(fruits.includes("🍊"));
};

const fun9 = () => {
  const fruits = ["🍎", "🥝", "🍓", "🍑", "🍈"];

  console.log(fruits);

  console.log(fruits.splice(0, 2, "🍊", "🍉"));

  console.log(fruits);
};

const fun10 = () => {
  const fruits1 = ["🍎", "🥝", "🍓", "🍑", "🍈"];
  const fruits2 = ["🍊", "🍉"];

  console.log(fruits1);
  console.log(fruits2);
  console.log(fruits1.concat(fruits2));
};

const fun11 = () => {
  const fruits = ["🍎", "🥝", "🍓", "🍑", "🍈"];

  console.log(fruits);

  console.log(fruits.slice(0, 2));

  console.log(fruits);
};

const fun12 = () => {
  const fruits = ["apple", "banana", "orange"];

  console.log(fruits.join("-"));
};

const fun13 = () => {
  const array = [1, 2, 3, 4, 5];

  console.log(array);

  console.log(array.reverse());

  console.log(array);
};

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [new Student("A", 29, true, 45), new Student("B", 28, false, 80), new Student("C", 30, true, 90), new Student("D", 40, false, 66), new Student("E", 18, true, 88)];

const fun14 = () => {
  // find a student with the score 90 (find)

  console.log(students.find((student) => student.score === 90));
};

const fun15 = () => {
  // make an array of enrolled students (filter)

  console.log(students.filter((student) => student.enrolled));
};

const fun16 = () => {
  // make an array containing only name (map)

  console.log(
    students.map((student) => {
      return { name: student.name, age: student.age };
    })
  );
};

const fun17 = () => {
  // check if there is a student with the score lower than 50(some / every);

  console.log(
    students.some((student) => {
      return student.score < 50;
    })
  );

  console.log(
    !students.every((student) => {
      return student.score >= 50;
    })
  );
};

const fun18 = () => {
  // compute student's average score (reduce)

  const sum = students.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.score;
  }, 0);

  console.log(sum, sum / students.length);
};

const fun19 = () => {
  // make a string containing all the scores result should be '80, 90, 66, 99' (map / filter / join)

  const result = students
    .map((student) => student.score)
    .filter((score) => score > 50)
    .join(",");

  console.log(result);
};

const fun20 = () => {
  // sorted in ascending order (sort)

  const students1 = students.concat();
  const students2 = [...students];

  console.log(students);
  console.log(
    "ascending order",
    students1.sort((a, b) => a.score - b.score)
  );
  console.log(
    "descending order",
    students2.sort((a, b) => b.score - a.score)
  );
};

const range = (begin, end, step = 0) => {
  return Array.from({ length: (end - begin) / step + 1 }, (v, k) => begin + k * step);
};

class Images {
  constructor(name, src) {
    this.name = name;
    this.src = src;
  }

  toString() {
    console.log(`${this.name} → ${this.src}`);
  }
}

const fun21 = () => {
  console.log("The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.");

  console.log(Array.from(["a", "b", "c", "d"]));
  console.log(Array.from([1, 2, 3, 4], (x) => x + x));
  console.log(Array.from({ length: 5 }, (v, k) => k));

  console.log(range(10, 100, 5));

  const images = Array.from({ length: 5 }, (v, k) => {
    return new Images(`picture${k}`, `/download/picture${k}`);
  });

  console.log(images);

  const src = Array.from(images, (image) => image.src);

  console.log(src);
};

const fun22 = () => {
  function sum() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];

      console.log(arguments[i]);
    }

    return sum;
  }

  console.log("sum", sum(1, 2, 3, 4, 5));
};

const fun23 = () => {
  function sum(...args) {
    let sum = 0;

    for (const arg of args) {
      sum += arg;

      console.log(arg);
    }

    return sum;
  }

  console.log("sum", sum(1, 2, 3, 4, 5));
};

const items = [
  {
    title: "new Array()",
    description: "Declaration",
    func: fun1,
  },
  {
    title: "for in",
    description: "Array Traversal",
    func: fun2,
  },
  {
    title: "for of",
    description: "Array Traversal",
    func: fun3,
  },
  {
    title: "forEach",
    description: "Array Traversal",
    func: fun4,
  },
  {
    title: "push / pop",
    description: "stack (FILO)",
    func: fun5,
  },
  {
    title: "unshift / shift",
    description: "Queue (FIFO)",
    func: fun6,
  },
  {
    title: "indexOf / lastIndexOf",
    description: "indexOf / lastIndexOf",
    func: fun7,
  },
  {
    title: "includes",
    description: "includes",
    func: fun8,
  },
  {
    title: "splice",
    description: "splice",
    func: fun9,
  },
  {
    title: "concat",
    description: "concat",
    func: fun10,
  },
  {
    title: "slice",
    description: "slice",
    func: fun11,
  },
  {
    title: "join",
    description: "join",
    func: fun12,
  },
  {
    title: "reverse",
    description: "reverse",
    func: fun13,
  },
  {
    title: "find",
    description: "find",
    func: fun14,
  },
  {
    title: "filter",
    description: "filter",
    func: fun15,
  },
  {
    title: "map",
    description: "map",
    func: fun16,
  },
  {
    title: "some / every",
    description: "some / every",
    func: fun17,
  },
  {
    title: "reduce",
    description: "reduce",
    func: fun18,
  },
  {
    title: "map / filter / join",
    description: "map / filter / join",
    func: fun19,
  },
  {
    title: "sort",
    description: "sort",
    func: fun20,
  },
  {
    title: "Array.from",
    description: "constructor",
    func: fun21,
  },
  {
    title: "arguments",
    description: "arguments",
    func: fun22,
  },
  {
    title: "...args",
    description: "...args",
    func: fun23,
  },
];
