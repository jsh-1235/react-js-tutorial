import { useState, useEffect, useCallback } from "react";
import $ from "jquery";
import styles from "../../Script.module.css";

export default function Script9({ ...props }) {
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
            <details id="details" open>
              <summary>summary</summary>
              <div className={styles.summary_container}>
                <div href="http://www.google.com" id="target" className={styles.summary_title}>
                  JQuery
                </div>
                <div id="marker" className={styles.summary_description}>
                  marker
                </div>
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
  $("li").css("background-color", "#ff6090");
};

const fun2 = () => {
  $(".list-item").css("background-color", "#4ebaaa");
};

const fun3 = () => {
  $("#title").css("background-color", "#6ab7ff").css("textDecoration", "underline");
};

const fun4 = () => {
  $("ul>.list-item").css("background-color", "#ffd95b").css("color", "white");
};

const fun5 = () => {
  $("#target").css("color", "#ff6090");
};

const fun6 = () => {
  console.log($("#target").attr("href"));
};

const fun7 = () => {
  $("#target").attr("href", "http://www.naver.com");

  console.log($("#target").attr("href"));
};

const fun8 = () => {
  console.log($("#target").is("[href]"));

  console.log($("#target").attr("href"));
};

const fun9 = () => {
  $("#target").removeAttr("href");

  console.log($("#target").is("[href]"));

  console.log($("#target").attr("href"));
};

const fun10 = () => {
  $("#target").prop("className", "jquery-marker");
};

const fun11 = () => {
  $("#details").find("#marker").css("color", "#ff6090");
};

const fun12 = () => {
  $("#title").on("click", (e) => {
    console.log(e.target.id);
  });
};

const fun13 = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  $.get(url, (data) => {
    console.log(data);
  });
};

const fun14 = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const data = { title: "foo", body: "bar", userId: 1 };

  $.ajax({
    url: url,
    type: "post",
    data,
    success: function (data) {
      console.log(data);
    },
  });
};

const items = [
  {
    title: "tag selector",
    description: "tag selector",
    func: fun1,
  },
  {
    title: "class selector",
    description: "class selector",
    func: fun2,
  },
  {
    title: "id selector",
    description: "id selector",
    func: fun3,
  },
  {
    title: "selector all",
    description: "selector all",
    func: fun4,
  },
  {
    title: "css",
    description: "css",
    func: fun5,
  },
  {
    title: "attr",
    description: "get",
    func: fun6,
  },
  {
    title: "attr",
    description: "set",
    func: fun7,
  },
  {
    title: "attr",
    description: "is",
    func: fun8,
  },
  {
    title: "attr",
    description: "removeAttr",
    func: fun9,
  },
  {
    title: "class",
    description: "prop",
    func: fun10,
  },
  {
    title: "find",
    description: "find",
    func: fun11,
  },
  {
    title: "events",
    description: "click",
    func: fun12,
  },
  {
    title: "ajax",
    description: "get",
    func: fun13,
  },
  {
    title: "ajax",
    description: "post",
    func: fun14,
  },
];
