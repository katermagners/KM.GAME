/*!
 * jQuery CLI
 * Simulating a command line interface with jQuery
 *
 * @version : 1.0.0
 * @author : Paulo Nunes (http://syndicatefx.com)
 * @demo : https://codepen.io/syndicatefx/pen/jPxXpz
 * @license: MIT
 */

/*!*
 * jQuery Text Typer plugin
 * https://github.com/gr8pathik/jquery-texttyper
*/
(function(e){"use strict";e.fn.textTyper=function(t){var n={typingClass:"typing",beforeAnimation:function(){},afterAnimation:function(){},speed:10,nextLineDelay:400,startsFrom:0,repeatAnimation:false,repeatDelay:4e3,repeatTimes:1,cursorHtml:'<span class="cursor">|</span>'},r=e.extend({},n,t);this.each(function(){var t=e(this),n=1,i="typingCursor";var s=t,o=s.length,u=[];while(o--){u[o]=e.trim(e(s[o]).html());e(s[o]).html("")}t.init=function(e){var n=r.beforeAnimation;if(n)n();t.animate(0)};t.animate=function(o){var a=s[o],f=r.typingClass,l=r.startsFrom;e(a).addClass(f);var c=setInterval(function(){var f=r.cursorHtml;f=e("<div>").append(e(f).addClass(i)).html();e(a).html(u[o].substr(0,l)+f);l++;if(u[o].length<l){clearInterval(c);o++;if(s[o]){setTimeout(function(){e(a).html(u[o-1]);t.animate(o)},r.nextLineDelay)}else{e(a).find("."+i).remove();if(r.repeatAnimation&&(r.repeatTimes==0||n<r.repeatTimes)){setTimeout(function(){t.animate(0);n++},r.repeatDelay)}else{var h=r.afterAnimation;if(h)h()}}}},r.speed)};t.init()});return this}})(jQuery)


// Let's do it!!
$(document).ready(function() {

  $('.command').hide();
  $('input.controller[type="text"]').focus();
  $('#home').addClass('open');
  $('#home').textTyper({
        speed:10,
        afterAnimation:function(){
          $('.command').fadeIn();
          $('input.controller[type="text"]').focus();
          $('input.controller[type="text"]').val('');
        }
      });

// get array of section ids, that exist in DOM
var sectionArray = [];
// We are using <section> here, you can use <div> or <article> if you want
$('section').each( function(i,e) {
    //you can use e.id instead of $(e).attr('id')
    sectionArray.push($(e).attr('id'));
});

// Debug
//console.log(sectionArray);



// Command Input------------------------------

  $('input.controller[type="text"]').keyup(function(e){

    if(e.which == 13){// ENTER key pressed

      $('.command').hide();
      var destination = $('input.controller[type="text"]').val();

      // Display section with id == destination and hide all others
      $('section[id="' + destination + '"]').addClass('open').siblings().removeClass('open');

      // If destination does not match our array of section ids, display error section
      if($.inArray(destination, sectionArray) == -1){
        $('#error').addClass('open');
        $('#error').siblings().removeClass('open');
      }

      if (destination == 02) {
        var trigger = $('.open');
      }else {
        var trigger = $('.open span');
      }

      // All sections with class .open init textTyper
      trigger.textTyper({
        speed:5,
        afterAnimation:function(){
          $('.command').fadeIn();
          $('input.controller[type="text"]').focus();
          $('input.controller[type="text"]').val('');
        }
      });

    }// end if ENTER key pressed

  });// end keyup function

// End Command Input-----------------------------



  // DATE COUNT DONW

    });
    function updateTimer() {
      future  = Date.parse("december 26, 2020 00:00:00");
      now     = new Date();
      diff    = future - now;

      days  = Math.floor( diff / (1000*60*60*24) );
      hours = Math.floor( diff / (1000*60*60) );
      mins  = Math.floor( diff / (1000*60) );
      secs  = Math.floor( diff / 1000 );

      d = days;
      h = hours - days  * 24;
      m = mins  - hours * 60;
      s = secs  - mins  * 60;

      document.getElementById("timer")
      .innerHTML =
      '<div>' + d + '<span>days</span></div>' +
      '<div>' + h + '<span>hours</span></div>' +
      '<div>' + m + '<span>minutes</span></div>' +
      '<div>' + s + '<span>seconds</span></div>' ;
    }
    setInterval('updateTimer()', 1000 );






    // 06 TRIVIAL POUSUIT
    window.onload = function () {

  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,

     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        '-	Par quel art martial Bruce Lee a-t-il commencé son apprentissage ?' : ['le karaté', 'le taekwondo', 'le wing chun', 'ninjutsu', 'la boxe', 2],
        '-	Laquelle de ces pratiques n’appartient pas à la fois au football et au rugby ?' : ['le carton jaune', 'les crampons', 'l’en-but', 'les tirs au but', 2],
        '-	Comment appelle-t-on un ensemble de mégalithes disposés selon une forme circulaire ?' : ['un menhir', 'un dolmen', 'un tertre', 'un cromlech', 3],
        '-	Laquelle de ces villes n’est pas traversée par le Danube ?' : ['Vienne', 'Budapest', 'Zagreb', 'Belgrade', 2],
        '-	Laquelle de ces divinités n’est pas consacrée au Soleil ?' : ['Rê', 'Hermès', 'Apollon', 'Hélios', 1],
        '-	Lequel de ces trois cinéastes a reçu un oscar du meilleur réalisateur ?' : ['Alfred Hitchcock', 'Stanley Kubrick', 'Clint Eastwood', 2],
        '-	Lequel de ces sportifs n’est pas gaucher ?' : ['Roger Federer', 'Rafael Nadal', 'John McEnroe', 'Jimmy Connors', 0],
        '-	Laquelle de ces villes ne se trouve pas en Egypte ?' : ['Le Caire', 'Dakar', 'Louxor', 'Gizeh', 1],
        '-	En quelle année le mur de Berlin a-t-il été bâti ?' : ['1946', '1961', '1989', 1],
        '-	Laquelle de ces plantes n’est pas carnivore ?' : ['la dionée', 'l’héliconia', 'le droséra', 'l’utriculaire', 1],
        '-	Combien mesure le basketteur chinois Yao Ming ?' : ['1m89', '1m99', '2m09', '2m19', '2m29', 4],
        '-	Quel pays les hordes mongoles n’ont jamais envahi ?' : ['la Chine', 'le Japon', 'la Russie', 'l’Inde', 'la Hongrie', 1],
        '-	Qui a été le premier roi de France (dynastie des Mérovingiens) ?' : ['Clovis', 'Mérovée', 'Hugues Capet', 'Dagobert', 'Charlemagne', 0],


      };

  function loadQuestion(curr) {
  // This function loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable

    var question = Object.keys(allQuestions)[curr];

    questionArea.innerHTML = '';
    questionArea.innerHTML = question;
  }

  function loadAnswers(curr) {
  // This function loads all the possible answers of the given question
  // It grabs the needed answer-array with the help of the current-variable
  // Every answer is added with an 'onclick'-function

    var answers = allQuestions[Object.keys(allQuestions)[curr]];

    answerArea.innerHTML = '';

    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);

      createDiv.appendChild(text);
      createDiv.addEventListener("click", checkAnswer(i, answers));


      answerArea.appendChild(createDiv);
    }
  }

  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.

    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];

      if (givenAnswer === correctAnswer) {
        addChecker(true);
      } else {
        addChecker(false);
      }

      if (current < Object.keys(allQuestions).length -1) {
        current += 1;

        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = 'Done';
        answerArea.innerHTML = '';
      }

    };
  }

  function addChecker(bool) {
  // This function adds a div element to the page
  // Used to see if it was correct or false

    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);

    createDiv.appendChild(txt);

    if (bool) {

      createDiv.className += 'correct';
      checker.appendChild(createDiv);

      var pieItems = $( ".pie > div > div:not(.revel)" );
      function shuffle(array) {
          var m = array.length, t, i;

          // While there remain elements to shuffle…
          while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
          }

          return array;
        }

        $(function() {
          $(shuffle(pieItems).slice(0, 1)).addClass("revel");
        });


    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }


  // Start the quiz right away
  loadQuestion(current);
  loadAnswers(current);

};


