import { useState, useEffect, useCallback } from "react";
import styles from "../../Common.module.css";

export default function Script5({ ...props }) {
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
          <li>Promise는 비동기 상태를 값으로 다룰 수 있는 객체이다.</li>
          <li>프로미스를 사용하면 비동기 프로그래밍을 할 때 동기 프로그래밍 방식으로 코드를 작성할 수 있다.</li>
          <li>프로미스가 널리 보급되기 전에는 비동기 프로그래밍 코드인 콜백 패턴이 많이 사용되었다.</li>
          <li>ES6에 Promise가 포함되었다.</li>
          <li>프로미스를 이용하면 비동기 프로그래밍을 할 때 코드를 순차적으로 작성할 수 있다.</li>
          <li>대기중 (pending) : 결과를 기다리는 상태이다.</li>
          <li>이행됨 (fulfilled) : 수행이 정상적으로 끝났고 결과값을 가지고 있다.</li>
          <li>이행됨 (settled) : 수행이 정상적으로 끝났음을 의미한다.</li>
          <li>거부됨 (rejected) : 수행이 비정상적으로 끝났음을 의미한다.</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

const fun1 = () => {
  const p1 = new Promise((resolve, reject) => {});

  const p2 = Promise.reject("error").then(null, (error) => console.log(error));

  const p3 = Promise.resolve({ name: "jsh" }).then((data) => console.log(data));
};

const fun2 = () => {
  console.log("프로미스에서 예외 처리를 할 때는 then 메서드의 onReject 함수보다 좀 더 직관적인 catch 메서드를 사용한다.");

  Promise.resolve()
    .then(() => {
      throw new Error("error");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("finally");
    });
};

function requestData(data) {
  return new Promise(function (resolve, reject) {
    if (data) {
      resolve(data);
    } else {
      reject(new Error("Data is null."));
    }
  });
}

const fun3 = () => {
  requestData(1)
    .then((data) => {
      console.log(data);
      return data + 1;
    })
    .then((data) => {
      console.log(data);
      return data + 1;
    })
    .then((data) => {
      console.log(data);
      throw new Error("error");
    })
    .then(null, (error) => {
      console.log(error);
    });
};

const fun4 = () => {
  requestData(1)
    .then(function (resolveData) {
      console.log(resolveData);
      return resolveData;
    })
    .then((data) => {
      console.log("data : " + data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => {
      console.log("finally");
    });
};

function sum(data) {
  if (data) {
    return Promise.resolve(data.reduce((a, b) => a + b));
  } else {
    return Promise.reject(new Error("Data is null."));
  }
}

function max(data) {
  if (data) {
    return Promise.resolve(Math.max(...data));
  } else {
    return Promise.reject(new Error("Data is null."));
  }
}

const fun5 = () => {
  console.log("병렬로 처리하기");
  console.log("비동기 함수 간에 서로 의존성이 없다면 병렬로 처리하는 게 더 빠르다.");

  const numbers = [1, 2, 3, 4, 5];

  sum(numbers).then((result) => console.log(result));
  max(numbers).then((result) => console.log(result));

  Promise.all([sum(numbers), max(numbers)])
    .then(([result1, result2]) => {
      console.log(result1, result2);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => {
      console.log("finally");
    });
};

const fun6 = () => {
  console.log("Promise.race : 가장 빨리 처리된 프로미스 가져오기");

  Promise.race([requestData(1), new Promise((_, reject) => setTimeout(reject, 3000))])
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

let cachePromise;

const fun7 = () => {
  console.log("프로미스를 이용한 데이터 캐싱");
  console.log("처리된 상태가 되면 현재 상태를 유지하는 프로미스의 성질을 이용해서 데이터를 캐싱할 수 있다.");

  cachePromise = cachePromise || requestData(1000);

  console.log(cachePromise);
};

const fun8 = () => {
  console.log(cachePromise.then((data) => console.log(data)));

  console.log("프로미스 사용 시 주의 사항");
  console.log("return 키워드 깜빡하지 않기");
  console.log("프로미스는 불변 객체라는 사실 명심하기");
  console.log("프로미스를 중첩해서 사용하지 않기");
  console.log("동기 코드의 예외 처리 신경 쓰기");
};

const items = [
  {
    title: "Promise 1",
    description: "Basic Syntax",
    func: fun1,
  },
  {
    title: "Promise 2",
    description: "Error Handling",
    func: fun2,
  },
  {
    title: "Promise 3",
    description: "Process sequentially",
    func: fun3,
  },
  {
    title: "Promise 4",
    description: "Processing in single",
    func: fun4,
  },
  {
    title: "Promise 5",
    description: "Processing in parallel",
    func: fun5,
  },
  {
    title: "Promise 6",
    description: "Promise.race",
    func: fun6,
  },
  {
    title: "Promise 7",
    description: "Data caching using Promises",
    func: fun7,
  },
  {
    title: "Promise 8",
    description: "",
    func: fun8,
  },
];
