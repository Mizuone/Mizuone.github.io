"use strict";

    $(document).ready(function() {

      (function() {
            //website version 
            /*var getFindCata = document.querySelectorAll(".catalog-links a");
            
            for (let i = 0; i < getFindCata.length; i++) {
                if (getFindCata[i].textContent === "women") {
                    console.log(i);
                }
            }*/
          
            //test version
            /*$('li.nav-item').hover(
                
               function() {
                   $(this).children('.sub-nav').slideDown(150);
               },
               function() {
                   $(this).children('.sub-nav').slideUp(150);
               }
            );*/
            /*$('li.nav-item').on('mouseenter', function() {
                var self = $(this);
                console.log("1");
                if ($('li.nav-item a').hasClass('open')) {
                    self.children('.sub-nav').slideDown(150);
                }
            });
            $('li.nav-item').on('mouseleave', function() {
                var self = $(this);
                console.log("2");
                if (!$('.sub-nav').hasClass('hover')) {
                    self.children('.sub-nav').slideUp(150);
                }
            });
            $('li.nav-item .sub-nav').on('mouseleave', function() {
                var self = $(this);
                console.log("3");
                $(this).slideUp(150);
                
            });*/
                /*$('.nav-menu > .nav-item').hover(function() {
                  $(this).find(".sub-nav").css({'opacity':0}).animate({'opacity':1},300);
                }, function() {
                        $(this).find(".sub-nav").fadeOut('fast');
                    }
                );*/
            
           /*$('.sub-nav').on("mouseleave", function() {
               console.log("Hello");
               $(this).css({'opacity':1}).animate({'opacity':0},300);
            });*/
       })();
    });
