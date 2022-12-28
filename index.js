const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
    return tutorials.map(tutorial => {
    const tutorialSplit = tutorial.split(' ')
    const TutorialSplit = tutorialSplit.map(eachWord => {
      return eachWord[0].toUpperCase() + eachWord.slice(1);  
    }) 
    let allTitleCased = TutorialSplit.join(' ')
    return allTitleCased;
  })
}











































// const titleCased = () => {
//   return tutorials.map(tutorial => {
//     const tutorialSplit = tutorial.split(' ')
//     const TutorialSplit = tutorialSplit.map(eachWord => {
//       return eachWord[0].toUpperCase() + eachWord.slice(1);  
//     }) 
//     let allTitleCased = TutorialSplit.join(' ')
//     console.log(allTitleCased);
//     return allTitleCased;
//   })
// }

// // titleCased();