import { useState, useEffect, useCallback } from "react";
import styles from "../../Common.module.css";

export default function Script2({ ...props }) {
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
    // console.log("state", name);

    handler(name);
  }, [handler, name]);

  const handleClick = (e) => {
    console.clear();

    setName({
      func: e.target.name,
      title: e.target.innerText,
    });
  };

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
          <li>제너레이터는 함수의 실행을 중간에 멈추고 재개할 수 있는 독특한 기능이다.</li>
          <li>실행을 멈출 때 값을 전달할 수 있기 때문에 반복문에서 제너레이터가 전달하는 값을 하나씩 꺼내서 사용할 수 있다.</li>
          <li>제너레이터를 사용하면 필요한 순간에 값을 계산해서 전달할 수 있기 때문에 메모리 측면에서 효율적이다.</li>
          <li>제너레이터는 값을 전달하는 용도 외에도 다른 함수와 협업 멀티태스킹(Cooperative Multitasking)을 할 수 있다.</li>
          <li>제너레이터가 실행을 멈추고 재개 할 수 있기 때문에 멀티테스킹이 가능하다.</li>
        </ul>
      </div>
    </div>
  );
}

function* Generate1() {
  console.log("function 1");
  yield 1;
  console.log("function 2");
  yield 2;
  console.log("function 3");
  return 3;
}

function* Generate2() {
  try {
    console.log("function 1");
    yield 1;
    console.log("function 2");
    yield 2;
    console.log("function 3");
    return 3;
  } catch (err) {
    console.log(err);
  }
}

function* Generate3() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

function* Generate4() {
  const data1 = yield;
  console.log(data1);
  const data2 = yield;
  console.log(data2);
}

function* Generate5() {
  throw new Error("some error");
}

function* map(items, mapper) {
  for (const item of items) {
    yield mapper(item);
  }
}

function* filter(items, test) {
  for (const item of items) {
    if (test(item)) {
      yield item;
    }
  }
}

function* take(n, items) {
  for (const item of items) {
    if (n <= 0) return;

    yield item;

    n--;
  }
}

function* naturalNumbers() {
  let number = 1;

  while (true) {
    yield number++;
  }
}

function* g1() {
  yield 2;
  yield 3;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 4;
}

function* g3() {
  yield 1;
  for (const value of g1()) {
    yield value;
  }
  yield 4;
}

function* g4() {
  yield 1;
  yield* [2, 3];
  yield 4;
}

function* minsu() {
  const messages = ["안녕 나는 민수야", "만나서 반가워", "내일 영화 볼래?", "시간 안 되니?", "내일모레는 어때?"];

  for (const message of messages) {
    console.log("수지 : ", yield message);
  }
}

const fun1 = () => {
  console.log("제너레이터는 별표와 함께 정의된 함수와 그 함수가 반환하는 제너레이터 객체로 구성된다.");

  const generator = Generate1();

  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
};

const fun2 = () => {
  const generator = Generate2();

  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.throw("some error"));
};

const fun3 = () => {
  console.log("반복 가능하면서 반복자인 제너레이터 객체");

  const values = [1, 2, 3];
  const iterator = values[Symbol.iterator]();

  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());

  const gen = Generate2();

  console.log(Symbol.iterator);

  console.log(gen === gen[Symbol.iterator]());
};

const fun4 = () => {
  for (const generator of Generate3()) {
    console.log(generator);
  }

  const generator = [...Generate3()]; // 전개 연산자 사용
  console.log(generator);
};

const fun5 = () => {
  console.log("필요한 순간에만 연산하는 방식을 지연 평가(lazy evaluation)라고 부른다.");
  console.log("필요한 연산만 수행된다는 장점이 있다.");

  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const result = take(
    3,
    map(
      filter(values, (value) => value % 2 === 0),
      (value) => value * 10
    )
  );

  console.log([...result]);
};

const fun6 = () => {
  console.log("무한대의 자연수 생성 - 지연 평가");

  const values = naturalNumbers();

  // console.log([...values]);  // infinite loop

  const result = take(
    6,
    map(
      filter(values, (value) => value % 2 === 0),
      (value) => value * 10
    )
  );

  console.log([...result]);
};

const fun7 = () => {
  console.log(...g2());
  console.log(...g3());
  console.log(...g4());
};

const fun8 = () => {
  console.log(" 제너레이터 함수의 실행이 시작되도록 하는 역할만 한다.");

  const generator = Generate4();

  generator.next();
  generator.next(100);
  generator.next(1000);
};

const fun9 = () => {
  console.log("협업 멀티태스킹");

  const messages = ["", "안녕 나는 수지야", "그래 반가워", "..."];

  const generator = minsu();

  for (const message of messages) {
    console.log("민수 : ", generator.next(message).value);
  }
};

const fun10 = () => {
  console.log("예외 처리");

  const generator = Generate5();

  try {
    generator.next();
  } catch (e) {
    console.log(e);
  }
};

const items = [
  {
    title: "Generator 1",
    description: "Basic Syntax",
    func: fun1,
  },
  {
    title: "Generator 2",
    description: "Exception & Error Handling",
    func: fun2,
  },
  {
    title: "Generator 3",
    description: "Iterator",
    func: fun3,
  },
  {
    title: "Generator 4",
    description: "Traversal (for of)",
    func: fun4,
  },
  {
    title: "Generator 5",
    description: "Traversal (Spread operator)",
    func: fun5,
  },
  {
    title: "Generator 6",
    description: "Infinite number of natural numbers",
    func: fun6,
  },
  {
    title: "Generator 7",
    description: "Combination",
    func: fun7,
  },
  {
    title: "Generator 8",
    description: "Argument",
    func: fun8,
  },
  {
    title: "Generator 9",
    description: "Collaborative multitasking",
    func: fun9,
  },
  {
    title: "Generator 10",
    description: "Exception Handling",
    func: fun10,
  },
];
