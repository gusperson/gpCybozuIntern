let total = 120;
const price = document.getElementById('price');
const calculateTotal = function(num) {
    if (num === 0) {
        if (document.getElementById('check0').checked) {
            price.value = total + 5;
            total += 5;
        } else {
            price.value = total - 5;
            total -= 5;
        }
    } else if (document.getElementById('check1').checked) {
        price.value = total + 10;
        total += 10;
    } else {
        price.value = total - 10;
        total -= 10;
    }
};