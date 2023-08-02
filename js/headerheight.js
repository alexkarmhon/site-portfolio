const { height: pageHeaderHeight } = document
      .querySelector(".header")
      .getBoundingClientRect();
document.body.style.paddingTop = `${pageHeaderHeight}px`;

const menu = document.getElementById("mbm");
menu.style.top = `${pageHeaderHeight}px`;