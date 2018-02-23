
$(document).ready(function() {
  // console.log('myScript.js loaded!');
  $('#red-sentence').click(function() {
    // First remove the purple-text class in case it was added first.
    $(this).removeClass('purple-text');
    // Then add the red-text class to turn the sentence red.
    $(this).addClass('red-text');
  });

  $('#blue-button').click(function() {
    // We can also "chain" methods together like this:
    $('#blue-sentence')
    .removeClass('purple-text')
    .addClass('blue-text');
  });

  $('#purple-button').click(function() {
    $('.colorful-sentence').addClass('purple-text');
  });


  $('p').click(function() {
    $(this).css('font-size','3em');
  });


  $("p").hover(function(){
        $(this).css("background-color", "greenyellow");
        }, function(){
        $(this).css("background-color", "Yellowgreen");
    });

  // $('.image1').click(function () {
  //   $(this).slideUp(800).slideDown(500);
  // });

  $("#img-button").click(function(){
         $(".image1").slideToggle(2000);
     });

   $("#img-button2").click(function(){
          $(".image2").fadeToggle(4000);
      });


$('h1').click(function(){
  $(this).css('background-color', 'gray')
});


});
