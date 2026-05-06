const CATALOG_URL = 'http://adlonline.tj/';

const translations = {
  ru: {
    gate:{kicker:'Магазин строительных материалов',title:'Выберите язык',text:'Официальная страница ADL для перехода в онлайн-каталог строительных материалов.'},
    brandSub:'строительные материалы',navCatalog:'Каталог',navAdvantages:'Преимущества',navAssortment:'Ассортимент',navSteps:'Как выбрать',navContacts:'Контакты',btnCatalog:'Каталог',btnViewCatalog:'Посмотреть каталог',btnAdvantages:'Преимущества ADL',
    heroEyebrow:'Официальный онлайн-каталог ADL',heroTitle:'Строительные материалы для ремонта, отделки и строительства',heroText:'ADL предоставляет удобный доступ к ассортименту строительных материалов в Таджикистане. В онлайн-каталоге можно ознакомиться с товарными направлениями, выбрать подходящие материалы и перейти к оформлению заказа.',mockLabel:'Онлайн-каталог',mockOpen:'Открыть',mock1:'Кирпич и блоки',mock2:'Цемент и сухие смеси',mock3:'Инструменты и расходники',
    advEyebrow:'Преимущества ADL',advTitle:'Официальный каталог для быстрого выбора строительных материалов',advText:'ADL объединяет основные направления строительных материалов в удобном онлайн-каталоге, чтобы клиент мог быстрее перейти к просмотру ассортимента и выбору нужных позиций.',adv1Title:'Широкий ассортимент',adv1Text:'В каталоге представлены основные виды строительных материалов для ремонта, отделки, монтажа и строительных работ.',adv2Title:'Понятные категории',adv2Text:'Товарные направления разделены по назначению, чтобы клиенту было проще найти нужные материалы.',adv3Title:'Быстрый переход к заказу',adv3Text:'После выбора товаров клиент может перейти к дальнейшему оформлению заказа удобным способом.',adv4Title:'Для частных и строительных задач',adv4Text:'Ассортимент ADL подходит для ремонта дома, отделочных работ и строительных объектов разного масштаба.',
    catalogEyebrow:'Каталог ADL',catalogTitle:'Ассортимент ADL доступен в онлайн-каталоге',catalogText:'Онлайн-каталог ADL создан для удобного просмотра строительных материалов. Клиент может открыть нужную категорию, ознакомиться с ассортиментом и продолжить оформление заказа.',catalogPoint1:'основные товарные группы собраны в одном каталоге;',catalogPoint2:'каталог удобно открывается на телефоне, планшете и компьютере;',catalogPoint3:'переход к нужной категории занимает минимум времени;',catalogPoint4:'после выбора товаров можно перейти к оформлению заказа.',btnOpenCatalog:'Открыть онлайн-каталог',panel1:'Материалы для отделки',panel2:'Сухие смеси и строительные материалы',panel3:'Инструменты и расходники',panel4:'Электрика и сантехника',
    assortEyebrow:'Ассортимент',assortTitle:'Основные направления товаров',assortText:'В онлайн-каталоге ADL представлены категории строительных материалов для ремонта, отделки, монтажа и строительства.',cat1:'Цемент и сухие смеси',cat2:'Кирпич и блоки',cat3:'Краски и отделочные материалы',cat4:'Инструменты',cat5:'Сантехника',cat6:'Электрика',cat7:'Крепёж и расходники',cat8:'Материалы для ремонта',btnAssortment:'Смотреть ассортимент',
    stepsEyebrow:'Как выбрать',stepsTitle:'Порядок выбора материалов в каталоге ADL',step1Title:'Откройте каталог ADL',step1Text:'Перейдите в онлайн-каталог и выберите нужное направление строительных материалов.',step2Title:'Выберите категорию',step2Text:'Ознакомьтесь с представленными разделами и подберите материалы под задачу.',step3Title:'Оформите заказ',step3Text:'После выбора товаров перейдите к дальнейшему оформлению заказа удобным способом.',
    ctaEyebrow:'Каталог ADL',ctaTitle:'Откройте онлайн-каталог ADL и выберите нужные материалы',ctaText:'Каталог доступен для просмотра ассортимента, выбора товарных направлений и оформления заказа.',btnADL:'Посмотреть каталог ADL',socialEyebrow:'Контакты',socialTitle:'ADL в социальных сетях',socialText:'Здесь будут размещены официальные каналы ADL для новостей, обновлений ассортимента и связи с магазином.',footerText:'ADL — магазин строительных материалов в Таджикистане с онлайн-каталогом для просмотра, выбора и оформления заказа.',copyright:'Все права защищены.'
  },
  tj: {
    gate:{kicker:'Мағозаи масолеҳи сохтмонӣ',title:'Забонро интихоб кунед',text:'Саҳифаи расмии ADL барои гузаштан ба каталоги онлайни масолеҳи сохтмонӣ.'},
    brandSub:'масолеҳи сохтмонӣ',navCatalog:'Каталог',navAdvantages:'Бартариҳо',navAssortment:'Ассортимент',navSteps:'Тарзи интихоб',navContacts:'Тамос',btnCatalog:'Каталог',btnViewCatalog:'Дидани каталог',btnAdvantages:'Бартариҳои ADL',
    heroEyebrow:'Каталоги расмии онлайни ADL',heroTitle:'Масолеҳи сохтмонӣ барои таъмир, ороиш ва сохтмон',heroText:'ADL дастрасии қулайро ба ассортименти масолеҳи сохтмонӣ дар Тоҷикистон пешниҳод мекунад. Дар каталоги онлайн метавонед самтҳои маҳсулотро бинед, маводи лозимиро интихоб кунед ва ба фармоиш гузаред.',mockLabel:'Каталоги онлайн',mockOpen:'Кушодан',mock1:'Хишт ва блокҳо',mock2:'Семент ва омехтаҳои хушк',mock3:'Асбобҳо ва масрафӣ',
    advEyebrow:'Бартариҳои ADL',advTitle:'Каталоги расмӣ барои интихоби зуди масолеҳи сохтмонӣ',advText:'ADL самтҳои асосии масолеҳи сохтмониро дар каталоги онлайн ҷамъ овардааст, то муштарӣ зудтар ба дидани ассортимент ва интихоби маҳсулоти лозим гузарад.',adv1Title:'Ассортименти васеъ',adv1Text:'Дар каталог намудҳои асосии масолеҳи сохтмонӣ барои таъмир, ороиш, монтаж ва корҳои сохтмонӣ пешниҳод шудаанд.',adv2Title:'Категорияҳои фаҳмо',adv2Text:'Самтҳои маҳсулот аз рӯйи таъинот ҷудо шудаанд, то ёфтани маводи лозим осонтар бошад.',adv3Title:'Гузариши зуд ба фармоиш',adv3Text:'Пас аз интихоби маҳсулот муштарӣ метавонад ба идомаи фармоиш бо роҳи қулай гузарад.',adv4Title:'Барои корҳои хусусӣ ва сохтмонӣ',adv4Text:'Ассортименти ADL барои таъмири хона, корҳои ороишӣ ва объектҳои сохтмонӣ мувофиқ аст.',
    catalogEyebrow:'Каталоги ADL',catalogTitle:'Ассортименти ADL дар каталоги онлайн дастрас аст',catalogText:'Каталоги онлайни ADL барои дидани қулайи масолеҳи сохтмонӣ омода шудааст. Муштарӣ метавонад категорияи лозимиро кушояд, бо ассортимент шинос шавад ва фармоишро идома диҳад.',catalogPoint1:'гурӯҳҳои асосии маҳсулот дар як каталог ҷамъ шудаанд;',catalogPoint2:'каталог дар телефон, планшет ва компютер қулай кушода мешавад;',catalogPoint3:'гузариш ба категорияи лозим вақти кам мегирад;',catalogPoint4:'пас аз интихоб ба оформкунии фармоиш гузаштан мумкин аст.',btnOpenCatalog:'Кушодани каталоги онлайн',panel1:'Мавод барои ороиш',panel2:'Омехтаҳои хушк ва масолеҳи сохтмонӣ',panel3:'Асбобҳо ва масрафӣ',panel4:'Барқӣ ва сантехника',
    assortEyebrow:'Ассортимент',assortTitle:'Самтҳои асосии маҳсулот',assortText:'Дар каталоги онлайни ADL категорияҳои масолеҳи сохтмонӣ барои таъмир, ороиш, монтаж ва сохтмон пешниҳод шудаанд.',cat1:'Семент ва омехтаҳои хушк',cat2:'Хишт ва блокҳо',cat3:'Ранг ва маводи ороишӣ',cat4:'Асбобҳо',cat5:'Сантехника',cat6:'Барқӣ',cat7:'Пайвандҳо ва масрафӣ',cat8:'Мавод барои таъмир',btnAssortment:'Дидани ассортимент',
    stepsEyebrow:'Тарзи интихоб',stepsTitle:'Тартиби интихоби мавод дар каталоги ADL',step1Title:'Каталоги ADL-ро кушоед',step1Text:'Ба каталоги онлайн гузаред ва самти лозими масолеҳи сохтмониро интихоб кунед.',step2Title:'Категорияро интихоб кунед',step2Text:'Бо бахшҳои пешниҳодшуда шинос шавед ва маводи мувофиқро интихоб намоед.',step3Title:'Фармоишро оформ кунед',step3Text:'Пас аз интихоби маҳсулот ба идомаи фармоиш бо роҳи қулай гузаред.',
    ctaEyebrow:'Каталоги ADL',ctaTitle:'Каталоги онлайни ADL-ро кушоед ва маводи лозимиро интихоб кунед',ctaText:'Каталог барои дидани ассортимент, интихоби самтҳои маҳсулот ва оформкунии фармоиш дастрас аст.',btnADL:'Дидани каталоги ADL',socialEyebrow:'Тамос',socialTitle:'ADL дар шабакаҳои иҷтимоӣ',socialText:'Дар ин ҷо каналҳои расмии ADL барои хабарҳо, навигариҳои ассортимент ва тамос бо мағоза ҷойгир мешаванд.',footerText:'ADL — мағозаи масолеҳи сохтмонӣ дар Тоҷикистон бо каталоги онлайн барои дидан, интихоб ва оформкунии фармоиш.',copyright:'Ҳамаи ҳуқуқҳо ҳифз шудаанд.'
  },
  en: {
    gate:{kicker:'Construction materials store',title:'Choose language',text:'Official ADL page for access to the online construction materials catalog.'},
    brandSub:'construction materials',navCatalog:'Catalog',navAdvantages:'Advantages',navAssortment:'Assortment',navSteps:'How to choose',navContacts:'Contacts',btnCatalog:'Catalog',btnViewCatalog:'View catalog',btnAdvantages:'ADL advantages',
    heroEyebrow:'Official ADL online catalog',heroTitle:'Construction materials for renovation, finishing and building works',heroText:'ADL provides convenient access to construction materials in Tajikistan. The online catalog allows customers to review product directions, choose suitable materials and proceed with an order.',mockLabel:'Online catalog',mockOpen:'Open',mock1:'Bricks and blocks',mock2:'Cement and dry mixes',mock3:'Tools and consumables',
    advEyebrow:'ADL advantages',advTitle:'Official catalog for fast selection of construction materials',advText:'ADL brings the main construction material directions into one online catalog so customers can quickly review the assortment and choose the required items.',adv1Title:'Wide assortment',adv1Text:'The catalog includes main types of construction materials for renovation, finishing, installation and building works.',adv2Title:'Clear categories',adv2Text:'Product directions are organized by purpose, making it easier to find the required materials.',adv3Title:'Fast order path',adv3Text:'After selecting products, customers can proceed with the next order steps in a convenient way.',adv4Title:'For private and construction needs',adv4Text:'The ADL assortment is suitable for home renovation, finishing works and construction sites.',
    catalogEyebrow:'ADL catalog',catalogTitle:'ADL assortment is available in the online catalog',catalogText:'The ADL online catalog is created for convenient review of construction materials. Customers can open the required category, review the assortment and continue with the order process.',catalogPoint1:'main product groups are collected in one catalog;',catalogPoint2:'the catalog opens conveniently on phones, tablets and computers;',catalogPoint3:'access to the required category takes minimum time;',catalogPoint4:'after selection, customers can proceed with an order.',btnOpenCatalog:'Open online catalog',panel1:'Finishing materials',panel2:'Dry mixes and construction materials',panel3:'Tools and consumables',panel4:'Electrical and plumbing',
    assortEyebrow:'Assortment',assortTitle:'Main product directions',assortText:'The ADL online catalog includes construction material categories for renovation, finishing, installation and building works.',cat1:'Cement and dry mixes',cat2:'Bricks and blocks',cat3:'Paints and finishing materials',cat4:'Tools',cat5:'Plumbing',cat6:'Electrical',cat7:'Fasteners and consumables',cat8:'Renovation materials',btnAssortment:'View assortment',
    stepsEyebrow:'How to choose',stepsTitle:'Order of choosing materials in the ADL catalog',step1Title:'Open the ADL catalog',step1Text:'Go to the online catalog and choose the required construction material direction.',step2Title:'Choose a category',step2Text:'Review the presented sections and select materials for the required task.',step3Title:'Place an order',step3Text:'After selecting products, proceed with the next order step in a convenient way.',
    ctaEyebrow:'ADL catalog',ctaTitle:'Open the ADL online catalog and choose the required materials',ctaText:'The catalog is available for reviewing the assortment, selecting product directions and placing an order.',btnADL:'View ADL catalog',socialEyebrow:'Contacts',socialTitle:'ADL on social media',socialText:'Official ADL channels for news, assortment updates and store contact information will be placed here.',footerText:'ADL is a construction materials store in Tajikistan with an online catalog for viewing, choosing and placing orders.',copyright:'All rights reserved.'
  }
};

