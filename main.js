// search box Start//
let search = document.querySelector('.search-box')
document.querySelector('#search-btn').onclick = () =>{
  search.classList.toggle('active');
  ///
  login.classList.remove('active');   // remove login box //
   navbar.classList.remove('active');    // remove navbar //
}
// search box End//

// Start login box//

let login = document.querySelector('.login-form')
document.querySelector('#login-btn').onclick = () =>{
  login.classList.toggle('active');
  
  search.classList.remove('active');  // remove search box  //
  navbar.classList.remove('active');  // remove navbar //
}
// End login box //

// Start navbar //

let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');

  search.classList.remove('active');// remove search box //
  login.classList.remove('active');// remove login box //
}
// End navbar//

// window scroll remove //

window.onscroll = () =>{
  search.classList.remove('active');
  login.classList.remove('active');
  navbar.classList.remove('active');
  if(window.scrollY > 60){
    document.querySelector('#scroll-up').classList.add('active');
  }else{
  document.querySelector('#scroll-up').classList.remove('active');
  }
}
// window is End //

//
let slider = document.querySelectorAll('.home .container-slaide .slaid');
let index = 0;

function next() {
  slider[index].classList.remove('active');
  index = (index + 1) % slider.length;
  slider[index].classList.add('active');
}


function prev() {
  slider[index].classList.remove('active');
  index = (index - 1 + slider.length) % slider.length;
  slider[index].classList.add('active');
}


// Chang photos features//


document.querySelectorAll('.img-small-1').forEach(images =>{
  images.onclick=()=>{
    document.querySelector('.img-big-1').src=images.getAttribute('src');
  }
});
document.querySelectorAll('.img-small-2').forEach(images => {
  images.onclick = () => {
    document.querySelector('.img-big-2').src = images.getAttribute('src');
  }
});
document.querySelectorAll('.img-small-3').forEach(images => {
  images.onclick = () => {
    document.querySelector('.img-big-3').src = images.getAttribute('src');
  }
});

document.querySelectorAll('.img-small-4').forEach(images => {
  images.onclick = () => {
    document.querySelector('.img-big-4').src = images.getAttribute('src');
  }
});

///// product click/////

let filter = document.querySelectorAll('.fillter .butnon');
let filterItem = document.querySelectorAll('.products .row .col');

filter.forEach(butnon => {
  butnon.onclick = () => {
    filter.forEach(btn => btn.classList.remove('hide'));
    butnon.classList.add('move');

    let dateFilter = butnon.getAttribute('data-filter');

    filterItem.forEach(item => {
      item.classList.remove('move');
      item.classList.add('hide');

      if (item.getAttribute('data-item') == dateFilter || dateFilter == 'all') {
        item.classList.remove('hide');
        item.classList.add('move');
      }


    });

  }
});


/////
 


var swiper = new Swiper(".row-slider", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop:true,
  mousewheel: true,
  keyboard: true,
});
