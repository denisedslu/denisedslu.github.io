function init() {

        ich.grabTemplates();
        getData();
        eventListeners();

    }


    function getData() {
      $.each(writing, function(k,v) {
          
          var writing_block = ich.writing_block(v);
          var writing_also_block = ich.writing_also_block(v);

          if (v.also !== '') {
              $('div.row#words').find('ul[data-pub="' + v.pub + '"]').append(writing_also_block);  
          } else {
              $('div.row#words').find('ul[data-pub="' + v.pub + '"]').append(writing_block);
          }

      });


      $.each(code, function(k,v) {
          
          var graphics_block = ich.graphics_block(v);
          $('div.row#graphics').append(graphics_block);

      });

      $.each(design, function(k,v) {
          
          var design_block = ich.design_block(v);
          var design_url_block = ich.design_url_block(v);

          if (v.url !== '') {
              $('div.row#design').append(design_url_block);  
          } else {
              $('div.row#design').append(design_block);
          }

      });

      $.each(photo, function(k,v) {
          
          var photo_block = ich.photo_block(v);
          $('div.row#photo').append(photo_block);

      });



    }

    function eventListeners() {
      $('ul.sticky a').on('click', function(e) {
        $('div.row').show();
        e.preventDefault();
        var id = $(this).attr('href').replace('#','');
        var destination = $('div.row#' + id)


        if ($(window).innerWidth() < 600) {
          console.log($(window).innerWidth)
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
          $(this).find('p,div.mask').show();
      }).on('mouseout', function() {
          $(this).find('img').removeClass('active')
          $(this).find('p,div.mask').hide();
      });
    }


init();