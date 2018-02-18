document.addEventListener('DOMContentLoaded', function () {
  "use strict";

  var landingpageInitialization = function () {

    var isAnimated = 0,
        showAdditionProjects = document.querySelector(".viewmore span"),
        isTouch = typeof window.hasOwnProperty === "function" && !!window.hasOwnProperty("ontouchstart");


    if (showAdditionProjects != undefined) {
      showAdditionProjects.addEventListener("click", function () {
        var hideSection = document.getElementsByClassName("viewmore")[0];
        hideSection.style.display = "none";

        _showProjects();
      });
    }

    var _checkSessionStorage = function _checkSessionStorage() {
      var findLoader = document.querySelector('.loaderoverlay'),
          findLandingPage = document.querySelector('.landingpagecontainer');

      if (sessionStorage.getItem('onSite_KyleOrlinski') !== null) {
        console.log('Session Initialized - Welcome Visitor.');
        _removeFadeInClasses();
      }
      if (sessionStorage.getItem('onSite_KyleOrlinski') === null) {
        sessionStorage.setItem('onSite_KyleOrlinski', true);
      }
    };

    var _removeFadeInClasses = function() {
      var elementsWithFadeInClasses = document.querySelectorAll('.fade-in, .move-up-fade-in');

      for (var i = 0, len = elementsWithFadeInClasses.length; i < len; i++) {

        if (elementsWithFadeInClasses[i].classList.contains('fade-in')) {
          elementsWithFadeInClasses[i].classList.remove('fade-in');
          continue;
        }

        if (elementsWithFadeInClasses[i].classList.contains('.move-up-fade-in')) {
          elementsWithFadeInClasses[i].classList.remove('move-up-fade-in');
        }

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
      if (window.location.pathname === "/" || window.location.pathname === '/index.html') {
        var navbars = document.querySelectorAll('nav, .navbar, .navbar-default');

        for (var i = 0, len = navbars.length; i < len; i++) {
          navbars[i].style.paddingTop = '50px';
        }
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


    return {
      init: function init() {
        _notHomepage();
        _checkSessionStorage();
        _attachEvents();
      }
    };
  }();

  landingpageInitialization.init();
});
