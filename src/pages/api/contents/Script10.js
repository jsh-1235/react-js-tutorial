import { useState, useEffect, useCallback } from "react";
import styles from "../../Script.module.css";

import moment from "moment/moment";

export default function Script10({ ...props }) {
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
                <div className={styles.summary_title}>Date</div>
                <div className={styles.summary_description}>JavaScript Date objects represent a single moment in time in a platform-independent format.</div>
                <div className={styles.summary_description}>Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).</div>
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
  console.log(new Date());
  console.log(new Date().toString());
  console.log(new Date().valueOf());
};

const fun2 = () => {
  console.log(new Date().toISOString());
};

const fun3 = () => {
  console.log(new Date().toUTCString());
};

const fun4 = () => {
  console.log(new Date().toDateString());
  console.log(new Date().toTimeString());
};

const fun5 = () => {
  console.log(new Date().toLocaleString());
  console.log(new Date().toLocaleDateString());
  console.log(new Date().toLocaleTimeString());
};

const fun6 = () => {
  // Date.UTC(year, monthIndex, day, hour, minute, second, millisecond)
  const date = Date.UTC(1970, 0, 1, 1, 0, 0, 0);

  console.log(date);

  console.log(date.valueOf());
};

const fun7 = () => {
  console.log(Date.parse("01 Jan 1970 00:00:00 GMT"));
};

const fun8 = () => {
  const date = new Date("February 28, 2023 09:47:00 UTC");

  const json = date.toJSON();

  console.log(json);
  console.log(date.toLocaleString());
};

const fun9 = () => {
  // A number representing the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
  console.log(Date.now());
};

const fun10 = () => {
  const date = new Date();

  console.log(date.getFullYear());
  console.log(date.getMonth() + 1);
  console.log(date.getDay());
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(date.getMinutes());
};

const fun11 = () => {
  const date = new Date();

  console.log(date.getDate());
};

const fun12 = () => {
  const date = new Date();

  console.log(date.getTime());
};

const fun13 = () => {
  // The getTimezoneOffset() method returns the difference, in minutes, between a date as evaluated in the UTC time zone, and the same date as evaluated in the local time zone.
  // const date = new Date("February 28, 2023 0:00:00 UTC");

  const date = new Date();

  console.log(date);

  console.log(date.getTimezoneOffset());
};

const fun14 = () => {
  const date = new Date("February 28, 2023 09:47:00 UTC");

  console.log(date);

  date.setDate(1);

  console.log(date.getDate());

  console.log(date);
};

const fun15 = () => {
  const date = new Date("February 28, 2023 09:47:00 UTC");

  console.log(date);

  date.setTime(date.getTime() + 1000 * 60);

  console.log(date.getTime());

  console.log(date);
};

const fun16 = () => {
  const date = new Date();

  const times = [date.toLocaleDateString(), date.toLocaleString(undefined, { year: "numeric", month: "2-digit", day: "2-digit", weekday: "long", hour: "2-digit", hour12: false, minute: "2-digit", second: "2-digit" }), date.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }), date.toLocaleDateString("en-ZA"), date.toLocaleDateString("en-CA"), date.toLocaleString("en-US", { timeZone: "America/New_York" }), date.toLocaleString("en-US", { hour: "2-digit", hour12: false, timeZone: "America/New_York" })];

  for (const time of times) {
    console.log(time);
  }

  console.log(date.toLocaleString(undefined, { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hour12: false, minute: "2-digit", second: "2-digit" }));
};

const fun17 = () => {
  const date = new Date();

  console.log(moment(date).format("yyyy-mm-dd"));
  console.log(moment(date).format("YYYY-MM-DD"));
  console.log(moment(date).format("YYYY-MM-DD_HH_mm_ss"));
};

const fun18 = () => {
  const date = new Date();
  const locale = "ko-KR";

  console.log(`${new Intl.DateTimeFormat(locale, { dateStyle: "full" }).format(date)}`);
  console.log(`${new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(date)}`);
  console.log(`${new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(date)}`);
  console.log(`${new Intl.DateTimeFormat(locale, { dateStyle: "short" }).format(date)}`);

  console.log(`${new Intl.DateTimeFormat(locale, { dateStyle: "full", timeStyle: "full" }).format(date)}`);
  console.log(`${new Intl.DateTimeFormat(locale, { dateStyle: "long", timeStyle: "long" }).format(date)}`);
  console.log(`${new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "medium" }).format(date)}`);
  console.log(`${new Intl.DateTimeFormat(locale, { dateStyle: "short", timeStyle: "short" }).format(date)}`);
};

const items = [
  {
    title: "new Date()",
    description: "toString() & valueOf()",
    func: fun1,
  },
  {
    title: "new Date()",
    description: "toISOString()",
    func: fun2,
  },
  {
    title: "new Date()",
    description: "toUTCString()",
    func: fun3,
  },
  {
    title: "new Date()",
    description: "toDateString() & toTimeString()",
    func: fun4,
  },
  {
    title: "new Date()",
    description: "toLocaleString() & toLocaleDateString() && toLocaleTimeString()",
    func: fun5,
  },
  {
    title: "new Date()",
    description: "Date.UTC()",
    func: fun6,
  },
  {
    title: "new Date()",
    description: "Date.parse()",
    func: fun7,
  },
  {
    title: "new Date()",
    description: "toJSON()",
    func: fun8,
  },
  {
    title: "Date.now()",
    description: "Date.now()",
    func: fun9,
  },
  {
    title: "new Date()",
    description: "getFullYear() & getMonth() & getDay()",
    func: fun10,
  },
  {
    title: "Date.now()",
    description: "getDate()",
    func: fun11,
  },
  {
    title: "new Date()",
    description: "getTime()",
    func: fun12,
  },
  {
    title: "new Date()",
    description: "getTimezoneOffset()",
    func: fun13,
  },
  {
    title: "new Date()",
    description: "setDate()",
    func: fun14,
  },
  {
    title: "new Date()",
    description: "setTime()",
    func: fun15,
  },
  {
    title: "new Date()",
    description: "format",
    func: fun16,
  },
  {
    title: "new Date()",
    description: "moment",
    func: fun17,
  },
  {
    title: "Intl",
    description: "moment",
    func: fun18,
  },
];
