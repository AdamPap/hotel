var index = location.pathname.lastIndexOf("/") + 1;
var filenameWithExtension = location.pathname.substr(index);
var filename = filenameWithExtension.split(".")[0];

const h2 = document.querySelectorAll('h2.content-title');
const h4 = document.querySelectorAll('h4.content-title');

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            // console.log('in the view');
            console.log($(entry.target));

            if ($(entry.target).is(h2)) {
                $(entry.target).addClass("animate__animated animate__slideInLeft");
                $(entry.target).next().addClass("animate__animated animate__slideInRight");
            }
            if ($(entry.target).is(h4)) {
                $(entry.target).addClass("animate__animated animate__fadeInDown");
            }

            // $('section h2.content-title').addClass("animate__animated animate__slideInLeft");
        } else {
            // console.log('out of view');
            if ($(entry.target).is(h2)) {
                $(entry.target).removeClass("animate__animated animate__slideInLeft");
                $(entry.target).next().removeClass("animate__animated animate__slideInRight");
            }
            if ($(entry.target).is(h4)) {
                $(entry.target).removeClass("animate__animated animate__fadeInDown");
            }
            // $('section h2.content-title').removeClass("animate__animated animate__slideInLeft");
        }
    });
});

h2.forEach(sec => {
    observer.observe(sec);
});

h4.forEach(sec => {
    observer.observe(sec);
});

$(document).scroll(function () {
    var y = $(this).scrollTop();

    var footer_h = $(".footer").height();
    var top = $(".footer").offset().top - $(window).height();
    var bottom = top + $(".footer").height() - $(window).height(); // last scroll doesnt calc the window
    // console.log(bottom + footer_h);
    // console.log(y);


    var anim_done = false;
    $(".collapse").removeClass("show");

    if (filename === "index" || filename === "") {
        if (y > 200) {

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
        // if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        // anin_done = true;
        $(".help-button").css("opacity", "1");
        $(".help-button").addClass("animate__animated animate__bounceInRight");
        $(".help-button").removeClass("animate__bounceOutRight");
    } else {
        if ($(".help-button").css("opacity") == 1) {
            // anim_done = false;
            $(".help-button").css("opacity", "0");
            $(".help-button").removeClass("animate__animated animate__bounceInRight");
            $(".help-button").addClass("animate__animated animate__bounceOutRight");
        }
    }

    // ANIMATIONS

    // if (filename === "index" || filename === "") {
    //     var philosophy = $("#section-2").height();
    //     if (y > philosophy / 2) {
    //         // console.log("SUP");
    //         $('#section-2 h2.content-title').addClass("animate__animated animate__slideInLeft");
    //     }
    //     if (y > philosophy + 100) {
    //         $('#philosophy-img').addClass("animate__animated animate__fadeInBottomLeft");
    //         $('.text-content').addClass("animate__animated animate__fadeIn");
    //     }
    //     if (y > 800) {
    //         $('#location-section h2.content-title').addClass("animate__animated animate__slideInLeft");
    //         $('hr').addClass("animate__animated animate__slideInRight");
    //     }
    //     // console.log("SCROLL " + y)
    //     // console.log("HEIGHT " + $("#section-2").height());
    // }
});

var clicks = 0;
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


$('#big-navbar-rooms .navbar-brand  #logo').attr("src", "images/dark_logo.png");
$('#navbar-rooms .nav-link').css("color", "#192951");
$('#big-navbar-rooms .toggler-icon-bars').css("color", "#192951");

$('.navbar .navbar-nav .drop-links').css('color', '#192951');

console.log(location.pathname);
console.log(filename);


