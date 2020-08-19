const loaf = {
    flour : 300,
    water : 210,
    hydration() {
        return (loaf.water / loaf.flour) * 100
    }
}

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());

const object = {
    foo : "foo",
    bar : "bar",
    fum : "fum",
    quux : "quux",
    spam : "spam"
};
for (let key in object) {
    console.log(key, object[key])
};

const food = {
    meals: ["breakfast", "second breakfast", "elevenses", "lunch", "afternoon tea", "dinner", "supper"]
}
console.log(food.meals[3]);

const people = [
    {
        name : "Anthony",
        jobTitle : "CEO"
    },
    {
        name : "Kristen",
        jobTitle : "VP",
        boss : "Anthony"
    }
]

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name, people[i].jobTitle);
}

for (let i = 0; i < people.length; i++) {
    if (people[i].boss === undefined) {
        console.log(`${people[i].jobTitle} ${people[i].name} doesn't report to anybody`);

    } else {
        console.log(`${people[i].jobTitle} ${people[i].name} reports to ${people[i].boss}`);
     }
}

const encoder = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
};

function decode(encoded) {
    fo
}