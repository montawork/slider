// slider items
const sliderImg = Array.from(
  document.querySelectorAll('.slider-container img')
);

// get number of slides
const slidesCount = sliderImg.length;

// current slide
let currentSlide = 1;

// slide number
const slideNum = document.querySelector('.slide-number');

// next & prev btns
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

// next slide
function nextSlide() {
  if (currentSlide < slidesCount) currentSlide++;
  checker();
}

// prev slide
function prevSlide() {
  if (prev.classList.contains('disabled')) return;
  else currentSlide--;
  checker();
}

// event listener
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// create main ul elemnt
const ul = document.createElement('ul');
ul.setAttribute('id', 'list');
for (let i = 1; i <= sliderImg.length; i++) {
  const li = document.createElement('li');
  li.setAttribute('data-num', i);
  li.appendChild(document.createTextNode(i));
  ul.appendChild(li);
}
document.querySelector('.indicators').appendChild(ul);

const paginationUl = document.querySelector('#list');
// list of elements
const listElemnts = Array.from(paginationUl.children);

listElemnts.forEach((li, i) => {
  li.addEventListener('click', () => {
    currentSlide = +li.getAttribute('data-num');
    checker();
  });
});

checker();
// checker function
function checker() {
  slideNum.textContent = `Slide #${currentSlide} of ${slidesCount}`;
  // remove active class
  removeActive();
  // set active class
  sliderImg[currentSlide - 1].classList.add('active');
  // let listElemnets = document.querySelectorAll('#list li');
  // listElemnets[currentSlide - 1].classList.add('active');
  paginationUl.children[currentSlide - 1].classList.add('active');
  // check current slide
  if (currentSlide == 1) prev.classList.add('disabled');
  else prev.classList.remove('disabled');

  if (currentSlide == slidesCount) next.classList.add('disabled');
  else next.classList.remove('disabled');
}

// remove active classes
function removeActive() {
  sliderImg.forEach((img) => {
    img.classList.remove('active');
  });
  listElemnts.forEach((li) => li.classList.remove('active'));
}
