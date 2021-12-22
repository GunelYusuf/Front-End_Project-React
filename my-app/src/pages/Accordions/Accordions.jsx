import React, { useEffect } from "react";
import "./accordions.scoped.scss";
import $ from "jquery";

const Accordions = () => {
  useEffect(() => {
    //#region accordion1
    $(document).ready(function () {
      $("#accordion-1 .paragraphs")
        .find(".title")
        .mouseover(function () {
          if ($(this).next().css("display") === "none") {
            $(this).css({
              transition: "all 0.2s ease-out",
              background: "#f34f3f",
            });
            $(this).find("h6").css({ color: "#ffffff" });
            $(this).find("i").css({ color: "#ffffff" });
          }
        });

      $("#accordion-1 .paragraphs")
        .find(".title")
        .mouseleave(function () {
          if ($(this).next().css("display") === "none") {
            $(this).css({
              transition: "all 0.2s ease-out",
              background: "#ffffff",
            });
            $(this).find("h6").css({ color: "#1b1b1b" });
            $(this).find("i").css({ color: "#1b1b1b" });
          }
        });

      $("#accordion-1 .paragraphs")
        .first()
        .find(".title")
        .click(function () {
          if ($(this).next().css("display") === "none") {
            $(this).css({
              transition: "all 0.2s ease-out",
              background: "#f34f3f",
            });
            $(this).find("h6").css({ color: "#ffffff" });
            $(this).find("i").css({ color: "#ffffff" });
            $(this).find("i").removeClass("fas fa-minus");
            $(this).find("i").addClass("fas fa-plus");
          } else {
            $(this).css({
              transition: "all 0.2s ease-out",
              background: "#ffffff",
            });
            $(this).find("h6").css({ color: "#1b1b1b" });
            $(this).find("i").css({ color: "#1b1b1b" });
            $(this).find("i").removeClass("fas fa-plus");
            $(this).find("i").addClass("fas fa-minus");
          }

          $(this).next().slideToggle(400);
          $("#accordion-1 .paragraphs")
            .first()
            .find(".content")
            .not($(this).next())
            .slideUp(500);
        });

      $("#accordion-1 .paragraphs")
        .last()
        .find(".title")
        .click(function () {
          if ($(this).next().css("display") === "none") {
            $(this).css({
              transition: "all 0.3s ease-out",
              background: "#f34f3f",
            });
            $(this).find("i").removeClass("fas fa-plus");
            $(this).find("i").addClass("fas fa-minus");
            $(this).find("h6").css({ color: "#ffffff" });
            $(this).find("i").css({ color: "#ffffff" });
          } else {
            $(this).css({
              transition: "all 0.3s ease-out",
              background: "#ffffff",
            });
            $(this).find("i").removeClass("fas fa-plus");
            $(this).find("i").addClass("fas fa-minus");
            $(this).find("h6").css({ color: "#1b1b1b" });
            $(this).find("i").css({ color: "#1b1b1b" });
          }

          $(this).next().slideToggle(400);
          $("").last().find(".content").not($(this).next()).slideUp(400);
        });
    });
    //#endregion

    //#region accordion2
    $(document).ready(function () {
      $("#accordion-2 .paragraphs")
        .find(".title")
        .mouseover(function () {
          if ($(this).next().css("display") === "none") {
            $(this).find("h6").css({
              color: "#f34f3f",
              transition: "all 0.3s",
            });
            $(this).find("i").css({
              color: "#f34f3f",
              transition: "all 0.3",
            });
          }
        });

      $("#accordion-2 .paragraphs")
        .find(".title")
        .mouseleave(function () {
          if ($(this).next().css("display") === "none") {
            $(this).find("h6").css({
              color: "#1b1b1b",
              transition: "all 0.3s",
            });
            $(this).find("i").css({
              color: "#1b1b1b",
              transition: "all 0.3s",
            });
          }
        });

      $("#accordion-2 .paragraphs")
        .first()
        .find(".title")
        .click(function () {
          if ($(this).next().css("display") === "none") {
            $(this).find("h6").css({
              color: "#f34f3f",
              transition: "all 0.3s",
            });
            $(this).find("i").css({
              color: "#f34f3f",
              transition: "all 0.3s",
            });
          }

          $(this).next().slideToggle(500);
          $("#accordion-2 .paragraphs")
            .first()
            .find(".content")
            .not($(this).next())
            .slideUp(500);
        });

      $("#accordion-2 .paragraphs")
        .last()
        .find(".title")
        .click(function () {
          if ($(this).next().css("display") === "none") {
            $(this).find("h6").css({
              color: "#f34f3f",
              transition: "all 0.3s",
            });
            $(this).find("i").css({
              color: "#f34f3f",
              transition: "all 0.3s",
            });
          }
          $(this).next().slideToggle(500);
          $("#accordion-2 .paragraphs")
            .last()
            .find(".content")
            .not($(this).next())
            .slideUp(500);
        });
    });
    //#endregion
  });

  return (
    <main>
      <section id="accordions-title">
        <div class="container px-3">
          <div class="title">
            <h1>Accordions</h1>
          </div>
        </div>
      </section>
      <section id="accordion-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="paragraphs  pb-5">
                <div class="paragraph">
                  <div class="title d-flex mt-3">
                    <div class="icon">
                      <i class="fas fa-minus" />
                    </div>
                    <div class="accord-head pt-2">
                      <h6>Creative elements</h6>
                    </div>
                  </div>
                  <div class="content">
                    <p class="m-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis.
                    </p>
                  </div>
                </div>
                <div class="paragraph">
                  <div class="title d-flex mt-3">
                    <div class="icon">
                      <i class="fas fa-plus" />
                    </div>
                    <div class="accord-head pt-2">
                      <h6>Attention to detail</h6>
                    </div>
                  </div>
                  <div class="content">
                    <p class="m-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis.
                    </p>
                  </div>
                </div>
                <div class="paragraph">
                  <div class="title d-flex mt-3">
                    <div class="icon">
                      <i class="fas fa-plus" />
                    </div>
                    <div class="accord-head pt-2">
                      <h6>Easy Import</h6>
                    </div>
                  </div>
                  <div class="content">
                    <p class="m-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="paragraphs pb-5">
                <div class="paragraph">
                  <div class="title d-flex mt-3">
                    <div class="icon">
                      <i class="fas fa-minus" />
                    </div>
                    <div class="accord-head pt-2">
                      <h6>Creative Elements</h6>
                    </div>
                  </div>
                  <div class="content">
                    <p class="m-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis.
                    </p>
                  </div>
                </div>
                <div class="paragraph">
                  <div class="title d-flex mt-3">
                    <div class="icon">
                      <i class="fas fa-plus" />
                    </div>
                    <div class="accord-head pt-2">
                      <h6>Creative Elements</h6>
                    </div>
                  </div>

                  <div class="content">
                    <p class="m-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis.
                    </p>
                  </div>
                </div>
                <div class="paragraph">
                  <div class="title d-flex mt-3">
                    <div class="icon">
                      <i class="fas fa-plus" />
                    </div>
                    <div class="accord-head pt-2">
                      <h6>Creative Elements</h6>
                    </div>
                  </div>
                  <div class="content">
                    <p class="m-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="accordion-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="paragraphs  pb-5">
                <div class="paragraph">
                  <div class="title d-flex">
                    <div class="icon">
                      <i class="fas fa-plus" />
                    </div>
                    <div class="accord-head pt-2">
                      <h6>Creative elements</h6>
                    </div>
                  </div>
                  <div class="content">
                    <p class="m-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis.
                    </p>
                  </div>
                </div>
                <div class="paragraph">
                  <div class="title d-flex">
                    <div class="icon">
                      <i class="fas fa-plus" />
                    </div>
                    <div class="accord-head pt-2">
                      <h6>Creative elements</h6>
                    </div>
                  </div>
                  <div class="content">
                    <p class="m-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis.
                    </p>
                  </div>
                </div>
                <div class="paragraph">
                  <div class="title d-flex">
                    <div class="icon">
                      <i class="fas fa-plus" />
                    </div>
                    <div class="accord-head pt-2">
                      <h6>Creative elements</h6>
                    </div>
                  </div>
                  <div class="content">
                    <p class="m-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="paragraphs pb-5">
                <div class="paragraph">
                  <div class="title d-flex">
                    <div class="icon">
                      <i class="fas fa-plus" />
                    </div>
                    <div class="accord-head pt-2">
                      <h6>Easy Import</h6>
                    </div>
                  </div>
                  <div class="content">
                    <p class="m-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis.
                    </p>
                  </div>
                </div>
                <div class="paragraph">
                  <div class="title d-flex">
                    <div class="icon">
                      <i class="fas fa-plus" />
                    </div>
                    <div class="accord-head pt-2">
                      <h6>Easy Import</h6>
                    </div>
                  </div>
                  <div class="content">
                    <p class="m-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis.
                    </p>
                  </div>
                </div>
                <div class="paragraph">
                  <div class="title d-flex">
                    <div class="icon">
                      <i class="fas fa-plus" />
                    </div>
                    <div class="accord-head pt-2">
                      <h6>Easy Import</h6>
                    </div>
                  </div>
                  <div class="content">
                    <p class="m-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis.
                    </p>
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

export default Accordions;