const body = document.body;
const langScreen = document.getElementById('langScreen');
const changeLang = document.getElementById('changeLang');
const themeToggle = document.getElementById('themeToggle');
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const year = document.getElementById('year');
let currentLang = sessionStorage.getItem('adlLang') || 'ru';
let lastY = window.scrollY;
let ticking = false;
let revealEls = [];

function applyLang(lang){
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
  if(changeLang) changeLang.textContent = currentLang.toUpperCase();
  sessionStorage.setItem('adlLang', currentLang);
}

function showLanguage(){
  if(!langScreen) return;
  langScreen.classList.remove('hidden');
  body.classList.add('no-scroll');
}

function enter(lang){
  applyLang(lang);
  langScreen.classList.add('hidden');
  body.classList.remove('no-scroll');
  window.scrollTo({top:0, behavior:'instant'});
  setTimeout(() => {
    resetReveals();
    updateReveals(true);
  }, 120);
}

function applyTheme(theme){
  const light = theme === 'light';
  body.classList.toggle('theme-light', light);
  body.classList.toggle('theme-dark', !light);
  if(themeToggle) themeToggle.textContent = light ? '☾' : '☀';
  localStorage.setItem('adlTheme', light ? 'light' : 'dark');
}

function closeMenu(){
  nav?.classList.remove('open');
  burger?.classList.remove('open');
}

