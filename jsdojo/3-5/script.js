const date = new Date();
const time = date.getHours();
if ((time >= 9 && time <= 10) || (time >= 15 && time <= 16)) {
    window.alert('Buy one Get one free bentos!');
} else if (time >= 19 && time <= 21) {
    window.alert('Bentos 30% off!');
}