"use strict";
$(document).ready(function() {
    if (typeof(PortfolioSpace === "undefined")) {
        var PortfolioSpace = {};
    }
    
    PortfolioSpace = function() {
        var isAnimated = 0;
        
        $(window).scroll(function() {
           if($(this).scrollTop() > 80) {
               animateBar();
           }
        });
        
        var displayDescription = document.querySelectorAll(".projectdivider .col-lg-4");
        var Description = document.querySelectorAll(".appdescription");
        
        for (let i = 0; i < displayDescription.length; i++) {
            displayDescription[i].addEventListener("mouseover", function() {
                Description[i].classList.add("heighttransition");
            })
            displayDescription[i].addEventListener("mouseleave", function() {
                Description[i].classList.remove("heighttransition");
            })
            
        }
        function animateBar() {
            if (isAnimated === 0) {
                $(".javascriptbar .novice").animate({ width: "20%" }, 25);
                $(".javascriptbar .journeyman").animate({ width: "25%" }, 300);
                $(".javascriptbar .epic").animate({ width: "20%" }, 500);
                
                $(".html5bar .novice").animate({ width: "20%" }, 25);
                $(".html5bar .journeyman").animate({ width: "25%" }, 300);
                $(".html5bar .epic").animate({ width: "15%" }, 500);
                $(".html5bar .legendary").animate({ width: "0%" }, 700);
                
                $(".jquerybar .novice").animate({ width: "20%" }, 25);
                $(".jquerybar .journeyman").animate({ width: "25%" }, 300);
                $(".jquerybar .epic").animate({ width: "5%" }, 500);
                                
                $(".angularbar .novice").animate({ width: "20%" }, 25);
                $(".angularbar .journeyman").animate({ width: "10%" }, 300);
                
                $(".phpbar .novice").animate({ width: "15%" }, 25);
                $(".phpbar .journeyman").animate({ width: "0%" }, 300);
                                
                $(".nodejsbar .novice").animate({ width: "20%" }, 300);
                
                isAnimated++;
            }
        }
    };
    PortfolioSpace();
});