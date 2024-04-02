const userScroll = function () {
  const navbar = document.querySelector(".navbar");
  const toTopBtn = document.querySelector("#to-top");
  console.log(toTopBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-sticky");
      toTopBtn.classList.add("show");
    } else {
      navbar.classList.remove("navbar-sticky");
      toTopBtn.classList.remove("show");
    }
  });
};

const scrollToTop = function () {
  console.log(document.body.scrollTop, document.documentElement.scrollTop);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const incrementStats = function () {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = 0;
    const target = +counter.getAttribute("data-target");

    const updateCounter = (counter, target) => {
      const c = +counter.innerText;

      const increment = target / 200;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 1, counter, target);
      } else counter.innerText = target;
    };

    updateCounter(counter, target);
  });
};

// Event Listeners
document.addEventListener("DOMContentLoaded", userScroll);
document.addEventListener("DOMContentLoaded", incrementStats);
document.querySelector("#to-top")?.addEventListener("click", scrollToTop);
