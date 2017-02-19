$(document).ready(function() {
  "use strict";
    (function() {
        var isAnimated = 0,
            showAdditionProjects = document.querySelector(".viewmore span"),
            isTouch = typeof window.hasOwnProperty === "function" && !!window.hasOwnProperty("ontouchstart");

        if (showAdditionProjects !== null && showAdditionProjects !== undefined) {
            showAdditionProjects.addEventListener("click", function() {
                var hideSection = document.querySelector(".viewmore");
                hideSection.style.display = "none";
                showProjects();
            });
        }

        $(window).scroll(function() {
           if($(this).scrollTop() > 80) {
               animateBar();
           }
        });
        function checkSessionStorage() {
          let findLoader = document.querySelector('.loaderoverlay'),
              findLandingPage = document.querySelector('.landingpagecontainer');

          if (sessionStorage.getItem([0]) === 'onSite_KyleOrlinski' && findLoader !== null && findLoader !== undefined) {
            console.log('Session Initialized - Welcome Visitor.');
            findLoader.style.display = "none";
            findLandingPage.style.display = "block";
          }
          if (sessionStorage.getItem([0]) !== 'onSite_KyleOrlinski') {
            sessionStorage.setItem(0, 'onSite_KyleOrlinski');
            fadeLoader();
          }
        }
        function attachEvents() {
            let displayDescription = document.querySelectorAll(".projectdivider .col-lg-4"),
                Description = document.querySelectorAll(".appdescription");

            for (let i = 0; i < displayDescription.length; i++) {
              projectDescriptions(i, displayDescription, Description);
            }
        }
        function projectDescriptions(i, displayDescription, Description) {
          displayDescription[i].addEventListener("mouseover", function() {
              Description[i].classList.add("heighttransition");
          });
          displayDescription[i].addEventListener("mouseleave", function() {
              Description[i].classList.remove("heighttransition");
          });
          isTouch || screen.width <= 1024 ? Description[i].classList.add("heighttransitionmobile") : false;
        }
        function notHomepage() {
          if (window.location.pathname === "/index.html") {
            $('nav, .navbar, .navbar-default').css({
              paddingTop: '50px'
            });
          }
        }
        function loaderTitle() {
          let bakingArr = ['Making Brownies', 'Applying Textures', 'Leveling Up', '<3', 'Closures?', 'Epic...', 'Adventure Awaits',
                          'Initializing...', 'Warming Up Textures', 'Applying Styles', 'Coffee++;', 'ES6 is old!', '["Loading..."]', 'Entering World...',
                          'Node.js', 'Angular.js', 'Material Design, so pretty.'
                          ];
          let getLoaderTitle = document.querySelector('.loaderoverlay h1');
          if (getLoaderTitle !== null && getLoaderTitle !== undefined) {
            getLoaderTitle.textContent = bakingArr[Math.floor(Math.random() * (bakingArr.length - 1))];
          }
        }
        function fadeLoader() {
          setTimeout(function() {
            $('.loaderoverlay').fadeOut(1000);
            $('.landingpagecontainer').fadeIn(1000);
          }, 500, true);
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
        function showProjects() {
            var getEndOfList = document.querySelector(".projectdivider li:last-child");

            $(getEndOfList).load("./ajaxcontent/additionprojects.html").css("opacity", "1");
            setTimeout(function() {
                attachEvents();
            }, 100);

        }
        notHomepage();
        loaderTitle();
        checkSessionStorage();
        attachEvents();
    })();
});
