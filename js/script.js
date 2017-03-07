function init() {
    eventListeners();
}

function eventListeners() {
  $('div.block.graphics').on('mouseover', function() {
      $(this).find('p,.maskwrap,.mask').show();
  }).on('mouseout', function() {
      $(this).find('p,.maskwrap,.mask').hide();
  });
}


init();