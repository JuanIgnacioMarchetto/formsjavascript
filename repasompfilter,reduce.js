const data = [
    {
        "name": "cuait",
        "country": "united kindom",
        "age": 26,
    },
    {
        "name": "cuait",
        "country": "united kindom",
        "age": 26,
    },
    {
        "name": "jorge",
        "country": "united kindom",
        "age": 22,
    },
    {
        "name": "pedro",
        "country": "argentina",
        "age": 26,
    },
    {
        "name": "laura",
        "country": "mexico",
        "age": 25,
    },
    {
        "name": "laura",
        "country": "irlanda",
        "age": 23,
    },
    {
        "name": "irene",
        "country": "mexico",
        "age": 23,
    },
    {
        "name": "lupe",
        "country": "argentina",
        "age": 21,
    },
    {
        "name": "paco",
        "country": "united kindom",
        "age": 19,
    },
    {
        "name": "cuait",
        "country": "jamaica",
        "age": 26,
    },
]

//console.table(data)

const people_bw_40_and_50 = data.filter((value) => {
    if (value.age >= 21 && value.age <= 25)
        return true;
})
//console.table(people_bw_40_and_50)

const record = data.find((value, index) => {
    if (value.name === 'lupe') {
        recordIndex = index;
        return index;
    }
});/*
console.table(record);
console.log('Index', recordIndex);*/


//console.log(data.every((value)=>value.age > 18));

//console.log (data.every(value)=>value.country));
/*
console.log(data.some((value)=>value > 26));
console.log (data.some((value)=>value.age > 18));
*/

const countries = data.map((value) => {
    return value.country;
})

//console.log (countries);
//console.table(countries);

const districtCountries = new Set();
data.forEach((value) => {
    districtCountries.add(value.country);
});
//console.table(districtCountries)

{
    const districtCountries = new Map();
    let count;
    data.forEach(value => {
        count = districtCountries.get(value.country) || 0;
        districtCountries.set(value.country, ++count);
    });
} console.log(districtCountries);
console.table(districtCountries);
const sortedValue = [...districtCountries.entries()].sort((a, b) => {
    return b[1] - a[1];
});
console.log(sortedValue);

const totalCountries = sortedValue.reduce((acc, current) => {
    return acc + current[1]
}, 0);

console.log(totalCountries)


//---------------------------------------------------------------------------------------
//--______________________________________________________________________________________________
// forEach
/*
[1, 2, 3].forEach(function (item, index) {
    console.log(item, index);
  });
  */

// map
const three = [1, 2, 3];
const doubled = three.map(function (item) {
    return item * 2;
});
console.log(doubled);


// filter
const ints = [1, 2, 3];
const evens = ints.filter(function (item) {
    return item % 2 === 0;
});
console.log(evens);


// reduce
const sum = [1, 2, 3].reduce(function (result, item) {
    return result + item;
}, 0);
console.log(sum)


// some
const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
    return item < 0;
});
console.log(hasNegativeNumbers);


// every
const allPositiveNumbers = [1, 2, -3].every(function (item) {
    return item > 0;
});
console.log(allPositiveNumbers);


// find
const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const found = objects.find(function (item) {
    return item.id === 'b';
});
console.log(found);


// find index
const objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const foundIndex = objects2.findIndex(function (item) {
    return item.id === 'b';
});
console.log(foundIndex)