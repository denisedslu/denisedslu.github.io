function init() {
    eventListeners();
}

function eventListeners() {
  $('ul.sticky a').on('click', function(e) {
    $('div.row').show();
    e.preventDefault();
    var id = $(this).attr('href').replace('#','');
    var destination = $('div.row#' + id)


    if ($(window).innerWidth() < 600) {
      // console.log($(window).innerWidth)
      $('html,body').animate({scrollTop: $(destination).offset().top - 50});
    } else {
      $('html,body').animate({scrollTop: $(destination).offset().top});
    }

    if (id === 'about') {
      $('div.row.hide').hide();
    }
    
    
  });

  $('div.block.graphics, div.block.design').on('mouseover', function() {
      $(this).find('img').addClass('active')
      $(this).find('p,.maskwrap,.mask').show();
  }).on('mouseout', function() {
      $(this).find('img').removeClass('active')
      $(this).find('p,.maskwrap,.mask').hide();
  });
}


init();