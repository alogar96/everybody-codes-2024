// Solution for quest 1 part 3
// Puzzle: https://everybody.codes/event/2024/quests/1

const fs = require('node:fs');
let data = fs.readFileSync('input3.txt', 'utf8').trim().split('');
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
for (let i = 2; i < data.length; i=i+3) {
    let countX = 0;
    let group = data[i-2] + data[i-1] + data[i];
    for (let j = 0; j < group.length; j++) {
        if (group[j] == 'x')
            countX++;
        else
            result = result + getPotions(group[j]);
    }
    if (countX == 0) result = result + 6;
    if (countX == 1) result = result + 2;
}

// Print puzzle result  
console.log(result);