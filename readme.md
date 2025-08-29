## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-005

### Question and Answer part:


### Question 1
What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Answer:** 

**getElementById:** getElementById returns the single element that has the given id.
- Example: getElementById("right-nav"), now i will get the element that contains "right-nav" id.

**getElementsByClassName:** getElementsByClassName returns an array-like object which is a HTMLCollection and inside the array-like object there are a collection of all elements with the given class name. And it updates automatically if DOM changes.
- Example: getElementsByClassName("copy-btn"), now i will get all elements that contain "copy-btn" class name.

**querySelector:** querySelector returns the first element that contains/matches the given CSS selector;
- Example: querySelector(".card"), now i will get the first element that matches ".card" selector.

**querySelectorAll:** querySelectorAll returns a NodeList of all elements that contains/matches the given CSS selector;
- Example: querySelector(".item-card"), now i will get all elements that matches ".item-card" selector. And Also it does not update automatically if DOM changes, it's static.


### Question 2
How do you **create and insert a new element into the DOM**?

**Answer:** 

First i need to create an element and append it to the container/parent.
- Example: 

let newDiv = document.createElement("div");

let newDiv.innerText = "this is a newDiv";

let parent = document.getElementById("parent-div");

parent.appendChild.(newDiv);

First i created an element inside newDiv variable than added text. Secondly i assigned the parent element inside parent variable and finally i added the created element to the parent element with this: parent.appendChild.(newDiv);


### Question 3
What is **Event Bubbling** and how does it work?

**Answer:** 

Event Bubbling is a process where an event is triggered on a child element and bubbles up through its parent element(the DOM tree). And if not manually stop it, it continues to the end(Document).
- Example: Suppose i clicked on a button and the event triggered, now the event will propagate to its div parent than body and so on.


### Question 4
What is **Event Delegation** in JavaScript? Why is it useful?

**Answer:** 

Event Delegation is a technique where an event listener is attached to the parent element and it handles the events of child elements.

- Example: 

html:
 < ul id="my-list" >
  < li >Item 1</ li >
  < li >Item 2</ li >
  < li >Item 3</ li >
</ ul>

script:
  const parentList = document.getElementById("my-list");
  parentList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      alert(event.target.innerText + " was clicked!");
    }
  });


  Here i added the the event-listener on the parent(parentList) and if i clicked on any child the event will bubble up to its parent(parentList), the event-listener on the parent will capture it. And the alert text will pop up.


### Question 5
What is the difference between **preventDefault() and stopPropagation()** methods?

**Answer:** 

**preventDefault():** preventDefault() prevents the default behavior of an element when an event occur.

example: When working with card buttons within < form > tag, than clicking the btn automatically reload the webpage. So to stop this behavior we use preventDefault().

**stopPropagation():** stopPropagation() stops the propagation/bubbling-up process up to the DOM tree. So the event stop where the event occur and does not go up.

example: suppose we have a div(parent) and a div(child) and both have the event-listener on them. And now if we add stopPropagation() to the div(child) element, the parent event-listener will not be triggered. Only the child event-listener will be triggered.