// VALIDATION
$("#final form").submit(function(e) {
    e.preventDefault();
});
function validate()
{
  if($('#password').val() == 'berlin'){
    console.log('YES');

    $('main').fadeOut();

    // MATRIX
    class MatrixAnimation {
      /**
                            *
                            * @param {object} element HTML Object in dem der Matrix Effekt gerendert werden soll
                            * @param {string} lettersColor Farbe der Schrift
                            * @param {number} letterSize Größe der Schrift
                            * @param {*} font Schriftfamilie
                            * @param {*} speed Geschwindigkeit
                            */
      constructor(element, lettersColor, letterSize, font, speed) {
        this.element = element;
        this.width = element.offsetWidth;
        this.height = element.offsetHeight;
        this.lettersColor = lettersColor;
        this.letterSize = letterSize;
        this.font = font;
        this.speed = speed < 24 ? 24 : speed;
        this.status = true;
        this.ctx = undefined;
        this.letters = undefined;
      }

      drawAnimation() {

        if (this.status) {
          this.ctx.fillStyle = this.lettersColor;
          this.ctx.font = `${this.letterSize}pt ${this.font}`;

          this.letters.forEach((y, index) => {
            const randomSymbol = String.fromCharCode(Math.random() * 128);
            const x = index * this.letterSize;

            this.ctx.fillText(randomSymbol, x, y);

            if (y > 250 + Math.random() * 15000) this.letters[index] = 0;else
            this.letters[index] = y + this.letterSize;
          });

          this.ctx.fillStyle = `rgba(0, 0, 0, 0.1)`;
          this.ctx.fillRect(0, 0, this.width, this.height);
        }

      }

      createCanvas(element) {
        this.element.innerHTML = '';

        this.width = element ? element.offsetWidth : this.width;
        this.height = element ? element.offsetHeight : this.height;

        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'canvas');
        canvas.setAttribute('width', this.width);
        canvas.setAttribute('height', this.height);

        this.ctx = canvas.getContext('2d');

        const col = Math.floor(this.width / this.letterSize);
        this.letters = Array(col).fill(0);

        this.element.append(canvas);

      }

      init() {
        this.createCanvas();

        setInterval(() => {
          this.drawAnimation();
        }, this.speed);

      }

      pausePlay() {
        this.status = this.status ? false : true;
      }}



    const matrix = new MatrixAnimation(document.querySelector('#matrix'), '#03fc35', 10, 'Arial', 80);

    matrix.init();

    window.addEventListener('resize', () => {
      matrix.createCanvas(document.querySelector('#matrix'));
    });

    setTimeout(function(){

      $( "#matrix" ).animate({
          opacity: 0.25,
        }, 5000, function() {
          // Animation complete.
        });
      $("#myVideo").fadeIn('100');
      $( "#myVideo" ).animate({
          opacity: 1,
        }, 5000, function() {
          // Animation complete.
        });
      setTimeout(function(){
        $('#billet-final').fadeIn('5000');
      }, 3000);

      vid.play();

      }, 5000);





  }else {
    console.log('NOP');
  }

  var vid = document.getElementById("myVideo");

    function playVid() {
        vid.play();
    }

    function pauseVid() {
        vid.pause();
    }
}


// MATRIX ANIM
