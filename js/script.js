setTimeout(function() {
    document.body.classList.add('body_visible');
}, 200);

function hide() {
    document.body.querySelector('.menu__box').style.left = "-100%"; // = "-100%";
    document.body.querySelector('.menu__box').style.visibility = "hidden";
    document.body.querySelector('#menu__toggle').checked = false;
    //alert(document.body.querySelector('#menu__toggle').checked);
};

function show() {
    //alert(document.body.querySelector('#menu__toggle').checked);
    if (document.body.querySelector('#menu__toggle').checked == false) {
        document.body.querySelector('.menu__box').style.left = "-100%"; // = "-100%";
        document.body.querySelector('.menu__box').style.visibility = "hidden";
    } else {
        document.body.querySelector('.menu__box').style.left = "0"; // = "-100%";
        document.body.querySelector('.menu__box').style.visibility = "visible";
    }

};