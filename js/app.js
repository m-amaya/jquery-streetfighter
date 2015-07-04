$(function () {
  var $capcomLogo = $('#capcom-logo'),
    $poweredBySvg = $('#powered-by-svg'),
    $jqueryLogo = $('#jquery-logo'),
    $sfLogo = $('#sf-logo'),
    $ryuReady = $('#ryu-ready'),
    $ryuCool = $('#ryu-cool'),
    $ryuKick = $('#ryu-kick'),
    $ryuThrow = $('#ryu-throw'),
    $hadouken = $('#hadouken'),
    $directions = $('#directions'),
    ryuReadyHidden = true,
    kTriggered = 0,
    tTriggered = 0;
  
  var endKicking = function() {
    $ryuKick.hide();
    $ryuReady.show();
    kTriggered = 0;
  }
  
  var endThrowing = function() {
    $ryuThrow.hide();
    $hadouken.hide();
    $ryuReady.show();
    tTriggered = 0;
  }

    $capcomLogo.delay(1200).fadeIn(1000).delay(1000).fadeOut(1000)
      .queue(function () {
        $poweredBySvg.delay(1200).fadeIn(1000).delay(1000).fadeOut(1000)
          .queue(function () {
            $jqueryLogo.delay(1200).fadeIn(1000).delay(1000).fadeOut(1000)
              .queue(function () {
                $sfLogo.delay(1200).fadeIn(1000).delay(1000)
                  .queue(function () {
                    $sfLogo.addClass('anim-logo');
                    $ryuReady.delay(1000).fadeIn(1000);
                    $directions.delay(1000).fadeIn(1000);
                    ryuReadyHidden = false;
                  });
              });
          });
      });

  $ryuReady.mouseenter(function () {
    $ryuReady.hide();
    ryuReadyHidden = true;
    $ryuCool.show();
  });

  $ryuCool.mouseleave(function () {
    $ryuCool.hide();
    $ryuReady.show();
    ryuReadyHidden = false;
  });

  $(document).keypress(function (e) {
    console.log(e);
    //check if 'k' has been pressed
    if ((e.keyCode === 107) && !ryuReadyHidden) {
      endThrowing();
      kTriggered++;
      if (kTriggered % 2 === 1) {
        $ryuReady.hide();
        $ryuKick.show();
      } else {
        endKicking();
      }
    //check if 't' has been pressed
    } else if((e.keyCode === 116) && !ryuReadyHidden) {
      endKicking();
      tTriggered++;
      if (tTriggered % 2 == 1) {
        $ryuReady.hide();
        $ryuThrow.show();
        $hadouken.show();
      } else {
        endThrowing();
      }
    //space bar clears everything
    } else if((e.keyCode === 32) && !ryuReadyHidden) {
      endThrowing();
      endKicking();
    }
  });

});
