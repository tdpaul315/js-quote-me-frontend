**How I want my application to work....**

    User navigates to page and can see all quotes displayed at the bottom of the screen   
    User also can create their own quote || comment on an existing quote || listen to quote || delete quote 



  1) Fetch my data from the backend (quotes/comments) --FETCH #1-> loadQuotes() build function that will retrieve all existing data(quotes/  comments)from backend api
 
 
  2) The retrieved data will be need to be appended to the DOM  -- find the location where the quotes/comments will go and append them 


  3) User can create a new quote => build a function that will grab form data from the user's input and pessimistically render the new object to ensure that whether or not the data is persisted to the database, that you still have access to the object (ie:errors).Then append to DOM via POST fetch --FETCH #2 (this will also include a 'submit' event)

  4) Add delete option and perform CRUD function via DELETE action --FETCH #3

  5) Add events ('click', once quote play button is clicked user will be able listen to it (via SpeechSynthesis) 

  6) Refactor if necessary, make everything pretty and make sure it works!


  Complete the steps to add comment functionality....

  1. Grab 'comment' button
  2. Add event listener on 'comment' button 
  3. Create a POST Comment function to pass in to event listener - this function will include a POST request to the back end to persist the data. In this function grab the comment value 
  





