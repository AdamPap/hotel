
$(window).on('load', function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut(300);
});

var index = location.pathname.lastIndexOf("/") + 1;
var filenameWithExtension = location.pathname.substr(index);
var filename = filenameWithExtension.split(".")[0];

$('#big-navbar-rooms .navbar-brand  #logo').attr("src", "images/dark_logo.png");
$('#navbar-rooms .nav-link').css("color", "#192951");
$('#big-navbar-rooms .toggler-icon-bars').css("color", "#192951");

$('.navbar .navbar-nav .drop-links').css('color', '#192951');

console.log(location.pathname);
console.log(filename);

$(document).scroll(function () {
    var y = $(this).scrollTop();

    var footer_h = $(".footer").height();
    var top = $(".footer").offset().top - $(window).height();
    var bottom = top + $(".footer").height() - $(window).height(); // last scroll doesnt calc the window
    // console.log(bottom + footer_h);
    // console.log(y);

    $(".collapse").removeClass("show");

    if (filename === "index" || filename === "") {
        if (y > 200) {
            // alert("hi")
            $('.navbar').removeClass("bg-transparent");
            $('.navbar').css("background-color", "white");
            $('.nav-link').css("color", "#192951");
            $('#logo').attr("src", "images/dark_logo.png");
            $('.navbar-brand').removeClass("brand-margins");
            $('.navbar-brand').addClass("brand-margins-scrolled");
            $(".toggler-icon-bars").css("color", "#192951");
        } else {
            $('.navbar').css("background-color", "transparent");
            $('.nav-link').css("color", "white");
            $('#logo').attr("src", "images/new1.png");
            $('.navbar-brand').addClass("brand-margins");
            $(".toggler-icon-bars").css("color", "white");
            $('.navbar .navbar-nav .drop-links').css('color', '#192951');
        }
    }

    if (y > bottom) {
        $(".help-button").css("opacity", "1");
        $(".help-button").addClass("animate__animated animate__bounceInRight");
        $(".help-button").removeClass("animate__bounceOutRight");
    } else {
        if ($(".help-button").css("opacity") == 1) {
            $(".help-button").css("opacity", "0");
            $(".help-button").removeClass("animate__animated animate__bounceInRight");
            $(".help-button").addClass("animate__animated animate__bounceOutRight");
        }
    }
});

if (filename === "index" || filename === "") {
    $(".navbar-toggler").on("click", function () {
        // if ($(".navbar-collapse").is(":visible")) {
        if ($(".collapse").css("display") === "none") {
            // alert("SUP")
            $('.navbar').removeClass("bg-transparent");
            $('.navbar').css("background-color", "white");
            $('.nav-link').css("color", "#192951");
            $('#logo').attr("src", "images/dark_logo.png");
            $(".toggler-icon-bars").css("color", "#192951");
            $(".nav-link").css("padding", "8px");
        } else {
            $('.navbar').css("background-color", "transparent");
            $('.nav-link').css("color", "white");
            $('#logo').attr("src", "images/new1.png");
            $('.navbar-brand').addClass("brand-margins");
            $(".toggler-icon-bars").css("color", "white");
            // $(".nav-link").css("padding", "8px 0 8px 0") 
        }
        // }
    })
}





