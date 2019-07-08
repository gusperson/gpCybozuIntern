const check0 = document.getElementById('check0');
const check1 = document.getElementById('check1');
check0.addEventListener("click", function() {
    selected();
});
check1.addEventListener("click", function() {
    selected();
});
const selected = function() {
    const usercost = parseInt(document.getElementById('user').value, 10) * 5;
    const gbcost = parseInt(document.getElementById('gb').value, 10) * 10;
    let total = 120;
    if (check0.checked) {
        total += usercost;
    }
    if (check1.checked) {
        total += gbcost;
    }
    document.getElementById('price').value = total;
};