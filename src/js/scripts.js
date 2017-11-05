const app = {};

app.games = {
  clicks: 0,
  score: 0,
  minutes: 1,
  seconds: 30
}

app.animals = ['bear', 'beaver', 'cat', 'cow', 'deer', 'dog', 'eagle', 'elephant', 'fox', 'frog', 'giraffe', 'hedgehog', 'hippo', 'koala', 'lion', 'llama', 'monkey', 'mouse', 'owl', 'panda', 'parrot', 'penguin', 'pig', 'raccoon', 'seal', 'sheep', 'sloth', 'squirrel', 'tiger', 'wolf', 'anteater', 'baboon', 'bison', 'boar', 'capybara', 'crocodile', 'dove', 'duck', 'fennec-fox', 'goat', 'guinea-pig', 'horse', 'kangaroo', 'lemur', 'mole', 'moose', 'ostrich', 'platypus', 'rabbit', 'rooster', 'skunk', 'snake', 'sparrow', 'swan', 'turtle', 'chameleon', 'puffin', 'albatross', 'bullfinch', 'crane'];

app.foods = ['cheese', 'pie', 'salami', 'pizza', 'apple', 'asparagus', 'avocado', 'bacon', 'baguette', 'banana', 'blueberries', 'bread', 'broccoli', 'cake', 'carrot', 'cauliflower', 'cherries', 'chili', 'chocolate', 'cookies', 'corn', 'croissant', 'cupcake', 'doughnut', 'egg', 'eggplant', 'fries', 'grapes', 'green-beans', 'ham', 'hamburger', 'hot-dog', 'ice-cream-bar', 'ice-cream-cone', 'kebab', 'leeks', 'lemon', 'lettuce', 'lime', 'noodles', 'olives', 'onion', 'orange', 'peach', 'pear', 'pickle', 'pineapple', 'potatoes', 'raddish', 'raspberry', 'rice', 'sandwich', 'spaghetti', 'steak', 'strawberry', 'sub-sandwich', 'tomato', 'turkey', 'waffles', 'watermelon'];

app.flowers = ['almond', 'alstroemeria', 'anemone', 'anthurium', 'aster', 'astrantia', 'bluebell', 'bougainvillea', 'broom', 'calla', 'carnation', 'chrysanthemum', 'clematis', 'daffodil', 'dahlia', 'daisy', 'gladiolus', 'hyacinth', 'hydrangea', 'hypericum', 'iris', 'jasmine', 'jonquil', 'knapweed', 'lily', 'lotus', 'magnolia', 'mimosa', 'narcissus', 'nymphea', 'oleander', 'orchid', 'pansy', 'pear', 'peony', 'petunia', 'poinsettia', 'poppy', 'protea', 'rose', 'sisyrinchium', 'sunflower', 'wallflower', 'wedelia', 'zinnia'];

app.clothes = ['athletic-jacket', 'ballet-flats', 'baseball-cap', 'basketball-jersey', 'bathrobe', 'belt', 'blouse', 'boots', 'bow-tie', 'bra', 'cargo-pants', 'coat', 'dress', 'gloves', 'hat', 'high-heels', 'hoodie', 'jacket', 'jeans', 'long-sleeved-dress', 'long-sleeved-shirt', 'mens-blazer', 'mens-swimsuit', 'mens-underwear', 'mittens', 'overalls', 'oxford-shoes', 'panties', 'polo', 'puffy-jacket', 'pullover', 'scarf', 'short-sleeved-shirt', 'shorts', 'skirt', 'slippers', 'sneakers', 'socks', 'strappy-high-heels', 'sundress', 't-shirt', 'tank-top', 'tie', 'trench-coat', 'uggs', 'vest', 'winter-hat', 'womens-blazer', 'womens-swimsuit', 'work-boots'];

