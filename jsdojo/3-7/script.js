let hp = 100;

while (hp > 0) {

    const attack = Math.floor(Math.random() * 10) + 1;
    console.log('Damaged the monster with an attack value of ' + attack);
    hp -= attack;
}
console.log('The monster has been defeated.');