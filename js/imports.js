import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import initAnimacaoScroll from './modules/scroll-animação.js';
import TabNav from './modules/tabnav.js';
import scrollLista from './modules/scroll-lista.js';
import Tooltip from './modules/tooltip.js';
import initDropDown from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initAnimaNumeros from './modules/anima-numeros.js';
import initHorario from './modules/horario.js';
import initfetchBitCoin from './modules/bitcoin.js';
import SlideNav, { SlideNav1 } from './modules/slide.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
const accordion = new Accordion('[data-anima="accordion"] dt');
accordion.init();
const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();
const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();
const tooltip = new Tooltip('[data-tooltip]');
tooltip.init()
initfetchBitCoin();
initHorario();
initAnimaNumeros();
initMenuMobile();
initDropDown();
scrollLista();
initAnimacaoScroll();


const slide = new SlideNav1('.slide', '.wrapper');
console.log(slide)
slide.init();
slide.addControl('.custom-controls')