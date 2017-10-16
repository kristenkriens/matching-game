$(function() {
  var games = {
    clicks: 0,
    score: 0
  }

  var animals = ['bear', 'beaver', 'cat', 'cow', 'deer', 'dog', 'eagle', 'elephant', 'fox', 'frog', 'giraffe', 'hedgehog', 'hippo', 'koala', 'lion', 'llama', 'monkey', 'mouse', 'owl', 'panda', 'parrot', 'penguin', 'pig', 'raccoon', 'seal', 'sheep', 'sloth', 'squirrel', 'tiger', 'wolf'];

  // Generate random number from 1 to some number
  var randomNum = function(num) {
    return Math.floor(Math.random() * num);
  }

  // Generate random animal based on randomNum() function
  function randomAnimal(animals) {
    var i = randomNum(animals.length);
    var animal = animals[i];
    return animal;
  }

  // Function for taking users desired difficulty level and applying classes
  function difficulty() {
    var difficulty = $('input[type="radio"]:checked').val().toLowerCase();
    $('main').removeClass().addClass(difficulty);
  }

  $('.game__board-tile').on('click', function() {
    if(!$(this).hasClass('game__board-tile--flipped')) {
      games.clicks++;
    }

    $('.game__stats-clicks span').text(games.clicks);

    $(this).addClass('game__board-tile--flipped');
  });

  $('.options__item').on('click', function() {
    difficulty();
  });
});
