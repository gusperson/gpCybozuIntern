let calculateTotal = function(num) {
    let usr = 0;
    let gb = 0;
    if (document.getElementById('check0').checked) {
        usr = parseInt(document.getElementById('user').value, 10) * 5;
    }
    if (document.getElementById('check1').checked) {
        gb = parseInt(document.getElementById('gig').value, 10) * 10;
    }
    const result = 120 + usr + gb;
    document.getElementById('price').value = result;
};