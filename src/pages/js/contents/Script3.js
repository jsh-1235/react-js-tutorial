import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script3({ ...props }) {
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
      <span className={styles.border} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <details open>
            <summary>summary</summary>
            <div className={styles.summary_container}>
              <div className={styles.summary_title}>Basic Theory</div>
              <div className={styles.summary_description}>ES6는 템플릿 리터럴(Template literal)이라고 불리는 새로운 문자열 표기법을 도입하였다.</div>
              <div className={styles.summary_description}>템플릿 리터럴은 일반 문자열과 비슷해 보이지만, ‘ 또는 “ 같은 통상적인 따옴표 문자 대신 백틱(backtick) 문자 `를 사용한다.</div>
              <div className={styles.summary_description}>일반적인 문자열에서 줄바꿈은 허용되지 않으며 공백(white-space)를 표현하기 위해서는 백슬래시(\)로 시작하는 이스케이프 시퀀스(Escape Sequence)를 사용하여야 한다.</div>
              <div className={styles.summary_description}>ES6 템플릿 리터럴은 일반적인 문자열과 달리 여러 줄에 걸쳐 문자열을 작성할 수 있으며 템플릿 리터럴 내의 모든 white-space는 있는 그대로 적용된다.</div>
              <div className={styles.summary_description}>템플릿 리터럴은 + 연산자를 사용하지 않아도 간단한 방법으로 새로운 문자열을 삽입할 수 있는 기능을 제공한다.</div>
              <div className={styles.summary_description}>이를 문자열 인터폴레이션(String Interpolation)이라 한다.</div>
            </div>
          </details>
        </div>
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
    </div>
  );
}

const fun1 = () => {
  const name = "jsh";
  const age = 38;
  const score = 80;

  const student = `
    {
      "name": "${name}",
      "age": ${age},
      "score": ${score}
    }
  `;

  console.log(JSON.parse(student));
};

function highlight(strings, ...expressions) {
  console.log(strings);
  console.log(expressions);

  return strings.reduce((accumulator, currentValue, currentIndex) => (expressions.length === currentIndex ? `${accumulator}${currentValue}` : `${accumulator}${currentValue}<string>${expressions[currentIndex]}</string>`), "");
}

const fun2 = () => {
  console.log("태그된 탬플릿 리터럴");

  const name = "jsh";
  const age = 20;
  const result = highlight`name : ${name} age : ${age}`;

  console.log(result);
};

const items = [
  {
    title: "Template Literal 1",
    description: "JSON",
    func: fun1,
  },
  {
    title: "Template Literal 2",
    description: "Tagged Template Literal",
    func: fun2,
  },
];
