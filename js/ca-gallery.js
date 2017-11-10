var gProjects = [{
  id: "minesweeper",
  name: "Minesweeper",
  title: "Avoid the BOOM!",
  desc: "open every cell but the bombs",
  publishedAt: 1448693940000,
  labels: ["Matrixes", "keyboard events"],
  link: "https://www.google.com"
}, 
{
  id: "calcu",
  name: "Calculator",
  title: "Tell me youre num & I'll tell you youre sum!",
  desc: "It was a good slogen, but it can substract to...",
  publishedAt: 1448693940001,
  labels: ["Matrixes", "keyboard events"],
  link: "https://www.google.com"
},
{
  id: "Guess-Me",
  name: "Guess-Me",
  title: "The famous Know-It-All",
  desc: "Think of a person, and the Guess-Me magician will tell you who it is",
  publishedAt: 1448693940002,
  labels: ["Matrixes", "keyboard events"],
  link: "https://www.google.com"
  
}
]

function initPage(arr) {
  renderGallery(gProjects);
  renderPopUp(gProjects);
}

function renderGallery(arr) {
  var strHtml = '';
  for (var i = 0; i < arr.length; i++) {

    strHtml += '<div class="col-md-4 col-sm-6 portfolio-item">\
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal' + i + 1 + '">\
        <div class="portfolio-hover">\
          <div class="portfolio-hover-content">\
            <i class="fa fa-plus fa-3x"></i>\
          </div>\
        </div>\
        <img class="img-fluid" src="img/portfolio/' + arr[i].id + '.jpg" alt="">\
      </a>\
      <div class="portfolio-caption">\
        <h4>'+ arr[i].id + '</h4>\
        <p class="text-muted">' + arr[i].title + '</p>\
      </div>\
      </div>'
  }
  var elPorjContainer = document.querySelector('.porjContainer');
  elPorjContainer.innerHTML = strHtml;
}

function renderPopUp(arr) {
  var strHtml = '';
  for (var i = 0; i < arr.length; i++) {
    strHtml += '<div class="portfolio-modal modal fade" id="portfolioModal' + i + 1 + '" tabindex="-' + i + 1 + '" role="dialog" aria-hidden="true">\
    <div class="modal-dialog">\
      <div class="modal-content">\
        <div class="close-modal" data-dismiss="modal">\
          <div class="lr">\
            <div class="rl"></div>\
          </div>\
        </div>\
        <div class="container">\
          <div class="row">\
            <div class="col-lg-8 mx-auto">\
              <div class="modal-body">\
                <!-- Project Details Go Here -->\
                <h2>' + arr[i].name + '</h2>\
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>\
                <img class="img-fluid d-block mx-auto" src="img/portfolio/' + arr[i].id + '.jpg" alt="' + arr[i].id + 'game">\
                <p>' + arr[i].desc + '</p>\
                <ul class="list-inline">\
                  <li>Date: January 2017</li>\
                  <li>Client:' + arr[i].name + '</li>\
                  <li>Category: Illustration</li>\
                  <li><a href="../portfolioFiles/'+arr[i].id+'/index.html" target="_blank">Play Game</a></li>\
                </ul>\
                <button class="btn btn-primary" data-dismiss="modal" type="button">\
                    <i class="fa fa-times"></i>\
                    Close Project</button>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>\
    </div>\
  </div>\
'
  }
  var elPopUps = document.querySelector('.PopUps');
  elPopUps.innerHTML = strHtml;
}

function sendMail() {
  var elSubject = document.querySelector('#su').value;
  // var elTo = document.querySelector('#to').value;
  var elBody = document.querySelector('#body').value;
  var strHtml = "https://mail.google.com/mail/?view=cm&fs=1&to=moshikolevi1989@gmail.com&su="+elSubject+"&body="+elBody+""

  window.open(strHtml)
}

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict
