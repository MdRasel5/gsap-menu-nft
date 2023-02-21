var t1 = new TimelineMax({
    paused: true
});

// t1.to(
//     ".left-navbar",
//     .7, {
//         width: "25%",
//         ease: Expo.easeInOut,
//     },
//     "-=.6"
// );


t1.to(
    ".left-navbar",
    1.1, {
        left: "0%",
        ease: Expo.easeInOut,
    },
    "-=.6"
);

// overlay
// t1.to(
//     ".left-navbar-overlay",
//     .7, {
//         width: "75%",
//         ease: Expo.easeInOut,
//         // delay: -1,
//     },
//     "-=.5"
// );

t1.to(
    ".left-navbar-overlay",
    .9, {
        left: 0,
        ease: Expo.easeInOut,
        delay: .6,
    },
    "-=.9"
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