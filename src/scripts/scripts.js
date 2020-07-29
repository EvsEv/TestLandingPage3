window.onload = function () {
  const headerButton = document.querySelector(".header-button");
  const nav = document.querySelector(".nav");
  const headingButton = document.querySelector(".heading__btn");
  const workHeader = document.querySelector(".work");
  const navMenu = document.querySelector(".nav-menu");
  const about = document.querySelector(".about");
  const services = document.querySelector(".services");
  const portfolio = document.querySelector(".portfolio");
  const team = document.querySelector(".team");
  const work = document.querySelector(".work");
  const price = document.querySelector(".price");
  const testimonials = document.querySelector(".testimonials");
  const blog = document.querySelector(".blog");
  const contact = document.querySelector(".contact");

  navMenu.onclick = (event) => {
    event.preventDefault();
    let target = event.target.closest("li");
    if (!target) return;
    const id = target.children[0].attributes.href.value;
    const block = document.querySelector(id);
    window.scrollTo(0, block.offsetTop + 3);
    target.classList.add("active");
    console.log(block);
    console.log(target);
  };

  headingButton.onclick = () => {
    console.dir(workHeader.offsetTop);
    window.scrollTo(0, workHeader.offsetTop);
  };

  if (window.pageYOffset > 0) {
    headerButton.classList.add("visible");
    nav.classList.add("scrolled");
  }

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
      headerButton.classList.add("visible");
      nav.classList.add("scrolled");
    } else {
      headerButton.classList.remove("visible");
      nav.classList.remove("scrolled");
    }

    const scrollValue = window.pageYOffset;

    [...navMenu.children].map((item) => {
      item.classList.remove("active");
    });

    switch (true) {
      case scrollValue > about.offsetTop &&
        scrollValue < about.offsetTop + about.offsetHeight:
        navMenu.children[0].classList.add("active");
        break;
      case scrollValue > services.offsetTop &&
        scrollValue < services.offsetTop + services.offsetHeight:
        navMenu.children[1].classList.add("active");
        break;
      case scrollValue > portfolio.offsetTop &&
        scrollValue < portfolio.offsetTop + portfolio.offsetHeight:
        navMenu.children[2].classList.add("active");
        break;
      case scrollValue > team.offsetTop &&
        scrollValue < team.offsetTop + team.offsetHeight:
        navMenu.children[3].classList.add("active");
        break;
      case scrollValue > work.offsetTop &&
        scrollValue < work.offsetTop + work.offsetHeight:
        navMenu.children[4].classList.add("active");
        break;
      case scrollValue > price.offsetTop &&
        scrollValue < price.offsetTop + price.offsetHeight:
        navMenu.children[5].classList.add("active");
        break;
      case scrollValue > testimonials.offsetTop &&
        scrollValue < testimonials.offsetTop + testimonials.offsetHeight:
        navMenu.children[6].classList.add("active");
        break;
      case scrollValue > blog.offsetTop &&
        scrollValue < blog.offsetTop + blog.offsetHeight:
        navMenu.children[7].classList.add("active");
        break;
      case scrollValue > contact.offsetTop &&
        scrollValue < contact.offsetTop + contact.offsetHeight:
        navMenu.children[8].classList.add("active");
        break;
    }
  });
  headerButton.onclick = () => {
    window.scrollTo(0, 0);
  };
};
