const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

const translations = {
  uz: {
    nav_home:"Bosh sahifa", nav_about:"Men haqimda", nav_services:"Xizmatlar", nav_projects:"Loyihalar", nav_contact:"Aloqa",
    hero_badge:"Digital bizneslar uchun zamonaviy yechimlar",
    hero_title_1:"Men biznes g‘oyalarni", hero_title_2:"premium digital mahsulotlarga", hero_title_3:"aylantiraman.",
    hero_desc:"Men Asadbek Xamraliyev — zamonaviy web interfeyslar, biznes saytlar va foydalanuvchiga qulay digital tajribalar yaratishga qiziqadigan dasturchiman.",
    hero_cta:"Loyihalarni ko‘rish", hero_contact:"Bog‘lanish", stat_languages:"til", stat_ideas:"g‘oya", stat_focus:"e’tibor",
    profile_label:"PROFILE / 2026", available:"Available", role_label:"Yo‘nalish", role_value:"Web Development", location_label:"Ta'lim",
    panel_fast:"Fast UI", panel_fast_sub:"Smooth experience", panel_design:"Premium Design", panel_design_sub:"Glass + motion",
    about_kicker:"MEN HAQIMDA", about_title:"Texnologiya, dizayn va biznes fikrlash bir nuqtada.",
    about_card_title:"Kimman?", about_card_desc:"Men 16 yoshli IT o‘quvchisiman. Hozir Sarbon Education Center’da IT va ingliz tili kurslarida o‘qiyman. Maqsadim — kuchli texnologiya va chiroyli dizayn orqali real biznes muammolariga yechim yaratish.",
    about_learning_title:"Hozirgi fokus", about_learning_1:"HTML, CSS, JavaScript", about_learning_2:"Responsive web design", about_learning_3:"UI animation & interaction", about_learning_4:"English for IT",
    about_quote:"Oddiy sayt emas — taassurot qoldiradigan digital mahsulot.",
    services_kicker:"XIZMATLAR", services_title:"Biznes uchun ko‘rinishdan natijagacha.",
    service_1_title:"Business Website", service_1_desc:"Kompaniya, xizmat yoki shaxsiy brend uchun premium, tezkor va responsive saytlar.",
    service_2_title:"Landing Page", service_2_desc:"Mahsulot yoki xizmatni kuchli vizual ierarxiya va CTA bilan taqdim qiluvchi landing page.",
    service_3_title:"UI Interaction", service_3_desc:"Micro-animation, hover, scroll effect va foydalanuvchini jalb qiladigan interaktiv tajriba.",
    projects_kicker:"LOYIHALAR", projects_title:"Konseptdan premium mahsulotgacha.",
    project_1_title:"Nova Commerce", project_1_desc:"Elektronika marketplace konsepti: minimal dark UI, mahsulot kartalari va premium ecommerce atmosfera.",
    project_2_desc:"O‘zbekiston auditoriyasi uchun creator va video platforma konsepti: binafsha-ko‘k vizual tizim.",
    contact_kicker:"ALOQA", contact_title:"Keyingi kuchli loyihani birga boshlaymiz.", contact_desc:"Hamkorlik, web loyiha yoki yangi g‘oya bo‘yicha menga yozishingiz mumkin.",
    phone_label:"Telefon", footer_text:"HTML, CSS va JavaScript bilan dizayn va dasturlandi.", back_top:"Yuqoriga"
  },
  ru: {
    nav_home:"Главная", nav_about:"Обо мне", nav_services:"Услуги", nav_projects:"Проекты", nav_contact:"Контакты",
    hero_badge:"Современные решения для digital-бизнеса",
    hero_title_1:"Я превращаю бизнес-идеи", hero_title_2:"в премиальные digital-продукты", hero_title_3:"с сильным визуалом.",
    hero_desc:"Я Асадбек Хамралиев — разработчик, которому интересны современные web-интерфейсы, бизнес-сайты и удобный пользовательский опыт.",
    hero_cta:"Смотреть проекты", hero_contact:"Связаться", stat_languages:"языка", stat_ideas:"идей", stat_focus:"фокус",
    profile_label:"ПРОФИЛЬ / 2026", available:"Доступен", role_label:"Направление", role_value:"Web Development", location_label:"Обучение",
    panel_fast:"Быстрый UI", panel_fast_sub:"Плавный опыт", panel_design:"Premium Design", panel_design_sub:"Glass + motion",
    about_kicker:"ОБО МНЕ", about_title:"Технологии, дизайн и бизнес-мышление в одной точке.",
    about_card_title:"Кто я?", about_card_desc:"Мне 16 лет, я изучаю IT. Сейчас учусь IT и английскому языку в Sarbon Education Center. Моя цель — решать реальные бизнес-задачи с помощью технологий и сильного дизайна.",
    about_learning_title:"Текущий фокус", about_learning_1:"HTML, CSS, JavaScript", about_learning_2:"Адаптивный web-дизайн", about_learning_3:"UI-анимации и интерактив", about_learning_4:"Английский для IT",
    about_quote:"Не просто сайт — digital-продукт, который производит впечатление.",
    services_kicker:"УСЛУГИ", services_title:"От сильного визуала до результата для бизнеса.",
    service_1_title:"Бизнес-сайт", service_1_desc:"Премиальные, быстрые и адаптивные сайты для компаний, услуг и личных брендов.",
    service_2_title:"Landing Page", service_2_desc:"Продающие landing page с сильной визуальной иерархией и понятными CTA.",
    service_3_title:"UI Interaction", service_3_desc:"Микро-анимации, hover, scroll-эффекты и вовлекающий интерактив.",
    projects_kicker:"ПРОЕКТЫ", projects_title:"От концепта до премиального digital-продукта.",
    project_1_title:"Nova Commerce", project_1_desc:"Концепт marketplace электроники: минималистичный dark UI, карточки товаров и premium ecommerce атмосфера.",
    project_2_desc:"Концепт creator/video-платформы для аудитории Узбекистана с фиолетово-синей visual-системой.",
    contact_kicker:"КОНТАКТЫ", contact_title:"Давайте начнем следующий сильный проект.", contact_desc:"Напишите мне по поводу сотрудничества, web-проекта или новой идеи.",
    phone_label:"Телефон", footer_text:"Designed & developed with HTML, CSS & JavaScript.", back_top:"Наверх"
  },
  en: {
    nav_home:"Home", nav_about:"About", nav_services:"Services", nav_projects:"Projects", nav_contact:"Contact",
    hero_badge:"Modern solutions for digital businesses",
    hero_title_1:"I turn business ideas", hero_title_2:"into premium digital products", hero_title_3:"with memorable experiences.",
    hero_desc:"I’m Asadbek Xamraliyev — a developer interested in modern web interfaces, business websites and user-friendly digital experiences.",
    hero_cta:"View projects", hero_contact:"Contact me", stat_languages:"languages", stat_ideas:"ideas", stat_focus:"focus",
    profile_label:"PROFILE / 2026", available:"Available", role_label:"Direction", role_value:"Web Development", location_label:"Education",
    panel_fast:"Fast UI", panel_fast_sub:"Smooth experience", panel_design:"Premium Design", panel_design_sub:"Glass + motion",
    about_kicker:"ABOUT ME", about_title:"Technology, design and business thinking in one place.",
    about_card_title:"Who am I?", about_card_desc:"I’m a 16-year-old IT student. I currently study IT and English at Sarbon Education Center. My goal is to solve real business problems through strong technology and thoughtful design.",
    about_learning_title:"Current focus", about_learning_1:"HTML, CSS, JavaScript", about_learning_2:"Responsive web design", about_learning_3:"UI animation & interaction", about_learning_4:"English for IT",
    about_quote:"Not just a website — a digital product that leaves an impression.",
    services_kicker:"SERVICES", services_title:"From strong visuals to business results.",
    service_1_title:"Business Website", service_1_desc:"Premium, fast and responsive websites for companies, services and personal brands.",
    service_2_title:"Landing Page", service_2_desc:"Conversion-focused landing pages with strong visual hierarchy and clear CTAs.",
    service_3_title:"UI Interaction", service_3_desc:"Micro-animations, hover states, scroll effects and engaging interactions.",
    projects_kicker:"PROJECTS", projects_title:"From concept to premium digital product.",
    project_1_title:"Nova Commerce", project_1_desc:"Electronics marketplace concept with minimal dark UI, product cards and a premium ecommerce atmosphere.",
    project_2_desc:"Creator and video platform concept for Uzbekistan with a purple-blue visual system.",
    contact_kicker:"CONTACT", contact_title:"Let’s build the next standout project.", contact_desc:"Reach out for collaboration, a web project or a fresh digital idea.",
    phone_label:"Phone", footer_text:"Designed & developed with HTML, CSS & JavaScript.", back_top:"Back to top"
  }
};

function setLanguage(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  localStorage.setItem("portfolio-lang", lang);
}

document.querySelectorAll(".lang-btn").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));

const savedTheme = localStorage.getItem("portfolio-theme");
if(savedTheme) html.dataset.theme = savedTheme;
themeToggle.addEventListener("click", () => {
  const next = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
});

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .13 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const tilt = document.querySelector(".tilt-card");
if(tilt){
  tilt.addEventListener("pointermove", e => {
    const rect = tilt.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - .5;
    const y = (e.clientY - rect.top) / rect.height - .5;
    tilt.style.transform = `rotateY(${x*9}deg) rotateX(${-y*8}deg)`;
  });
  tilt.addEventListener("pointerleave", () => tilt.style.transform = "rotateY(0) rotateX(0)");
}

document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("pointermove", e => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top - r.height/2;
    btn.style.transform = `translate(${x*.08}px, ${y*.1}px) translateY(-2px)`;
  });
  btn.addEventListener("pointerleave", () => btn.style.transform = "");
});

setLanguage(localStorage.getItem("portfolio-lang") || "uz");
