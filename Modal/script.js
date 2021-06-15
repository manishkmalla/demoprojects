'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openmodal = function (){
    //console.log('Button Clicked');
    modal.classList.remove('hidden'); // do  not put . in this case
    overlay.classList.remove('hidden');
   }

const closemodal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
   }

for( let i=0; i < btnsOpenModal.length; i++)
   btnsOpenModal[i].addEventListener('click',openmodal);


  
   btnCloseModal.addEventListener('click', closemodal);
   overlay.addEventListener('click', closemodal);

   document.addEventListener('keydown',function(e){

       if(e.key==='Escape' && !modal.classList.contains('hidde')) {
            closemodal();

       }

   });
  
     
