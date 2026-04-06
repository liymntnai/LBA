
///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll('section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});


///////////////////////////////////////
// Routing
function navigate(event, page) {
    event.preventDefault(); // Prevent default link behavior
    window.history.pushState({}, page, page);
    fetchPageContent(page);
}

function fetchPageContent(page) {
    fetch(page + '.html')
        .then(response => {
            if (!response.ok) throw new Error('Page not found');
            return response.text();
        })
        .then(html => document.getElementById('content').innerHTML = html)
        .catch(error => console.error(error));
}

// Handle page reloads
window.onpopstate = () => {
    fetchPageContent(window.location.pathname.substring(1) || 'home');
};

// Initial load
fetchPageContent(window.location.pathname.substring(1) || 'home');

///////////////////////////////////////
// Navigation bar

const button = document.querySelector('#menu-bar');
const menu = document.querySelector('.view-navbar');
const orderFood = document.querySelector('.nav-action');
const navOrderFood = document.querySelector('.nav-action');


button.addEventListener('click',function () {
    button.classList.toggle('open');
    // menu.classList.toggle('none');
    menu.classList.toggle('slide-in');
})
orderFood.addEventListener('click', function () {
    alert('Oops! This site is just a demo version.'
        +'This feature is not available for now. ')
})
navOrderFood.addEventListener('click', function () {
    alert('Oops! This site is just a demo version.'
        +'This feature is not available for now. ')
})
const slider = function () {
    
}

///////////////////////////////////////
// Header Carousel slides

const carousels = document.querySelectorAll('.carousel');
const dots = document.querySelectorAll('.dot')

let curSlide = 0;
const showSlide = function(n){
  carousels[curSlide].classList.toggle('active');
  dots[curSlide].classList.toggle('active');
  curSlide+=n
  if(curSlide<0)
   curSlide=carousels.length-1;
  if(curSlide>=carousels.length)
    curSlide=0;

  carousels[curSlide].classList.toggle('active');
  dots[curSlide].classList.toggle('active');

}
const forwardSlide = function(){
showSlide(1)
}
const backwardSlide = function(){
showSlide(-1)
}

const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let play = true;



pauseButton.addEventListener('click', function(){
clearInterval(playing)
playButton.classList.toggle('none')
pauseButton.classList.toggle('none')
})


playButton.addEventListener('click', function(){
playing = setInterval(showSlide,5000)
playButton.classList.toggle('none')
pauseButton.classList.toggle('none')
})

prevButton.addEventListener('click', backwardSlide)
nextButton.addEventListener('click', forwardSlide)

let playing = setInterval(forwardSlide,5000)