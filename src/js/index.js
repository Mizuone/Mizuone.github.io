import '../scss/main.scss'; // Bundled with JS and separated using MiniCssExtractPlugin

const PortfolioFeatures = (function () {

    function _isTouchDevice() {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    };

    function _interactableElement(element) {
        if (scrollY > 200) {
            element.classList.remove('not-clickable');
        } else {
            element.classList.add('not-clickable');
        }
    }

    function _createBackToTopButton() {
        const button = document.createElement('button');
        button.className = 'backtotop clickable';
        button.innerHTML = `
                <a href="#" class="link-clean">
                    <i class="fas fa-arrow-up"></i>
                    Top
                </a>`;

        _interactableElement(button);

        window.addEventListener('scroll', function () {
            _interactableElement(button);
        });

        return button;
    }

    function _setupBackToTopFeature() {
        const backToTopContainer = document.getElementById('backtotop-container');

        backToTopContainer.appendChild(_createBackToTopButton());
    }
    function _hamburgerMenuClickEvents() {
        const hamburgerNavItems = document.querySelectorAll('.hamburgermenu__link');

        hamburgerNavItems.forEach((navItem) => {
            navItem.addEventListener('click', () => {
                document.querySelector('.hamburgermenu__checkbox').checked = false;
            });
        });
    }

    return {
        setupBackToTopFeature: _setupBackToTopFeature,
        hamburgerMenuClickEvents: _hamburgerMenuClickEvents,
        isTouchDevice: _isTouchDevice
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    const isTouchDevice = PortfolioFeatures.isTouchDevice();
    const blogPage = document.documentElement.getBoundingClientRect().height > 3000;

    if (isTouchDevice || blogPage) {
        PortfolioFeatures.setupBackToTopFeature();
        PortfolioFeatures.hamburgerMenuClickEvents();
    }
});