document.addEventListener('DOMContentLoaded', function () {
  "use strict";

  var landingpageInitialization = function () {
    var isAnimated = 0,
        showAdditionProjects = document.querySelector(".viewmore span"),
        isTouch = typeof window.hasOwnProperty === "function" && !!window.hasOwnProperty("ontouchstart");

    console.log('here');
    if (showAdditionProjects != undefined) {
      showAdditionProjects.addEventListener("click", function () {
        var hideSection = document.getElementsByClassName("viewmore")[0];
        hideSection.style.display = "none";
        _showProjects();
      });
    }




    var _fadeOut = function _fadeOut(element) {
      element.style.opacity = 1;

      (function processFade() {
        if ((element.style.opacity -= .05) < 0) {
          element.style.display = "none";
        } else {
          requestAnimationFrame(processFade);
        }
      })();
    };
    var _fadeIn = function _fadeIn(element) {
      var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';

      element.style.opacity = 0;
      element.style.display = display;

      (function processFade() {
        var val = parseFloat(element.style.opacity);
        if (!((val += .05) > 1)) {
          element.style.opacity = val;
          requestAnimationFrame(processFade);
        }
      })();
    };



    var _checkSessionStorage = function _checkSessionStorage() {
      var findLoader = document.querySelector('.loaderoverlay'),
          findLandingPage = document.querySelector('.landingpagecontainer');

      if (sessionStorage.getItem([0]) === 'onSite_KyleOrlinski' && findLoader !== null && findLoader !== undefined) {
        console.log('Session Initialized - Welcome Visitor.');
        findLoader.style.display = "none";
        findLandingPage.style.display = "block";
      }
      if (sessionStorage.getItem([0]) !== 'onSite_KyleOrlinski') {
        sessionStorage.setItem(0, 'onSite_KyleOrlinski');
        _fadeLoader();
      }
    };



    var _attachEvents = function _attachEvents() {
      var displayDescription = document.querySelectorAll(".projectdivider .col-lg-4"),
          Description = document.querySelectorAll(".appdescription");

      for (var i = 0; i < displayDescription.length; i++) {
        _projectDescriptions(i, displayDescription, Description);
      }

      window.addEventListener('scroll', function () {
        if (pageYOffset > 200) {
          document.querySelector('.backtotop').style.opacity = '1';
        } else {
          document.querySelector('.backtotop').style.opacity = '0';
        }
      });
    };



    var _projectDescriptions = function _projectDescriptions(i, displayDescription, Description) {
      displayDescription[i].addEventListener("mouseover", function () {
        Description[i].classList.add("heighttransition");
      });
      displayDescription[i].addEventListener("mouseleave", function () {
        Description[i].classList.remove("heighttransition");
      });
      isTouch || screen.width <= 1024 ? Description[i].classList.add("heighttransitionmobile") : false;
    };



    var _notHomepage = function _notHomepage() {
      if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
        var navbars = document.querySelectorAll('nav, .navbar, .navbar-default');

        for (var i = 0, len = navbars.length; i < len; i++) {
          navbars[i].style.paddingTop = '50px';
        }
      }
    };



    var _loaderTitle = function _loaderTitle() {
      var bakingArr = ['Making Brownies', 'Applying Textures', 'Leveling Up', '<3', 'Closures?', 'Epic...', 'Adventure Awaits', 'Initializing...', 'Warming Up Textures', 'Applying Styles', 'Coffee++;', 'ES6 is old!', '["Loading..."]', 'Entering World...', 'Node.js', 'Angular.js', 'Material Design, so pretty.'];

      var getLoaderTitle = document.querySelector('.loaderoverlay h1');
      if (getLoaderTitle !== null && getLoaderTitle !== undefined) {
        getLoaderTitle.textContent = bakingArr[Math.floor(Math.random() * (bakingArr.length - 1))];
      }
    };



    var _showProjects = function _showProjects() {
      var getEndOfList = document.querySelector(".projectdivider li:last-child");

      var xmlRequest = new XMLHttpRequest();
      xmlRequest.open('GET', './ajaxcontent/additionprojects.html', true);
      xmlRequest.onreadystatechange = function () {

        if (xmlRequest.readyState != 4 || xmlRequest.status != 200) return;

        getEndOfList.innerHTML = xmlRequest.responseText;
        getEndOfList.style.opacity = 1;
        _attachEvents();
      };
      xmlRequest.send();
    };



    var _fadeLoader = function _fadeLoader() {

      setTimeout(function () {

        var loaderoverlay = document.getElementsByClassName('loaderoverlay')[0];
        var landingpage = document.getElementsByClassName('landingpagecontainer')[0];

        _fadeIn(landingpage);
        _fadeOut(loaderoverlay);
      }, 1250, true);
    };


    return {
      init: function init() {
        _notHomepage();
        _loaderTitle();
        _checkSessionStorage();
        _attachEvents();
      }
    };
  }();
  var start = performance.now();
  landingpageInitialization.init();
  console.log(performance.now() - start);
});
