$(document)
  .ready(function () {

    // fix menu when passed
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function () {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
          $('.fixed.menu').transition('fade out');
        }
      })
      ;

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
      ;

    document.getElementById('btn-login').addEventListener('click', function () {
      console.log('clicked login');
      lock.show();
    });


    //Initialize the homepage
    var lock = new Auth0Lock('pCXBrgxHBq7l99ROrRKKBslbdjUYAktO', 'hollan.auth0.com', {
      auth: {
        params: { scope: 'openid email' } //Details: https:///scopes
      }
    }
    );

  })
  ;