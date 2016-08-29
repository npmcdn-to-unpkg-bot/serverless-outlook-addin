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

    document.getElementById('test').addEventListener('click', function () {
      var getFoos = fetch('https://jehollan.azure-api.net/bump/echo', {
        headers: {
          'x-auth-token': localStorage.getItem('id_token')
        },
        method: 'GET',
        cache: false
      });

      getFoos.then(function (response) {
        response.json().then(function (res) {
          console.log('response:', res);
        });
      });
    });


    //Initialize the homepage
    var lock = new Auth0Lock('pCXBrgxHBq7l99ROrRKKBslbdjUYAktO', 'hollan.auth0.com', {
      auth: {
        params: { scope: 'openid email' } //Details: https:///scopes
      }
    }
    );

    lock.on("authenticated", function (authResult) {
      lock.getProfile(authResult.idToken, function (error, profile) {
        if (error) {
          // Handle error
          return;
        }

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        console.log(JSON.stringify(profile));
      });
    });

  })
  ;