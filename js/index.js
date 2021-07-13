const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.querySelectorAll('a');
const navItems = siteContent.nav;

links.forEach((link, i) => {
  link.textContent = navItems["nav-item-" + [i]];
});

/////////////////////////////

const logoImg = document.querySelector('#logo-img');

logoImg.src = siteContent.nav['img-src'];

/////////////////////////////

const mainHeader = document.querySelector('h1');

mainHeader.textContent = siteContent.cta['h1'];

/////////////////////////////

const startedButton = document.querySelector('button');

startedButton.textContent = siteContent.cta['button'];

////////////////////////////

const ctaImg = document.querySelector('#cta-img');

ctaImg.src = siteContent['cta']['img-src'];

////////////////////////////

const topContent = document.body.children[0].children[2].children[0];

////////////////////////////
// FEATURES SECTION
const topContentFeatures = topContent.children[0];

const featuresHeader = topContentFeatures.children[0];

featuresHeader.textContent = siteContent['main-content']['features-h4'];

const featuresText = topContentFeatures.children[1];

featuresText.textContent = siteContent['main-content']['features-content'];

////////////////////////////
// ABOUT SECTION
const topContentAbout = topContent.children[1];

const aboutHeader = topContentAbout.children[0];

aboutHeader.textContent = siteContent['main-content']['about-h4'];

const aboutText = topContentAbout.children[1];

aboutText.textContent = siteContent['main-content']['about-content'];

/////////////////////////////

const middleImg = document.querySelector('#middle-img');

middleImg.src = siteContent['main-content']['middle-img-src'];

/////////////////////////////

const bottomContent = document.body.children[0].children[2].children[2];

/////////////////////////////
// SERVICES SECTION
const bottomContentServices = bottomContent.children[0];

const servicesHeader = bottomContentServices.children[0];

servicesHeader.textContent = siteContent['main-content']['services-h4'];

const servicesText = bottomContentServices.children[1];

servicesText.textContent = siteContent['main-content']['services-content'];
/////////////////////////////
// PRODUCT SECTION

const bottomContentProduct = bottomContent.children[1];

const productHeader = bottomContentProduct.children[0];

productHeader.textContent = siteContent['main-content']['product-h4'];

const productText = bottomContentProduct.children[1];

productText.textContent = siteContent['main-content']['product-content'];

/////////////////////////////
// CONTACT SECTION

const contactSection = document.body.children[0].children[3];

contactHeader = contactSection.children[0];

contactHeader.textContent = siteContent['contact']['contact-h4'];

const address = contactSection.children[1];

address.textContent = siteContent['contact']['address'];

const phoneNum = contactSection.children[2];

phoneNum.textContent = siteContent['contact']['phone'];

const email = contactSection.children[3];

email.textContent = siteContent['contact']['email'];

/////////////////////////////
// FOOTER

const footer = document.body.children[0].children[4];

const copyright = footer.children[0];

copyright.textContent = siteContent['footer']['copyright'];