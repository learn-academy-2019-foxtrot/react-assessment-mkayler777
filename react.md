# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1. Correctable True/False: Mark the following TRUE or FALSE. If FALSE, correct the statement to be TRUE.

- React is a modern, efficient answer to complex UI applications (TRUE/false)
- React will only render on the server using Node.js (TRUE/false)
- React is a front end framework for modern web applications (TRUE/false)
- React is a flexible library that plays part of the role of V in an MVC framework (TRUE/false)
- One of numerous ways to update a component's state directly, is using this.state (TRUE/false)
- React is made up of encapsulated components that manage their own state (TRUE/false)
- React components render HTML (TRUE/false)


2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer:
  Smart components are with State, Dumb components are without State.

  Researched answer:
  Smart Components call out to things outside of themselves (side effects).  They are more complicated and hard to test.  Smart Components are container components that manage their own state.App level components that perfoem fuctions and manage data.
  Dumb Components focus solely on the UI.  Their only responsibility is to present something to the DOM  (Document Object Model)

3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer: 
  Yarn is pulling all the required files for our application. Yarn manages our dependencies.

  Researched answer:
  Yarn installs packages quickly, and manages dependencies consistently across machines or in secure offline environments.
  
4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer:
  State manages the internal state of a component.  Props used to communicate the state bewtween components.

  Researched answer:
  Component state is a means of tracking and updating data within components.
  Props give us the ability to pass data between components, including the ability to pass data down to nested components.

5. How would you explain state to a friend who doesn't know code?

  Your answer:
  State is an object that determines how that React component renders and behaves.
  State is what allow you to create components that are dynamic and interactive
