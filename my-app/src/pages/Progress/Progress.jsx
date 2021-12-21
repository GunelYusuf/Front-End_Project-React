import React from "react";
import "./progress.scoped.scss";

const Progress = () => {
  return (
    <main>
      <section id="progressbar-title">
        <div class="container px-3">
          <div class="title">
            <h1>Progress Bar</h1>
          </div>
        </div>
      </section>
      <section id="progressbar-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <div class="progressbars">
                <div class="progressbar">
                  <h6 class="mb-1 d-flex justify-content-between">
                    <span>Growing</span>
                    <div class="percent">
                      <span>95</span>
                      <span>%</span>
                    </div>
                  </h6>
                  <div class="progress-container">
                    <div class="progress-grow ownprog" />
                  </div>
                </div>
                <div class="progressbar">
                  <h6 class="mb-1 d-flex justify-content-between">
                    <span>Watering</span>
                    <div class="percent">
                      <span>80</span>
                      <span>%</span>
                    </div>
                  </h6>
                  <div class="progress-container">
                    <div class="progress-water ownprog" />
                  </div>
                </div>
                <div class="progressbar">
                  <h6 class="mb-1 d-flex justify-content-between">
                    <span>Furtilizing</span>
                    <div class="percent">
                      <span>55</span>
                      <span>%</span>
                    </div>
                  </h6>
                  <div class="progress-container">
                    <div class="progress-furt ownprog" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="progressbars">
                <div class="progressbar">
                  <h6 class="mb-1 d-flex justify-content-between">
                    <span>Growing</span>
                    <div class="percent">
                      <span>95</span>
                      <span>%</span>
                    </div>
                  </h6>
                  <div class="progress-container">
                    <div class="progress-grow ownprog" />
                  </div>
                </div>
                <div class="progressbar">
                  <h6 class="mb-1 d-flex justify-content-between">
                    <span>Watering</span>
                    <div class="percent">
                      <span>80</span>
                      <span>%</span>
                    </div>
                  </h6>
                  <div class="progress-container">
                    <div class="progress-water ownprog" />
                  </div>
                </div>
                <div class="progressbar">
                  <h6 class="mb-1 d-flex justify-content-between">
                    <span>Furtilizing</span>
                    <div class="percent">
                      <span>55</span>
                      <span>%</span>
                    </div>
                  </h6>
                  <div class="progress-container">
                    <div class="progress-furt ownprog" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="progressbar-2">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="progressbars">
                <div class="progressbar">
                  <h6 class="mb-1 d-flex justify-content-between">
                    <span>Growing</span>
                    <div class="percent">
                      <span>95</span>
                      <span>%</span>
                    </div>
                  </h6>
                  <div class="progress-container">
                    <div class="progress-grow ownprog" />
                  </div>
                </div>
                <div class="progressbar">
                  <h6 class="mb-1 d-flex justify-content-between">
                    <span>Watering</span>
                    <div class="percent">
                      <span>80</span>
                      <span>%</span>
                    </div>
                  </h6>
                  <div class="progress-container">
                    <div class="progress-water ownprog" />
                  </div>
                </div>
                <div class="progressbar">
                  <h6 class="mb-1 d-flex justify-content-between">
                    <span>Furtilizing</span>
                    <div class="percent">
                      <span>55</span>
                      <span>%</span>
                    </div>
                  </h6>
                  <div class="progress-container">
                    <div class="progress-furt ownprog" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Progress;
