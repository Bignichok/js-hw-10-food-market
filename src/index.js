import './styles.scss';
import { markup } from './js/templating';
import { checkLocalStorage } from './js/themes';

const menu = document.querySelector('.js-menu');
menu.insertAdjacentHTML('beforeend', markup);
checkLocalStorage();
