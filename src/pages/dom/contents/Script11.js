import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script11({ ...props }) {
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
      <div id="eventContainer" style={{ background: "#f48fb1", padding: "50px", margin: "10px" }}>
        <button id="event1" style={{ margin: "5px" }} className="button">
          EVENT1
        </button>
        <button id="event2" style={{ margin: "5px" }} className="button">
          EVENT2
        </button>
        <button
          id="event3"
          style={{ margin: "5px" }}
          className="button"
          onClick={function (e) {
            e.target.innerText = e.target.innerText === "OFF" ? "ON" : "OFF";

            console.log(e.target.innerText);
          }}>
          ON
        </button>
        <input id="input" type="text" className="input" />
      </div>
      <div className={styles.content}>
        <ul title={name.title}>
          <div className={styles.summary}>
            <details id="details" open>
              <summary onClick={(e) => console.log(e.target)}>summary</summary>
              <div className={styles.summary_container}>
                <div className={styles.summary_title}>Events</div>
                <div className={styles.summary_description}>The Event interface represents an event which takes place in the DOM.</div>
                <div className={styles.summary_description}>event target / event type / event handler </div>
                <div className={styles.summary_description}>Inline / Property Listener / addEventListener </div>
                <div className={styles.summary_title}>Events Bubbling</div>
                <div className={styles.summary_description}>자식으로 부모로 이벤트 전파</div>
                <div className={styles.summary_title}>Events Capturing</div>
                <div className={styles.summary_description}>부모에서 자식으로 이벤트 전파</div>
                <div className={styles.summary_title}>DOMContentLoaded</div>
                <div className={styles.summary_description}>DOMContentLoaded 이벤트는 HTML 문서가 완전히 구문 분석되고 모든 지연된 스크립트가 다운로드 및 실행되면 발생합니다.</div>
                <div className={styles.summary_description}>이미지, 하위 프레임 및 비동기 스크립트와 같은 다른 항목이 로드를 완료할 때까지 기다리지 않습니다.</div>
                <div className={styles.summary_title}>load</div>
                <div className={styles.summary_description}>스타일시트, 스크립트, iframe 및 이미지와 같은 모든 종속 리소스를 포함하여 전체 페이지가 로드되면 load 이벤트가 시작됩니다.</div>
                <div className={styles.summary_description}>이는 리소스 로드가 완료될 때까지 기다리지 않고 페이지 DOM이 로드되자마자 실행되는 DOMContentLoaded와 대조됩니다.</div>
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
  // Registered only once.
  window.document.querySelector("#title").onclick = (e) => {
    // Cancellation of event default action

    if (window.document.querySelector("#event3").innerText === "OFF") {
      return false;
    }

    console.log("Property Listener", e.target);
  };
};

const fun2 = () => {
  window.document.querySelector("#title").addEventListener("click", (e) => {
    console.log("addEventListener", e.target);
  });
};

// Prevent event listeners from being registered multiple times.
function listener(e) {
  e.preventDefault();

  console.log(e.target);

  // if (e.target.id !== "eventContainer") {
  //   e.stopPropagation(); // 이벤트 전달 중지
  // }
}

function handler(event) {
  var phases = ["capturing", "target", "bubbling"];

  console.log(event.target.nodeName, this.nodeName, phases[event.eventPhase - 1]);
}

const fun3 = () => {
  window.document.querySelector("#event1").addEventListener("click", listener);
  window.document.querySelector("#event2").addEventListener("click", listener);
};

const fun4 = () => {
  window.document.querySelector("#event1").removeEventListener("click", listener);
  window.document.querySelector("#event2").removeEventListener("click", listener);
};

const fun5 = () => {
  window.document.querySelector("#event1").addEventListener("click", handler, false);
  window.document.querySelector("#event2").addEventListener("click", handler, false);
  window.document.querySelector("#eventContainer").addEventListener("click", handler, false);
};

const fun6 = () => {
  window.document.querySelector("#event1").addEventListener("click", handler, true);
  window.document.querySelector("#event2").addEventListener("click", handler, true);
  window.document.querySelector("#eventContainer").addEventListener("click", handler, true);
};

const fun7 = () => {
  document.getElementById("input").addEventListener("focus", function (event) {
    console.log("focus", event.target.id, event.target.value);
  });

  document.getElementById("input").addEventListener("change", function (event) {
    console.log("change", event.target.id, event.target.value);
  });

  document.getElementById("input").addEventListener("blur", function (event) {
    console.log("blur", event.target.id, event.target.value);
  });
};

function mouseEventHandler(event) {
  var time = new Date();
  console.log(time.getMilliseconds(), event.type, event.altKey, event.ctrlKey, event.shiftKey, event.clientX, event.clientY);
}

const fun8 = () => {
  document.querySelector("#eventContainer").addEventListener("click", mouseEventHandler);
  document.querySelector("#eventContainer").addEventListener("dblclick", mouseEventHandler);
  document.querySelector("#eventContainer").addEventListener("mousedown", mouseEventHandler);
  document.querySelector("#eventContainer").addEventListener("mouseup", mouseEventHandler);
  document.querySelector("#eventContainer").addEventListener("mousemove", mouseEventHandler);
  document.querySelector("#eventContainer").addEventListener("mouseover", mouseEventHandler);
  document.querySelector("#eventContainer").addEventListener("mouseout", mouseEventHandler);
  document.querySelector("#eventContainer").addEventListener("contextmenu", mouseEventHandler);
};

const items = [
  {
    title: "Property Listener",
    description: "click",
    func: fun1,
  },
  {
    title: "addEventListener",
    description: "click",
    func: fun2,
  },
  {
    title: "Event Handler",
    description: "Event Handler",
    func: fun3,
  },
  {
    title: "removeEventListener",
    description: "removeEventListener",
    func: fun4,
  },
  {
    title: "Event propagation",
    description: "Bubbling",
    func: fun5,
  },
  {
    title: "Event propagation",
    description: "Capturing",
    func: fun6,
  },
  {
    title: "input events",
    description: "focus change blur",
    func: fun7,
  },
  {
    title: "mouse events",
    description: "replaceAll",
    func: fun8,
  },
];

window.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");
});

window.onload = function () {
  console.log("window.onload");
};

window.addEventListener("load", function () {
  console.log("window.addEventListener");
});
