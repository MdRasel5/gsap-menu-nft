var t1 = new TimelineMax({
  paused: true
});

t1.to(".outer-content .title", 1, {
  opacity: 0,
});

t1.to(
  ".left-navbar-menus",
  .7, {
    width: "25%",
    ease: Expo.easeInOut,
  },
  "-=.6"
);

// logo
t1.staggerFrom(
  ".left-nav-logo img",
  .7, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  },
  "-=1"
);

// menu
t1.staggerFrom(
  ".left-navbar-menus ul li",
  .7, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  },
  "-=1"
);

// copright-text
t1.staggerFrom(
  ".left-navbar-copyright span",
  .5, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  },
  "-=1"
);

// overlay
t1.to(
  ".left-navbar-overlay",
  .7, {
    width: "75%",
    ease: Expo.easeInOut,
    delay: -1,
  },
  "-=.5"
);

t1.reverse();
$(document).on("click", ".toggle-btn", function () {
  t1.reversed(!t1.reversed());
});
$(document).on("click", ".menu-text", function () {
  t1.reversed(!t1.reversed());
});
$(document).on("click", ".left-navbar-overlay", function () {
  t1.reversed(!t1.reversed());
});