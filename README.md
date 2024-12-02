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
[5] Technology: Local storage /5  
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
[5] Technology: Local storage /5  
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
[5] Technology: Local storage /5  
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
[5] Technology: Local storage /5  
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
    -[] Add good user feedback for when an item is submitted, etc, etc
    -[] improve styling on the pages created so far, make the buttons look good, etc.
    -[] Author selection page (view all authors on the apge)

Rubric Items completed:  
- [5] Technology: Local storage /5  
- [1] Technology: Client-side state stores (e.g., TanStack Query or Context) /5  
- [4] Technology: Toasts / Global notifications or alerts /5  
- [] Technology: Error handling (API requests and render errors) /5  
- [2] Technology: Network calls for reading and writing data /5 
- [5] Technology: TypeScript for developer assistance /5  
- [2.5] Technology: 10+ pages or views /5  
    - View all jokes
    - Joke Generator
    - add new joke
    - edit joke
    - see all authors of jokes

- [5] Technology: CI/CD pipeline /5  
- [5] Technology: Tests run in pipeline, pipeline aborts on failure /5  
- [5] Technology: Linting in pipeline /5  
- [3] Technology: 3+ generic form input components /9  
- [6] Technology: 4+ generic layout components /12  
    - (component 1: layout to display a joke)
    - (component 2: layout for editing a joke, or the home button, etc.)
- [10] Technology: Authentication and user account support /10  
- [10] Technology: Authorized and public pages /5  
- [1] Experience: All experiences mobile-friendly /5  
- [] Experience: 3 instances of reordering elements on smaller screens /5  
- [6] Professional, organized, and smooth experience /20  


### Nov 23
    Goal for features completed:
    - [] Submit a request to edit another user’s joke. (perhaps the author had a typo)
    - [] Review requests for edit on your joke, and approve or deny them.
    - [] Ensure on the requests it is mobile friendly, perhaps has an alternate comparison layout for mobile

[5] Technology: Local storage /5  
[1] Technology: Client-side state stores (e.g., TanStack Query or Context) /5  
[4] Technology: Toasts / Global notifications or alerts /5  
[] Technology: Error handling (API requests and render errors) /5  
[5] Technology: Network calls for reading and writing data /5 
[5] Technology: TypeScript for developer assistance /5  
[4] Technology: 10+ pages or views /5  
[5] Technology: CI/CD pipeline /5  
[5] Technology: Tests run in pipeline, pipeline aborts on failure /5  
[5] Technology: Linting in pipeline /5  
[6] Technology: 3+ generic form input components /9  
[9] Technology: 4+ generic layout components /12  
    - (component 1: layout to display a joke)
    - (component 2: layout for editing a joke, or the home button, etc.)
[10] Technology: Authentication and user account support /10  
[10] Technology: Authorized and public pages /5  
[1] Experience: All experiences mobile-friendly /5  
[] Experience: 3 instances of reordering elements on smaller screens /5  
[8] Professional, organized, and smooth experience /20  


### Nov 26
    Goal for features completed:
    [] Search for a joke page
    [] stretch goal: simple stats page on how many users we have, how many jokes, etc. 
    [] Double-check we have appropriate error handling
    [] as needed: a generic reusable error display component may be helpful 

[5] Technology: Local storage /5  
[1] Technology: Client-side state stores (e.g., TanStack Query or Context) /5  
[4] Technology: Toasts / Global notifications or alerts /5  
[] Technology: Error handling (API requests and render errors) /5  
[5] Technology: Network calls for reading and writing data /5 
[5] Technology: TypeScript for developer assistance /5  
[5] Technology: 10+ pages or views /5  
[5] Technology: CI/CD pipeline /5  
[5] Technology: Tests run in pipeline, pipeline aborts on failure /5  
[5] Technology: Linting in pipeline /5  
[6] Technology: 3+ generic form input components /9  
[9] Technology: 4+ generic layout components /12  
    - (component 1: layout to display a joke)
    - (component 2: layout for editing a joke, or the home button, etc.)
    - perhaps a generic component for stats?
    - perhaps one for showing errors
    
