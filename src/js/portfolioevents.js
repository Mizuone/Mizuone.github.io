export class PortfolioEvents {
    static topContainerEvent() {
        window.addEventListener('scroll', function () {
            if (pageYOffset > 200) {
                document.querySelector('.backtotop').style.opacity = '1';
            } else {
                document.querySelector('.backtotop').style.opacity = '0';
            }

        });
    };

    static hamburgerMenuClickEvents() {
        if (location.pathname === '/') {
            let hamburgerNavItems = document.querySelectorAll('.hamburgermenu__link');

            hamburgerNavItems.forEach((navItem) => {
                navItem.addEventListener('click', () => {
                    document.querySelector('.hamburgermenu__checkbox').checked = false;
                });
            });
        }
    };
}