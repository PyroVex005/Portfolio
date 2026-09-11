const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const modalRoot = document.getElementById('modalRoot');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.getElementById('closeBtn');
const modalClose = document.getElementById('modalClose');

const translations = {
  uz: {
    roleSmall:'Frontend Developer', navHome:'Bosh sahifa', navAbout:'Men haqimda', navServices:'Xizmatlar', navProjects:'Loyihalar', navContact:'Kontakt',
    badge:'Premium frontend experiences', heroName:'Ridzhan', heroRole:'Full Frontend Developer', heroEdu:'Sarbon Education Center — IT & English student',
    heroText:'Men zamonaviy, tez, kuchli animatsiyalarga ega va biznesga foyda olib keladigan web saytlar yarataman. Mening maqsadim — g‘oyalarni premium darajadagi frontend mahsulotga aylantirish.',
    writeMe:'Menga yozing', seeWork:'Ishlarimni ko‘ring', statTech:'Texnologiya', statProjects:'Featured loyiha', statFocus:'Fokus',
    techTitle:'Texnologiyalarim', aboutTitle:'Men haqimda', aboutText:'Men real mijozlar va bizneslar uchun premium, minimal va kuchli ko‘rinishga ega interfeyslar yaratishga qiziqaman. Apple/iOS ruhidagi clean UI, glassmorphism, motion va responsive frontend — mening asosiy uslubim.',
    servicesTitle:'Xizmatlar', servicesText:'Kichik kartalar, premium motion, gradient shadow va kuchli frontend fokus bilan.',
    s1:'Biznes sayt', s1d:'Korporativ va ishonchli web saytlar.', s2:'Landing page', s2d:'Konversiyaga yo‘naltirilgan ta’sirchan sahifalar.', s3:'Dashboard', s3d:'Toza va qulay boshqaruv panellari.', s4:'Marketplace', s4d:'E-commerce va mahsulot platformalari.', s5:'Responsive frontend', s5d:'Har bir qurilmada mukammal ko‘rinish.', s6:'UI implementation', s6d:'Figma dizaynini aniq front-endga aylantirish.', s7:'Full site', s7d:'Boshidan oxirigacha to‘liq web loyiha.', s8:'Cyberpunk sitelar', s8d:'Futuristik, noodatiy va kuchli vizual saytlar.',
    projectsTitle:'Loyihalar', projectsText:'Har bir loyiha uchun alohida batafsil oynacha mavjud.',
    oqimMini:'Real people, real stories.', oqimDesc:'Qisqa videolar va creator platforma konsepti.', exteraMini:'Find anything you need.', exteraDesc:'Modern e-commerce va marketplace platformasi.', details:'Batafsil',
    contactTitle:'Keling, birga kuchli loyiha qilaylik.', contactText:'Agar sizga premium frontend, landing page, biznes sayt yoki marketplace kerak bo‘lsa, men bilan bog‘laning.'
  },
  en: {
    roleSmall:'Frontend Developer', navHome:'Home', navAbout:'About', navServices:'Services', navProjects:'Projects', navContact:'Contact',
    badge:'Premium frontend experiences', heroName:'Ridzhan', heroRole:'Full Frontend Developer', heroEdu:'Sarbon Education Center — IT & English student',
    heroText:'I build modern, fast, animation-rich websites that create value for businesses. My goal is to turn ideas into premium frontend products.',
    writeMe:'Contact me', seeWork:'See my work', statTech:'Technologies', statProjects:'Featured projects', statFocus:'Focus',
    techTitle:'My technologies', aboutTitle:'About me', aboutText:'I enjoy building premium, minimal and high-impact interfaces for real clients and businesses. Clean Apple/iOS-inspired UI, glassmorphism, motion and responsive frontend are my core style.',
    servicesTitle:'Services', servicesText:'Small cards, premium motion, gradient shadows and a strong frontend focus.',
    s1:'Business website', s1d:'Reliable and modern corporate websites.', s2:'Landing page', s2d:'High-converting and impactful landing pages.', s3:'Dashboard', s3d:'Clean and practical admin interfaces.', s4:'Marketplace', s4d:'E-commerce and product platforms.', s5:'Responsive frontend', s5d:'Perfect experience on every device.', s6:'UI implementation', s6d:'Turning Figma designs into real frontend.', s7:'Full site', s7d:'Complete end-to-end website development.', s8:'Cyberpunk websites', s8d:'Futuristic and visually strong web experiences.',
    projectsTitle:'Projects', projectsText:'Each project has its own detailed modal.',
    oqimMini:'Real people, real stories.', oqimDesc:'Short-video and creator platform concept.', exteraMini:'Find anything you need.', exteraDesc:'Modern e-commerce and marketplace platform.', details:'Details',
    contactTitle:'Let’s build a strong project together.', contactText:'If you need premium frontend, a landing page, business site or marketplace, feel free to contact me.'
  }
};