app.flagsAL = ['afghanistan', 'albania', 'algeria', 'argentina', 'armenia', 'aruba', 'australia', 'austria', 'bahamas', 'bangladesh', 'barbados', 'belarus', 'belgium', 'belize', 'bermuda', 'bosnia-and-herzegovina', 'botswana', 'brazil', 'bulgaria', 'cambodia', 'canada', 'canary-islands', 'cayman-islands', 'chile', 'china', 'colombia', 'costa-rica', 'croatia', 'cuba', 'czech-republic', 'democratic-republic-of-congo', 'denmark', 'dominican-republic', 'ecuador', 'egypt', 'ethiopia', 'falkland-islands', 'fiji', 'finland', 'france', 'galapagos-islands', 'germany', 'ghana', 'greece', 'greenland', 'grenada', 'guam', 'guatemala', 'haiti', 'hungary', 'iceland', 'india', 'indonesia', 'iran', 'iraq', 'ireland', 'israel', 'italy', 'jamaica', 'japan', 'jordan', 'kazakhstan', 'kenya', 'latvia', 'lebanon', 'liberia', 'libya', 'liechtenstein', 'lithuania', 'luxembourg'];

app.flagsMZ = ['madagascar', 'malaysia', 'maldives', 'malta', 'mexico', 'monaco', 'mongolia', 'montenegro', 'morocco', 'mozambique', 'namibia', 'nepal', 'netherlands', 'new-zealand', 'nicaragua', 'nigeria', 'north-korea', 'norway', 'pakistan', 'palestine', 'panama', 'papua-new-guinea', 'paraguay', 'peru', 'philippines', 'poland', 'portugal', 'puerto-rico', 'republic-of-macedonia', 'romania', 'russia', 'rwanda', 'saint-kitts-and-nevis', 'samoa', 'saudi-arabia', 'scotland', 'serbia', 'sierra-leone', 'singapore', 'slovakia', 'slovenia', 'somalia', 'south-africa', 'south-korea', 'spain', 'sri-lanka', 'st-barts', 'st-lucia', 'sudan', 'swaziland', 'sweden', 'switzerland', 'syria', 'taiwan', 'tanzania', 'tibet', 'trinidad-and-tobago', 'turkey', 'turks-and-caicos', 'uganda', 'ukraine', 'united-arab-emirates', 'united-kingdom', 'united-states-of-america', 'uruguay', 'venezuela', 'vietnam', 'zambia', 'zimbabwe'];

app.difficultyBoxes = {
  easy: 12,
  medium: 20,
  hard: 30
}

app.type = '';
app.difficulty = '';

app.interval;
app.isPaused = false;
app.pausedMinute = '';
app.pausedSecond = '';
app.minutes = '';
app.seconds = '';

app.clickedItems = [];
app.clickedIndexes = [];

// Makes dynamic equal width and height boxes
app.equalHeightWidth = function() {
  let tileWidth = $('.game__board-tile').width();
  $('.game__board-tile').css({'height': tileWidth + 'px'});
}

// Figures out if minutes and seconds are plural at current time and adjust text accordingly
app.timeUnits = function(mins, secs) {
  if (mins == 1) {
    $('.game__stats-timer .minutes + .accessible').text('Minute');
  } else {
    $('.game__stats-timer .minutes + .accessible').text('Minutes');
  }

  if (secs == 1) {
    $('.game__stats-timer .seconds + .accessible').text('Second');
  } else {
    $('.game__stats-timer .seconds + .accessible').text('Seconds');
  }
}

