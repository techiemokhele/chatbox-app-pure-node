var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

    var Fake = [
      'Hi there! I heard you are in the Code Academy at Road to Hire',
      'Nice to meet you',
      'How are you?',
      'Not too bad, thanks',
      'What do you do?',
      'That\'s awesome',
      'We are hot on Netlify!',
      'We think you\'re a cool dev',
      'Why do you think that?',
      'Can you explain?',
      'Anyway I\'ve gotta go now',
      'It was a pleasure chat with you',
      'Time to go code',
      'Bye',
      ':)'
    ]

$(window).load(function() {
  $messages.mCustomScrollbar();
  fetchData()
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function fetchData(){
  fetch('dynamic')
  .then(res => res.json())
  .then(data => {
    // do some work
    console.log('This fired')
    Fake = [...data]
  })
  .catch(err => console.log(err))
}

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})


function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="./image/helpbot.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="./image/helpbot.jpg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}