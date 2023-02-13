import styles from "./Home.module.css";

import React from "react";
import { useLocation } from "react-router";

export default function Home({ ...props }) {
  const { state } = useLocation();

  // console.log("props", props);
  // console.log("state", state);

  return <div className={styles.container}>{state ? <span>{state.title}</span> : <span>{props.title}</span>}</div>;
}
