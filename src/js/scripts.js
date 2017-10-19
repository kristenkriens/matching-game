$(function() {
  var games = {
    clicks: 0,
    score: 0,
    time: '1:00'
  }

  var animals = ['bear', 'beaver', 'cat', 'cow', 'deer', 'dog', 'eagle', 'elephant', 'fox', 'frog', 'giraffe', 'hedgehog', 'hippo', 'koala', 'lion', 'llama', 'monkey', 'mouse', 'owl', 'panda', 'parrot', 'penguin', 'pig', 'raccoon', 'seal', 'sheep', 'sloth', 'squirrel', 'tiger', 'wolf', 'anteater', 'baboon', 'bison', 'boar', 'capybara', 'crocodile', 'dove', 'duck', 'fennec-fox', 'goat', 'guinea-pig', 'horse', 'kangaroo', 'lemur', 'mole', 'moose', 'ostrich', 'platypus', 'rabbit', 'rooster', 'skunk', 'snake', 'sparrow', 'swan', 'turtle', 'chameleon', 'puffin'];

  var difficultyBoxes = {
    easy: 12,
    medium: 20,
    hard: 30
  }

  var difficulty = '';

  var interval;
  var isPaused = false;

  var clickedItems = [];
  var clickedIndexes = [];

  // Makes dynamic equal width boxes
  var tileWidth = $('.game__board-tile').width();
  $('.game__board-tile').css({'height': tileWidth + 'px'});

  // Starts game
  function start() {
    clearInterval(interval);
    interval = setInterval(function() {
      if(!isPaused) {
        var timer = $('.game__stats-timer').text();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

        $('.game__stats-timer').text(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0) {
          clearInterval(interval);

          generateOverlay('lose');
        }
      }
    }, 1000);

    $('.options__button--start').addClass('options__button--active');
    $('.options__button--pause').removeClass('options__button--active');

    $('.game__board').removeClass('game__board--disabled');

    isPaused = false;
  }

  // Pauses game
  function pause() {
    if(!$('.game__board').hasClass('game__board--disabled')) {
      $('.options__button--pause').addClass('options__button--active');
      $('.options__button--start').removeClass('options__button--active');

      $('.game__board').addClass('game__board--disabled');
    }

    isPaused = true;
  }

  // Resets game
  function reset() {
    games.clicks = 0;
    games.score = 0;
    $('.game__stats-clicks .clicks').text(games.clicks);
    $('.game__stats-score .score').text(games.score);
    $('.game__stats-timer').text(games.time);

    $('.game__board-tile').removeClass('game__board-tile--flipped');
    $('.game__board').addClass('game__board--disabled');
    $('.options__button').removeClass('options__button--active');

    clearInterval(interval);
  }

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

  // Generates random number from 1 to specified number
  function randomNum(num) {
    return Math.floor(Math.random() * num);
  }

  // Generates stats markup
  function generateStats() {
    $('.game__stats').append(`<div class="game__stats-clicks"><i class="fa fa-mouse-pointer" aria-hidden="true"></i><span class="accessible">Clicks</span><span class="text" aria-hidden="true">Clicks</span><span aria-hidden="true">:</span> <span class="clicks" >${games.clicks}</span></div>`);
    $('.game__stats').append(`<div class="game__stats-timer"><span class="accessible">Timer</span>${games.time}</div>`);
    $('.game__stats').append(`<div class="game__stats-score"><i class="fa fa-trophy" aria-hidden="true"></i><span class="accessible">Score</span><span class="text" aria-hidden="true">Score</span><span aria-hidden="true">:</span> <span class="score">${games.score}</span></div>`);
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

  // Checks if there is a match and removes flipped class if not or adds points if there is
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

  // Checks if all of the matches have been made and calls the generateOverlay() function
  function checkOutcome() {
    if ($('.game__board').children('.game__board-tile').length === $('.game__board').children('.game__board-tile.game__board-tile--flipped').length) {
      pause();

      $('.options__button--pause').removeClass('options__button--active');

      generateOverlay('win');
    }
  }

  // Generates outcome overlay based on if the user wins or time runs out
  function generateOverlay(outcome) {
    var outcomeText = '';

    if(outcome === 'win') {
      outcomeText = 'You Win!';
    } else {
      outcomeText = 'Time\'s Up!';
    }

    $('main').append(`<div class="overlay"><div class="overlay__contents"><h2>${outcomeText}</h2><p>Clicks: ${games.clicks}</p><p>Score: ${games.score}</p><button class="overlay__button">Play Again</button></div></div>`);
  }

  generateStats();
  generateDifficulty();
  generateBoxes();

  $('input[type="radio"]').on('click', function() {
    reset();
    generateDifficulty();
    generateBoxes();
  });

  $('.options__button').on('click', function(e) {
    e.preventDefault();
  });

  $('.options__button--start').on('click', function() {
    start();
  });

  $('.options__button--pause').on('click', function() {
    pause();
  });

  $('.options__button--restart').on('click', function() {
    reset();
  });

  $('.game__board').on('click', '.game__board-tile:not(.game__board-tile--flipped)', function() {
    checkMatch($(this));

    games.clicks++;
    games.score -= 10;

    $('.game__stats-clicks .clicks').text(games.clicks);
    $('.game__stats-score .score').text(games.score);

    $(this).addClass('game__board-tile--flipped');

    checkOutcome();
  });

  $('main').on('click', '.overlay__button', function() {
    reset();

    $('.overlay').remove();
  });
});
