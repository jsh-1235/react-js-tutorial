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
import Script14 from "./contents/Script14";

const pages = [
  {
    url: "this",
    page: <Script1 title={"this"} />,
  },
  {
    url: "script",
    page: <Script2 title={"script"} />,
  },
  {
    url: "variable",
    page: <Script3 title={"variable"} />,
  },
  {
    url: "operator",
    page: <Script4 title={"operator"} />,
  },
  {
    url: "function",
    page: <Script5 title={"function"} />,
  },
  {
    url: "array",
    page: <Script6 title={"array"} />,
  },
  {
    url: "object",
    page: <Script7 title={"object"} />,
  },
  {
    url: "class",
    page: <Script8 title={"class"} />,
  },
  {
    url: "callback",
    page: <Script9 title={"callback"} />,
  },
  {
    url: "promise",
    page: <Script10 title={"promise"} />,
  },
  {
    url: "async_await",
    page: <Script11 title={"async await"} />,
  },
  {
    url: "standard_built-in_object",
    page: <Script12 title={"Standard Built-in Object"} />,
  },
  {
    url: "oop",
    page: <Script13 title={"oop"} />,
  },
  {
    url: "immutable",
    page: <Script14 title={"immutable"} />,
  },
];

export default function Syntax({ ...props }) {
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
          <button className="button uppercase" name="home" onClick={handleClick}>
            home
          </button>
          <button className="button uppercase" name="back" onClick={handleClick}>
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