[10] Technology: Authentication and user account support /10  
[5] Technology: Authorized and public pages /5  
[1] Experience: All experiences mobile-friendly /5  
[] Experience: 3 instances of reordering elements on smaller screens /5  
[8] Professional, organized, and smooth experience /20  

### Dec 4
    Goal for features completed:
    [] Anything I forgot
    [] make sure you can view your own jokes
    [] style, style, style
    [] cleanup, cleanup, cleanup
    [] make sure the login page looks pretty
    [] mobile friendly all the way


[5] Technology: Local storage /5  
[5] Technology: Client-side state stores (e.g., TanStack Query or Context) /5  
[5] Technology: Toasts / Global notifications or alerts /5  
[5] Technology: Error handling (API requests and render errors) /5  
[5] Technology: Network calls for reading and writing data /5 
[5] Technology: TypeScript for developer assistance /5  
[5] Technology: 10+ pages or views /5  
[5] Technology: CI/CD pipeline /5  
[5] Technology: Tests run in pipeline, pipeline aborts on failure /5  
[5] Technology: Linting in pipeline /5  
[6] Technology: 3+ generic form input components /9  
[12] Technology: 4+ generic layout components /12  
    - (component 1: layout to display a joke)
    - (component 2: layout for editing a joke, or the home button, etc.)
    - perhaps a generic component for stats?
    - perhaps one for showing errors
    
[10] Technology: Authentication and user account support /10  
[5] Technology: Authorized and public pages /5  
[5] Experience: All experiences mobile-friendly /5  
[5] Experience: 3 instances of reordering elements on smaller screens /5  
- ideas on what to re-order:
- the way stats are displayed
- the way you review requests to edit your jokes
[20] Professional, organized, and smooth experience /20 

##### Actual timeline
### Nov 6
    Goal for features completed:
    [x] API created with at least one read endpoint, although it may not necessarily read from the database at this point
    [x] Authentication works (users can log in)
    [x] Authorization works (whether or not you see certain text is based on the value of your email)
    [1/2] Add a basic test so next deadline we can have automated testing in the pipeline.  
        Explanation: The api has a unit testing framework, although it doesn't have anything to test yet.  
        I have added Jest to my react app, but am still sorting out some errors trying to get the test to run.

Rubric Items completed:  
[5] Technology: Local storage /5  
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