function resetReveals(){
  revealEls.forEach(el => {
    el.classList.remove('is-visible');
    el.classList.remove('replay');
  });
}

function restartAnimation(el){
  el.classList.remove('is-visible');
  el.classList.remove('replay');
  void el.offsetWidth;
  el.classList.add('is-visible');
  el.classList.add('replay');
}

function updateReveals(force=false){
  const currentY = window.scrollY;
  const direction = currentY >= lastY ? 'down' : 'up';
  lastY = currentY;
  body.dataset.scrollDir = direction;
  const isMobile = window.matchMedia('(max-width: 820px)').matches;
  const enterTop = window.innerHeight * (isMobile ? .90 : .84);
  const enterBottom = window.innerHeight * (isMobile ? .08 : .10);
  const exitTop = window.innerHeight * (isMobile ? 1.18 : 1.04);
  const exitBottom = window.innerHeight * (isMobile ? -.18 : -.08);

  revealEls.forEach((el, index) => {
    el.style.setProperty('--delay', `${Math.min(index % 6, 5) * (isMobile ? 45 : 55)}ms`);
    const r = el.getBoundingClientRect();
    const active = r.top < enterTop && r.bottom > enterBottom;
    const out = r.bottom < exitBottom || r.top > exitTop;
    if(active && (!el.classList.contains('is-visible') || force)) restartAnimation(el);
    if(out && el.classList.contains('is-visible')) {
      el.classList.remove('is-visible');
      el.classList.remove('replay');
    }
    el.dataset.scrollDir = direction;
  });
}

