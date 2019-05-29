function onRecaptchaLoadCallback() {
  var grecaptchaBadge = grecaptcha.render('grecaptcha', {
      'sitekey': '6LcWm5kUAAAAAIzFRTkBAslTq2BaGv9RpmGEuihj',
      'badge': 'bottomright',
      'size': 'invisible',
  });

  grecaptcha.ready(function () {
      grecaptcha.execute(grecaptchaBadge, {
          action: 'contactForm'
      })
          .then(function (token) {
              console.log(token, 'ttt');
              window.reloadCaptcha = function() {
                  grecaptcha.execute(grecaptchaBadge, {
                      action: 'contactForm'
                  }).then(function (tok) {
                      sessionStorage.setItem('captcha', tok);
                  });
              };
          });
  });
}
