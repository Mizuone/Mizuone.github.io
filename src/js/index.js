import '../scss/main.scss';
import { PortfolioEvents } from "./portfolioevents";

document.addEventListener('DOMContentLoaded', () => {
    PortfolioEvents.topContainerEvent();
    PortfolioEvents.hamburgerMenuClickEvents();
});
