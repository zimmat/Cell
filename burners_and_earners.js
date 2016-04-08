var userOne = "Walter sent: Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.";
  userOne = userOne.slice(0, -33);
userOne = userOne.split("sent: Hello. I’ve got ");

var first = [];
userOne.forEach(function(user) {
  first.push(user.split("and"));
});
//   console.log(userOne);
 console.log(first);

var userTwo = "Jesse sent: Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk, LankedOn.";
if (userTwo[userTwo.length - 1] === ".")
  userTwo = userTwo.slice(0, -1);
userTwo = userTwo.split("sent: Yo! I’ve got ‘em all.");

var two = [];
userTwo.forEach(function(user) {
  two.push(user.split(","));
});

console.log(two);

var userThree = "Saul sent: I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.";
userThree = userThree.slice(0, -20);
userThree = userThree.replace("for Business. And I have an Instantgam account for my cats.","Instantgam");
userThree = userThree.split("sent: I’m on");

var three = [];
userThree.forEach(function(userThree){
 three.push(userThree.split("Oh, and "));
});
console.log(three);
// var threee = [];
// three.forEach(function(userThree){
//  threee.push(userThree.split(" account for my cats. Oh, and "));
// });
// console.log(threee);

// var userFour = "Gus sent: I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.";

// var userOneData = "Walter sent: It was 67MB. Is that everything? I’m busy, you know.";
// var userTwoData = "Jesse sent: Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.";
// var userThreeData = "Saul sent: I think 283MB. That’s what the guy at the store said. I think it means MegaBites.";
// var userFourData = "Gus sent: Around 150MB. I have the receipts if you need more precise figures.";
