import styles from "../Common.module.css";

import React, { useEffect, Suspense } from "react";
import { Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router";

import Linker from "../../components/Linker";

import Script1 from "./contents/Script1";
import Script2 from "./contents/Script2";
import Script3 from "./contents/Script3";
import Script4 from "./contents/Script4";
import Script5 from "./contents/Script5";
import Script6 from "./contents/Script6";
import Script7 from "./contents/Script7";
import Script8 from "./contents/Script8";
import Script9 from "./contents/Script9";
import Script10 from "./contents/Script10";
import Script11 from "./contents/Script11";
import Script12 from "./contents/Script12";
import Script13 from "./contents/Script13";

const pages = [
  {
    url: "Object Destructuring",
    page: <Script1 title={"Object Destructuring"} />,
  },
  {
    url: "Generator",
    page: <Script2 title={"Generator"} />,
  },
  {
    url: "Template Literal",
    page: <Script3 title={"Template Literal"} />,
  },
  {
    url: "Function",
    page: <Script4 title={"Function"} />,
  },
  {
    url: "Promise",
    page: <Script5 title={"Promise"} />,
  },
  {
    url: "Async-await",
    page: <Script6 title={"Async-await"} />,
  },
  {
    url: "Callback",
    page: <Script7 title={"Callback"} />,
  },
  {
    url: "Variable",
    page: <Script8 title={"Variable"} />,
  },
  {
    url: "Hoisting",
    page: <Script9 title={"Hoisting"} />,
  },
  {
    url: "Closure",
    page: <Script10 title={"Closure"} />,
  },
  {
    url: "Syntax",
    page: <Script11 title={"Syntax"} />,
  },
  {
    url: "Spread Operator",
    page: <Script12 title={"Spread Operator"} />,
  },
  {
    url: "Array Destructuring",
    page: <Script13 title={"Array Destructuring"} />,
  },
];

export default function JS({ ...props }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();

  // useEffect(() => {
  //   console.log("props.pathname", props.pathname, location.pathname);

  //   if (props.pathname === location.pathname) {
  //     navigate(`${props.pathname}/${pages[0].url}`);
  //   }
  // }, [location.pathname, navigate, props.pathname]);

  useEffect(() => {
    // console.log("id", id, props.pathname, location.pathname);

    if (!id) {
      navigate(`${props.pathname}/${pages[0].url}`);
    }
  }, [id, location.pathname, navigate, props.pathname]);

  const handleClick = (e) => {
    // console.log(e.target.name);

    if (e.target.name === "home") {
      navigate("/", {
        replace: true,
        state: {
          title: "index",
        },
      });
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      <ul className={styles.list}>
        {pages.map((page, i) => {
          return (
            <Linker key={i} id={i} to={`${page.url}`}>
              {page.url}
            </Linker>
          );
        })}
      </ul>
      <div className={styles.content}>
        <div className={styles.menu}>
          <button className="button" name="home" onClick={handleClick}>
            home
          </button>
          <button className="button" name="clear" onClick={handleClick}>
            back
          </button>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {pages.map((page, i) => {
              return <Route key={i} path={`/${page.url}`} element={page.page} />;
            })}
            <Route path="*" element={<div>404 Not Found</div>} />
            {/* <Route path="*" element={<Navigate to="/none" />} /> */}
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
