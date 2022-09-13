// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textArea = document.getElementById('text')
const wordStats = document.getElementById('stat')

getWordCount = ()=>{
  var wordCount = ""
  wordCount = textArea.value.split(" ").length.toString()
  return wordCount
}

getCharCount = ()=>{
  var charCount = ""
  charCount+=textArea.value.length.toString()
  return charCount
}

getResults = ()=>{
  return "You've written "+getWordCount()+" words and "+getCharCount()+" characters."
}


textArea.addEventListener('input', function(e){
  e.preventDefault()
  wordStats.innerHTML = getResults()
})

// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.

