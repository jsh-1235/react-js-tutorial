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

const pages = [
  {
    url: "html",
    page: <Script1 title={"html"} />,
  },
  {
    url: "find",
    page: <Script2 title={"find"} />,
  },
  {
    url: "crud",
    page: <Script3 title={"crud"} />,
  },
  {
    url: "elements_node",
    page: <Script4 title={"elements_node"} />,
  },
  {
    url: "attribute_node",
    page: <Script5 title={"attribute_node"} />,
  },
  {
    url: "character_data_node",
    page: <Script6 title={"character_data_node"} />,
  },
  {
    url: "document_node",
    page: <Script7 title={"document_node"} />,
  },
  {
    url: "css",
    page: <Script8 title={"css"} />,
  },
  {
    url: "jquery",
    page: <Script9 title={"jquery"} />,
  },
  {
    url: "jquery_node",
    page: <Script10 title={"jquery_node"} />,
  },
  {
    url: "events",
    page: <Script11 title={"events"} />,
  },
];

export default function DOM({ ...props }) {
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
