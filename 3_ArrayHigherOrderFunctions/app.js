const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


/* ITERATE OVER ARRAY */
// for loop - old way
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

// forEach - new way
companies.forEach(function(company, index) {
    console.log(index, company);
});


/* FILTER THINGS OUT OF ARRAY */
/* can drink - get age 21 and over */
// for loop - old way
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);

// filter - new way
const filterCanDrink = ages.filter(function(age) {
    if (age >= 21) return true;
});
console.log(filterCanDrink);

// arrow function
const arrowCanDrink = ages.filter(age => age >= 21);
console.log(arrowCanDrink);

/* filter retail companies */
const retailCompanies = companies.filter(function (company) {
    return company.category === 'Retail';
});
console.log(retailCompanies);

const retailCompaniesArrow = companies.filter(company => company.category === 'Retail');
console.log(retailCompaniesArrow);

/* get 80s companies */
const oldCompanies = companies.filter(function (company) {
    return company.start > 1979 && company.start < 1990
});
console.log(oldCompanies);

const oldCompaniesArrow = companies.filter(company => (company.start > 1979 && company.start < 1990))
console.log(oldCompaniesArrow);

/* get companies that lasted 10 years or more */
console.log(companies.filter(company => (company.end - company.start) >= 10));

/* MAP */
/* create array of company names */
const companyNames = companies.map(function(company){
    return company.name;
});
console.log(companyNames);

const companyNamesArrow = companies.map(company => company.name);
console.log(companyNamesArrow);

/* square root of ages */
const ageSqrt = ages.map(function(age){
    return Math.sqrt(age);
});
console.log(ageSqrt);

const ageSqrtArrow = ages.map(age => Math.sqrt(age));
console.log(ageSqrtArrow);

/* compound map */
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
console.log(ageMap);

/* SORT */
/* sort companies by start year */
const sortedCompanies = companies.sort(function(c1, c2){
    if (c1.start > c2.start) return 1;
    else return -1;
});
console.log(sortedCompanies);

const sortedCompaniesArrow = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompaniesArrow);

/* sort ages */
const sortAgesDefault = ages.sort();
console.log(sortAgesDefault); // By default, the sort() function sorts values as strings.

const sortAgesAsc = ages.sort((a, b) => a - b); // asc order
console.log(sortAgesAsc);
const sortAgesDesc = ages.sort((a, b) => b - a); // desc order
console.log(sortAgesDesc);

/* REDUCE */
/* add all ages together */
// old for loop
let ageSum0 = 0;
for(let i = 0; i < ages.length; i++) {
    ageSum0 += ages[i];
}
console.log(ageSum0);

// new reduce
const ageSum = ages.reduce(function(total, age){
    return total + age;
}, 0);
console.log(ageSum);

// arrow function
const ageSumArrow = ages.reduce((total, age) => total + age, 0);
console.log(ageSumArrow);

/* get total years for all companies */
const totalYears = companies.reduce(function(total, company){
    return total + (company.end - company.start);
}, 0);
console.log(totalYears);

const totalYearsArrow = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYearsArrow)

/* combine method */
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age, 0);

console.log(combined);