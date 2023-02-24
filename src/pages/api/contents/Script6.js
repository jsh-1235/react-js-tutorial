import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styles from "../../Script.module.css";

export default function Script6({ ...props }) {
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
                <div className={styles.summary_title}>AJAX</div>
                <div className={styles.summary_description}>Asynchronous JavaScript and XML</div>
                <div className={styles.summary_description}>서버와 클라이언트 간의 데이터를 주고 받는 형식으로서의 JSON과 페이지 리로드 없이 웹페이지 내용을 변겨할 수 있는 Ajax는 웹 에플리케이션을 구축하는데 중요하다.</div>
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
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.onreadystatechange = function () {
    console.log(xhr);

    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };

  xhr.send();
};

const fun2 = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const xhr = new XMLHttpRequest();

  xhr.open("POST", url);

  xhr.onreadystatechange = function () {
    // console.log(xhr);

    if (xhr.readyState === 4 && xhr.status === 201) {
      console.log(xhr.responseText);

      console.log(JSON.parse(xhr.responseText));
    }
  };

  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

  const data = "title=foo&body=bar&userId=1";

  xhr.send(data);
};

const fun3 = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const xhr = new XMLHttpRequest();

  xhr.open("POST", url);

  xhr.onreadystatechange = function () {
    // console.log(xhr);

    if (xhr.readyState === 4 && xhr.status === 201) {
      console.log(xhr.responseText);

      console.log(JSON.parse(xhr.responseText));
    }
  };

  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  const data = { title: "foo", body: "bar", userId: 1 };

  xhr.send(JSON.stringify(data));
};

let popup;
let html;

const fun4 = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .then((json) => {
      console.log(json);

      html = json
        .map((item) => {
          return `<li>${item.name}</li>`;
        })
        .reduce((a, b) => (a += b));
    })
    .catch(console.log)
    .finally(() => {
      popup = window.open("../popup.html", "google", "width=400px, height=400px");
    });
};

const fun5 = () => {
  popup.document.getElementById("list").innerHTML = html;

  const url = "https://jsonplaceholder.typicode.com/posts";

  const data = { title: "foo", body: "bar", userId: 1 };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch(console.error);
};

const fun6 = () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  axios({
    method: "get",
    url: url,
    responseType: "json",
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(console.log)
    .finally(() => {
      console.log("finally");
    });
};

const fun7 = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  axios
    .post(url, {
      title: "foo",
      body: "bar",
      userId: 1,
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const items = [
  {
    title: "XMLHttpRequest",
    description: "get",
    func: fun1,
  },
  {
    title: "XMLHttpRequest",
    description: "post / x-www-form-urlencoded",
    func: fun2,
  },
  {
    title: "XMLHttpRequest",
    description: "post / json",
    func: fun3,
  },
  {
    title: "fetch",
    description: "get",
    func: fun4,
  },
  {
    title: "fetch",
    description: "post",
    func: fun5,
  },
  {
    title: "axios",
    description: "get",
    func: fun6,
  },
  {
    title: "axios",
    description: "post",
    func: fun7,
  },
];
