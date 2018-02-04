var config = {
    apiKey: "AIzaSyDVuhPjK8DFwhrsrxWuYUbNqUvxW99AGOw",
    authDomain: "socialnetwork-laboratoria.firebaseapp.com",
    databaseURL: "https://socialnetwork-laboratoria.firebaseio.com",
    projectId: "socialnetwork-laboratoria",
    storageBucket: "",
    messagingSenderId: "521810164064"
  };
  
  firebase.initializeApp(config);

  $("#buttonGoogle").click(function() {
  	authGoogle();

  })

  function authGoogle() {
  	var provider = new firebase.auth.GoogleAuthProvider();
  	authentication(provider);

  }

  function authentication(provider) {
  	firebase.auth().signInWithPopup(provider)
  	.then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
  // The signed-in user info.
    var user = result.user;
  // ...
})
  	.catch(function(error) {
  // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
  // The email of the user's account used.
     var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  // ...
});

}




$(document).ready(function() {

	/* Función para agregar post */

	$('#form').submit(function (e) {
		e.preventDefault();

		var $post = $('#post').val();

		console.log($post);

		var $row = $("<div />").addClass("row");
		var $col = $("<div />").addClass("col-sm-12");
		var $well = $("<div />").addClass("well");
		var $p = $("<p />");

		$p.text($post);

		$well.append($p)
		$col.append($well);
		$row.append($col);

		$("#send-post").append($row);

	});

 });