### Actual: Nov 9
    Goal for features completed:
    [x] Database deployed & running on kubernetes  (as far as I know, the logs look happy but I'm not fetching real data yet.)
    [x] Api deployed and running on kubernetes  
    [] Client (Web App) deployed and running on kubernetes
    [] Authentication/Authorization still works on kubernetes
    [] Linting in pipeline
    [] Testing in pipeline
(I plan to implement more Monday to catch up to this)

Rubric Items completed:  
[5] Technology: Local storage /5  
[] Technology: Client-side state   stores (e.g., TanStack Query or Context) /5  
[] Technology: Toasts / Global notifications or alerts /5  
[] Technology: Error handling (API requests and render errors) /5  
[0] Technology: Network calls for reading and writing data /5 
[5] Technology: TypeScript for developer assistance /5  
[0.25] Technology: 10+ pages or views /5  
[3] Technology: CI/CD pipeline /5  
[0] Technology: Tests run in pipeline, pipeline aborts on failure /5  
[0] Technology: Linting in pipeline /5  
[] Technology: 3+ generic form input components /9  
[] Technology: 4+ generic layout components /12  
[6] Technology: Authentication and user account support /10  
[0] Technology: Authorized and public pages /5  
[] Experience: All experiences mobile-friendly /5  
[] Experience: 3 instances of reordering elements on smaller screens /5  
[] Professional, organized, and smooth experience /20   


# Actual: Nov 13
Goal for features completed:
    [x] View All Jokes (1/2 credit, it doesn't read from db)
    [] Joke Generator (retrieves a random joke or something of that sort)
    [x] Add a spinner for loading while fetching data

Rubric Items completed:  
[] Technology: Local storage /5  
[3] Technology: Client-side state stores (e.g., TanStack Query or Context) /5  
[] Technology: Toasts / Global notifications or alerts /5  
[] Technology: Error handling (API requests and render errors) /5  
[1] Technology: Network calls for reading and writing data /5 
[5] Technology: TypeScript for developer assistance /5  
[1] Technology: 10+ pages or views /5  
[3] Technology: CI/CD pipeline /5  
[] Technology: Tests run in pipeline, pipeline aborts on failure /5  
[] Technology: Linting in pipeline /5  
[] Technology: 3+ generic form input components /9  
[] Technology: 4+ generic layout components /12  
    - (component 1: layout to display a joke)
[0] Technology: Authentication and user account support /10   [Was implemented, now 0]
[0] Technology: Authorized and public pages /5  [Was impplemented, now 0 ]
[1] Experience: All experiences mobile-friendly /5  
[] Experience: 3 instances of reordering elements on smaller screens /5  
[] Professional, organized, and smooth experience /20  

### actual Nov 16
    Goal for features completed:
    [1/2, the api=done, half of front end] Add a joke page (this will include a custom input form for the rubric)
    [] Edit/delete one of the current users existing jokes page


Rubric Items completed:  
[] Technology: Local storage /5  
[2] Technology: Client-side state stores (e.g., TanStack Query or Context) /5  
[] Technology: Toasts / Global notifications or alerts /5  
[] Technology: Error handling (API requests and render errors) /5  
[2] Technology: Network calls for reading and writing data /5 
[5] Technology: TypeScript for developer assistance /5  
[2.5] Technology: 10+ pages or views /5  
- View all jokes
- Joke Generator
- add new joke
- edit joke

[3] Technology: CI/CD pipeline /5  
[] Technology: Tests run in pipeline, pipeline aborts on failure /5  
[] Technology: Linting in pipeline /5  
[1] Technology: 3+ generic form input components /9  
[] Technology: 4+ generic layout components /12  
    - (component 1: layout to display a joke)
[is now broken] Technology: Authentication and user account support /10  
[] Technology: Authorized and public pages /5  
[1] Experience: All experiences mobile-friendly /5  
[] Experience: 3 instances of reordering elements on smaller screens /5  
[2] Professional, organized, and smooth experience /20  


### NOv 20 actual
### Nov 20
    Goal for features completed:
    -[x] Add good user feedback for when an item is submitted, etc, etc
        - i have toast upon adding a joke
        - I have a toast upon deleting a joke
        - When a joke is deleted from the list of jokes, the query is immediately invalidated and the list of jokes is re-fetched.
        
    -[] improve styling on the pages created so far, make the buttons look good, etc.
    -[] Author selection page (view all authors on the apge)

Rubric Items completed:  
- [] Technology: Local storage /5  
- [5] Technology: Client-side state stores (e.g., TanStack Query or Context) /5  
- [5] Technology: Toasts / Global notifications or alerts /5  
- [] Technology: Error handling (API requests and render errors) /5  
- [5] Technology: Network calls for reading and writing data /5 
- [5] Technology: TypeScript for developer assistance /5  
- [2.5] Technology: 10+ pages or views /5  
    - View all jokes
    - Joke Generator
    - add new joke

- [3] Technology: CI/CD pipeline /5  
- [] Technology: Tests run in pipeline, pipeline aborts on failure /5  
- [] Technology: Linting in pipeline /5  
- [] Technology: 3+ generic form input components /9  
- [3] Technology: 4+ generic layout components /12  
    - component 1: layout to display a joke
- [] Technology: Authentication and user account support /10  
- [] Technology: Authorized and public pages /5  
- [3] Experience: All experiences mobile-friendly /5   (right now they are,but need to check for future)
- [] Experience: 3 instances of reordering elements on smaller screens /5  
- [6] Professional, organized, and smooth experience /20  

### Nov 23 Actual
### Nov 23
    Goal for features completed:
    - [1/2] Submit a request to edit another user’s joke. (perhaps the author had a typo)
    - [] Review requests for edit on your joke, and approve or deny them.
    - [] Ensure on the requests it is mobile friendly, perhaps has an alternate comparison layout for mobile

    what I did instead:
    - Last time after I submitted I uncommented the authentication and that works again
            Note: I’m not doing all the token stuff we did in class though, just login with username/password
    - Now when we add a joke we get the current user and submit them as the “author” of the joke.
    - I added the “get all authors” page that I was supposed to add last time, so now we can retrieve all authors and the count of how many jokes they have contributed.
    -    With that, now we have another reusable component for displaying things, which I’m hoping counts as a reusable layout component. It holds the author’s name and the count of how many jokes they have submitted. 
    - We have the link to a get jokes by authors page
    - I added a link to the edit joke by id page, but am only half done with actually implementing that.


Rubric Items completed:  
- [] Technology: Local storage /5  
- [5] Technology: Client-side state stores (e.g., TanStack Query or Context) /5  
- [5] Technology: Toasts / Global notifications or alerts /5  
- [] Technology: Error handling (API requests and render errors) /5  
- [5] Technology: Network calls for reading and writing data /5 
- [5] Technology: TypeScript for developer assistance /5  
- [3] Technology: 10+ pages or views /5  
    - View all jokes
    - Joke Generator
    - add new joke
    - all authors
    - jokes by author (1/2 implemented)

- [3] Technology: CI/CD pipeline /5  
- [] Technology: Tests run in pipeline, pipeline aborts on failure /5  
- [] Technology: Linting in pipeline /5  
- [] Technology: 3+ generic form input components /9  
- [3] Technology: 4+ generic layout components /12  
    - component 1: layout to display a joke
    - component 2: dispay an author & how many jokes they have submitted
- [5] Technology: Authentication and user account support /10  
- [] Technology: Authorized and public pages /5  
- [3] Experience: All experiences mobile-friendly /5   (right now they are,but need to check for future)
- [] Experience: 3 instances of reordering elements on smaller screens /5  
- [6] Professional, organized, and smooth experience /20  



### Nov 26 Actual
    Goal for features completed:
    [1/x] Search for a joke page
    [] stretch goal: simple stats page on how many users we have, how many jokes, etc. 
    [] Double-check we have appropriate error handling
    [] as needed: a generic reusable error display component may be helpful 


Rubric Items completed:  
- [] Technology: Local storage /5  
- [5] Technology: Client-side state stores (e.g., TanStack Query or Context) /5  
- [5] Technology: Toasts / Global notifications or alerts /5  
- [] Technology: Error handling (API requests and render errors) /5  
- [5] Technology: Network calls for reading and writing data /5 
- [5] Technology: TypeScript for developer assistance /5  
- [3] Technology: 10+ pages or views /5  
    - View all jokes
    - Joke Generator
    - add new joke
    - all authors
    - jokes by author (1/2 implemented)
    - search for a joke
- [3] Technology: CI/CD pipeline /5  
- [] Technology: Tests run in pipeline, pipeline aborts on failure /5  
- [] Technology: Linting in pipeline /5  
- [] Technology: 3+ generic form input components /9  
    - Text input component
- [3] Technology: 4+ generic layout components /12  
    - component 1: layout to display a joke
    - component 2: dispay an author & how many jokes they have submitted
- [5] Technology: Authentication and user account support /10  
- [] Technology: Authorized and public pages /5  
- [3] Experience: All experiences mobile-friendly /5   (right now they are,but need to check for future)
- [] Experience: 3 instances of reordering elements on smaller screens /5  
- [6] Professional, organized, and smooth experience /20  


#### personal notes on testing frameworks
- jest  (mostly supported, been around for a while)
- vitest (made by the people who created vite)
    --tests are identified by .test.js





