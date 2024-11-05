# jokes-react
A Joke database in React

# Project Proposal Friday 11/1/2024
(scroll down for schedule)

Fall 2024 Final Project Proposal
## An elevator pitch of your project (something you can say in less than 1 minute
This will be a joke database. Users can create a joke. Users can go to a page and get a random joke of the day (I want that to be the landing page, in a way, where you are greeted with a joke.
## The names of the contributors (if you are working with a partner)
    Just me
## A rough list of features (this needs to be large enough to satisfy the "scope" requirements)
- Joke generator (pulls from the database)
- Add a joke
 (because we track author, uses authentication/authorization if you want your joke attributed to you)
- View all jokes
- Search for a joke. This will search the database of all the jokes, filtering by whatever word you put in, whatever author you put, etc.
- Author Selection page 
This will show all the different authors, and you have to click on them to see their jokes
- Jokes submitted by the aforementioned author.
- Edit/delete a joke you previously submitted 
- Submit a request to edit another user’s joke. (perhaps the author had a typo)
- Review requests for edit on your joke, and approve or deny them.
## A list of new things you will need to do to accomplish your project (e.g. websockets)
Not new to the class, but things s i still feel shaky on but are not technically new
- Reusable layout components
- authorization/authentication (determining the current user, syncing them with the db, etc)
- Toasts

# Schedule:
### Nov 6
    Goal for features completed:
    [] API created with at least one read endpoint, although it may not necessarily read from the database at this point
    [] Authentication works
    [] Authorization works
    [] Add a basic test so next deadline we can have automated testing in the pipeline.

Rubric Items completed:  
[] Technology: Local storage /5  
[] Technology: Client-side state   stores (e.g., TanStack Query or Context) /5  
[] Technology: Toasts / Global notifications or alerts /5    
[] Technology: Error handling (API requests and render errors) /5  
[0.5] Technology: Network calls for reading and writing data /5   
[5] Technology: TypeScript for developer assistance /5  
[0.25] Technology: 10+ pages or views /5  
[] Technology: CI/CD pipeline /5    
[1] Technology: Tests run in pipeline, pipeline aborts on failure /5  
[] Technology: Linting in pipeline /5  
[] Technology: 3+ generic form input components /9  
[] Technology: 4+ generic layout components /12  
[10] Technology: Authentication and user account support /10  
[10] Technology: Authorized and public pages /5  
[] Experience: All experiences mobile-friendly /5  
[] Experience: 3 instances of reordering elements on smaller screens /5  
[] Professional, organized, and smooth experience /20  

### Nov 9
    Goal for features completed:
    [] Database deployed & running on kubernetes  
    [] Api deployed and running on kubernetes  
    [] Client (Web App) deployed and running on kubernetes
    [] Authentication/Authorization still works on kubernetes
    [] Linting in pipeline
    [] Testing in pipeline

Rubric Items completed:  
[] Technology: Local storage /5  
[] Technology: Client-side state   stores (e.g., TanStack Query or Context) /5  
[] Technology: Toasts / Global notifications or alerts /5  
[] Technology: Error handling (API requests and render errors) /5  
[1] Technology: Network calls for reading and writing data /5 
[5] Technology: TypeScript for developer assistance /5  
[0.25] Technology: 10+ pages or views /5  
[5] Technology: CI/CD pipeline /5  
[5] Technology: Tests run in pipeline, pipeline aborts on failure /5  
[5] Technology: Linting in pipeline /5  
[] Technology: 3+ generic form input components /9  
[] Technology: 4+ generic layout components /12  
[10] Technology: Authentication and user account support /10  
[10] Technology: Authorized and public pages /5  
[] Experience: All experiences mobile-friendly /5  
[] Experience: 3 instances of reordering elements on smaller screens /5  
[] Professional, organized, and smooth experience /20   


### Nov 13
    Goal for features completed:
    [] View All Jokes
    [] Joke Generator (retrieves a random joke or something of that sort)
    [] Add a spinner for loading while fetching data

Rubric Items completed:  
[] Technology: Local storage /5  
[1] Technology: Client-side state stores (e.g., TanStack Query or Context) /5  
[] Technology: Toasts / Global notifications or alerts /5  
[] Technology: Error handling (API requests and render errors) /5  
[1] Technology: Network calls for reading and writing data /5 
[5] Technology: TypeScript for developer assistance /5  
[1] Technology: 10+ pages or views /5  
[5] Technology: CI/CD pipeline /5  
[5] Technology: Tests run in pipeline, pipeline aborts on failure /5  
[5] Technology: Linting in pipeline /5  
[] Technology: 3+ generic form input components /9  
[3] Technology: 4+ generic layout components /12  
    - (component 1: layout to display a joke)
[10] Technology: Authentication and user account support /10  
[10] Technology: Authorized and public pages /5  
[1] Experience: All experiences mobile-friendly /5  
[] Experience: 3 instances of reordering elements on smaller screens /5  
[2] Professional, organized, and smooth experience /20  

### Nov 16
    Goal for features completed:
    [] Add a joke page (this will include a custom input form for the rubric)
    [] Edit/delete one of the current users existing jokes page


Rubric Items completed:  
[] Technology: Local storage /5  
[1] Technology: Client-side state stores (e.g., TanStack Query or Context) /5  
[] Technology: Toasts / Global notifications or alerts /5  
[] Technology: Error handling (API requests and render errors) /5  
[2] Technology: Network calls for reading and writing data /5 
[5] Technology: TypeScript for developer assistance /5  
[2] Technology: 10+ pages or views /5  
- View all jokes
- Joke Generator
- add new joke
- edit joke

[5] Technology: CI/CD pipeline /5  
[5] Technology: Tests run in pipeline, pipeline aborts on failure /5  
[5] Technology: Linting in pipeline /5  
[3] Technology: 3+ generic form input components /9  
[3] Technology: 4+ generic layout components /12  
    - (component 1: layout to display a joke)
[10] Technology: Authentication and user account support /10  
[10] Technology: Authorized and public pages /5  
[1] Experience: All experiences mobile-friendly /5  
[] Experience: 3 instances of reordering elements on smaller screens /5  
[2] Professional, organized, and smooth experience /20  

### Nov 20
    Goal for features completed:
    [] Add good user feedback for when an item is submitted, etc, etc
    [] improve styling on the pages created so far, make the buttons look good, etc.
    [] Author selection page (view all authors on the apge)

Rubric Items completed:  
[] Technology: Local storage /5  
[1] Technology: Client-side state stores (e.g., TanStack Query or Context) /5  
[4] Technology: Toasts / Global notifications or alerts /5  
[] Technology: Error handling (API requests and render errors) /5  
[2] Technology: Network calls for reading and writing data /5 
[5] Technology: TypeScript for developer assistance /5  
[2.5] Technology: 10+ pages or views /5  
- View all jokes
- Joke Generator
- add new joke
- edit joke
- see all authors of jokes

[5] Technology: CI/CD pipeline /5  
[5] Technology: Tests run in pipeline, pipeline aborts on failure /5  
[5] Technology: Linting in pipeline /5  
[3] Technology: 3+ generic form input components /9  
[6] Technology: 4+ generic layout components /12  
    - (component 1: layout to display a joke)
    - (component 2: layout for editing a joke, or the home button, etc.)
[10] Technology: Authentication and user account support /10  
[10] Technology: Authorized and public pages /5  
[1] Experience: All experiences mobile-friendly /5  
[] Experience: 3 instances of reordering elements on smaller screens /5  
[6] Professional, organized, and smooth experience /20  
### Nov 23
    Goal for features completed:
    [] Submit a request to edit another user’s joke. (perhaps the author had a typo)
    [] Review requests for edit on your joke, and approve or deny them.
    [] Ensure on the requests it is mobile friendly, perhaps has an alternate comparison layout for mobile

### Nov 26
    Goal for features completed:
    [] 
### Dec 4

    [] Jokes submitted by the aforementioned author.

### notes on testing
- jest  (mostly supported, been around for a while)
- vitest (made by the people who created vite)
    --tests are identified by .test.js





