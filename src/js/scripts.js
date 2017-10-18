$(function() {
  var games = {
    clicks: 0,
    score: 0
  }

  var animals = ['bear', 'beaver', 'cat', 'cow', 'deer', 'dog', 'eagle', 'elephant', 'fox', 'frog', 'giraffe', 'hedgehog', 'hippo', 'koala', 'lion', 'llama', 'monkey', 'mouse', 'owl', 'panda', 'parrot', 'penguin', 'pig', 'raccoon', 'seal', 'sheep', 'sloth', 'squirrel', 'tiger', 'wolf', 'anteater', 'baboon', 'bison', 'boar', 'capybara', 'crocodile', 'dove', 'duck', 'fennec-fox', 'goat', 'guinea-pig', 'horse', 'kangaroo', 'lemur', 'mole', 'moose', 'ostrich', 'platypus', 'rabbit', 'rooster', 'skunk', 'snake', 'sparrow', 'swan', 'turtle', 'chameleon', 'puffin'];

  var difficultyBoxes = {
    easy: 16,
    medium: 20,
    hard: 30
  }

  var difficulty = '';

  var clickedItems = [];
  var clickedIndexes = [];

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

  // Resets game
  function reset() {
    games.clicks = 0;
    games.score = 0;
    $('.game__stats-clicks span').text(games.clicks);
    $('.game__stats-score span').text(games.score);
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

  // Checks if there is a match and removes flipped class if not or adds points if so
  function checkMatch(that) {
    var evenItem = '';
    var oddItem = '';

    var evenIndex = '';
    var oddIndex = '';

    clickedItems.slice(0, 2);

    if(games.clicks % 2 !== 0) {
      oddItem = that.find('img').attr('alt');
      oddIndex = that.index();
      clickedItems.push(oddItem);
      clickedIndexes.push(oddIndex);
    } else {
      evenItem = that.find('img').attr('alt');
      evenIndex = that.index();
      clickedItems.push(evenItem);
      clickedIndexes.push(evenIndex);
    }

    if(clickedItems.length > 2 || clickedIndexes.length > 2) {
      clickedItems.splice(0, 2);
      clickedIndexes.splice(0, 2);
    }

    if(clickedItems.length === 2 || clickedIndexes.length === 2) {
      if(clickedItems[0] !== clickedItems[1]) {
        setTimeout(function() {
          $('.game__board-tile').eq(clickedIndexes[0]).removeClass('game__board-tile--flipped');
          $('.game__board-tile').eq(clickedIndexes[1]).removeClass('game__board-tile--flipped');
        }, 750);
      } else {
        games.score += 100;
      }
    }
  }

  generateDifficulty();
  generateBoxes();

  $('input[type="radio"]').on('click', function() {
    generateDifficulty();
    generateBoxes();
    reset();
  });

  $('.options__button--start').on('click', function(e) {
    e.preventDefault();

    $('.game__board').removeClass('game__board--disabled');
  });

  $('.options__button--restart').on('click', function(e) {
    e.preventDefault();

    reset();
  });

  $('.game__board').on('click', '.game__board-tile', function() {
    checkMatch($(this));

    if(!$(this).hasClass('game__board-tile--flipped')) {
      games.clicks++;
    }

    $('.game__stats-clicks span').text(games.clicks);
    $('.game__stats-score span').text(games.score);

    $(this).addClass('game__board-tile--flipped');
  });
});
