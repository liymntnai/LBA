'use strict'
//////////////////////////////////
// This file is used in the academics.html file

const sectiondivs = document.querySelectorAll('.section-divs')
const sectionBtns = document.querySelectorAll('.section-btn')

let curSlide = 0;

const showSlide = function(slide){
    if(!sectiondivs[slide].classList.contains('active') && !sectionBtns[slide].classList.contains('active'))
    sectiondivs[slide].classList.add('active')
    sectionBtns[slide].classList.add('active')

}
const Slide0 = function(){
    sectiondivs[1].classList.remove('active')
    sectionBtns[1].classList.remove('active')
    showSlide(0)
}
const Slide1 = function(){
    sectiondivs[0].classList.remove('active')
    sectionBtns[0].classList.remove('active')
    showSlide(1)
}
sectionBtns[0].addEventListener('click',Slide0)
sectionBtns[1].addEventListener('click',Slide1)