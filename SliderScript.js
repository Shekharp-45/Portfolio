$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  
    $('.read-more').click(function(event) {
      event.preventDefault();
      var $this = $(this);
      var $description = $this.closest('.description');
      var $moreText = $description.find('.more-text');
      
      if ($moreText.is(':visible')) {
        $moreText.hide();
        $this.text('Read More');
      } else {
        $moreText.show();
        $this.text('Read Less');
      }
    });
  });
  
  