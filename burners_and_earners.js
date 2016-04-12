var userOne = "Walter sent: Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.";
userOne = userOne.split(" ");
var userTwo = "Jesse sent: Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk, LankedOn.";
userTwo = userTwo.split(" ");
var userThree = "Saul sent: I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.";
userThree = userThree.split(" ");
var userFour = "Gus sent: I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.";
userFour = userFour.split(" ");

// Removing punctuation using regex
var cleanMystring = function(string){
  var cleanString = [];
  userOne.forEach(function(string){
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  cleanString.push(string);
});

  return cleanString;
 };
var One = cleanMystring(userOne);
console.log(One);
var Two = cleanMystring(userTwo);
console.log(Two);
var Three = cleanMystring(userThree);
console.log(Three);
var Four = cleanMystring(userFour);
console.log(Four);
// var infoOne = [];
// userOne.forEach(function(userInfo) {
//   var cleanString = userInfo.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
//   infoOne.push(cleanString);
// });
// var infoTwo = [];
// userTwo.forEach(function(userInfo) {
//   var cleanString = userInfo.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
//   infoTwo.push(cleanString);
// });
// var infoThree = [];
// userThree.forEach(function(userInfo) {
//   var cleanString = userInfo.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
//   infoThree.push(cleanString);
// });
// var infoFour = [];
// userFour.forEach(function(userInfo) {
//   var cleanString = userInfo.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
//   infoFour.push(cleanString);
// });
// creating a function to search for apps
var findApps = function(app) {
  var userApplications = [];

  for (i = 0; i < app.length; i++) {
    if (app[i] === "Faceblock" || app[i] === "Instantgam" || app[i] === "Snaptalk" || app[i] === "Tooter" || app[i] === "LankedOn") {

      userApplications.push(app[i]);
    }
  }
  return userApplications;

};

// printing applications for each user
var walter = findApps(userOne);
console.log(walter);
var jesse = findApps(userTwo);
console.log(jesse);
var saul = findApps(userThree);
console.log(saul);
var gus = findApps(userFour);
console.log(gus);
