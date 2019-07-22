const random = Math.floor(Math.random() * 6);
const guess = parseInt(window.prompt('Guess a number from 0-5'),10);
const g = document.getElementById('g');
if (guess <= 5 && guess >= 0) {
    if (guess === random) {
        window.alert('Correct!');
    } else if (guess < random) {
        window.alert('Too Small');
    } else {
        window.alert('Too Large');
    }
    if (guess === random) {
        g.textContent = 'Correct!';
        console.log('Correct!');
    } else {
        g.textContent = 'Incorrect.';
        console.log('Incorrect');
    }
} else {
    window.alert('Wrong Input.');
    g.textContent = 'Invalid Input.';
}
console.log(random);