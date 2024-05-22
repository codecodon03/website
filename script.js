FB.AppEvents.logPageView();
FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    // The user is already logged in
  } else {
    // The user is not logged in
  }
}, true);

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  }