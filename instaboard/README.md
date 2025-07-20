## Questions

**1. How many hours did it take you to complete this assignment?**  
It took me around **15 hours** to complete this assignment, as I worked on multiple features and refined the UI and logic for a better user experience.

**2. Were there any parts of the lab you found challenging?**  
Yes, the most challenging part was implementing the `fetchUsers` function in a way that ensures previously loaded user cards are preserved when the "Load More" button is clicked. Initially, I wasn’t sure how to keep the existing users in the state while adding the new ones, but I resolved it using the spread operator to update the `users` array like this:
