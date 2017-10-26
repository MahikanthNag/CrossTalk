chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  angular.bootstrap(document);
});

// var jQueryScript = document.createElement('script');  
// jQueryScript.setAttribute('src','');
// document.head.appendChild(jQueryScript);

var myApp = angular.module("myApp", []);
var myCtrl = myApp.controller("myCtrl", function ($scope, $http) {
  function takeSnapshot() {
    console.log("clicked");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabArray) {
      console.log("hai");
      console.log(tabArray[0].url);
    });
    chrome.tabs.captureVisibleTab(null, {}, function (image) {
      // You can add that image HTML5 canvas, or Element.
      //document.body.appendChild(image);
      console.log(image);

      var database = firebase.database();
      console.log('ImageData' + $scope.emailid);
      var email = $scope.emailid.replace("@", "");
      email = email.replace(".", "");
      database.ref('ImageData_' + email).set({
        "image": image
      });
    });
  };
  $scope.takeSnapshot = takeSnapshot;
  function syncClipboardToFirebase(data) {
    alert("data : "+data);
    console.log("data is "+data);
    const dbRef = firebase.database().ref().child('text');
    dbRef.set(data);
    firebase.database().ref().child('history').push(data);
  }

  function sync(info) {
    // can be replaced with crossy server
    syncClipboardToFirebase(info.selectionText);
  }
  chrome.contextMenus.create({
    title: 'Cross Talk',
    contexts: ['selection'],
    onclick: sync
  });
  chrome.commands.onCommand.addListener(function (command) {
      var text = "default text";

      if ( ( command === "copy" || command == "cut" ) && window.getSelection() ) {
        // sync();
          // text = window.getSelection().toString();
/*$.post("https://fcm.googleapis.com/fcm/send",
    {
        to: "fVOt_YtAB5I:APA91bFAIspwLislsFlBZl5pSzykczay91WbSdXTZWEmbW6ZjhyMHwrfWxBTT8hdPVdlxSjrepsu4hpdBdpZCCm0Q9_OeYmWjSfQnujrrPPJL8z_YknSZWbhWI31DC6WFg7oo46HDdm8",
        data: {
          copiedValue: text
        }
    },
    function(data, status){
        alert("Data of jax: " + data + "\nStatus: " + status);
    });*/
          alert("text is "+text);
          syncClipboardToFirebase(text);
          alert("After sync");
          const dbRef = firebase.database().ref().child('text');
    dbRef.set(text);
    firebase.database().ref().child('history').push(text);
      } else {
          alert("random");
      }
});
  $scope.syncClipboardToFirebase = syncClipboardToFirebase;
});   