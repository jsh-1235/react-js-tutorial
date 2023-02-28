import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script2({ ...props }) {
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
      <span id="title" className={styles.title}>
        {props.title}
      </span>
      <span className={styles.border} />
      <div className={styles.content}>
        <ul title={name.title}>
          <div className={styles.summary}>
            <details open>
              <summary>summary</summary>
              <div className={styles.summary_container}>
                <div className={styles.summary_title}>DOM</div>
                <div className={styles.summary_description}>Document Object Model</div>
                <div className={styles.summary_description}>DOM은 웹페이지에 대한 인터페이스이다.</div>
                <div className={styles.summary_description}>기본적으로 여러 프로그램들이 페이지의 콘텐츠 및 구조, 그리고 스타일을 읽고 조작할 수 있도록 API를 제공한다.</div>
                <div className={styles.summary_title}>DOM Tree</div>
                <div className={styles.summary_description}>Document node → Element node + Attribute node → Text node</div>
                <div className={styles.summary_title}>Document Node</div>
                <div className={styles.summary_description}>DOM Tree에서 최상위 루트 노드를 나타내며, document 객체를 가리킵니다.</div>
                <div className={styles.summary_description}>HTML 문서 전체를 나타내는 노드이기도 합니다.</div>
                <div className={styles.summary_description}>window 객체의 document 프로퍼티로 바인딩(연결)이 되어 있어 window.document , document로 참조해 사용할 수 있습니다.</div>
                <div className={styles.summary_description}>HTML 문서에 이 문서 노드는 오로지 1개만 존재합니다.</div>
                <div className={styles.summary_title}>Element Node </div>
                <div className={styles.summary_description}>모든 HTML 요소 (body, h2, div 등)는 이 요소 노드입니다.</div>
                <div className={styles.summary_description}>속성 노드를 가질 수 있는 유일한 노드로서, 부모-자식 관계를 가지게 되기 때문에 계층적 구조를 이룰 수 있게 됩니다.</div>
                <div className={styles.summary_title}>Attribute Node</div>
                <div className={styles.summary_description}>모든 HTML 요소의 속성은 이 속성 노드입니다.</div>
                <div className={styles.summary_description}>요소 노드에 대한 정보를 가지고 있습니다.</div>
                <div className={styles.summary_description}>그렇기 때문에 부모 노드가 아닌 해당 노드와 연결(바인딩)이 되어 있습니다.</div>
                <div className={styles.summary_title}>Text Node</div>
                <div className={styles.summary_description}>HTML 문서의 모든 텍스트는 이 텍스트 노드라 해도 과언이 아닙니다. </div>
                <div className={styles.summary_description}>텍스트 노드는 정보를 표현하며, 가장 마지막에 위치하는 자식 노드이기 때문에 잎사귀를 닮았다 해 리프 노드라고 불리기도 합니다.</div>
                <div className={styles.summary_title}>DOM 객체의 구성 요소</div>
                <div className={styles.summary_description}>프로퍼티(property) : DOM 객체의 멤버 변수입니다. HTML 태그의 속성을 반영합니다. </div>
                <div className={styles.summary_description}>메소드(method) : DOM 객체의 멤버 함수입니다. HTML 태그를 제어합니다.</div>
                <div className={styles.summary_description}>컬렉션(collection) : 정보를 집합적으로 표현하는 일종의 배열입니다. 예를 들어 children 컬렉션은 DOM 객체의 모든 자식 DOM 객체에 대한 주소를 가집니다.</div>
                <div className={styles.summary_description}>이벤트 리스너(event listener) : HTML 태그에 작성된 이벤트 리스너(onclick, onchange 등)들을 그대로 가집니다.</div>
                <div className={styles.summary_description}>스타일(style) : 이 프로퍼티를 통해 HTML 태그에 적용된 CSS 스타일 시트에 접근 가능합니다.</div>
                <div className={styles.summary_title}>DOM Data Type</div>
                <div className={styles.summary_description}>document : member(프로퍼티 혹은 메서드)가 document 타입의 object를 리턴할 때, 이 object는 root document object 자체입니다. </div>
                <div className={styles.summary_description}>element : DOM API 의 member에 의해 return 된 element 또는 element 타입의 노드를 의미합니다.</div>
                <div className={styles.summary_description}>nodeList : nodeList 는 element의 배열입니다.</div>
                <div className={styles.summary_description}>namedNodeMap : namedNodeMap는 배열과 유사하지만 안의 요소에 접근할 때 name 또는 index로 접근합니다.</div>
                <div className={styles.summary_description}></div>
              </div>
            </details>
          </div>
          {items.map((item) => {
            return (
              <li className="list-item" key={item.func.name}>
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
  const elements = document.getElementsByTagName("li");

  for (const element of elements) {
    console.log(element);

    element.style.backgroundColor = "#6ab7ff";
  }
};

const fun2 = () => {
  const elements = document.getElementsByClassName("list-item");

  for (const element of elements) {
    console.log(element);

    element.style.backgroundColor = "#6ab7ff";
  }
};

const fun3 = () => {
  const element = document.getElementById("title");

  element.style.backgroundColor = "#6ab7ff";
};

const fun4 = () => {
  const element = document.querySelector("#title");

  element.style.backgroundColor = "#4ebaaa";
};

const fun5 = () => {
  // const elements = document.querySelectorAll(".list-item");

  const elements = [...document.querySelectorAll(".list-item")];

  for (const element of elements) {
    console.log(element);

    element.style.backgroundColor = "#4ebaaa";
  }
};

const fun6 = () => {
  const elements = document.querySelectorAll(".list-item button");

  console.log(elements.length);

  for (const element of elements) {
    console.log(element);

    element.style.backgroundColor = "#ff6090";
  }
};

const fun7 = () => {
  const elements = document.querySelectorAll(".list-item > div div > span");

  console.log(elements.length);

  for (const element of elements) {
    console.log(element);
  }

  elements[1].style.color = "#ff6090";
};

const fun8 = () => {
  const elements = document.querySelectorAll("#title, .list-item");

  console.log(elements.length);

  for (const element of elements) {
    console.log(element);
    element.style.backgroundColor = "#ff6090";
  }
};

const fun9 = () => {
  const elements = document.querySelectorAll(".list-item > div > button ~ div>span");
  console.log(elements.length);
  for (const element of elements) {
    console.log(element);
    element.style.backgroundColor = "#ff6090";
  }
};

const fun10 = () => {
  const elements = document.querySelectorAll(".list-item > div > button + div>span");

  console.log(elements.length);

  for (const element of elements) {
    console.log(element);
    element.style.backgroundColor = "#4ebaaa";
  }
};

const items = [
  {
    title: "getElementsByTagName",
    description: "getElementsByTagName",
    func: fun1,
  },
  {
    title: "getElementsByClassName",
    description: "getElementsByClassName",
    func: fun2,
  },
  {
    title: "getElementById",
    description: "getElementById",
    func: fun3,
  },
  {
    title: "querySelector",
    description: "querySelector",
    func: fun4,
  },
  {
    title: "querySelectorAll",
    description: "querySelectorAll",
    func: fun5,
  },
  {
    title: "Descendant combinator (A B)",
    description: "Descendant combinator (A B)",
    func: fun6,
  },
  {
    title: "Child combinator (A > B)",
    description: "Child combinator (A > B)",
    func: fun7,
  },
  {
    title: "Selector list (A, B)",
    description: "Selector list (A, B)",
    func: fun8,
  },
  {
    title: "General sibling combinator (A ~ B)",
    description: "General sibling combinator (A ~ B)",
    func: fun9,
  },
  {
    title: "Adjacent sibling combinator (A + B)",
    description: "Adjacent sibling combinator (A + B)",
    func: fun10,
  },
];
