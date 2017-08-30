/// <reference path="jquery-1.10.2.min.js" />


//$(document).ready(function () {
    //$("#btn1").click(function () {
    //    $(this).hide();
    //});
    //$("#btn1").click(function () {
    //    $("p").hide();
    //});
    //$("#btn1").click(function () {
    //    $("p").eq(1).slideToggle();
    //});
    //$("#btn1").click(function () {
    //    $("p").eq(1).animate({
    //        "font-size": "20px",
    //        left: "100px",
    //        top: "150px",
    //        "color": "green",
    //        "background-color": "red"

    //    }, 3000);
    //});

    //$("#btn1").click(function () {
    //    $("p").eq(1).prepend("<p>我是冼朝熙，我是码农</p>");
    //});

    //$("#btn1").click(function () {
    //       $("p").eq(1).css("font-size","20px");
    //    });

    //$("#btn2").click(function () {
    //    $("p").eq(1).css({
    //        "font-size": "20px",
    //        "color":"red"
    //    });
    //});

    //$("#btn1").click(function () {
    //    alert("背景色："+$("p").eq(1).css("background-color"));
    //});

    //$("#btn1").click(function () {
    //    $(".test2").load("/example/1.txt");
    //});
//});


var i = 0,j=0,k=0;
var timer,timer1,timer2;
$(document).ready(function () {
    $("#btn1").click(function () {
        $("#Display-Box").css("display", "none");
        $("#Hidden-Box").css("display", "block");
        $("article").addClass("c1");
    });

    $("#btn2").click(function () {
        $("#Hidden-Box").css("display", "none");
        $("#Display-Box").css("display", "block");
        $("article").removeClass("c1");
    });

    $(".Img-Item").eq(0).show().siblings().hide();
    $(".img-item").eq(0).show().siblings().hide();
    $(".img-item2").eq(0).show().siblings().hide();
    Showtime();
    Showtime1();
    Showtime2();
    $(".tab-item").hover(function () {
        i = $(this).index();
        clearInterval(timer);
        Show();
    }, function () {
        Showtime();
    });

    $(".bton1").click(function () {
        clearInterval(timer);
        clearInterval(timer1);
        clearInterval(timer2);
        if (i == 0) {
            i = 6;
        }
        i--;
        Show();
        Showtime();

        if (j == 0) {
            j = 6;
        }
        j--;
        Show1();
        Showtime1();

        if (k == 0) {
            k = 6;
        }
        k--;
        Show2();
        Showtime2(); 
    });

    $(".bton2").click(function () {
        clearInterval(timer);
        clearInterval(timer1);
        clearInterval(timer2);
        if (i == 5) {
            i = -1;
        }
        i++;
        Show();
        Showtime();

        if (j == 5) {
            j = -1;
        }
        j++;
        Show1();
        Showtime1();

        if (k == 5) {
            k = -1;
        }
        k++;
        Show2();
        Showtime2();
    });

    $("#artnav-list li").eq(1).mouseover(function () {
        $("#artnav-list li table").css("display", "block");
        $("#artnav-list li span").text("▲");
    });
    $("#artnav-list li").eq(1).mouseout(function () {
        $("#artnav-list li table").css("display", "none");
        $("#artnav-list li span").text("▼");
    });

    $(".leftitem").eq(2).mouseover(function(){
        $(".leftitem table").css("display", "block");
        //$(".leftitem span").text("▲");
    });
    $(".leftitem").eq(2).mouseout(function () {
        $(".leftitem table").css("display", "none");
        //$(".leftitem span").text("▼");
    });

    $("#Down-list li").eq(0).css("background", "url(../image/7.png) no-repeat left");
    $("#Down-list li").eq(1).css("background", "url(../image/8.png) no-repeat left");
    $("#righthead-list li").eq(0).mouseover(function () {
        $("#Down-list").css("display", "block");
    });
    $("#righthead-list li").eq(0).mouseout(function () {
        $("#Down-list").css("display", "none");
    });
});

function Show(){
    $(".Img-Item").eq(i).fadeIn(500).siblings().fadeOut(500);
    $(".tab-item").eq(i).addClass("bg").siblings().removeClass("bg");
}

function Show1() {
    $(".img-item").eq(j).fadeIn(500).siblings().fadeOut(500);
}

function Show2() {
    $(".img-item2").eq(k).fadeIn(500).siblings().fadeOut(500);
}

function Showtime(){
    timer = setInterval(function () {
        if (i == 6) {
            i = -1;
        }
        i++;
        Show();
    }, 4000);
}

function Showtime1() {
    timer1 = setInterval(function () {
        if (j == 6) {
            j = -1;
        }
        j++;
        Show1();
    }, 4000);
}

function Showtime2() {
    timer2=setInterval(function () {
        if (k==6) {
            k=-1;
        }
        k++;
       Show2();
    }, 4000);
}




