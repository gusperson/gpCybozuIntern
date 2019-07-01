const random = Math.floor(Math.random() * 6);
const guess = window.prompt('Guess a number from 0-5');

if (guess <= 5 && guess >= 0 && Number.isInteger(parseInt(guess, 10))) {

    if (guess === random) {
        window.alert('Correct!');
    } else if (guess < random) {
        window.alert('Too Small');
    } else {
        window.alert('Too Large');
    }


    if (guess === random) {
        document.getElementById('g').textContent = 'Correct!';
        console.log('Correct!');

    } else {
        document.getElementById('g').textContent = 'Incorrect.';
        console.log('Incorrect');
    }

} else {
    window.alert('Wrong Input.');
    document.getElementById('g').textContent = 'Invalid Input.';

}
console.log(random);