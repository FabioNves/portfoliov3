$(document).ready(function(){

    $('.menu-mobile').find('span').on('click', function() {
        $('header').toggleClass('active');
      });

      function mouseOver() {
        document.getElementById("legend").innerHTML = this.title;
    };
});