// Starts timer countdown and game
app.start = function() {
  clearInterval(app.interval);

  app.minutes = $('.game__stats-timer .minutes').text();
  app.seconds = $('.game__stats-timer .seconds').text();

  app.interval = setInterval(function() {
    if(!app.isPaused) {
      app.seconds -= 1;
      if (app.minutes < 0) {
        return;
      } else if (app.seconds < 0 && app.minutes != 0) {
        app.minutes -= 1;
        app.seconds = 59;
      } else if (app.seconds < 10 && app.seconds.length != 2) {
        app.seconds = '0' + app.seconds;
      }

      $('.game__stats-timer .minutes').text(app.minutes);
      $('.game__stats-timer .seconds').text(app.seconds);

      app.timeUnits(app.minutes, app.seconds);

      let timePercentage = 100 - (((60 * app.minutes) + parseInt(app.seconds)) / ((60 * app.games.minutes) + app.games.seconds)) * 100 + '%';

      $('.game__stats-timer-overlay').css('width', timePercentage);

      if (app.minutes == 0 && app.seconds < 31) {
        $('.game__stats-timer-overlay').removeClass('game__stats-timer-overlay--green');
        $('.game__stats-timer-overlay').addClass('game__stats-timer-overlay--yellow');
      }

      if (app.minutes == 0 && app.seconds < 11) {
        $('.game__stats-timer-overlay').removeClass('game__stats-timer-overlay--yellow');
        $('.game__stats-timer-overlay').addClass('game__stats-timer-overlay--red');
      }

      if (app.minutes == 0 && app.seconds == 0) {
        clearInterval(app.interval);

        app.generateOverlay('lose');

        setTimeout(function() {
          $('.game__stats-timer-overlay');
        }, 250);
      }
    }
  }, 1000);

  app.isPaused = false;

  $('main').removeClass('paused');

  $('.game__stats-timer-overlay').addClass('game__stats-timer-overlay--green')
}

// Pauses game
app.pause = function() {
  app.isPaused = true;

  $('main').addClass('paused');
}

// Resets game
app.reset = function() {
  $('.current__list-item').remove();

  app.setOptions();

  app.games.clicks = 0;
  app.games.score = 0;

  $('.game__stats-clicks .clicks').text(app.games.clicks);
  $('.game__stats-score .score').text(app.games.score);
  $('.game__stats-timer .minutes').text(app.games.minutes);
  $('.game__stats-timer .seconds').text(app.games.seconds);

  app.timeUnits(app.games.minutes, app.games.seconds);

  $('.game__board-tile').removeClass('game__board-tile--flipped');
  $('.options__item').removeClass('options__item--active');

  $('.game__stats-timer-overlay').removeClass('game__stats-timer-overlay--yellow game__stats-timer-overlay--red').css('width', 0);

  clearInterval(app.interval);
}

// Capitalizes words and turns dashes into spaces
app.prettify = function(string) {
  let words = string.match(/([^-]+)/g) || [];
  words.forEach(function(word, i) {
    words[i] = word[0].toUpperCase() + word.slice(1);
  });
  return words.join(' ');
}

