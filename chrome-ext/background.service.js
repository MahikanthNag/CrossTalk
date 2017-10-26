// chrome.commands.onCommand.addListener(function (command) {
//       var text = "default text";

//       if ( ( command === "copy" || command == "cut" ) && window.getSelection() ) {
//         // sync();
//           // text = window.getSelection().toString();
// $.post("https://fcm.googleapis.com/fcm/send",
//     {
//         to: "fVOt_YtAB5I:APA91bFAIspwLislsFlBZl5pSzykczay91WbSdXTZWEmbW6ZjhyMHwrfWxBTT8hdPVdlxSjrepsu4hpdBdpZCCm0Q9_OeYmWjSfQnujrrPPJL8z_YknSZWbhWI31DC6WFg7oo46HDdm8",
//         data: {
//           copiedValue: text
//         }
//     },
//     function(data, status){
//         alert("Data of jax: " + data + "\nStatus: " + status);
//     });
//           alert("text is "+text);
//           syncClipboardToFirebase(text);
//           alert("After sync");
//           const dbRef = firebase.database().ref().child('text');
//     dbRef.set(text);
//     firebase.database().ref().child('history').push(text);
//       } else {
//           alert("random");
//       }
// });