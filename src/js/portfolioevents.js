export class PortfolioEvents {
    static topContainerEvent() {
        let backToTop = document.querySelector('.backtotop');
        
        function interactableElement(element) {
            if (scrollY > 200) {
                element.classList.remove('not-clickable');
            } else {
                element.classList.add('not-clickable');
            }
        }

        window.addEventListener('scroll', function () {            
            interactableElement(backToTop);
        });

        interactableElement(backToTop);
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