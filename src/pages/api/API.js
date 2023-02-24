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

const pages = [
  {
    url: "console",
    page: <Script1 title={"console"} />,
  },
  {
    url: "debug",
    page: <Script2 title={"debug"} />,
  },
  {
    url: "json",
    page: <Script3 title={"json"} />,
  },
  {
    url: "xml",
    page: <Script4 title={"xml"} />,
  },
  {
    url: "regExpr",
    page: <Script5 title={"regExpr"} />,
  },
  {
    url: "ajax",
    page: <Script6 title={"ajax"} />,
  },
  {
    url: "local storage",
    page: <Script7 title={"local storage"} />,
  },
  {
    url: "indexedDB",
    page: <Script8 title={"indexedDB"} />,
  },
];

export default function API({ ...props }) {
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
          <button className="button" name="back" onClick={handleClick}>
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