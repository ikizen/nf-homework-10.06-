$(document).ready(function () {
  $('.button1').on('click', function () {
    console.log('Button1 is working!');

    let personName = $(".name-input").val();
    let character = $('.character').val();
    let adverb = $('.adverb').val();
    let adjective = $('.adjective').val();

    $('.background').append(
      "<div class='text-container container-fluid col-7 p-5 d-flex justify-content-end'>One day, my friend " +
      character + ' was visiting New York and ran into ' +
      character + '. ' + personName +
      ' ran ' + adverb + ' to meet ' + character + '. But ' + character +
      ' turned out to be very ' + adjective + ' and ' + personName +
      ' did not enjoy the meeting.</div>'
    );
  })
  
  $('.button2').on('click', function () {
    console.log('Button 2 is working!');
    let width = $('.width').val();
    let height = $('.height').val();
    let colors = $('.colors').val();

    const result = Math.round(width * height / colors);
    console.log(result);
    
    $('.background2').append(
      "<p class='text-container p-5 d-flex justify-content-center'>File is " + result + ' KB, which is OK!</p>'
    );
  })
})