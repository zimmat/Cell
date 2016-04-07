
 var userOne ="Walter sent: Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.";
  if (userOne[userOne.length - 1] === ".")
      userOne = userOne.slice(0, -1);
 userOne = userOne.replace(".","")
 .replace(".","")
 .replace("","")
 .replace("/","")
 .replace("sent","")
 .replace("Hello I’ve got","")
.replace("and",",")
.replace(":","")
.replace(/I’m too old for the other ones/,"");

var userOne = userOne.trim();
var userOne = userOne.split(" ");
console.log(userOne);
 var userInfo = {};
userOne.forEach(function(user){
  var name = userOne[0];
   var apps = userOne[1];
    user[name] = apps;

});
var userOneData = "It was 67MB. Is that everything? I’m busy, you know.";
if (userOneData [userOneData .length - 1] === ".")
userOneData  = userOneData .slice(0, -1);
userOneData  = userOneData.replace("It","")
.replace("Is that everything","")
.replace(".","")
.replace("?","")
.replace("MB","")
.replace("I’m busy, you know","");
 userOneData = userOneData.trim();
var Data = userOneData.split(" ");
// Data = Data.trim();
console.log(Data);

var data = {};
Data.forEach(function(daata){
  var was = daata[0];
  var userOnedata = daata[1];
  data[was] = userOnedata;
});

var userTwo = " Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk, LankedOn.";
userTwo = userTwo.replace(".","")
.replace(".","")
.replace("!","")
.replace("Yo I’ve got ‘em all","");
console.log(userTwo);

var userThree = "I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands";
userThree = userThree.replace(".","")
.replace(".","")
.replace("I’m","")
.replace("on","" )
.replace("for","")
.replace("Business And I have an","")
.replace(" account for my cats","")
.replace("ouh","")
.replace("and","")
.replace("for my ex-husbands","");
console.log(userThree);

var userFour = "Gus sent: I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.";
userFour = userFour .replace("sent","")
.replace(":","")
 .replace(".","")
  .replace(",","")
.replace("I use Tooter and ","")
.replace("My customers aren’t on the others","")
.replace("so I can’t get them to engage with my brand there","");



// var userOne ={name: "Walter",apps:" Faceblock,Instantgam", dataInMB: 67} ;
// var userTwo ={name: "Jesse",apps:" Tooter, Faceblock, Instantgam, Snaptalk, LankedOn", dataInMB: 300};
// var userThree ={name: "Saul",apps:" Instantgam, LankedOn,Faceblock", dataInMB: 283};
// var userThree ={name: "Gus",apps:" Tooter,Instantgam", dataInMB: 150};
