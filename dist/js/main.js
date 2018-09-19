"use strict";

// let i = 1;
// while (i < 10) {
//     console.log(i);
//     i = i + 1;
// }

// let names = [
//     "aaron", // 0
//     "becky", // 1
//     "charlie", // 2
//     "david", // 3
//     "ethan" // 4
// ]

// console.log( names[0] )
// console.log( names[1] )
// console.log( names[2] )
// console.log( names[3] )
// console.log( names[4] )

// // FOR LOOP
// for (var i = 0; i < names.length; i++) {
//     console.log( names[i] )
// }


// var thumbnails = document.querySelectorAll(".thumbnail");

// for (var i = 0; i < thumbnails.length; i++) {
//     console.log( thumbnails[i] )
// }


var thumbnails = document.querySelectorAll(".thumbnail");
for (var i = 0; i < thumbnails.length; i++) {

    console.log(thumbnails[i]);

    // var thumbnail = document.querySelector(".thumbnail");

    thumbnails[i].addEventListener("click", function () {

        // alert('Hello world!');

        var overlay = document.createElement('div');
        overlay.classList.add("lightbox-overlay");
        document.body.appendChild(overlay);

        var lightbox = document.createElement('div');
        lightbox.classList.add("lightbox");
        document.body.appendChild(lightbox);

        var lightboxImage = document.createElement('img');
        lightbox.appendChild(lightboxImage);
        lightboxImage.src = this.src;
    });
};

/*
click the thumbnail, get a lightbox,
click event happens to thumbnail, get a lightbox
find the thumbnail, when click event happens to it, get a lightbox
find the thumbnail, when click event happens to it, create a lightbox and put it on the screen
find the thumbnail, when click event happens to it, create all the elements needed for a lightbox, and put them on the screen
find the thumbnail, when click event happens to it, create all the elements needed for a lightbox, and append them to the <body>
find the thumbnail, when click event happens to it, create all the elements needed for a lightbox, and append them to the <body>
*/
//# sourceMappingURL=main.js.map
