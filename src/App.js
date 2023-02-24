import "./App.css";

import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";

const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const Syntax = React.lazy(() => import("./pages/syntax/Syntax"));
const JS = React.lazy(() => import("./pages/js/JS"));
const API = React.lazy(() => import("./pages/api/API"));
const DOM = React.lazy(() => import("./pages/dom/DOM"));
const BOM = React.lazy(() => import("./pages/bom/BOM"));

function App() {
  return (
    <>
      <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
        <header className="header">
          <Header />
        </header>
        <main className="main">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home title="HOME" />} />
              <Route path="/syntax/*" element={<Syntax pathname="/syntax" />}>
                <Route path=":id" element={<Syntax />} />
              </Route>
              <Route path="/js/*" element={<JS pathname="/js" />}>
                <Route path=":id" element={<JS />} />
              </Route>
              <Route path="/api/*" element={<API pathname="/api" />}>
                <Route path=":id" element={<API />} />
              </Route>
              <Route path="/dom/*" element={<DOM pathname="/dom" />}>
                <Route path=":id" element={<DOM />} />
              </Route>
              <Route path="/bom/*" element={<BOM pathname="/bom" />}>
                <Route path=":id" element={<BOM />} />
              </Route>
              <Route path="/none" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <footer className="footer">It is ©2018 Created by BT Inc</footer>
      </div>
    </>
  );
}

export default App;
