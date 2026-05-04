# Lab 5 - Starter
**Names**: Nicole Sutedja, Prakhar Shah

## Links
**Expose**: https://nicolesutedja.github.io/Lab5_Starter/expose.html
<br>**Explore**: https://nicolesutedja.github.io/Lab5_Starter/explore.html

## Questions 
**1.)** Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
> No, we would not use a unit test for this feature because it involves many components working together. Unit tests are meant to test isolated and individual parts of code. This feature requires more testing, especially the interaction between different components. Thus, an integration test would be better in this situation.

**2.)** Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
> Yes, we would use a unit test for this feature. This is an isolated and independent function as it just takes in a string input and checks if the length exceeds 80 characters. Thus, there are no outside component interactions, which means we can write a function to check different lengths such as under, at and over 80 characters.
