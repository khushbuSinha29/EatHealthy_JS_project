// console.log('Hello')

// set current year
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// Make mobile navigation work

const header = document.querySelector('.header');
const menuBtn = document.querySelector('.openbtn');
const closeBtn = document.querySelector('.closebtn');
menuBtn.addEventListener('click', function () {
  // console.log('Menu Button clicked')
  header.classList.add('nav-open');
})

closeBtn.addEventListener('click', function () {
  // console.log('close button clicked');
  header.classList.remove('nav-open');
})

// Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');
// console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });

    // scroll through other links 
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behaviour: "smooth"
      })
    }

    // close mobile navigation
    if (link.classList.contains('main-nav-link')) {
      header.classList.toggle('nav-open');
    }
  });
});

// sticky navigation
const sectionHero = document.querySelector('.section-hero')
const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  if (ent.isIntersecting === false) {
    document.body.classList.add('sticky')
  }

  if (ent.isIntersecting === true) {
    document.body.classList.remove('sticky')
  }
}, {
  // In the viewport
  root: null,
  threshold: 0,
  rootMargin: "-80px"
})
obs.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

// Testimonial section 

const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical",
},

{
  id: 2, 
  name: " Ben Hadley ",
  img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  text: "The AI algorithm is crazy good, it chooses the right meals for me every time.It's amazing not to worry about food anymore!"
},

{
  id: 3,
  name: "Steve Miller",
  img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!"
},
{
  id: 4,
  name: "Hannah Smith",
  img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  text: "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic."
}
]

const image = document.querySelector('.person-img');
const personName = document.querySelector('.name');
const text = document.querySelector('.text');

const prevBtn = document.querySelector('.leftBtn');
const nextBtn = document.querySelector('.rightBtn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  // console.log('The content is loaded');
  showPerson(currentItem);
})

function showPerson(person){
  const item = reviews[person];
  image.src = item.img;
  personName.textContent = item.name;
  text.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
})

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});


// Adding the section transition

// const allSection = document.querySelectorAll('.section--transition');
// console.log(allSection);
// const revealSection = function(entries, observer){
//   const [entry] = entries;
//   console.log(entry);

//   if(!entry.isIntersecting) return;
//   entry.target.remove('section--hidden');
// }

// const sectionObserver = new IntersectionObserver(revealSection,{
//   root:null,
//   threshold: 0.2,
// })

// allSection.forEach(section => {
//   sectionObserver.observe(section);
//   section.classList.add('section-hidden');
// })


