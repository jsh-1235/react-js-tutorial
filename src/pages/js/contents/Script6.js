import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script6({ ...props }) {
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
      <span className={styles.border} />
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
          <li>async await는 비동기 프로그래밍을 동기 프로그래밍처럼 작성할 수 있도록 함수에 추가된 기능이다.</li>
          <li>프로미스가 JS 표준이 된고 2년 후 (ES2017)에 async await도 JS 표준이 되었다.</li>
          <li>프로미스는 객체로 존재하지만 async await는 함수에 적용되는 개념이다.</li>
          <li>async 키워드로 작성된 함수는 await 함수이며, 항상 프로미스를 반환한다.</li>
          <li>따라서 함수 호출후 then 메서드를 사용할 수 있다.</li>
        </ul>
      </div>
    </div>
  );
}

async function sum(numbers) {
  return numbers.reduce((a, b) => a + b);
}

async function average(numbers) {
  const sum = numbers.reduce((a, b) => a + b);

  // return sum / numbers.length;

  return Promise.resolve(sum / numbers.length);
}

const fun1 = () => {
  console.log("async 키워드로 작성된 함수는 await 함수이며, 항상 프로미스를 반환한다.");
  console.log("따라서 함수 호출후 then 메서드를 사용할 수 있다.");

  const numbers = [1, 2, 3, 4, 5];

  sum(numbers).then((sum) => console.log("sum", sum));
};

const fun2 = () => {
  const numbers = [1, 2, 3, 4, 5];

  average(numbers).then((average) => console.log("average", average));
};

function requestData(data, delay = 1000) {
  return new Promise(function (resolve, reject) {
    if (data) {
      setTimeout(() => {
        const sum = data.reduce((a, b) => a + b);

        console.log("sum", sum);

        resolve(sum);
      }, delay);
    } else {
      reject(new Error("Data is null."));
    }
  });
}

const fun3 = async () => {
  console.log("async await 함수는 then 메소드를 호출할 필요가 없기 때문에 더 간결하다.");

  const numbers1 = [1, 2, 3, 4, 5];
  const numbers2 = [6, 7, 8, 9, 10];

  const result1 = await requestData(numbers1);
  const result2 = await requestData(numbers2);

  console.log(result1, result2);
};

const fun4 = async () => {
  console.log("await 키워드를 나중에 사용해서 병렬로 실행되는 비동기 코드");

  const numbers1 = [1, 2, 3, 4, 5];
  const numbers2 = [6, 7, 8, 9, 10];

  const p1 = requestData(numbers1, 2000);
  const p2 = requestData(numbers2, 1000);

  const result1 = await p1;
  const result2 = await p2;

  console.log(result1, result2);
};

const fun5 = async () => {
  const numbers1 = [1, 2, 3, 4, 5];
  const numbers2 = [6, 7, 8, 9, 10];

  const [result1, result2] = await Promise.all([requestData(numbers1), requestData(numbers2)]);

  console.log(result1, result2);
};

const fun6 = async () => {
  try {
    const numbers = [1, 2, 3, 4, 5];

    let sum = await requestData(numbers);

    console.log("sum : ", sum);
  } catch (error) {
    console.log(error);
  }
};

class ThenableExample {
  constructor(value, delay) {
    this.value = value;
    this.delay = delay;
  }

  then(resolve, reject) {
    setTimeout(() => resolve(this.value), this.delay);
  }
}

const fun7 = async () => {
  console.log("Thenable을 지원하는 async await");
  console.log("Thenable은 프로미스처럼 동작하는 객체이다.");

  const result = await new ThenableExample(123456789, 5000);

  console.log(result);
};

const items = [
  {
    title: "Async-await 1",
    description: "sum",
    func: fun1,
  },
  {
    title: "Async-await 2",
    description: "average",
    func: fun2,
  },
  {
    title: "Async-await 3",
    description: "Process sequentially",
    func: fun3,
  },
  {
    title: "Async-await 4",
    description: "Processing in parallel",
    func: fun4,
  },
  {
    title: "Async-await 5",
    description: "Processing in parallel (Promise.all)",
    func: fun5,
  },
  {
    title: "Async-await 6",
    description: "Error Handling",
    func: fun6,
  },
  {
    title: "Async-await 7",
    description: "async await with thenable support",
    func: fun7,
  },
];
