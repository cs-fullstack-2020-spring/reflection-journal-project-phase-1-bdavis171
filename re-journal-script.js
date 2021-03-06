//sanity
console.log('re-journal-script.js loaded');

//reference the elements needed
const creationDate = document.querySelector('#creation');
const entry = document.querySelector('#entry');
const confidenceLevel = document.querySelector('#confidence');
const confidenceDescription = document.querySelector('#confidence-description');
const postBtn = document.querySelector('#post-reflection');
const entry_logs = document.querySelector('#entry-logs');

//create an array to store each journal entry
const journalEntries = [];

//create a function that will store journal entries as objects into the previously created array
let postReflection = (event) => {
    //create an object variable that holds the value of each field
    let journalEntry = {
        date: creationDate.value,
        post: entry.value,
        confidence: confidenceLevel.value,
        description: confidenceDescription.value
    };
    //push the object into the journalEntries array
    journalEntries.push(journalEntry);
    //print each entry in the array
    let entryTemplate = '';
    journalEntries.forEach(ent =>  {
       
         entryTemplate = `${entryTemplate} Date: ${ent.date}\nEntry: ${ent.post}\nConfidence Level: ${ent.confidence}\nDescribe Confidence: ${ent.description}\n\n`;
        //POST: render on page.
         entry_logs.innerText = `${entryTemplate}`;
        
        
    });
    // !! looks like you're saving the data fine but you should be RENDERING this data on the page
    event.preventDefault();
}

//add the above function to the postBtn as an event
postBtn.addEventListener('click',postReflection);
