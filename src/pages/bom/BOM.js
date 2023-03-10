import styles from "../Common.module.css";

import React, { useEffect, Suspense } from "react";
import { Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router";

import Linker from "../../components/Linker";

import Script1 from "./contents/Script1";
import Script2 from "./contents/Script2";
import Script3 from "./contents/Script3";
import Script4 from "./contents/Script4";

const pages = [
  {
    url: "window_object",
    page: <Script1 title={"window object"} />,
  },
  {
    url: "popup",
    page: <Script2 title={"popup"} />,
  },
  {
    url: "window.location",
    page: <Script3 title={"window.location"} />,
  },
  {
    url: "window.navigator",
    page: <Script4 title={"window.navigator"} />,
  },
];

export default function BOM({ ...props }) {
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
      navigate(`${props.pathname}/${encodeURI(pages[0].url)}`);
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
