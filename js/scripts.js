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

    let _hamburgerMenuClickEvents = () => {

      if (location.pathname === '/') {
          let hamburgerNavItems = document.querySelectorAll('.hamburgermenu__link');

          hamburgerNavItems.forEach((navItem) => {
            navItem.addEventListener('click', (event) => {
              document.querySelector('.hamburgermenu__checkbox').checked = false;
            });
          });
      }

    };

    let events = {
      topContainerEvent: _topContainerEvent,
      hamburgerMenuClickEvents: _hamburgerMenuClickEvents
    };

    return events;
  })();

  let portfolioModule = (() => {

    let portfolio = {

      init: () => {
        portfolioEvents.topContainerEvent();
        portfolioEvents.hamburgerMenuClickEvents();
      }

    };

    return portfolio;
  })();

  portfolioModule.init();
});
