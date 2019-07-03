const selected = function(num) {
    const usercost = parseInt(document.getElementById('user').value, 10) * 5;
    const gbcost = parseInt(document.getElementById('gb').value, 10) * 10;
    let total = 120;
    if (document.getElementById('check0').checked) {
        total += usercost;
    }
    if (document.getElementById('check1').checked) {
        total += gbcost;
    }
    document.getElementById('price').value = total;
};