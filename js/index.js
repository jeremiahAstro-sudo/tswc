

  /*
     VIDDLER VIDEO
     ================================

     Video ID: 17570

     Requested settings:
     - Autoplay
     - Loop
     - Muted
     - No controls
  */

  new ViddlerEmbed({
    element:
      document.getElementById(
        "viddler-embed-17570"
      ),

    videoId: 17570,

    aspectRatio: "16:9",

    autoplay: true,

    loop: true,

    muted: true,

    controls: false,

    colorScheme: "default"
  });



  /* =========================================
     MOBILE MENU
  ========================================= */

  const mobileMenuButton =
    document.getElementById(
      "mobileMenuButton"
    );

  const mobileNav =
    document.getElementById(
      "mobileNav"
    );


  mobileMenuButton.addEventListener(
    "click",
    function () {

      const isOpen =
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



  /* =========================================
     CLOSE MOBILE MENU AFTER LINK CLICK
  ========================================= */

  const mobileLinks =
    mobileNav.querySelectorAll("a");


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



  /* =========================================
     FIXED NAV SCROLL EFFECT
  ========================================= */

  const heroNav =
    document.getElementById(
      "heroNav"
    );


  function handleNavScroll() {

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


  /* Run once when page loads */

  handleNavScroll();



  /* =========================================
     CLOSE MOBILE MENU WHEN RESIZING
  ========================================= */

  window.addEventListener(
    "resize",
    function () {

      if (window.innerWidth >= 1024) {

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




document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* =======================================================
       WELCOME TYPING EFFECT
    ======================================================== */

    const welcomeText =
      document.getElementById(
        "swWelcomeText"
      );


    const word =
      "Welcome";


    let typingIndex =
      0;

    let deleting =
      false;


    function typeWelcome() {


      if (!welcomeText) {
        return;
      }


      if (!deleting) {


        welcomeText.textContent =
          word.substring(
            0,
            typingIndex + 1
          );


        typingIndex++;


        if (
          typingIndex >=
          word.length
        ) {


          setTimeout(
            function () {

              deleting = true;

              typeWelcome();

            },
            1800
          );


          return;

        }


        setTimeout(
          typeWelcome,
          180
        );


      }


      else {


        welcomeText.textContent =
          word.substring(
            0,
            typingIndex - 1
          );


        typingIndex--;


        if (
          typingIndex <= 0
        ) {


          deleting = false;


          setTimeout(
            typeWelcome,
            700
          );


          return;

        }


        setTimeout(
          typeWelcome,
          90
        );

      }

    }


    typeWelcome();



    /* =======================================================
       LIVE SERVICE STATUS
    ======================================================== */

    const status =
      document.getElementById(
        "swServiceStatus"
      );


    function updateServiceStatus() {


      if (!status) {
        return;
      }


      const now =
        new Date();


      const day =
        now.getDay();


      const minutes =
        now.getHours() * 60 +
        now.getMinutes();


      let serviceStart =
        null;


      let serviceEnd =
        null;


      if (day === 0) {

        serviceStart =
          10 * 60;

        serviceEnd =
          13 * 60;

      }


      if (day === 3) {

        serviceStart =
          18 * 60;

        serviceEnd =
          (19 * 60) + 30;

      }


      if (
        serviceStart !== null &&
        minutes >= serviceStart &&
        minutes <= serviceEnd
      ) {


        status.textContent =
          "Service is live now";


        return;

      }


      if (day === 0) {


        if (
          minutes <
          10 * 60
        ) {


          status.textContent =
            "Sunday service starts at 10 AM";


        } else {


          status.textContent =
            "Next service Wednesday";

        }


      }


      else if (day === 1) {


        status.textContent =
          "Next service Wednesday at 6 PM";


      }


      else if (day === 2) {


        status.textContent =
          "Next service Wednesday at 6 PM";


      }


      else if (day === 3) {


        if (
          minutes <
          18 * 60
        ) {


          status.textContent =
            "Wednesday service starts at 6 PM";


        } else {


          status.textContent =
            "Next service Sunday";

        }


      }


      else {


        status.textContent =
          "Next service Sunday at 10 AM";

      }

    }


    updateServiceStatus();


    setInterval(
      updateServiceStatus,
      60000
    );



    /* =======================================================
       SCROLL REVEAL
    ======================================================== */

    const revealElements =
      document.querySelectorAll(
        ".sw-reveal"
      );


    if (
      "IntersectionObserver"
      in window
    ) {


      const observer =
        new IntersectionObserver(
          function (entries) {


            entries.forEach(
              function (entry) {


                if (
                  entry.isIntersecting
                ) {


                  entry.target.classList.add(
                    "sw-visible"
                  );


                  observer.unobserve(
                    entry.target
                  );

                }

              }
            );

          },
          {
            threshold: 0.15
          }
        );


      revealElements.forEach(
        function (element) {

          observer.observe(
            element
          );

        }
      );


    }


    else {


      revealElements.forEach(
        function (element) {

          element.classList.add(
            "sw-visible"
          );

        }
      );

    }



    /* =======================================================
       FATCOW-SAFE BACKGROUND MOTION
       
       Desktop:
       Very subtle movement.

       Tablet:
       Almost no movement.

       Mobile:
       Completely static/fitted image.

       The image NEVER leaves Chapter 02.
    ======================================================== */

    const connectSection =
      document.querySelector(
        ".sw-chapter-connect"
      );


    if (!connectSection) {
      return;
    }


    let ticking =
      false;


    function updateConnectBackground() {


      ticking =
        false;


      /*
        Do not animate the background
        on mobile.

        This gives phones the most stable
        and responsive version.
      */

      if (
        window.innerWidth <= 700
      ) {

        connectSection.style.setProperty(
          "--sw-bg-y",
          "0px"
        );

        connectSection.style.setProperty(
          "--sw-bg-scale",
          "1"
        );

        return;

      }


      const rect =
        connectSection.getBoundingClientRect();


      const viewportHeight =
        window.innerHeight ||
        document.documentElement.clientHeight;


      const sectionHeight =
        rect.height;


      const travel =
        viewportHeight +
        sectionHeight;


      let progress =
        (
          viewportHeight -
          rect.top
        ) /
        travel;


      progress =
        Math.max(
          0,
          Math.min(
            1,
            progress
          )
        );


      /*
        Extremely small movement.
        This keeps the image looking fitted.
      */

      const movement =
        (
          progress -
          0.5
        ) *
        20;


      /*
        Very small zoom.
        This is intentionally close to 1.
      */

      const scale =
        1.01 +
        (
          Math.sin(
            progress *
            Math.PI
          ) *
          0.008
        );


      connectSection.style.setProperty(
        "--sw-bg-y",
        movement.toFixed(2) +
        "px"
      );


      connectSection.style.setProperty(
        "--sw-bg-scale",
        scale.toFixed(4)
      );

    }


    function requestBackgroundUpdate() {


      if (!ticking) {


        window.requestAnimationFrame(
          updateConnectBackground
        );


        ticking =
          true;

      }

    }


    window.addEventListener(
      "scroll",
      requestBackgroundUpdate,
      {
        passive: true
      }
    );


    window.addEventListener(
      "resize",
      requestBackgroundUpdate,
      {
        passive: true
      }
    );


    /*
      Initial values.
    */

    connectSection.style.setProperty(
      "--sw-bg-y",
      "0px"
    );


    connectSection.style.setProperty(
      "--sw-bg-scale",
      "1.01"
    );


    requestBackgroundUpdate();


  }
);




(function () {

  const testimonials = [

    {
      name: "Member Name One",
      location: "Member · Location",
      image: "https://yourimageshare.com/ib/o5GYZKwsTJ.webp",
      quote:
        "The Still Waters Church has become more than a place we attend. It has become a place where faith grows, relationships are built, and we are continually reminded of God's love."
    },

    {
      name: "Member Name Two",
      location: "Member · Location",
      image: "https://yourimageshare.com/ib/iGJllEr7PW.webp",
      quote:
        "From the very first time I walked through the doors, I felt welcomed. I have found a community that encourages me, challenges me, and continues to help me grow in my walk with God."
    },

    {
      name: "Member Name Three",
      location: "Member · Location",
      image: "https://yourimageshare.com/ib/yiqfWHXtbk.webp",
      quote:
        "The Still Waters Church has reminded me that church is not simply somewhere you go. It is a family where people can grow together, serve together, and experience the peace of God together."
    }

  ];

  const image =
    document.getElementById(
      "tswc-testimonial-image"
    );

  const name =
    document.getElementById(
      "tswc-testimonial-name"
    );

  const location =
    document.getElementById(
      "tswc-testimonial-location"
    );

  const quote =
    document.getElementById(
      "tswc-testimonial-quote"
    );

  const currentNumber =
    document.getElementById(
      "tswc-current-number"
    );

  const totalNumber =
    document.getElementById(
      "tswc-total-number"
    );

  const previousButton =
    document.getElementById(
      "tswc-testimonial-prev"
    );

  const nextButton =
    document.getElementById(
      "tswc-testimonial-next"
    );

  const indicators =
    document.getElementById(
      "tswc-testimonial-indicators"
    );

  const testimonialSection =
    document.getElementById(
      "tswc-testimonial-section"
    );

  if (
    image &&
    name &&
    location &&
    quote &&
    currentNumber &&
    totalNumber &&
    previousButton &&
    nextButton &&
    indicators
  ) {

    let currentIndex = 0;
    let testimonialAutoPlay = null;

    totalNumber.textContent =
      String(
        testimonials.length
      ).padStart(
        2,
        "0"
      );

    testimonials.forEach(
      function (item, index) {

        const button =
          document.createElement(
            "button"
          );

        button.type = "button";

        button.className =
          "tswc-indicator" +
          (
            index === 0
              ? " active"
              : ""
          );

        button.setAttribute(
          "aria-label",
          "Go to testimonial " +
          (index + 1)
        );

        const line =
          document.createElement(
            "span"
          );

        button.appendChild(
          line
        );

        button.addEventListener(
          "click",
          function () {

            showTestimonial(
              index
            );

            resetTestimonialAutoPlay();

          }
        );

        indicators.appendChild(
          button
        );

      }
    );

    function showTestimonial(index) {

      currentIndex = index;

      quote.classList.add(
        "tswc-testimonial-changing"
      );

      image.style.opacity = "0";

      setTimeout(
        function () {

          const item =
            testimonials[
              currentIndex
            ];

          name.textContent =
            item.name;

          location.textContent =
            item.location;

          quote.textContent =
            item.quote;

          currentNumber.textContent =
            String(
              currentIndex + 1
            ).padStart(
              2,
              "0"
            );

          image.src =
            item.image;

          image.alt =
            item.name;

          const indicatorButtons =
            indicators.querySelectorAll(
              ".tswc-indicator"
            );

          indicatorButtons.forEach(
            function (
              button,
              buttonIndex
            ) {

              if (
                buttonIndex ===
                currentIndex
              ) {

                button.classList.add(
                  "active"
                );

              } else {

                button.classList.remove(
                  "active"
                );

              }

            }
          );

          setTimeout(
            function () {

              quote.classList.remove(
                "tswc-testimonial-changing"
              );

              image.style.opacity =
                "1";

            },
            80
          );

        },
        250
      );

    }

    function startTestimonialAutoPlay() {

      clearInterval(
        testimonialAutoPlay
      );

      testimonialAutoPlay =
        setInterval(
          function () {

            let nextIndex =
              currentIndex + 1;

            if (
              nextIndex >=
              testimonials.length
            ) {

              nextIndex = 0;

            }

            showTestimonial(
              nextIndex
            );

          },
          6000
        );

    }

    function resetTestimonialAutoPlay() {

      clearInterval(
        testimonialAutoPlay
      );

      startTestimonialAutoPlay();

    }

    previousButton.addEventListener(
      "click",
      function () {

        let nextIndex =
          currentIndex - 1;

        if (
          nextIndex < 0
        ) {

          nextIndex =
            testimonials.length - 1;

        }

        showTestimonial(
          nextIndex
        );

        resetTestimonialAutoPlay();

      }
    );

    nextButton.addEventListener(
      "click",
      function () {

        let nextIndex =
          currentIndex + 1;

        if (
          nextIndex >=
          testimonials.length
        ) {

          nextIndex = 0;

        }

        showTestimonial(
          nextIndex
        );

        resetTestimonialAutoPlay();

      }
    );

    startTestimonialAutoPlay();

    if (
      testimonialSection
    ) {

      testimonialSection.addEventListener(
        "mouseenter",
        function () {

          clearInterval(
            testimonialAutoPlay
          );

        }
      );

      testimonialSection.addEventListener(
        "mouseleave",
        function () {

          startTestimonialAutoPlay();

        }
      );

    }

  }

  const revealItems =
    document.querySelectorAll(
      "#tswc-pastor-section .tswc-reveal, " +
      "#tswc-testimonial-section .tswc-reveal, " +
      "#tswc-next-step-section .tswc-reveal"
    );

  if (
    "IntersectionObserver" in window
  ) {

    const observer =
      new IntersectionObserver(
        function (
          entries
        ) {

          entries.forEach(
            function (
              entry
            ) {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "tswc-visible"
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

    revealItems.forEach(
      function (
        item
      ) {

        observer.observe(
          item
        );

      }
    );

  } else {

    revealItems.forEach(
      function (
        item
      ) {

        item.classList.add(
          "tswc-visible"
        );

      }
    );

  }

})();



/* =========================================================
   THE STILL WATERS CHURCH
   FOOTER JAVASCRIPT
========================================================= */

(function () {

  "use strict";


  /* -------------------------------------------------------
     CURRENT YEAR
  ------------------------------------------------------- */

  var yearElement = document.getElementById("swcYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  /* -------------------------------------------------------
     NEWSLETTER DEMO
     
     This currently gives a visual confirmation.
     Later we can connect it to Mailchimp, Brevo,
     Formspree, or another email service.
  ------------------------------------------------------- */

  var newsletterForm =
    document.getElementById("swcNewsletterForm");

  var newsletterMessage =
    document.getElementById("swcNewsletterMessage");

  if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

      event.preventDefault();

      var email =
        document.getElementById("swcEmail");

      if (!email || !email.value.trim()) {
        return;
      }

      newsletterMessage.classList.add("show");

      newsletterForm.reset();

      setTimeout(function () {
        newsletterMessage.classList.remove("show");
      }, 5000);

    });

  }


  /* -------------------------------------------------------
     SMOOTH SCROLL SYSTEM
     
     The footer links can work with IDs such as:

     #pastor
     #testimonials
     #visit
     #services
     #contact

     If those IDs aren't present yet, the script also
     searches the page for matching section headings.
  ------------------------------------------------------- */

  function findSection(target) {

    if (!target) {
      return null;
    }


    /* First: look for exact ID */

    var exact =
      document.getElementById(target);

    if (exact) {
      return exact;
    }


    /* Second: look for common existing IDs */

    var possibleIds = {

      home: [
        "home",
        "hero",
        "header",
        "top"
      ],

      pastor: [
        "pastor",
        "lead-pastor",
        "our-pastor",
        "pastor-section"
      ],

      about: [
        "about",
        "about-us",
        "welcome"
      ],

      testimonials: [
        "testimonials",
        "stories",
        "testimonies",
        "witness"
      ],

      services: [
        "services",
        "service-times",
        "gatherings"
      ],

      visit: [
        "visit",
        "plan-your-visit",
        "invitation",
        "next-step"
      ],

      contact: [
        "contact",
        "footer"
      ]

    };


    var ids =
      possibleIds[target] || [];


    for (var i = 0; i < ids.length; i++) {

      var element =
        document.getElementById(ids[i]);

      if (element) {
        return element;
      }

    }


    /* -----------------------------------------------------
       Third: search section headings.
    ----------------------------------------------------- */

    var sections =
      document.querySelectorAll(
        "section, main, header, footer"
      );


    var keywords = {

      home: [
        "welcome",
        "still waters",
        "church"
      ],

      pastor: [
        "pastor",
        "lead pastor",
        "welcome home"
      ],

      about: [
        "about us",
        "about"
      ],

      testimonials: [
        "stories",
        "testimon",
        "witness",
        "experience"
      ],

      services: [
        "services",
        "service times",
        "gathering"
      ],

      visit: [
        "next step",
        "plan your visit",
        "invitation"
      ],

      contact: [
        "contact",
        "get in touch"
      ]

    };


    var searchTerms =
      keywords[target] || [];


    for (var s = 0; s < sections.length; s++) {

      var text =
        sections[s].innerText ||
        sections[s].textContent ||
        "";

      text = text.toLowerCase();


      for (var k = 0; k < searchTerms.length; k++) {

        if (
          text.indexOf(
            searchTerms[k].toLowerCase()
          ) !== -1
        ) {

          return sections[s];

        }

      }

    }


    return null;

  }


  /* -------------------------------------------------------
     FOOTER NAVIGATION
  ------------------------------------------------------- */

  var scrollLinks =
    document.querySelectorAll(
      "[data-scroll-target]"
    );


  scrollLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      event.preventDefault();

      var target =
        link.getAttribute(
          "data-scroll-target"
        );


      var section =
        findSection(target);


      if (section) {

        var top =
          section.getBoundingClientRect().top
          + window.pageYOffset
          - 20;


        window.scrollTo({
          top: top,
          behavior: "smooth"
        });

      }

    });

  });


  /* -------------------------------------------------------
     BACK TO TOP
  ------------------------------------------------------- */

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


  /*
    Mobile fallback for the Chapter 02 fixed image.
    Native fixed backgrounds are inconsistent on phones, so the
    image gets a restrained viewport-based movement instead.
  */
  (function () {
    var connectSection =
      document.querySelector(".sw-chapter-connect");

    if (!connectSection) {
      return;
    }

    var framePending = false;

    function updateMobileConnectImage() {
      framePending = false;

      if (
        window.innerWidth > 700 ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        connectSection.style.setProperty(
          "--sw-fixed-bg-y",
          "0px"
        );
        return;
      }

      var rect =
        connectSection.getBoundingClientRect();

      var movement =
        Math.max(
          -90,
          Math.min(
            90,
            rect.top * -0.22
          )
        );

      connectSection.style.setProperty(
        "--sw-fixed-bg-y",
        movement.toFixed(2) + "px"
      );
    }

    function requestMobileConnectImageUpdate() {
      if (framePending) {
        return;
      }

      framePending = true;
      window.requestAnimationFrame(
        updateMobileConnectImage
      );
    }

    window.addEventListener(
      "scroll",
      requestMobileConnectImageUpdate,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      requestMobileConnectImageUpdate
    );

    updateMobileConnectImage();
  })();
