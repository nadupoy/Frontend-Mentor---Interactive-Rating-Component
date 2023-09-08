/*
1. User selects a rating by clicking on a [type="button"] element.
2. This rating is stored in the string literal `You selected ${rating} out of 5`.
3. The string literal is added to the '.selected-rating' textContent.
4. Upon sumbmitting the results, the contents in '.thank-you-state' replace the contents in '.rating-state'.

N/B: The submitted form value should be the value of the input button that is in 'focus'.
*/

const selectedRating = document.querySelector('span');
const ratingForm = document.forms.rating;
const ratingButtons = document.querySelectorAll('[type="button"]');
let ratingButton;

function selectRating() {
    let rating = this.value;
    selectedRating.textContent = `${rating}`;
}

for (ratingButton of ratingButtons) {
    ratingButton.addEventListener('focus', selectRating);
}

function submitRating(event) {
    const ratingState = document.getElementById('rating-state');
    const thankYouState = document.getElementById('thank-you-state');
    ratingState.style.display = 'none';
    thankYouState.style.display = 'block';
    event.preventDefault();
}

ratingForm.addEventListener('submit', submitRating);