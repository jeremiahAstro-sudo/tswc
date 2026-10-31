

/* =========================================================
   THE STILL WATERS CHURCH
   CONTACT PAGE JAVASCRIPT
========================================================= */

(function () {

  "use strict";


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  var mobileMenuButton =
    document.getElementById(
      "mobileMenuButton"
    );

  var mobileNav =
    document.getElementById(
      "mobileNav"
    );

  var heroNav =
    document.getElementById(
      "heroNav"
    );


  if (
    mobileMenuButton &&
    mobileNav
  ) {

    mobileMenuButton.addEventListener(
      "click",
      function () {

        var isOpen =
          mobileMenuButton.classList.toggle(
            "active"
          );

        mobileNav.classList.toggle(
          "active",
          isOpen
        );

        mobileMenuButton.setAttribute(
          "aria-expanded",
          isOpen
        );

        mobileMenuButton.setAttribute(
          "aria-label",
          isOpen
            ? "Close menu"
            : "Open menu"
        );

        mobileNav.setAttribute(
          "aria-hidden",
          !isOpen
        );

      }
    );


    var mobileLinks =
      mobileNav.querySelectorAll(
        "a"
      );


    mobileLinks.forEach(
      function (link) {

        link.addEventListener(
          "click",
          function () {

            mobileMenuButton.classList.remove(
              "active"
            );

            mobileNav.classList.remove(
              "active"
            );

            mobileMenuButton.setAttribute(
              "aria-expanded",
              "false"
            );

            mobileMenuButton.setAttribute(
              "aria-label",
              "Open menu"
            );

            mobileNav.setAttribute(
              "aria-hidden",
              "true"
            );

          }
        );

      }
    );

  }


  /* =======================================================
     NAVIGATION SCROLL
  ======================================================= */

  function handleNavScroll() {

    if (!heroNav) {
      return;
    }


    if (window.scrollY > 30) {

      heroNav.classList.add(
        "scrolled"
      );

    } else {

      heroNav.classList.remove(
        "scrolled"
      );

    }

  }


  window.addEventListener(
    "scroll",
    handleNavScroll,
    {
      passive: true
    }
  );


  handleNavScroll();


  /* =======================================================
     CLOSE MOBILE MENU ON RESIZE
  ======================================================= */

  window.addEventListener(
    "resize",
    function () {

      if (
        window.innerWidth >= 1024 &&
        mobileMenuButton &&
        mobileNav
      ) {

        mobileMenuButton.classList.remove(
          "active"
        );

        mobileNav.classList.remove(
          "active"
        );

        mobileMenuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        mobileMenuButton.setAttribute(
          "aria-label",
          "Open menu"
        );

        mobileNav.setAttribute(
          "aria-hidden",
          "true"
        );

      }

    }
  );


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  var revealElements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    "IntersectionObserver"
    in window
  ) {

    var observer =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(
            function (entry) {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "visible"
                );

                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(
      function (element) {

        observer.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      function (element) {

        element.classList.add(
          "visible"
        );

      }
    );

  }


  /* =======================================================
     CONTACT FORM
  ======================================================= */

  var contactForm =
    document.getElementById(
      "contactForm"
    );

  var contactFormMessage =
    document.getElementById(
      "contactFormMessage"
    );


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        if (contactFormMessage) {

          contactFormMessage.classList.add(
            "show"
          );

        }


        contactForm.reset();


        setTimeout(
          function () {

            if (contactFormMessage) {

              contactFormMessage.classList.remove(
                "show"
              );

            }

          },
          6000
        );

      }
    );

  }


  /* =======================================================
     NEWSLETTER
  ======================================================= */

  var newsletterForm =
    document.getElementById(
      "swcNewsletterForm"
    );

  var newsletterMessage =
    document.getElementById(
      "swcNewsletterMessage"
    );


  if (newsletterForm) {

    newsletterForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        if (newsletterMessage) {

          newsletterMessage.classList.add(
            "show"
          );

        }


        newsletterForm.reset();


        setTimeout(
          function () {

            if (newsletterMessage) {

              newsletterMessage.classList.remove(
                "show"
              );

            }

          },
          5000
        );

      }
    );

  }


  /* =======================================================
     CURRENT YEAR
  ======================================================= */

  var yearElement =
    document.getElementById(
      "swcYear"
    );


  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  /* =======================================================
     BACK TO TOP
  ======================================================= */

  var scrollTopButton =
    document.getElementById(
      "swcScrollTop"
    );


  if (scrollTopButton) {

    scrollTopButton.addEventListener(
      "click",
      function () {

        window.scrollTo({

          top: 0,

          behavior: "smooth"

        });

      }
    );

  }


})();

