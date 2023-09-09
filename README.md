# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


### Links

- [Solution URL](https://www.frontendmentor.io/solutions/interactive-rating-component-solution-using-vanilla-javascript-2eEhifWMRP)
- [Live Site URL](https://interactive-rating-component-nadupoy.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

- Objects in the DOM can be selected using CSS pseudo selectors:
```js
  const ratingButtons = document.querySelectorAll('[type="button"]');
```

- Forms are objects within the DOM and can be selected using their HTML name attribute:
```js
  const ratingForm = document.forms.rating;
```

- Objects within the DOM have default behaviour when they experience an event. In this case, when the form is submitted (i.e. submit event), the page automatically reloads. To prevent this, a [callback function](https://www.tutorialspoint.com/how-to-stop-refreshing-the-page-on-submit-in-javascript#:~:text=Using%20%E2%80%9Creturn%20false%E2%80%9D%20to%20stop%20page%20refresh%20on%20form%20submit&text=The%20%22return%20false%22%20cancels%20the%20page%20refresh.) was used to prevent this default behaviour:
```js
  function submitRating(event) {
    const ratingState = document.getElementById('rating-state');
    const thankYouState = document.getElementById('thank-you-state');
    ratingState.style.display = 'none';
    thankYouState.style.display = 'block';
    event.preventDefault();
  }

  ratingForm.addEventListener('submit', submitRating);
```

- Media queries can use logical operators:
```css
  @media screen and (min-width: 375px) and (max-width: 1439px) {
    ...
  }
```

### Continued development

- Media queries and their logical operators
- Node list vs HTML collection
- Callback functions
- Form objects in JavaScript
- Radio node list vs Node list
- Loops
- *'this'* keyword

### Useful resources

- [Logical operators](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators) - Explains the meaning of logical operators when used with CSS media queries.

- [Callback functions](https://www.tutorialspoint.com/how-to-stop-refreshing-the-page-on-submit-in-javascript#:~:text=Using%20%E2%80%9Creturn%20false%E2%80%9D%20to%20stop%20page%20refresh%20on%20form%20submit&text=The%20%22return%20false%22%20cancels%20the%20page%20refresh.) - This article explains how a callback function can be used to stop the default behaviour of an object after an event has occured.

- [Form objects](https://javascript.info/forms-controls) - A detailed explanation of form objects in JavaScript. 

## Author

- LinkedIn - [Grace Sampao](https://www.linkedin.com/in/grace-sampao-49a3129b/)
- Frontend Mentor - [@nadupoy](https://www.frontendmentor.io/profile/nadupoy)
- Github - [@nadupoy](https://github.com/nadupoy)
