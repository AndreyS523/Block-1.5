const swiper = new Swiper('.swiper', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    slidesOffsetBefore: 16,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

let btnOpen = document.querySelector('.btn-show');
let btnClose = document.querySelector('.btn-close');
let block = document.querySelector('.repair-block__slide');

btnOpen.addEventListener('click', function (evt){
    evt.preventDefault();
    btnOpen.classList.add('class-hidden');
    btnClose.classList.add('class-show');
    block.classList.add('class-overflowVisible');
});

btnClose.addEventListener('click', function (evt){
    evt.preventDefault();
    btnOpen.classList.remove('class-hidden');
    btnClose.classList.remove('class-show');
    block.classList.remove('class-overflowVisible');
});