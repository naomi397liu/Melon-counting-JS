"use strict"

const melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba']

                
function countMelons(melonList){
    const melonCounts = {};

    for (const melon of melonList){
        if (melonCounts.hasOwnProperty(melon)){
            melonCounts[melon] += 1;
        }else{
            melonCounts[melon] = 1;
        }
    }
    return melonCounts
}

console.log(countMelons(melonsToAdd))

// {'Ogen': 3, 'Horned Melon': 8, 'Watermelon': 6, 'Casaba': 5, 'Sharlyn': 5, 'Xigua': 5, 'Christmas': 8, 'Cantaloupe': 7, 'Santa Claus': 2}