const projectData = {
  oqim: {
    uz: {
      title: 'OQIM',
      subtitle: 'Video Platform',
      desc: 'OQIM — qisqa videolar, reels, creator profillari va obuna tizimiga ega zamonaviy video platforma konsepti. Loyiha sodda, tez va foydalanuvchiga qulay interfeys tamoyiliga qurilgan.',
      features: [
        'Qisqa video feed va creator ekotizimi',
        'Profil, obuna va kontent tavsiya bloklari',
        'Mobilga mos va premium neon UI',
        'React asosida modern frontend konsepti'
      ],
      stack: ['React', 'Tailwind CSS', 'Firebase', 'Responsive UI']
    },
    en: {
      title: 'OQIM', subtitle: 'Video Platform',
      desc: 'OQIM is a modern short-video platform concept with reels, creator profiles and a subscription system. The project focuses on simplicity, speed and a user-friendly interface.',
      features: [
        'Short-video feed and creator ecosystem',
        'Profiles, subscriptions and recommendation blocks',
        'Mobile-friendly premium neon UI',
        'Modern frontend concept built around React'
      ],
      stack: ['React', 'Tailwind CSS', 'Firebase', 'Responsive UI']
    }
  },
  extera: {
    uz: {
      title: 'EXTERA', subtitle: 'Marketplace',
      desc: 'EXTERA — turli mahsulotlar uchun mo‘ljallangan premium marketplace konsepti. Mahsulot katalogi, qidiruv, savatcha va to‘lov oqimi bir butun foydalanuvchi tajribasiga jamlangan.',
      features: [
        'Mahsulotlar katalogi va qidiruv',
        'Savatcha, checkout va to‘lov oqimi',
        'Premium e-commerce UI tizimi',
        'Biznesga tayyor marketplace tuzilmasi'
      ],
      stack: ['React', 'Tailwind CSS', 'Stripe', 'Responsive UI']
    },
    en: {
      title: 'EXTERA', subtitle: 'Marketplace',
      desc: 'EXTERA is a premium marketplace concept designed for a wide range of products. Product catalog, search, cart and checkout are combined into one seamless user experience.',
      features: [
        'Product catalog and search',
        'Cart, checkout and payment flow',
        'Premium e-commerce UI system',
        'Business-ready marketplace structure'
      ],
      stack: ['React', 'Tailwind CSS', 'Stripe', 'Responsive UI']
    }
  }
};

function setLanguage(lang){
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.lang === lang));
}

document.querySelectorAll('.lang-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>setLanguage(btn.dataset.lang));
});

themeToggle.addEventListener('click', ()=>{
  body.classList.toggle('light');
  localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
});

menuBtn.addEventListener('click', ()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click', ()=>nav.classList.remove('open')));

function openModal(key){
  const lang = localStorage.getItem('lang') || 'uz';
  const data = projectData[key][lang];
  modalContent.innerHTML = `
    <p style="color:var(--muted);margin:0 0 6px">${data.subtitle}</p>
    <h3>${data.title}</h3>
    <p>${data.desc}</p>
    <div class="stack">${data.stack.map(item => `<span>${item}</span>`).join('')}</div>
    <h4>${lang === 'uz' ? 'Asosiy imkoniyatlar' : 'Core features'}</h4>
    <ul>${data.features.map(item => `<li>${item}</li>`).join('')}</ul>
  `;
  modalRoot.classList.add('show');
  modalRoot.setAttribute('aria-hidden', 'false');
}

document.querySelectorAll('.open-modal').forEach(btn=>btn.addEventListener('click', ()=>openModal(btn.dataset.modal)));
function closeModal(){ modalRoot.classList.remove('show'); modalRoot.setAttribute('aria-hidden','true'); }
closeBtn.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
window.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeModal(); });

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

if(localStorage.getItem('theme') === 'light') body.classList.add('light');
setLanguage(localStorage.getItem('lang') || 'uz');
