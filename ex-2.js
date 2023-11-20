// Exercise #2: Editing Employee Array
const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// Start coding here
let alex = employees[1].name;
let alexHobbies = employees[1].hobbies;
let alexAndJamesAge = employees[0].age + employees[1].age;
console.log(alex);
console.log(alexHobbies);
console.log(alexAndJamesAge);

// Exercise #3: Updating the Values on the Object in the Array
employees[1].hobbies.push("Watching basketball");
console.log(employees[1])

// Exercise #4: Adding the New Values on the Array
employees.push(
  {
    name: "Alicia",
    age: 29,
    hobbies: ["Shopping", "Reading novels"]
  },
  {
    name: "Kody",
    age: 19,
    hobbies: ["Computer games", "Wakeboard"]
  }
);
console.log(employees);

// Exercise #5: Removing the Value out of the Array
const updateEmployees = employees;
updateEmployees.pop();
console.log(updateEmployees);