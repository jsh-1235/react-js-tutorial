import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script1({ ...props }) {
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
                <div className={styles.summary_title}>HTML</div>
                <div className={styles.summary_description}>HTML is Hyper Text Markup Language.</div>
                <div className={styles.summary_title}>HTML History</div>
                <div className={styles.summary_description}>HTML 1</div>
                <div className={styles.summary_description}>HTML 2</div>
                <div className={styles.summary_description}>HTML 3.2</div>
                <div className={styles.summary_description}>HTML 4.01</div>
                <div className={styles.summary_description}>HTML 5</div>
                <div className={styles.summary_title}>DOC Type</div>
                <div className={styles.summary_description}>{`DOCTYPE 선언은 HTML 문서에서 <html> 태그를 정의하기 전에 가장 먼저 선언되어야만 합니다.`}</div>
                <div className={styles.summary_description}>이러한 DOCTYPE 선언은 HTML 태그는 아니지만, 선언된 페이지의 HTML 버전이 무엇인지를 웹 브라우저에 알려주는 역할을 하는 선언문으로, 대소문자를 구분하지 않습니다.</div>
                <div className={styles.summary_description}> HTML 4.01에서 DOCTYPE 선언은 SGML을 기반으로 하기 때문에 DTD를 참조해야 합니다. DTD (Document Type Definition)는 브라우저가 콘텐츠를 정확하게 표현하도록 마크업 언어에 대한 규칙을 명시합니다.</div>
                <div className={styles.summary_description}>하지만 HTML5는 SGML을 기반으로 하지 않기 때문에 DTD를 참조할 필요가 없습니다.</div>
                <div className={styles.summary_title}>Meta tag</div>
                <div className={styles.summary_description}>웹 페이지 자체를 설명하는 태그이다.</div>
                <div className={styles.summary_title}>Semantic tag</div>
                <div className={styles.summary_description}>웹 페이지의 구조를 쉽게 이해할 수 있도록 정의된 태그를 의미한다.</div>
                <div className={styles.summary_description}>의미론적 태그</div>
                <div className={styles.summary_title}>Cross Browser Issue</div>
                <div className={styles.summary_description}>호환성 문제 (Netscape, IE, Chrome, Safari, Firefox)</div>
                <div className={styles.summary_description}>표준화 기구 (w3C, ECMA)</div>
                <div className={styles.summary_description}>웹 표준</div>
                <div className={styles.summary_title}>CND</div>
                <div className={styles.summary_description}>Content Delivery Network</div>
                <div className={styles.summary_description}>콘텐츠 전송 네트워크는 콘텐츠를 효율적으로 전달하기 위해 여러 노드를 가진 네트워크에 데이터를 저장하여 제공하는 시스템을 말한다. </div>
                <div className={styles.summary_description}>인터넷 서비스 제공자에 직접 연결되어 데이터를 전송하므로, 콘텐츠 병목을 피할 수 있는 장점이 있다.</div>
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
  const items = document.getElementsByTagName("meta");

  console.log(items);

  for (const item of items) {
    console.log(item);
  }

  console.log(document.characterSet);
};

const fun2 = () => {
  const items = document.getElementsByTagName("meta");

  console.log(typeof items);

  const list = Array.from(items, (item) => {
    console.log(item.name, typeof item.name);

    return { name: item.name || "charset", content: item.content || document.characterSet };
  });

  console.log(list);

  list.forEach((item, index) => {
    console.log(`${index} → ${item.name} ${item.content}`);
  });
};

const fun3 = () => {
  // After the navigation occurs, the user can navigate back to the page that called Location.assign() by pressing the "back" button.
  window.location.assign("../ui.html");
};

const items = [
  {
    title: "meta tag",
    description: "getElementsByTagName",
    func: fun1,
  },
  {
    title: "meta tag",
    description: "iterator",
    func: fun2,
  },
  {
    title: "popup",
    description: "html elements",
    func: fun3,
  },
];

// Critical Rendering Path
// Dom Tree 구축
// CSSOM Tree 구축
// Javascript 실행
// Render Tree 구축
// Layout 생성
// Paint
