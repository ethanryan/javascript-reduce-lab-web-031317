//batteries:

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

var totalBatteries = batteryBatches.reduce(function(total, currentValue) {
  //total is the accumulated return value, and currentValue is the next number being added to total
  return total + currentValue;
}, 0);



//monologue:

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];


// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
//
// var countedNames = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++;
//   }
//   else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});

////result:

// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


var wordCountMap = monologueLines.reduce(function (total, sentence) {

  var sentenceWordCount = sentence.split(" ").length

	if (sentenceWordCount in total) {
    total[sentenceWordCount]++;
	} else {
    total[sentenceWordCount] = 1;
	}
	return total;
}, {});


///not quite::::
// var wordCountMap = monologueLines.reduce(function(wordCount, sentence) {
//     if (sentence in wordCount) {
//       wordCount[sentence]++;
//     }
//     else {
//       wordCount[sentence] = 1;
//     }
//     return wordCount;
//   }, {});
