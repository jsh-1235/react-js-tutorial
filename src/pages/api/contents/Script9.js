import { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import styles from "../../Script.module.css";

export default function Script9({ ...props }) {
  const [name, setName] = useState({});
  const [description, setDescription] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["password"]);

  const handler = useCallback(() => {
    const result = items.filter((item) => item.func.name === name.func);

    if (result.length !== 0) {
      const func = result[0].func;

      console.clear();

      console.log(func.name);

      func();

      if (func.name === "fun8") {
        setCookie("password", "12345", { path: "/" });
        console.log("password", cookies.password);
      } else if (func.name === "fun9") {
        removeCookie("password", { path: "/", domain: "localhost" });
        console.log("password", cookies.password);
      }
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
                <div className={styles.summary_title}>Cookies</div>
                <div className={styles.summary_description}>An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser.</div>
                <div className={styles.summary_description}>The browser may store the cookie and send it back to the same server with later requests.</div>
                <div className={styles.summary_description}>Typically, an HTTP cookie is used to tell if two requests come from the same browser—keeping a user logged in, for example.</div>
                <div className={styles.summary_description}>It remembers stateful information for the stateless HTTP protocol.</div>
                <div className={styles.summary_title}>Cookies are mainly used for three purposes</div>
                <div className={styles.summary_description}>Session management</div>
                <div className={styles.summary_description}>Logins, shopping carts, game scores, or anything else the server should remember</div>
                <div className={styles.summary_description}>Personalization</div>
                <div className={styles.summary_description}>User preferences, themes, and other settings</div>
                <div className={styles.summary_description}>Tracking</div>
                <div className={styles.summary_description}>Recording and analyzing user behavior</div>
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
  window.document.cookie = "username=jsh";
};

function getCookie(key) {
  // debugger;

  let name = key + "=";

  let decodedCookie = decodeURIComponent(document.cookie);

  let cookies = decodedCookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];

    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }

    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return "";
}

const fun2 = () => {
  console.log(window.document.cookie);

  console.log(getCookie("username"));
  console.log(getCookie("password"));
};

const fun3 = () => {
  const date = new Date("01 Jan 1970 00:00:0 GMT");

  console.log(date.toISOString());
  console.log(date.toUTCString());
  console.log(date.valueOf());

  window.document.cookie = `username=; expires=${date.toUTCString()};`;

  console.log(window.document.cookie);
};

const fun4 = () => {
  // Define the lifetime of a cookie
  // window.document.cookie = "username: jsh; expires==Thu, 18 Dec 2023 12:00:00 UTC";

  const date = new Date();

  console.log(date.getTime());
  console.log(date.toUTCString());
  console.log(date.toLocaleString());

  date.setTime(date.getTime() + 5000);

  console.log(date.toLocaleString());

  window.document.cookie = `username=jsh; expires==${date.toUTCString()}`;

  console.log(window.document.cookie);
};

const fun5 = () => {
  // Path attribute
  window.document.cookie = "username=jsh; path=/";
};

const fun6 = () => {
  // Restrict access to cookies
  window.document.cookie = "username=jsh; Secure; HttpOnly";
};

const fun7 = () => {
  // SameSite attribute
  window.document.cookie = "username:jsh; SameSite=Strict";
};

const fun8 = () => {};

const fun9 = () => {};

const items = [
  {
    title: "Creating cookies",
    description: "create",
    func: fun1,
  },
  {
    title: "Reading cookies",
    description: "read",
    func: fun2,
  },
  {
    title: "Remove cookies",
    description: "remove",
    func: fun3,
  },
  {
    title: "expires",
    description: "expires",
    func: fun4,
  },
  {
    title: "path",
    description: "path",
    func: fun5,
  },
  {
    title: "Secure",
    description: "Secure",
    func: fun6,
  },
  {
    title: "SameSite",
    description: "SameSite",
    func: fun7,
  },
  {
    title: "react-cookie",
    description: "setCookie",
    func: fun8,
  },
  {
    title: "react-cookie",
    description: "removeCookie",
    func: fun9,
  },
];
