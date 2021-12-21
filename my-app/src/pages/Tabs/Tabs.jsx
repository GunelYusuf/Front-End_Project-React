import React, { useEffect, useState } from "react";
import "./tabs.scoped.scss";
import { tabsDef1 } from "../../mocks/tabs1";
import { tabsDef2 } from "../../mocks/tabs2";
import { tabsDef3 } from "../../mocks/tabs3";
import { tabsDef4 } from "../../mocks/tabs4";

const Tabs = () => {
  const [tabs1, setTabs1] = useState(tabsDef1);
  const [tabs2, setTabs2] = useState(tabsDef2);
  const [tabs3, setTabs3] = useState(tabsDef3);
  const [tabs4, setTabs4] = useState(tabsDef4);

  function handleTab1(e) {
    tabs1.map((t) => {
      if (t.id == e.target.getAttribute("data-id")) {
        t.selected = true;
      } else {
        t.selected = false;
      }
    });

    setTabs1([...tabs1]);
  }

  function handleTab2(e) {
    tabs2.map((t) => {
      if (t.id == e.target.getAttribute("data-id")) {
        t.selected = true;
      } else {
        t.selected = false;
      }
    });

    setTabs2([...tabs2]);
  }

  function handleTab3(e) {
    tabs3.map((t) => {
      if (t.id == e.target.getAttribute("data-id")) {
        t.selected = true;
      } else {
        t.selected = false;
      }
    });

    setTabs3([...tabs3]);
  }

  function handleTab4(e) {
    tabs4.map((t) => {
      if (t.id == e.target.getAttribute("data-id")) {
        t.selected = true;
      } else {
        t.selected = false;
      }
    });

    setTabs4([...tabs4]);
  }

  return (
    <main>
      <section id="tabs-title">
        <div class="container px-3">
          <div class="title">
            <h1>Tabs</h1>
          </div>
        </div>
      </section>
      <section id="firstTab">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="menus first-menus d-flex">
                {tabs1.map((t) => {
                  return (
                    <div
                      onClick={(e) => handleTab1(e)}
                      className={`menu ${t.selected && "selected"}`}
                      data-id={t.id}
                    >
                      {t.name}
                    </div>
                  );
                })}
              </div>
              <div class="contents first-contents pb-5">
                {tabs1.map((t) => {
                  if (t.selected) {
                    return (
                      <div class="content" id={t.id}>
                        <p>{t.content}</p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="menus first-menus d-flex">
                {tabs2.map((t) => {
                  return (
                    <div
                      onClick={(e) => handleTab2(e)}
                      className={`menu ${t.selected && "selected"}`}
                      data-id={t.id}
                    >
                      {t.name}
                    </div>
                  );
                })}
              </div>
              <div class="contents first-contents pb-5">
                {tabs2.map((t) => {
                  if (t.selected) {
                    return (
                      <div class="content" id={t.id}>
                        <p>{t.content}</p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="secondTab">
        <div class="container">
          <div class="row px-3">
            <div class="menus d-flex">
              {tabs3.map((t) => {
                return (
                  <div
                    onClick={(e) => handleTab3(e)}
                    className={`menu check2 ${t.selected && "selected"}`}
                    data-id={t.id}
                  >
                    {t.name}
                  </div>
                );
              })}
            </div>
            <div class="contents">
              {tabs3.map((t) => {
                if (t.selected) {
                  return (
                    <div class="content text1" id={t.id}>
                      <p class="m-0">{t.content}</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="thirdTab">
        <div class="container">
          <div class="row px-3">
            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 p-0">
              <div class="menus">
                {tabs4.map((t) => {
                  return (
                    <div
                      onClick={(e) => handleTab4(e)}
                      className={`menu text-center check3 ${t.selected &&
                        "selected"}`}
                      data-id={t.id}
                    >
                      {t.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 p-0">
              <div class="contents">
                {tabs4.map((t) => {
                  if (t.selected) {
                    return (
                      <div class="content longText" id={t.id}>
                        <p class="m-0">{t.content}</p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tabs;
