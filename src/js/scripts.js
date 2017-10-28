$(function() {
  var games = {
    clicks: 0,
    score: 0,
    time: '1:30'
  }

  var animals = ['bear', 'beaver', 'cat', 'cow', 'deer', 'dog', 'eagle', 'elephant', 'fox', 'frog', 'giraffe', 'hedgehog', 'hippo', 'koala', 'lion', 'llama', 'monkey', 'mouse', 'owl', 'panda', 'parrot', 'penguin', 'pig', 'raccoon', 'seal', 'sheep', 'sloth', 'squirrel', 'tiger', 'wolf', 'anteater', 'baboon', 'bison', 'boar', 'capybara', 'crocodile', 'dove', 'duck', 'fennec-fox', 'goat', 'guinea-pig', 'horse', 'kangaroo', 'lemur', 'mole', 'moose', 'ostrich', 'platypus', 'rabbit', 'rooster', 'skunk', 'snake', 'sparrow', 'swan', 'turtle', 'chameleon', 'puffin', 'albatross', 'bullfinch', 'crane'];

  var foods = ['cheese', 'pie', 'salami', 'pizza', 'apple', 'asparagus', 'avocado', 'bacon', 'baguette', 'banana', 'blueberries', 'bread', 'broccoli', 'cake', 'carrot', 'cauliflower', 'cherries', 'chili', 'chocolate', 'cookies', 'corn', 'croissant', 'cupcake', 'doughnut', 'egg', 'eggplant', 'fries', 'grapes', 'green-beans', 'ham', 'hamburger', 'hot-dog', 'ice-cream-bar', 'ice-cream-cone', 'kebab', 'leeks', 'lemon', 'lettuce', 'lime', 'noodles', 'olives', 'onion', 'orange', 'peach', 'pear', 'pickle', 'pineapple', 'potatoes', 'raddish', 'raspberry', 'rice', 'sandwich', 'spaghetti', 'steak', 'strawberry', 'sub-sandwich', 'tomato', 'turkey', 'waffles', 'watermelon'];

  var flowers = ['almond', 'alstroemeria', 'anemone', 'anthurium', 'aster', 'astrantia', 'bluebell', 'bougainvillea', 'broom', 'calla', 'carnation', 'chrysanthemum', 'clematis', 'daffodil', 'dahlia', 'daisy', 'gladiolus', 'hyacinth', 'hydrangea', 'hypericum', 'iris', 'jasmine', 'jonquil', 'knapweed', 'lily', 'lotus', 'magnolia', 'mimosa', 'narcissus', 'nymphea', 'oleander', 'orchid', 'pansy', 'pear', 'peony', 'petunia', 'poinsettia', 'poppy', 'protea', 'rose', 'sisyrinchium', 'sunflower', 'wallflower', 'wedelia', 'zinnia'];

  var clothes = ['athletic-jacket', 'ballet-flats', 'baseball-cap', 'basketball-jersey', 'bathrobe', 'belt', 'blouse', 'boots', 'bow-tie', 'bra', 'cargo-pants', 'coat', 'dress', 'gloves', 'hat', 'high-heels', 'hoodie', 'jacket', 'jeans', 'long-sleeved-dress', 'long-sleeved-shirt', 'mens-blazer', 'mens-swimsuit', 'mens-underwear', 'mittens', 'overalls', 'oxford-shoes', 'panties', 'polo', 'puffy-jacket', 'pullover', 'scarf', 'short-sleeved-shirt', 'shorts', 'skirt', 'slippers', 'sneakers', 'socks', 'strappy-high-heels', 'sundress', 't-shirt', 'tank-top', 'tie', 'trench-coat', 'uggs', 'vest', 'winter-hat', 'womens-blazer', 'womens-swimsuit', 'work-boots'];

  var flagsAL = ['afghanistan', 'albania', 'algeria', 'argentina', 'armenia', 'aruba', 'australia', 'austria', 'bahamas', 'bangladesh', 'barbados', 'belarus', 'belgium', 'belize', 'bermuda', 'bosnia-and-herzegovina', 'botswana', 'brazil', 'bulgaria', 'cambodia', 'canada', 'canary-islands', 'cayman-islands', 'chile', 'china', 'colombia', 'costa-rica', 'croatia', 'cuba', 'czech-republic', 'democratic-republic-of-congo', 'denmark', 'dominican-republic', 'ecuador', 'egypt', 'ethiopia', 'falkland-islands', 'fiji', 'finland', 'france', 'galapagos-islands', 'germany', 'ghana', 'greece', 'greenland', 'grenada', 'guam', 'guatemala', 'guyana', 'haiti', 'hungary', 'iceland', 'india', 'indonesia', 'iran', 'iraq', 'ireland', 'israel', 'italy', 'jamaica', 'japan', 'jordan', 'kazakhstan', 'kenya', 'latvia', 'lebanon', 'liberia', 'libya', 'lithuania', 'luxembourg'];

  var flagsMZ = ['madagascar', 'malaysia', 'maldives', 'malta', 'mexico', 'monaco', 'mongolia', 'montenegro', 'morocco', 'mozambique', 'namibia', 'nepal', 'netherlands', 'new-zealand', 'nicaragua', 'nigeria', 'north-korea', 'norway', 'pakistan', 'palestine', 'panama', 'papua-new-guinea', 'paraguay', 'peru', 'philippines', 'portugal', 'puerto-rico', 'republic-of-macedonia', 'republic-of-poland', 'romania', 'russia', 'rwanda', 'saint-kitts-and-nevis', 'samoa', 'saudi-arabia', 'scotland', 'serbia', 'sierra-leone', 'singapore', 'slovakia', 'slovenia', 'somalia', 'south-africa', 'south-korea', 'spain', 'sri-lanka', 'st-barts', 'st-lucia', 'sudan', 'swaziland', 'sweden', 'switzerland', 'syria', 'taiwan', 'tanzania', 'tibet', 'trinidad-and-tobago', 'turkey', 'turks-and-caicos', 'uganda', 'ukraine', 'united-arab-emirates', 'united-kingdom', 'united-states-of-america', 'uruguay', 'venezuela', 'vietnam', 'zambia', 'zimbabwe'];

  var difficultyBoxes = {
    easy: 12,
    medium: 20,
    hard: 30
  }

  var type = '';
  var difficulty = '';

  var interval;
  var isPaused = false;
  var minutes = '';
  var seconds = '';

  var clickedItems = [];
  var clickedIndexes = [];

  // Makes dynamic equal width and height boxes
  function equalHeightWidth() {
    var tileWidth = $('.game__board-tile').width();
    $('.game__board-tile').css({'height': tileWidth + 'px'});
  }

  // Starts timer countdown and game
  function start() {
    clearInterval(interval);

    var time = $('.game__stats-timer').text();
    time = time.split(':');
    minutes = time[0];
    seconds = time[1];

    interval = setInterval(function() {
      if(!isPaused) {
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

        $('.game__stats-timer').text(minutes + ':' + seconds);

        if (minutes == 0 && seconds < 31) {
          $('.game__stats-timer').addClass('game__stats-timer--yellow');
        }

        if (minutes == 0 && seconds < 11) {
          $('.game__stats-timer').removeClass('game__stats-timer--yellow');
          $('.game__stats-timer').addClass('game__stats-timer--red');
        }

        if (minutes == 0 && seconds == 0) {
          clearInterval(interval);

          generateOverlay('lose');

          setTimeout(function() {
            $('.game__stats-timer').removeClass('game__stats-timer--red');
          }, 250);
        }
      }
    }, 1000);

    isPaused = false;

    $('main').removeClass('paused');
  }

  // Pauses game
  function pause() {
    isPaused = true;

    $('main').addClass('paused');
  }

  // Resets game
  function reset() {
    $('.current__list-item').remove();

    setOptions();

    games.clicks = 0;
    games.score = 0;
    $('.game__stats-clicks .clicks').text(games.clicks);
    $('.game__stats-score .score').text(games.score);
    $('.game__stats-timer').text(games.time);

    $('.game__board-tile').removeClass('game__board-tile--flipped');
    $('.options__item').removeClass('options__item--active');

    $('.game__stats-timer').removeClass('game__stats-timer--yellow game__stats-timer--red');

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
    $('.game__stats').append(`<div class="game__stats-timer">${games.time}</div>`);
    $('.game__stats').append(`<div class="game__stats-score"><i class="fa fa-trophy" aria-hidden="true"></i><span class="accessible">Score</span><span class="text" aria-hidden="true">Score</span><span aria-hidden="true">:</span> <span class="score">${games.score}</span></div>`);
  }

  // Takes users desired type and difficulty level and applies applicable classes
  function getOptions() {
    difficulty = $('input[name="difficulty"]:checked').attr('id');
    type = $('input[name="type"]:checked').attr('id');
  }

  // Generates required boxes as per chosen difficulty and fills with random images
  // Also generates images in current game underneath the ark image
  function setOptions() {
    $('.game__board-tile').remove();

    var itemArray;

    if (type === 'animals') {
      itemArray = animals.slice();
    } else if (type === 'foods') {
      itemArray = foods.slice();
    } else if (type === 'flowers') {
      itemArray = flowers.slice();
    } else if (type === 'clothes') {
      itemArray = clothes.slice();
    } else if (type === 'flagsAL') {
      itemArray = flagsAL.slice();
    } else {
      itemArray = flagsMZ.slice();
    }

    var chosenItems = [];

    var difficultyBoxesNum = difficultyBoxes[difficulty];

    var index = {};

    for(var i = 0; i < difficultyBoxesNum / 2; i++) {
      var itemNum;
      do {
        itemNum = randomNum(itemArray.length);
      } while (index.hasOwnProperty(itemNum));
      index[itemNum] = true;

      var singleItem = itemArray[itemNum];

      chosenItems.push(singleItem);

      var chosenItemsCopy = chosenItems.slice();
      var chosenItemsNew = chosenItems.concat(chosenItemsCopy);

      shuffleArray(chosenItemsNew);
    }

    for(var i = 0; i < difficultyBoxesNum; i++) {
      var tileItem = chosenItemsNew[i];

      $(`<div class="game__board-tile"><div class="game__board-tile-inner"><div class="game__board-tile-front"></div><div class="game__board-tile-back"><img src="dist/images/${type}/${tileItem}.svg" alt="${prettify(tileItem)}" title="${prettify(tileItem)}"></div></div></div>`).hide().appendTo('.game__board').fadeIn(1000);
    }

    $('.current__list-item').remove();

    for(var i = 0; i < difficultyBoxesNum / 2; i++) {
      var listItem = chosenItems[i];

      $(`<div class="current__list-item"><img src="dist/images/${type}/${listItem}.svg" alt="${prettify(listItem)}" title="${prettify(listItem)}"><p>${prettify(listItem)}</p></div>`).hide().appendTo('.current__list').fadeIn(1000);
    }

    $('main').removeClass().addClass('paused').addClass(difficulty).addClass(type);

    equalHeightWidth();

    $(window).resize(function() {
      equalHeightWidth();
    });
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
        $('.game__board-tile').css("pointer-events", "none");

        setTimeout(function() {
          $('.game__board-tile').eq(clickedIndexes[0]).removeClass('game__board-tile--flipped');
          $('.game__board-tile').eq(clickedIndexes[1]).removeClass('game__board-tile--flipped');

          $('.game__board-tile').css("pointer-events", "auto");
        }, 750);
      } else {
        games.score += (parseInt(minutes) * 60) + parseInt(seconds);

        var matching = $('.current__list-item img').filter(function(){
           return $(this).attr('alt') == clickedItems[0];
        });

        matching.parent().fadeTo(200, 0.5);
      }
    }
  }

  // Checks if all of the matches have been made and calls the generateOverlay() function
  function checkOutcome() {
    if ($('.game__board').children('.game__board-tile').length === $('.game__board').children('.game__board-tile.game__board-tile--flipped').length) {
      generateOverlay('win');
      pause();
    }
  }

  // Generates overlay based on if the user wins, time runs out, or the game is paused
  function generateOverlay(context, mins, secs) {
    var contextText = '';

    if(context === 'win') {
      contextText = 'You Win!';
    } else if(context === 'lose') {
      contextText = 'Time\'s Up!';
    } else {
      contextText = 'Game Paused!';
    }

    if(context === 'pause') {
      $('html, body').css('overflow', 'hidden');

      $(`<div class="overlay"><div class="overlay__contents"><h2>${contextText}</h2><p>Clicks: ${games.clicks}</p><p>Score: ${games.score}</p><p>Time Left: ${minutes}:${seconds}</p><button class="overlay__button overlay__button--pause">Continue Game</button></div></div>`).hide().appendTo('main').fadeIn(200);
    } else {
      setTimeout(function() {
        $('html, body').css('overflow', 'hidden');

        $(`<div class="overlay"><div class="overlay__contents"><h2>${contextText}</h2><p>Clicks: ${games.clicks}</p><p>Score: ${games.score}</p><p>Time Left: ${minutes}:${seconds}</p><button class="overlay__button">Play Again</button></div></div>`).hide().appendTo('main').fadeIn(750);

        if(context === 'win') {
          setTimeout(function() {
            $('.overlay__contents h2').addClass('animated tada');
          }, 350);
        } else {
          setTimeout(function() {
            $('.overlay__contents h2').addClass('animated rubberBand');
          }, 350);
        }
      }, 500);
    }
  }

  generateStats();
  getOptions();
  setOptions();

  $('.options__items:not(.options__items--controls) input[type="radio"]').on('click', function() {
    reset();
    getOptions();
    setOptions();
  });

  $('button').on('click', function(e) {
    e.preventDefault();
  });

  $('.options__item[for="start"]').on('click', function() {
    start();
  });

  $('.options__items').on('click', '.options__item[for="pause"]', function() {
    if (games.clicks > 0) {
      generateOverlay('pause', minutes, seconds);
      pause();
    }
  });

  $('.options__item[for="restart"]').on('click', function() {
    reset();
  });

  $('.game__board').on('click', '.game__board-tile:not(.game__board-tile--flipped)', function() {
    start();
    checkMatch($(this));

    games.clicks++;
    games.score -= 5;

    $('.game__stats-clicks .clicks').text(games.clicks);
    $('.game__stats-score .score').text(games.score);

    $(this).addClass('game__board-tile--flipped');

    checkOutcome();
  });

  $('main').on('click', '.overlay__button:not(.overlay__button--pause)', function() {
    reset();
  });

  $('main').on('click', '.overlay__button', function() {
    $('.overlay').fadeOut(200, function() {
      $(this).remove();
    });

    $('html, body').css('overflow', 'auto');
  });
});
