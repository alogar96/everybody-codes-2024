// Solution for quest 1 part 1 
// Puzzle: https://everybody.codes/event/2024/quests/1

const fs = require('node:fs');
let data = fs.readFileSync('input1.txt', 'utf8').trim().split('');
let result = 0;

// Get number of potions based on creature type
function getPotions(creature) {
    if (creature == 'B')
        return 1;
    if (creature == 'C')
        return 3;
    return 0;
}

// Count how many potions is needed
result = data.reduce((potions, creature) => potions + getPotions(creature), 0);

// Print puzzle result  
console.log(result);