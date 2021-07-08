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

console.log(logo);

let link = document.querySelectorAll('nav a');
link.forEach((link, i) => {
  link.textContent = siteContent['nav'][`nav-item-${i+1}`];
  link.style.color = 'green';
});

// AppendChild
let newLink = document.createElement('a');
let aText = document.createTextNode('Photos');
newLink.append(aText);
newLink.style.color = 'green';
document.querySelector('nav').appendChild(newLink);

let secondNewLink = document.createElement('a');
let newText = document.createTextNode('Origin');
secondNewLink.prepend(newText);
secondNewLink.style.color = 'green';
document.querySelector('nav').prepend(secondNewLink);

//cta
let h1 = document.querySelector('.cta-text h1');
h1.textContent = siteContent['cta']['h1'];

let button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button'];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//main-content Features
let featuresHeader = document.querySelectorAll('.text-content h4')[0];
featuresHeader.textContent = siteContent['main-content']['features-h4'];

let featuresContent = document.querySelectorAll('.text-content p')[0];
featuresContent.textContent = siteContent['main-content']['features-content'];

//About
let aboutHeader = document.querySelectorAll('.text-content h4')[1];
aboutHeader.textContent = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelectorAll('p')[1];
aboutContent.textContent = siteContent['main-content']['about-content'];

//Middle Image
let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Services
let serviceHeader = document.querySelectorAll('.text-content h4')[2];
serviceHeader.textContent = siteContent['main-content']['services-h4'];

let serviceContent = document.querySelectorAll('.text-content p')[2];
serviceContent.textContent = siteContent['main-content']['services-content'];

//Product
let productHeader = document.querySelectorAll('.text-content h4')[3];
productHeader.textContent = siteContent['main-content']['product-h4'];

let productContent = document.querySelectorAll('.text-content p')[3];
productContent.textContent = siteContent['main-content']['product-content'];

//Vision
let visionHeader = document.querySelectorAll('.text-content h4')[4];
visionHeader.textContent = siteContent['main-content']['vision-h4']

let visionContent = document.querySelectorAll('.text-content p')[4];
visionContent.textContent = siteContent['main-content']['vision-content'];

//Contact
let contactHeader = document.querySelectorAll('.contact h4')[0];
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactText = document.querySelectorAll('.contact p');
contactText[0].textContent = siteContent['contact']['address'];
contactText[1].textContent = siteContent['contact']['phone'];
contactText[2].textContent = siteContent['contact']['email'];