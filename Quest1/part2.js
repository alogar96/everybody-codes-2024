// Solution for quest 1 part 2 
// Puzzle: https://everybody.codes/event/2024/quests/1

const fs = require('node:fs');
let data = fs.readFileSync('input2.txt', 'utf8').trim().split('');
let result = 0;

// Get number of potions based on creature type
function getPotions(creature) {
    if (creature == 'B')
        return 1;
    if (creature == 'C')
        return 3;
    if (creature == 'D')
        return 5;
    return 0;
}

// Count how many potions is needed
for (let i = 1; i < data.length; i=i+2) {
    result = result + getPotions(data[i]);
    result = result + getPotions(data[i-1]);
    if (data[i] != 'x' && data[i-1] != 'x')
        result = result + 2;
}

// Print puzzle result  
console.log(result);