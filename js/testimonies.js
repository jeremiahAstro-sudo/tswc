
    (function () {
      "use strict";
      var nav = document.getElementById("heroNav");
      var menuButton = document.getElementById("mobileMenuButton");
      var mobileNav = document.getElementById("mobileNav");

      function closeMenu() {
        menuButton.classList.remove("active");
        mobileNav.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");
        mobileNav.setAttribute("aria-hidden", "true");
      }

      menuButton.addEventListener("click", function () {
        var isOpen = menuButton.classList.toggle("active");
        mobileNav.classList.toggle("active", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        mobileNav.setAttribute("aria-hidden", String(!isOpen));
      });
      mobileNav.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", closeMenu); });
      window.addEventListener("scroll", function () { nav.classList.toggle("scrolled", window.scrollY > 30); }, { passive: true });
      window.dispatchEvent(new Event("scroll"));
      window.addEventListener("resize", function () { if (window.innerWidth >= 1024) closeMenu(); });

      var filterButtons = document.querySelectorAll(".filter-button");
      var cards = document.querySelectorAll(".story-card");
      filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          var filter = button.getAttribute("data-filter");
          filterButtons.forEach(function (item) { item.classList.toggle("active", item === button); });
          cards.forEach(function (card) { card.classList.toggle("is-hidden", filter !== "all" && card.getAttribute("data-category") !== filter); });
        });
      });

      var quotes = [
        ["I used to believe I had to arrive with everything figured out. This community taught me that God meets us while we are still becoming.", "Maya R. · Growing in grace"],
        ["The first time I asked for prayer, I expected a quick answer. Instead, I found people willing to keep walking with me.", "Samuel A. · Held in community"],
        ["There is a kind of peace that comes from knowing you have a place to return to. Still Waters became that place for me.", "Nia W. · Finding peace"]
      ];
      var quoteIndex = 0;
      var quote = document.getElementById("featuredQuote");
      var author = document.getElementById("featuredAuthor");
      function showQuote(direction) { quoteIndex = (quoteIndex + direction + quotes.length) % quotes.length; quote.style.opacity = "0"; window.setTimeout(function () { quote.textContent = "“" + quotes[quoteIndex][0] + "”"; author.textContent = quotes[quoteIndex][1]; quote.style.opacity = "1"; }, 150); }
      document.getElementById("previousQuote").addEventListener("click", function () { showQuote(-1); });
      document.getElementById("nextQuote").addEventListener("click", function () { showQuote(1); });
      quote.style.transition = "opacity .25s ease";

      var newsletterForm = document.getElementById("swcNewsletterForm");
      var newsletterMessage = document.getElementById("swcNewsletterMessage");
      if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
          event.preventDefault();
          newsletterMessage.classList.add("show");
          newsletterForm.reset();
          window.setTimeout(function () { newsletterMessage.classList.remove("show"); }, 5000);
        });
      }

      var scrollTopButton = document.getElementById("swcScrollTop");
      if (scrollTopButton) {
        scrollTopButton.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
      }

      var revealElements = document.querySelectorAll(".reveal");
      if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }); }, { threshold: .1 });
        revealElements.forEach(function (element) { observer.observe(element); });
      } else { revealElements.forEach(function (element) { element.classList.add("visible"); }); }
    }());
  