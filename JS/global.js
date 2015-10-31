/**
 * Created by Frank on 23.10.2015.
 */

$('.flooring').hover(
  function (event) {
    var e = event.target.className;
    console.log(e);
    var ct = $(this).offset().top,
      cl = $(this).offset().left;

    var height = $(this).height(),
      width = $(this).width(),
      h = height / 2,
      w = width / 2,
      px = ct + h,
      py = cl + w;
    //console.log('позиція топ', ct);
    //console.log('позиція лефт', cl);
    //console.log('висота і ширина елемента', height, width);
    //console.log('половина висоти і ширини елемента', h, w);
    //console.log('px', px);
    //console.log('py', py);
    console.log('------------------------------------------------------------------');
    $('.animation-border').addClass('visible');
    $('.animation-border').offset({top: ct, left: cl});
    $('.animation-border').height(height - 8);
    $('.animation-border').width(width - 8);


    $('.flooring').click(function() {
      console.log('click flooring');
    });
    $(document).ready(
      $('.animation-border').click(function() {
        console.log('клікнув на затіняшку');
        $(this).parent().click(function() {
          console.log('клікнув на елемент');
        });
      })
    );

  },

  function () {
  }
);
