import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

export default function Script5({ ...props }) {
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
                <div className={styles.summary_title}>Regular Expression</div>
                <div className={styles.summary_description}>정규 표현식은 컴파일(Compile)과 실행(Execution) 단계로 나뉘어 진다.</div>
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
  const pattern = new RegExp("o");

  console.log(pattern.exec("I go to home."));
};

const fun2 = () => {
  const pattern = /o/;

  console.log(pattern.exec("I go to home."));
};

const fun3 = () => {
  const pattern = /o+/gi;

  console.log(pattern.exec("I go to home."));
};

const fun4 = () => {
  const pattern = /o/;

  console.log(pattern.test("I go to home."));
};

const fun5 = () => {
  const pattern = /o+/gi;

  console.log("I go to home.".match(pattern));
};

const fun6 = () => {
  const pattern = /o+/gi;

  const message = "I go to home";
  console.log([...message.matchAll(pattern)]);
};

const fun7 = () => {
  const pattern = /home/;

  console.log("I go to home.".replace(pattern, "company"));
};

const fun8 = () => {
  const paragraph = "I am a boy.";

  // Any character that is not a word character or whitespace
  const pattern = /[^\w\s]/g;

  const index = paragraph.search(pattern);

  console.log(index, paragraph[index]);
};

const fun9 = () => {
  const pattern = /(\w+)\s(\w+)/;

  const str = "I am a boy.";

  const result1 = str.replace(pattern, "$1 $2");
  const result2 = str.replace(pattern, "$2 $1");

  console.log(result1);
  console.log(result2);
};

function formatting(content) {
  const pattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;

  const result = content.replace(pattern, (url) => {
    return '<a href="' + url + '">' + url + "</a>";
  });

  return result;
}

const fun10 = () => {
  const url = formatting("The Google address is https://www.google.com.");

  console.log(url);
};

function checkEmailFormat(email) {
  const regExpr = /[a-zA-Z0-9-_]+@\w+.\w{3}/gm;

  // The exec() method executes a search for a match in a specified string and returns a result array, or null.
  console.log(regExpr.exec(email));

  // The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
  console.log(regExpr.test(email));

  // The search() method executes a search for a match between a regular expression and this String object.
  console.log(email.search(regExpr));

  // The match() method retrieves the result of matching a string against a regular expression.
  const result = email.match(regExpr);

  console.table(result);
}

const fun11 = () => {
  checkEmailFormat("jsh-1235@daum.net");

  // checkEmailFormat("not email");
};

const items = [
  {
    title: "constructor",
    description: "calling the constructor function of the RegExp()",
    func: fun1,
  },
  {
    title: "constructor",
    description: "Using a regular expression literal",
    func: fun2,
  },
  {
    title: "pattern.exec()",
    description: "execution",
    func: fun3,
  },
  {
    title: "pattern.test(pattern)",
    description: "test",
    func: fun4,
  },
  {
    title: "paragraph.match(pattern)",
    description: "match",
    func: fun5,
  },
  {
    title: "[...paragraph.matchAll(pattern)]",
    description: "matchAll",
    func: fun6,
  },
  {
    title: "paragraph.replace(pattern, replaceValue)",
    description: "replace",
    func: fun7,
  },
  {
    title: "paragraph.search(pattern)",
    description: "search",
    func: fun8,
  },
  {
    title: "pattern",
    description: "pattern",
    func: fun9,
  },
  {
    title: "formatting",
    description: "formatting",
    func: fun10,
  },
  {
    title: "email",
    description: "email",
    func: fun11,
  },
];
