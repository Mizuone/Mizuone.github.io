"use strict";
$(document).ready(function() {
    console.log("connected");
    var PortfolioSpace = {};
    PortfolioSpace = function() {
        $(window).scroll(function() {
            console.log($(this).scrollTop());
           if($(this).scrollTop() > 80) {
               $("ul.progress-stlye li").css("display", "inline");
               $("ul.progress-style li").fadeIn(1000,function(){});
           } else {
               $("ul.progress-style li").fadeOut("fast",function(){});
           }
           if($(this).scrollTop() > 362) {
               $(".firstrow").fadeIn(500,function(){});
           } else {
               $(".firstrow").fadeOut("fast",function(){});
           }
           if($(this).scrollTop() > 762) {
               $(".secondrow").fadeIn(500,function(){});
           } else {
               $(".secondrow").fadeOut("fast",function(){});
           }
           if($(this).scrollTop() > 1162) {
               $(".thirdrow").fadeIn(500,function(){});
           } else {
               $(".thirdrow").fadeOut("fast",function(){});
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
