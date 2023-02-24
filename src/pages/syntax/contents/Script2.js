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
      <span className={styles.title}>{props.title}</span>
      <span className={styles.border} />
      <div className={styles.content}>
        <ul title={name.title}>
          <div className={styles.summary}>
            <details open>
              <summary>summary</summary>
              <div className={styles.summary_container}>
                <div className={styles.summary_title}>Script Tag</div>
                <div className={styles.summary_description}>DOM을 따라 반드시 순서대로 실행되어야 한다면 "script"</div>
                <div className={styles.summary_description}>일반적으로 브라우저는 HTML 파일을 읽어온 후, 위에서부터 아래로 한 줄씩 해석을 시작합니다. 그러다가 중간에 스크립트 파일을 마주하는 경우에는, 해당 파일을 모두 해석하기 전까지 나머지 HTML 렌더를 일시적으로멈춥니다.</div>
                <div className={styles.summary_title}>async</div>
                <div className={styles.summary_description}>async 스크립트는 DOM 렌더 과정을 방해하지 않도록 병렬로 로드합니다.</div>
                <div className={styles.summary_description}>이는 브라우저가 DOM을 구성하는 동시에 백그라운드에서 스크립트를 불러올 수 있음을 의미합니다. 즉 async 속성 적용하면 스크립트를 불러오는 과정에서 DOM 렌더를 차단하지 않도록 보장합니다.</div>
                <div className={styles.summary_description}>하지만 async 스크립트는 오직 파일을 불러오는 것만 병렬로 실행한다는 것이 중요합니다.</div>
                <div className={styles.summary_description}>파일의 로딩을 마치게 된다면, 그 즉시 DOM 렌더를 멈추고 async 방식으로 불러온 스크립트 파일의 해석을 시작합니다.</div>
                <div className={styles.summary_description}>async 스크립트는 완전히 비동기로 불러오기 때문에, DOM이 모두 로드된 경우 발생하는 DOMContentLoaded 이벤트 콜백으로 로드를 보장할 수 없습니다.</div>
                <div className={styles.summary_description}>async 스크립트는 DOM에 직접 접근하지 않거나, 다른 스크립트에 의존적이지 않은 스크립트들을 독립적으로 실행해야 할 때 효과적입니다.</div>
                <div className={styles.summary_title}>defer</div>
                <div className={styles.summary_description}>defer 스크립트 역시 DOM 렌더를 방해하지 않고 병렬로 로드합니다.</div>
                <div className={styles.summary_description}>하지만 로드가 완료된 후 즉시 그 내용이 실행되는 async 스크립트와는 다르게, defer 스크립트는 모든 DOM이 로드된 후에야 실행됩니다.</div>
                <div className={styles.summary_description}>또한 defer 스크립트는 선언한대로 실행 순서가 보장됩니다.</div>
                <div className={styles.summary_description}>실제로 더 빨리 로드되는 스크립트가 있다고 하더라도, 실행은 항상 선언한 순서대로 실행됩니다. 물론 스크립트 파일을 제외한 DOM 구성이 끝난 이후에 말이죠.</div>
                <div className={styles.summary_description}>또한 defer 스크립트는 단순히 먼저 로드한 스크립트라 하더라도 실행하는 시점을 지연시키는 것이기 때문에, DOMContentLoaded 이벤트가 발생되기 전에 이미 실행된 상태입니다. </div>
                <div className={styles.summary_description}>이 때문에 기본적으로 DOM의 모든 엘리먼트에 접근할 수 있고, 실행 순서도 보장하기 때문에 가장 범용적으로 사용할 수 있는 속성입니다. 또한 스크립트 파일끼리의 의존성이 있는 경우에도 정답이 될 수 있습니다.</div>
                <div className={styles.summary_title}>TTV vs TTI</div>
                <div className={styles.summary_description}>TTV (Time To View)</div>
                <div className={styles.summary_description}>TTI (Time To Interaction)</div>
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
  window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });
};

const fun2 = () => {
  window.addEventListener("load", function (event) {
    console.log("All resources finished loading!");
  });
};

const items = [
  {
    title: "DOMContentLoaded",
    description: "DOMContentLoaded",
    func: fun1,
  },
  {
    title: "load",
    description: "load",
    func: fun2,
  },
];
