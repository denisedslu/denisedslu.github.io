function init() {
    eventListeners();
}

function eventListeners() {
  $('a.blocklink').on('mouseover', function() {
      $(this).addClass('active');
  }).on('mouseout', function() {
      $(this).removeClass('active');
  });
}


init();