$(document).ready(function() {
    let text = document.querySelector('#sasha-tran');
    let circle = document.querySelector('.cls-1');
    text.classList.add('animate-logo-text');
    circle.classList.add('animate-cls-1');
});

$(document).ready(function(){
    $('.handle').on('click', function(){
      $('nav ul').toggleClass('show');
    });
  });