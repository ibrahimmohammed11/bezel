
/* navbar change color  */
$(window).scroll(function () {
    let top = $(window).scrollTop();
    if (top > 400) {
        $(".navbar").css({
            "background-color": "#00c3da",
            "transition": "all 1.5s"
        })
    }
    else {
        $(".navbar").css({
            "background-color": "#01142F",
            "transition": "all 1.5s"
        })
    }
})
/* navbar change color  */
/* nav-links smooth scroll  */
$(".nav-link").click(function () {
    let currentLink = $(this).attr("href");
    let secOffset = $(currentLink).offset().top;
    $("body,html").animate({ scrollTop: secOffset }, 1500)
})
/* nav-links smooth scroll  */
$("#toTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 1500)
});

$(window).scroll(function () {
    let top = $(window).scrollTop();
    if (top > 700) {
        $("#toTop").fadeIn(1000)
    }
    else {
        $("#toTop").fadeOut(1000)
    }
})
/* back to top button  */
/*--------------------- loading screen-----------------------  */
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });
  /* -------------------loading screen ------------------------ */

/* AOS animation  */
AOS.init();
/* AOS animation  */
/* Date  */
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = `${dd} / ${mm} / ${yyyy}`;
document.getElementById("today").innerHTML=today;
/* Date  */
/* carousel  */
$('.carousel').carousel({
    interval: 1500
  })
/* carousel  */