function requestReveal(){
  if(ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    updateReveals(false);
    ticking = false;
  });
}

function initTouch(){
  document.querySelectorAll('a,button,.adv-card,.cat-card,.step-card,.catalog-panel a,.mock-list a').forEach(item => {
    item.addEventListener('touchstart', () => {
      item.classList.remove('tap-animate');
      void item.offsetWidth;
      item.classList.add('tap-animate');
    }, {passive:true});
    item.addEventListener('animationend', () => item.classList.remove('tap-animate'));
  });
}

function initCatalogLinks(){
  document.querySelectorAll('a[href*="adonline.tj"],a[href*="adlonline.tj"]').forEach(a => {
    a.href = CATALOG_URL;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });
}

function init(){
  revealEls = Array.from(document.querySelectorAll('.reveal'));
  if(year) year.textContent = new Date().getFullYear();
  initCatalogLinks();
  applyTheme(localStorage.getItem('adlTheme') || 'dark');
  applyLang(currentLang);
  showLanguage();
  initTouch();
  updateReveals(true);
}

document.querySelectorAll('[data-select-lang]').forEach(btn => btn.addEventListener('click', () => enter(btn.dataset.selectLang)));
changeLang?.addEventListener('click', showLanguage);
themeToggle?.addEventListener('click', () => applyTheme(body.classList.contains('theme-light') ? 'dark' : 'light'));
burger?.addEventListener('click', () => { nav.classList.toggle('open'); burger.classList.toggle('open'); });
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('click', e => { if(nav && burger && !nav.contains(e.target) && !burger.contains(e.target)) closeMenu(); });
window.addEventListener('scroll', requestReveal, {passive:true});
window.addEventListener('resize', () => { closeMenu(); updateReveals(true); });
window.addEventListener('orientationchange', () => setTimeout(() => updateReveals(true), 250));
window.addEventListener('pageshow', () => { showLanguage(); setTimeout(() => updateReveals(true), 100); });

init();
