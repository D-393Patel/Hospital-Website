const navItem = document.querySelector('#nav_items');
const closeNavBtn = document.querySelector('#close_nav-btn');
const openNavBtn = document.querySelector('#open_nav-btn');

openNavBtn.addEventListener('click',()=>{
  navItem.style.display= 'flex';
  openNavBtn.style.display ='none';
  closeNavBtn.style.display ='inline-block';
})
let closeNav=()=>{
  navItem.style.display= 'none';
  openNavBtn.style.display ='inline-block';
  closeNavBtn.style.display ='none';
}
  
closeNavBtn.addEventListener('click',closeNav)

//setting background-image of articles:
let articleS = document.querySelectorAll('#art');
// console.log(articleS);
articleS.forEach((e)=>{
 e.addEventListener('click',()=>{
  // console.log("clicked");
    for(let i=1;i<=6;i++){
     e.style.backgroundImage=`url('assets/ba-${Math.floor(Math.random()*6)+1}.webp')`;
    }
    e.style.backgroundPosition="center";
    e.style.objectFit="cover";
    e.style.color="black";
    
  })
})
articleS.forEach((e)=>{
  e.removeEventListener('click',setInterval(()=>{
   // console.log("clicked");
     for(let i=1;i<=6;i++){
      e.style.backgroundImage=`url('assets/ba-${Math.floor(Math.random()*6)+1}.webp')`;
     }
     e.style.backgroundPosition="center";
     e.style.objectFit="cover";
     e.style.color="black";
     
   }),500)
 })

//close nav menu when a menu item is clicked;
 if(window.innerWidth <1024){
  document.querySelectorAll('#nav_items li a').forEach(navItem =>{
    navItem.addEventListener('click',()=>{
      closeNav
    })
  })
 }
 //change navbar styles on scroll
 window.addEventListener('scroll',()=>{
  document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
 })
//swiper.js
var swiper = new Swiper(".mySwiper", {
  slidesPerView:1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //Responsive breakpoints
  breakpoints:{
   //tablets 
   600:{
    slidesPerView:2
   },
   1024:{
    slidesPerView:3,
   }
  }
  
});