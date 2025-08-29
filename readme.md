## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-005

### Question and Answer part:


- **Question 1:** What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
**Answer:** 

**getElementById:** getElementById returns the single element that has the given id.
- Example: getElementById("right-nav"), now i will get the element that contains "right-nav" id.

**getElementsByClassName:** getElementsByClassName returns an array-like object which is a HTMLCollection and inside the array-like object there are a collection of all elements with the given class name. And it updates automatically if DOM changes
- Example: getElementsByClassName("copy-btn"), now i will get all elements that contain "copy-btn" class name.

**querySelector:** querySelector returns the first element that contains/matches the given CSS selector;
- Example: querySelector(".card"), now i will get the first element that matches ".card" selector.

**querySelectorAll:** querySelectorAll returns a NodeList of all elements that contains/matches the given CSS selector;
- Example: querySelector(".item-card"), now i will get all elements that matches ".item-card" selector. And Also it does not update automatically if DOM changes, it's static.


- **Question 2:** How do you **create and insert a new element into the DOM**?
**Answer:** 

First i need to create an element and append it to the container/parent.
- Example: 
let newDiv = document.createElement("div");
let newDiv.textContent = "this is a newDiv";

let parent = document.getElementById("parent-div");
parent.appendChild.(newDiv);

First i created an element inside newDiv variable than added text. Secondly i assigned the parent element inside parent variable and finally i added the created element to the parent element with this: parent.appendChild.(newDiv);


- **Question 3:**
- **Question 4:**
- **Question 5:**
