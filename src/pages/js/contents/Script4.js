import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script4({ ...props }) {
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
          <li>매개변수에 기본값을 줄 수 있고, 나머지 매개변수를 통해 가변 길이 매개 변수를 좀 더 명시적으로 표현할 수 있다.</li>
          <li>명명된 매개변수(named parameter)를 통해서 함수를 호출하는 코드는 가독성이 월등히 좋아졌다.</li>
          <li>화살표 함수(arrow function)가 추가되면서 함수 코드가 간결해졌고, this 바인딩에 대한 고민을 덜 수 있다.</li>
        </ul>
      </div>
    </div>
  );
}

function printLog1(id = 1) {
  console.log(id, { id });
}

function printLog2(id = required()) {
  console.log(id, { id });
}

function printLog3(first, ...rest) {
  console.log(first, rest, Array.from(arguments));

  // const args = Array.from(arguments).splice(1);
  // console.log(args, arguments);
}

function required() {
  // throw new Error("no parameter");
  console.log("no parameter");
}

const fun1 = () => {
  console.log("강화된 함수의 기능");

  printLog1();
  printLog1(10);
};

const fun2 = () => {
  console.log("매개변수 기본값을 이용해서 필수값을 표현하는 방법");

  printLog2();
  printLog2(10);
};

const fun3 = () => {
  console.log("나머지 매개변수 (rest parameter)");
  console.log("나머지 매개변수는 입력된 인수 중에서 정의된 매개변수 개수만큼을 제외한 나머지를 배열로 만들어 준다.");
  console.log("나머지 매개변수는 매개변수 개수가 가변적일 때 유용하다.");

  printLog3();
  printLog3(1);
  printLog3(1, 2);
  printLog3(1, 2, 3);
};

function getValues1(numbers, greaterThan, lessThan) {
  return `${greaterThan} < ${numbers} < ${lessThan}`;
}

function getValues2(x, y, z) {
  console.log(x, y, z);
}

const fun4 = () => {
  console.log("명명된 매개변수 (named parameter)");
  console.log("명된 매개변수는 객체 비구조화를 이용해서 구현할 수 있다.");
  console.log("함수 호출 시 매개변수의 이름과 값을 동시에 적을 수 있으므로 가독성이 높다.");

  const numbers = [10, 20, 30, 40];

  console.log(getValues1(numbers, 0, 50));

  console.log(getValues2({ x: 1, y: 2, z: 3 }));
};

const fun5 = () => {
  console.log("화살표 함수");

  const add = (a, b) => a + b;
  console.log(add(1, 2));

  const add5 = (a) => a + 5;
  console.log(add5(1));

  const addAndReturnObject = (a, b) => ({ result: a + b });

  console.log(addAndReturnObject(1, 2).result);
};

const fun6 = () => {
  console.log("활살표 함수의 코드가 여러 줄인 경우");

  const add = (a, b) => {
    if (a <= 0 || b <= 0) {
      throw new Error("must be positive number");
    }

    return a + b;
  };

  console.log(add(10, 20));
};

const fun7 = () => {
  console.log("this와 arguments가 바인딩되지 않는 화살표 함수");

  const printLog = (...rest) => console.log(rest);

  printLog(10, 20, 30);
};

function Something() {
  this.count = 1;

  return setInterval(() => {
    this.count++;

    console.log(this.count);
  }, 1000);
}

const fun8 = () => {
  console.log("화살표 함수를 사용했기 때문에 this는 setInterval의 동작과는 상관없이 obj를 참조한다.");

  const obj = new Something();

  console.log(obj);
};

function makeAddFunc(x) {
  return function add(y) {
    return x + y;
  };
}

const fun9 = () => {
  console.log("클로저는 함수가 생성되는 시점에 접근 가능했던 변수들을 생성 이후에도 계속해서 접근할 수 있도록 해주는 기능이다.");

  console.log("접근할 수 있는 변수는 그 함수를 감싸고 있는 상위 함수들의 매개변수와 내부 변수들이다.");

  const add5 = makeAddFunc(5);
  console.log(add5(1));

  const add6 = makeAddFunc(6);
  console.log(add6(1));

  console.log(add5(3));
  console.log(add6(3));
};

const items = [
  {
    title: "Function 1",
    description: "Default Parameter",
    func: fun1,
  },
  {
    title: "Function 2",
    description: "Default Parameter required()",
    func: fun2,
  },
  {
    title: "Function 3",
    description: "...rest",
    func: fun3,
  },
  {
    title: "Function 4",
    description: "named parameter",
    func: fun4,
  },
  {
    title: "Function 5",
    description: "arrow function one-line",
    func: fun5,
  },
  {
    title: "Function 6",
    description: "arrow function multi-line",
    func: fun6,
  },
  {
    title: "Function 7",
    description: "arrow function this & bind",
    func: fun7,
  },
  {
    title: "Function 8",
    description: "arrow function this & bind",
    func: fun8,
  },
  {
    title: "Function 9",
    description: "closure",
    func: fun9,
  },
];
