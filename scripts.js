"use strict";
$(document).ready(function() {
    console.log("connected");
    var PortfolioSpace = {};
    PortfolioSpace = function() {
        $(window).scroll(function() {
            console.log($(this).scrollTop());
           if($(this).scrollTop() > 80) {
               $("ul.progress-stlye li").css("display", "inline");
               $("ul.progress-style li").fadeIn(400,function(){});
           } else {
               $("ul.progress-style li").fadeOut("fast",function(){});
           }
           if($(this).scrollTop() > 500) {
               $(".projectdivider").fadeIn("slow",function(){});
           } else {
               $(".projectdivider").fadeOut("fast",function(){});
           }
        });
        function fadeobjectin(object) {
            return $(object).fadeIn("slow",function(){});
        }
        function fadeobjectOut(object) {
            return $(object).fadeOut("slow",function(){});
        }
    };
    PortfolioSpace();
});
