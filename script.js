const catalogUrl = 'https://adonline.tj';

const translations = {
  ru: {
    gate:{kicker:'Магазин строительных материалов',title:'Выберите язык',text:'Откройте официальную страницу ADL и перейдите к онлайн-каталогу строительных материалов.'},
    brandSub:'строительные материалы',navCatalog:'Каталог',navAdvantages:'Преимущества',navAssortment:'Ассортимент',navSteps:'Как выбрать',navContacts:'Контакты',btnViewCatalog:'Посмотреть каталог',btnAdvantages:'Узнать преимущества',
    heroEyebrow:'Официальный онлайн-каталог ADL',heroTitle:'Строительные материалы для ремонта, отделки и строительства',heroText:'ADL предоставляет удобный доступ к ассортименту строительных материалов. Откройте каталог, выберите нужные категории и продолжите оформление заказа удобным способом.',heroNote:'Каталог доступен с телефона, планшета и компьютера.',
    deviceLabel:'Онлайн-каталог',deviceOpen:'Открыть',deviceItem1:'Сухие смеси',deviceTag1:'для ремонтных работ',deviceItem2:'Отделочные материалы',deviceTag2:'для интерьера и фасада',deviceItem3:'Инструменты',deviceTag3:'для мастеров и объектов',
    advEyebrow:'Преимущества ADL',advTitle:'Удобный выбор материалов для частных и профессиональных задач',advText:'ADL делает переход к ассортименту быстрым и понятным: клиент сразу открывает каталог, выбирает нужную категорию и получает доступ к товарам магазина.',adv1Title:'Онлайн-каталог',adv1Text:'Ассортимент представлен в цифровом формате, чтобы покупатель мог просматривать товары без лишних действий.',adv2Title:'Понятные категории',adv2Text:'Разделы помогают быстрее найти материалы для ремонта, отделки, монтажа и строительных работ.',adv3Title:'Быстрый переход',adv3Text:'Ключевые кнопки ведут прямо в каталог ADL, поэтому путь к выбору товаров остаётся коротким.',adv4Title:'Официальная подача',adv4Text:'Информация оформлена ясно и аккуратно, чтобы клиент быстро понимал назначение магазина и каталога.',
    catalogEyebrow:'Каталог ADL',catalogTitle:'Ассортимент магазина доступен онлайн',catalogText:'В каталоге ADL можно перейти к основным группам товаров, ознакомиться с ассортиментом и выбрать строительные материалы для ремонта, отделки или объекта.',catalogPoint1:'материалы распределены по понятным категориям;',catalogPoint2:'каталог открывается на любом устройстве;',catalogPoint3:'переход к товарам занимает минимум времени;',catalogPoint4:'после выбора можно связаться с магазином удобным способом.',btnOpenOnline:'Открыть онлайн-каталог',board1:'Материалы для отделки',board2:'Смеси и строительная химия',board3:'Инструменты и расходники',board4:'Электрика и сантехника',
    assortEyebrow:'Ассортимент',assortTitle:'Основные направления товаров',assortText:'Категории каталога помогают быстрее ориентироваться в материалах для ремонта, отделки, монтажа и строительства.',cat1:'Цемент и сухие смеси',cat2:'Кирпич и блоки',cat3:'Краски и отделочные материалы',cat4:'Инструменты',cat5:'Сантехника',cat6:'Электрика',cat7:'Крепёж и расходники',cat8:'Материалы для ремонта',btnWholeCatalog:'Смотреть ассортимент',
    stepsEyebrow:'Как выбрать',stepsTitle:'Три шага к нужным материалам',step1Title:'Откройте каталог',step1Text:'Перейдите на adonline.tj и выберите нужный раздел ассортимента ADL.',step2Title:'Выберите материалы',step2Text:'Просмотрите категории и определите позиции, которые подходят для вашей задачи.',step3Title:'Свяжитесь с ADL',step3Text:'Уточните детали заказа и продолжите оформление удобным способом.',
    ctaEyebrow:'Перейдите к ассортименту',ctaTitle:'Откройте каталог ADL и выберите материалы для вашего объекта',ctaText:'Онлайн-каталог помогает быстро перейти к товарам и продолжить выбор без ожидания консультации.',btnADLCatalog:'Посмотреть каталог ADL',socialEyebrow:'Контакты',socialTitle:'ADL в социальных сетях',socialText:'Следите за обновлениями магазина, новыми позициями и информацией об ассортименте ADL.',footerText:'Магазин строительных материалов с удобным переходом к онлайн-каталогу товаров.',copyright:'Все права защищены.'
  },
  tj: {
    gate:{kicker:'Мағозаи масолеҳи сохтмонӣ',title:'Забонро интихоб кунед',text:'Саҳифаи расмии ADL-ро кушоед ва ба каталоги онлайни масолеҳи сохтмонӣ гузаред.'},
    brandSub:'масолеҳи сохтмонӣ',navCatalog:'Каталог',navAdvantages:'Афзалиятҳо',navAssortment:'Маҳсулот',navSteps:'Тарзи интихоб',navContacts:'Тамос',btnViewCatalog:'Дидани каталог',btnAdvantages:'Дидани афзалиятҳо',
    heroEyebrow:'Каталоги расмии онлайни ADL',heroTitle:'Масолеҳи сохтмонӣ барои таъмир, ороиш ва сохтмон',heroText:'ADL дастрасии қулайро ба ассортименти масолеҳи сохтмонӣ пешниҳод мекунад. Каталогро кушоед, категорияҳои лозимиро интихоб намоед ва фармоишро бо роҳи қулай идома диҳед.',heroNote:'Каталог аз телефон, планшет ва компютер дастрас аст.',
    deviceLabel:'Каталоги онлайн',deviceOpen:'Кушодан',deviceItem1:'Омехтаҳои хушк',deviceTag1:'барои корҳои таъмирӣ',deviceItem2:'Маводи ороишӣ',deviceTag2:'барои дохил ва фасад',deviceItem3:'Асбобҳо',deviceTag3:'барои устоҳо ва объектҳо',
    advEyebrow:'Афзалиятҳои ADL',advTitle:'Интихоби қулайи мавод барои вазифаҳои шахсӣ ва касбӣ',advText:'ADL гузариш ба ассортиментро зуд ва фаҳмо мекунад: муштарӣ каталогро мекушояд, категорияи лозимиро интихоб мекунад ва ба маҳсулоти мағоза дастрас мешавад.',adv1Title:'Каталоги онлайн',adv1Text:'Ассортимент дар шакли рақамӣ пешниҳод шудааст, то харидор маҳсулотро бе амалҳои зиёдатӣ бинад.',adv2Title:'Категорияҳои фаҳмо',adv2Text:'Қисмҳо барои зуд ёфтани мавод барои таъмир, ороиш, монтаж ва сохтмон кӯмак мекунанд.',adv3Title:'Гузариши зуд',adv3Text:'Тугмаҳои асосӣ бевосита ба каталоги ADL мебаранд, бинобар ин роҳи интихоб кӯтоҳ мемонад.',adv4Title:'Пешниҳоди расмӣ',adv4Text:'Маълумот равшан ва мураттаб пешниҳод шудааст, то муштарӣ мақсади мағоза ва каталогро зуд фаҳмад.',
    catalogEyebrow:'Каталоги ADL',catalogTitle:'Ассортименти мағоза онлайн дастрас аст',catalogText:'Дар каталоги ADL метавон ба гурӯҳҳои асосии маҳсулот гузашт, ассортиментро дид ва масолеҳи сохтмониро барои таъмир, ороиш ё объект интихоб кард.',catalogPoint1:'маводҳо аз рӯи категорияҳои фаҳмо ҷудо шудаанд;',catalogPoint2:'каталог дар ҳар дастгоҳ кушода мешавад;',catalogPoint3:'гузариш ба маҳсулот вақти кам мегирад;',catalogPoint4:'пас аз интихоб бо мағоза бо роҳи қулай тамос гирифтан мумкин аст.',btnOpenOnline:'Кушодани каталоги онлайн',board1:'Мавод барои ороиш',board2:'Омехтаҳо ва химияи сохтмонӣ',board3:'Асбобҳо ва масрафӣ',board4:'Барқӣ ва сантехника',
    assortEyebrow:'Ассортимент',assortTitle:'Самтҳои асосии маҳсулот',assortText:'Категорияҳои каталог барои зудтар ёфтани мавод барои таъмир, ороиш, монтаж ва сохтмон кӯмак мекунанд.',cat1:'Семент ва омехтаҳои хушк',cat2:'Хишт ва блокҳо',cat3:'Ранг ва маводи ороишӣ',cat4:'Асбобҳо',cat5:'Сантехника',cat6:'Барқӣ',cat7:'Пайвандҳо ва масрафӣ',cat8:'Мавод барои таъмир',btnWholeCatalog:'Дидани ассортимент',
    stepsEyebrow:'Тарзи интихоб',stepsTitle:'Се қадам то маводи лозимӣ',step1Title:'Каталогро кушоед',step1Text:'Ба adonline.tj гузаред ва қисми лозимии ассортименти ADL-ро интихоб кунед.',step2Title:'Маводро интихоб кунед',step2Text:'Категорияҳоро бинед ва маҳсулоти мувофиқро барои вазифаи худ муайян намоед.',step3Title:'Бо ADL тамос гиред',step3Text:'Ҷузъиёти фармоишро аниқ карда, оформление-ро бо роҳи қулай идома диҳед.',
    ctaEyebrow:'Ба ассортимент гузаред',ctaTitle:'Каталоги ADL-ро кушоед ва барои объекти худ мавод интихоб кунед',ctaText:'Каталоги онлайн ба маҳсулот зуд роҳ мекушояд ва интихобро бе интизори машварат идома медиҳад.',btnADLCatalog:'Дидани каталоги ADL',socialEyebrow:'Тамос',socialTitle:'ADL дар шабакаҳои иҷтимоӣ',socialText:'Навигариҳои мағоза, маҳсулоти нав ва маълумот дар бораи ассортименти ADL-ро пайгирӣ кунед.',footerText:'Мағозаи масолеҳи сохтмонӣ бо гузариши қулай ба каталоги онлайни маҳсулот.',copyright:'Ҳамаи ҳуқуқҳо ҳифз шудаанд.'
  },
  en: {
    gate:{kicker:'Construction materials store',title:'Choose language',text:'Open the official ADL page and continue to the online catalog of construction materials.'},
    brandSub:'construction materials',navCatalog:'Catalog',navAdvantages:'Advantages',navAssortment:'Assortment',navSteps:'How to choose',navContacts:'Contacts',btnViewCatalog:'View catalog',btnAdvantages:'See advantages',
    heroEyebrow:'Official ADL online catalog',heroTitle:'Construction materials for renovation, finishing and building',heroText:'ADL provides convenient access to construction material assortment. Open the catalog, choose the required categories and continue ordering in a convenient way.',heroNote:'The catalog is available from phone, tablet and desktop.',
    deviceLabel:'Online catalog',deviceOpen:'Open',deviceItem1:'Dry mixes',deviceTag1:'for renovation works',deviceItem2:'Finishing materials',deviceTag2:'for interior and facade',deviceItem3:'Tools',deviceTag3:'for craftsmen and sites',
    advEyebrow:'ADL advantages',advTitle:'Convenient material selection for private and professional needs',advText:'ADL makes access to the assortment fast and clear: customers open the catalog, choose the required category and access store products.',adv1Title:'Online catalog',adv1Text:'The assortment is presented digitally so customers can browse products without extra actions.',adv2Title:'Clear categories',adv2Text:'Sections help find materials for renovation, finishing, installation and construction works faster.',adv3Title:'Fast access',adv3Text:'Key buttons lead directly to the ADL catalog, keeping the path to product selection short.',adv4Title:'Official presentation',adv4Text:'Information is presented clearly and neatly so customers quickly understand the store and catalog purpose.',
    catalogEyebrow:'ADL catalog',catalogTitle:'Store assortment is available online',catalogText:'In the ADL catalog, customers can open the main product groups, review the assortment and choose construction materials for renovation, finishing or site works.',catalogPoint1:'materials are organized into clear categories;',catalogPoint2:'the catalog opens on any device;',catalogPoint3:'access to products takes minimum time;',catalogPoint4:'after selecting items, customers can contact the store conveniently.',btnOpenOnline:'Open online catalog',board1:'Finishing materials',board2:'Mixes and construction chemicals',board3:'Tools and consumables',board4:'Electrical and plumbing',
    assortEyebrow:'Assortment',assortTitle:'Main product directions',assortText:'Catalog categories help navigate materials for renovation, finishing, installation and construction faster.',cat1:'Cement and dry mixes',cat2:'Bricks and blocks',cat3:'Paints and finishing materials',cat4:'Tools',cat5:'Plumbing',cat6:'Electrical',cat7:'Fasteners and consumables',cat8:'Renovation materials',btnWholeCatalog:'View assortment',
    stepsEyebrow:'How to choose',stepsTitle:'Three steps to the right materials',step1Title:'Open the catalog',step1Text:'Go to adonline.tj and choose the required ADL assortment section.',step2Title:'Select materials',step2Text:'Review categories and identify the products suitable for your task.',step3Title:'Contact ADL',step3Text:'Clarify order details and continue checkout in a convenient way.',
    ctaEyebrow:'Move to assortment',ctaTitle:'Open the ADL catalog and choose materials for your project',ctaText:'The online catalog helps you access products quickly and continue selection without waiting for consultation.',btnADLCatalog:'View ADL catalog',socialEyebrow:'Contacts',socialTitle:'ADL on social media',socialText:'Follow store updates, new products and ADL assortment information.',footerText:'Construction materials store with convenient access to the online product catalog.',copyright:'All rights reserved.'
  }
};

