//знайшли всі кнопки
const chooseColor = document.querySelectorAll('.choose__color-btn'); 

// знайшли весь контент, який буде змінюватись на сайті
const contentItem = document.querySelectorAll('.content-item');

//пробігтись по всьому, щоб відслідковувати подію кліку
chooseColor.forEach(function(element){
  element.addEventListener('click', open)
})

function open(evt){

  const target = evt.currentTarget; //знайшли того, на кого  клікнули
  const button = target.dataset.button;  //щоб розуміли вміст нашого таргету ,яке ми присвоювали в атрибуті data-button
  const contentActive = document.querySelectorAll(`.${button}`); //додати константу кнопки з дата-атрибутом з рядка 15

  //пробігаємся по всіх кнопках, які в нас є
  chooseColor.forEach(function(item){
      //забираєм клас "актив" у всіх решти кнопок
    item.classList.remove('choose__color-btn--active')
  })

//добавили активний клас до клікнутого
  target.classList.add('choose__color-btn--active') 

contentItem.forEach(function(item){   // пробігаємся по всім класам
  item.classList.remove('content-item__active')  // забираєм клас "актиив" у всіх при кліку
});

//додати клас "актив" тим , у кого є дата-атрибут вибраного кольору з рядка 16
contentActive.forEach(function(item){
    item.classList.add('content-item__active')
  })

}



// https://www.youtube.com/watch?v=eR8rH7BLawE&t=1387s&ab_channel=%D0%9E%D1%820%D0%B4%D0%BE1 


 /* плавний перехід до якорного посилання */

 $(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

/*end плавний перехід до якорного посилання */