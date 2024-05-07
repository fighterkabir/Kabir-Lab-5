# Kabir Shergill's Lab 5

## Links to my GitHub Pages:
- [Link to explore.html](https://fighterkabir.github.io/Kabir-Lab-5/explore.html), actual link in-case: https://fighterkabir.github.io/Kabir-Lab-5/explore.html.
- [Link to expose.html](https://fighterkabir.github.io/Kabir-Lab-5/expose.html), actual link in-case: https://fighterkabir.github.io/Kabir-Lab-5/expose.html.
  
#### This assignment was worked on individually (no partners)

### Explore Section Part 3 Answers:

1. I most likely wouldn't use a unit test to test the "message" feature of a messaging application since this would be a core feature of the application that, in order to work properly, manipulates and touches a lot of other small functionalities of the app. To properly test that it works correctly would take more than a single or multiple unit tests.
In essence, this component interacts with a lot of others in the app, and unit tests aren't great for those types of heavily integrated functionalities.

2. On the other hand, I would use a unit test to test the "max message length" feature of the application. This is a small, localized bit of functionality that doesn't have to communicate with many (if any) other part of the app and is literally only concerned with how much a user is allowed to type in a text area. A unit test is perfect for testing whether an isolated bit of functionality, like a max amount of characters in an input field, works properly. 