const body = document.body;
const gate = document.getElementById('languageGate');
const languageBtn = document.getElementById('languageBtn');
const themeBtn = document.getElementById('themeBtn');
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const year = document.getElementById('year');
let currentLang = sessionStorage.getItem('adl-language') || 'ru';
let observer;

function setLang(lang){
  currentLang = translations[lang] ? lang : 'ru';
  const dict = translations[currentLang];
  document.documentElement.lang = currentLang === 'tj' ? 'tg' : currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if(dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-gate]').forEach(el => {
    const key = el.dataset.gate;
    if(dict.gate[key]) el.textContent = dict.gate[key];
  });
  languageBtn.textContent = currentLang.toUpperCase();
  sessionStorage.setItem('adl-language', currentLang);
}

function showGate(){
  gate.classList.remove('hidden');
  body.classList.add('locked');
}

function enterSite(lang){
  setLang(lang);
  gate.classList.add('hidden');
  body.classList.remove('locked');
  window.scrollTo(0,0);
  setTimeout(updateVisible, 90);
}

function setTheme(theme){
  const light = theme === 'light';
  body.classList.toggle('theme-light', light);
  body.classList.toggle('theme-dark', !light);
  themeBtn.textContent = light ? '☾' : '☀';
  localStorage.setItem('adl-theme', light ? 'light' : 'dark');
}