// Randomizes array elements using Durstenfeld shuffle algorithm
app.shuffleArray = function(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

// Generates random number from 1 to specified number
app.randomNum = function(num) {
  return Math.floor(Math.random() * num);
}

// Generates stats markup
app.generateStats = function() {
  $('.game__stats').append(`<div class="game__stats-clicks"><i class="fa fa-mouse-pointer" aria-hidden="true"></i><span class="accessible">Clicks</span><span class="text" aria-hidden="true">Clicks</span><span aria-hidden="true">:</span> <span class="clicks" >${app.games.clicks}</span></div>`);
  $('.game__stats').append(`<div class="game__stats-timer" role="timer" aria-atomic="true"><div class="game__stats-timer-overlay"></div><span class="minutes">${app.games.minutes}</span><span class="accessible"></span><span aria-hidden="true">:</span><span class="seconds">${app.games.seconds}</span><span class="accessible"></span></div>`);
  $('.game__stats').append(`<div class="game__stats-score"><i class="fa fa-trophy" aria-hidden="true"></i><span class="accessible">Score</span><span class="text" aria-hidden="true">Score</span><span aria-hidden="true">:</span> <span class="score">${app.games.score}</span></div>`);

  app.timeUnits(app.games.minutes, app.games.seconds);
}

// Takes users desired type and difficulty level and applies applicable classes
app.getOptions = function() {
  app.difficulty = $('input[name="difficulty"]:checked').attr('id');
  app.type = $('input[name="type"]:checked').attr('id');
}

// Generates required boxes as per chosen difficulty and fills with random images
// Also generates images in current game underneath the ark image
app.setOptions = function() {
  $('.game__board-tile').remove();

  let itemArray;

  if (app.type === 'animals') {
    itemArray = app.animals.slice();
  } else if (app.type === 'foods') {
    itemArray = app.foods.slice();
  } else if (app.type === 'flowers') {
    itemArray = app.flowers.slice();
  } else if (app.type === 'clothes') {
    itemArray = app.clothes.slice();
  } else if (app.type === 'flagsAL') {
    itemArray = app.flagsAL.slice();
  } else {
    itemArray = app.flagsMZ.slice();
  }

  let chosenItems = [];
  let chosenItemsNew = [];

  let difficultyBoxesNum = app.difficultyBoxes[app.difficulty];

  let index = {};

  for(let i = 0; i < difficultyBoxesNum / 2; i++) {
    let itemNum;
    do {
      itemNum = app.randomNum(itemArray.length);
    } while (index.hasOwnProperty(itemNum));
    index[itemNum] = true;

    let singleItem = itemArray[itemNum];

    chosenItems.push(singleItem);

    let chosenItemsCopy = chosenItems.slice();
    chosenItemsNew = [...chosenItems, ...chosenItemsCopy];

    app.shuffleArray(chosenItemsNew);
  }

  for(let i = 0; i < difficultyBoxesNum; i++) {
    let tileItem = chosenItemsNew[i];

    $(`<div class="game__board-tile"><div class="game__board-tile-inner"><div class="game__board-tile-front"></div><div class="game__board-tile-back"><img src="dist/images/${app.type}/${tileItem}.svg" alt="Hidden" title="${app.prettify(tileItem)}"></div></div></div>`).hide().appendTo('.game__board').fadeIn(1000);
  }

  $('.current__list-item').remove();

  for(let i = 0; i < difficultyBoxesNum / 2; i++) {
    let listItem = chosenItems[i];

    $(`<div class="current__list-item"><img src="dist/images/${app.type}/${listItem}.svg" alt="${app.prettify(listItem)}" title="${app.prettify(listItem)}"><p>${app.prettify(listItem)}</p></div>`).hide().appendTo('.current__list').fadeIn(1000);
  }

  $('main').removeClass().addClass('paused').addClass(app.difficulty).addClass(app.type);

  app.equalHeightWidth();

  $(window).resize(function() {
    app.equalHeightWidth();
  });
}

// Checks if there is a match and removes flipped class if not or adds points if there is
app.checkMatch = function(that) {
  let evenItem = '';
  let oddItem = '';

  let evenIndex = '';
  let oddIndex = '';

  app.clickedItems.slice(0, 2);

  if(app.games.clicks % 2 !== 0) {
    oddItem = that.find('img').attr('title');
    oddIndex = that.index();
    app.clickedItems.push(oddItem);
    app.clickedIndexes.push(oddIndex);
  } else {
    evenItem = that.find('img').attr('title');
    evenIndex = that.index();
    app.clickedItems.push(evenItem);
    app.clickedIndexes.push(evenIndex);
  }

  if(app.clickedItems.length > 2 || app.clickedIndexes.length > 2) {
    app.clickedItems.splice(0, 2);
    app.clickedIndexes.splice(0, 2);
  }

  that.find('img').attr('alt', that.find('img').attr('title'));

  if(app.clickedItems.length === 2 || app.clickedIndexes.length === 2) {
    if(app.clickedItems[0] !== app.clickedItems[1]) {
      $('.game__board-tile').css("pointer-events", "none");

      setTimeout(function() {
        $('.game__board-tile').eq(app.clickedIndexes[0]).removeClass('game__board-tile--flipped').find('img').attr('alt', 'Hidden');;
        $('.game__board-tile').eq(app.clickedIndexes[1]).removeClass('game__board-tile--flipped').find('img').attr('alt', 'Hidden');;

        $('.game__board-tile').css("pointer-events", "auto");
      }, 750);
    } else {
      app.games.score += (app.minutes * 60) + parseInt(app.seconds);

      let matching = $('.current__list-item img').filter(function(){
         return $(this).attr('title') == app.clickedItems[0];
      });

      matching.parent().fadeTo(200, 0.5);
    }
  }
}

// Checks if all of the matches have been made and calls the generateOverlay() function
app.checkOutcome = function() {
  if ($('.game__board').children('.game__board-tile').length === $('.game__board').children('.game__board-tile.game__board-tile--flipped').length) {
    app.generateOverlay('win');
  }
}

// Generates overlay based on if the user wins, time runs out, or the game is paused
app.generateOverlay = function(context, mins, secs) {
  app.pause();

  let contextText = '';

  if(context === 'win') {
    contextText = 'You Win!';
  } else if(context === 'lose') {
    contextText = 'Time\'s Up!';
  } else {
    contextText = 'Game Paused!';
  }

  if(context === 'pause') {
    $('html, body').css('overflow', 'hidden');

    $(`<div class="overlay"><div class="overlay__contents"><h2>${contextText}</h2><p>Clicks: ${app.games.clicks}</p><p>Score: ${app.games.score}</p><p>Time Left: ${app.minutes}:${app.seconds}</p><button class="overlay__button overlay__button--pause">Continue Game</button></div></div>`).hide().appendTo('main').fadeIn(200);
  } else {
    setTimeout(function() {
      $('html, body').css('overflow', 'hidden');

      $(`<div class="overlay"><div class="overlay__contents"><h2>${contextText}</h2><p>Clicks: ${app.games.clicks}</p><p>Score: ${app.games.score}</p><p>Time Taken: ${app.games.minutes - app.minutes}:${app.games.seconds - app.seconds}</p><button class="overlay__button">Play Again</button></div></div>`).hide().appendTo('main').fadeIn(750);

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

app.init = function() {
  app.generateStats();
  app.getOptions();
  app.setOptions();

  $('button').on('click', function(e) {
    e.preventDefault();
  });

  $('.options__items:not(.options__items--controls) input[type="radio"]').on('click', function() {
    app.reset();
    app.getOptions();
    app.setOptions();
  });

  $('.options__items').on('click', '.options__item[for="pause"]', function() {
    if (app.games.clicks > 0) {
      app.generateOverlay('pause', app.minutes, app.seconds);
    }
  });

  $('.options__item[for="restart"]').on('click', function() {
    app.reset();
  });

  $('.game__board').on('click', '.game__board-tile:not(.game__board-tile--flipped)', function() {
    if (app.games.clicks === 0 || (app.pausedMinute === app.minutes && app.pausedSecond === app.seconds)) {
      app.start();
    }

    app.checkMatch($(this));

    app.games.clicks++;
    app.games.score -= 5;

    $('.game__stats-clicks .clicks').text(app.games.clicks);
    $('.game__stats-score .score').text(app.games.score);

    $(this).addClass('game__board-tile--flipped');

    app.checkOutcome();
  });

  $('main').on('click', '.overlay__button:not(.overlay__button--pause)', function() {
    app.reset();
  });

  $('main').on('click', '.overlay__button--pause', function() {
    app.pausedMinute = app.minutes;
    app.pausedSecond = app.seconds;
  });

  $('main').on('click', '.overlay__button', function() {
    $('.overlay').fadeOut(200, function() {
      $(this).remove();
    });

    $('html, body').css('overflow', 'auto');
  });
}

$(function() {
  app.init();
});
