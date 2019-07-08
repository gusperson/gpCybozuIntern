let total = 120;
const price = document.getElementById('price');
window.onload = function() {
    const check0 = document.getElementById('check0');
    const check1 = document.getElementById('check1');
    check0.addEventListener("click",function() {
        if (check0.checked) {
            price.value = total + 5;
            total += 5;
        } else {
            price.value = total - 5;
            total -= 5;
        }
    });
    check1.addEventListener("click",function() {
        if (check1.checked) {
            price.value = total + 10;
            total += 10;
        } else {
            price.value = total - 10;
            total -= 10;
        }
    });
};