function closeMenu(){
  navMenu.classList.remove('open');
  menuBtn.classList.remove('open');
}

function updateVisible(){
  const topLimit = window.innerHeight * .86;
  const bottomLimit = window.innerHeight * .14;
  document.querySelectorAll('.reveal').forEach(el => {
    const r = el.getBoundingClientRect();
    const visible = r.top < topLimit && r.bottom > bottomLimit;
    el.classList.toggle('is-visible', visible);
  });
}

function initReveal(){
  const items = [...document.querySelectorAll('.reveal')];
  if(observer) observer.disconnect();
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const r = entry.boundingClientRect;
      const visible = entry.isIntersecting && r.top < window.innerHeight * .86 && r.bottom > window.innerHeight * .14;
      const farAway = r.bottom < window.innerHeight * .06 || r.top > window.innerHeight * .96;
      if(visible) entry.target.classList.add('is-visible');
      if(farAway) entry.target.classList.remove('is-visible');
    });
  }, {threshold:[0,.18,.32,.5], rootMargin:'-6% 0px -6% 0px'});
  items.forEach(el => observer.observe(el));
  updateVisible();
}

function init(){
  if(year) year.textContent = new Date().getFullYear();
  document.querySelectorAll(`a[href="${catalogUrl}"]`).forEach(a => {
    a.setAttribute('target','_blank');
    a.setAttribute('rel','noopener noreferrer');
  });
  setTheme(localStorage.getItem('adl-theme') || 'dark');
  setLang(currentLang);
  showGate();
  initReveal();
}

document.querySelectorAll('.gate-btn').forEach(btn => btn.addEventListener('click', () => enterSite(btn.dataset.lang)));
languageBtn.addEventListener('click', showGate);
themeBtn.addEventListener('click', () => setTheme(body.classList.contains('theme-light') ? 'dark' : 'light'));
menuBtn.addEventListener('click', () => { navMenu.classList.toggle('open'); menuBtn.classList.toggle('open'); });
navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('click', e => { if(!navMenu.contains(e.target) && !menuBtn.contains(e.target)) closeMenu(); });
window.addEventListener('resize', () => { closeMenu(); updateVisible(); });
window.addEventListener('pageshow', showGate);

init();
