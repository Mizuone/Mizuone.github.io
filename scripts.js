"use strict";
$(document).ready(function() {
    var PortfolioSpace = {};
    
    PortfolioSpace = function() {
        var isAnimated = 0;
        
        $(window).scroll(function() {
           if($(this).scrollTop() > 80) {
               animateBar();
           }
        });
        
        function animateBar() {
            if (isAnimated === 0) {
                $(".javascriptbar .novice").animate({ width: "20%" }, 25);
                $(".javascriptbar .journeyman").animate({ width: "25%" }, 300);
                $(".javascriptbar .epic").animate({ width: "20%" }, 500);
                
                $(".html5bar .novice").animate({ width: "20%" }, 25);
                $(".html5bar .journeyman").animate({ width: "25%" }, 300);
                $(".html5bar .epic").animate({ width: "20%" }, 500);
                $(".html5bar .legendary").animate({ width: "15%" }, 700);
                
                $(".jquerybar .novice").animate({ width: "20%" }, 25);
                $(".jquerybar .journeyman").animate({ width: "25%" }, 300);
                $(".jquerybar .epic").animate({ width: "5%" }, 500);
                                
                $(".phpbar .novice").animate({ width: "20%" }, 25);
                $(".phpbar .journeyman").animate({ width: "10%" }, 300);
                                
                $(".nodejsbar .novice").animate({ width: "15%" }, 300);
                
                isAnimated++;
            }
        }
    };
    PortfolioSpace();
});
