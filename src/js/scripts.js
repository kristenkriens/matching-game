$(function() {
  var games = {
    clicks: 0,
    score: 0
  }

  var animals = ['bear', 'beaver', 'cat', 'cow', 'deer', 'dog', 'eagle', 'elephant', 'fox', 'frog', 'giraffe', 'hedgehog', 'hippo', 'koala', 'lion', 'llama', 'monkey', 'mouse', 'owl', 'panda', 'parrot', 'penguin', 'pig', 'raccoon', 'seal', 'sheep', 'sloth', 'squirrel', 'tiger', 'wolf', 'anteater', 'baboon', 'bison', 'boar', 'capybara', 'crocodile', 'dove', 'duck', 'fennec-fox', 'goat', 'guinea-pig', 'horse', 'kangaroo', 'lemur', 'mole', 'moose', 'ostrich', 'platypus', 'rabbit', 'rooster', 'skunk', 'snake', 'sparrow', 'swan', 'turtle', 'chameleon', 'puffin'];

  var difficultyBoxes = {
    easy: 16,
    medium: 25,
    hard: 36
  }

  var difficulty = '';

  // Capitalizes words and turns dashes into spaces
  function prettify(string) {
    var words = string.match(/([^-]+)/g) || [];
    words.forEach(function(word, i) {
      words[i] = word[0].toUpperCase() + word.slice(1);
    });
    return words.join(' ');
  }

 // Randomizes array elements using Durstenfeld shuffle algorithm
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  // Generates random number from 1 to some number
  function randomNum(num) {
    return Math.floor(Math.random() * num);
  }

  // Takes users desired difficulty level and applies applicable classes
  function generateDifficulty() {
    difficulty = $('input[type="radio"]:checked').val().toLowerCase();

    $('main').removeClass().addClass(difficulty);
  }

  // Generates required boxes as per chosen difficulty and fills with random animal images
  function generateBoxes() {
    $('.game__board-tile').remove();

    var chosenAnimals = [];

    var difficultyBoxesNum = difficultyBoxes[difficulty];

    var index = {};

    for(var i = 0; i < difficultyBoxesNum / 2; i++) {
      var animalNum;
      do {
        animalNum = randomNum(animals.length);
      } while (index.hasOwnProperty(animalNum));
      index[animalNum] = true;

      var animal = animals[animalNum];

      chosenAnimals.push(animal);

      var chosenAnimalsClone = chosenAnimals.slice();
      var chosenAnimalsNew = chosenAnimals.concat(chosenAnimalsClone);

      shuffleArray(chosenAnimalsNew);

      var boxesNum = difficultyBoxesNum - 1;
      var animalNumNew = randomNum(boxesNum);
    }

    for(var i = 0; i < difficultyBoxesNum; i++) {
      var newAnimal = chosenAnimalsNew[i];

      $('.game__board').append(`<div class="game__board-tile"><div class="game__board-tile-front"></div><div class="game__board-tile-back"><img src="dist/images/${newAnimal}.svg" alt="${prettify(newAnimal)}"></div></div>`);
    }
  }

  generateDifficulty();
  generateBoxes();

  $('input[type="radio"]').on('click', function() {
    generateDifficulty();
    generateBoxes();

    games.clicks = 0;
    games.score = 0;
    $('.game__stats-clicks span').text(games.clicks);
    $('.game__stats-score span').text(games.score);
  });

  $('.options__button--start').on('click', function(e) {
    e.preventDefault();

    $('main').removeClass('disabled').addClass('enabled');
  });

  $('.game__board').on('click', '.game__board-tile', function() {
    if(!$(this).hasClass('game__board-tile--flipped')) {
      games.clicks++;
    }

    $('.game__stats-clicks span').text(games.clicks);

    $(this).addClass('game__board-tile--flipped');
  });
});
