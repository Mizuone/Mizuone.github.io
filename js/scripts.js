document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  let portfolioEvents = (() => {

    let _topContainerEvent = () => {

      window.addEventListener('scroll', function () {

        if (pageYOffset > 200) {
          document.querySelector('.backtotop').style.opacity = '1';
        } else {
          document.querySelector('.backtotop').style.opacity = '0';
        }

      });

    };

    let events = {
      topContainerEvent: _topContainerEvent
    };

    return events;
  })();

  let portfolioModule = (() => {

    let portfolio = {

      init: () => {
        portfolioEvents.topContainerEvent();
      }

    };

    return portfolio;
  })();

  portfolioModule.init();
});
