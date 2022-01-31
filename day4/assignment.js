/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */

let value = [1,2,3,4,5]

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */

let me = {
    name: "Ebuka",
    surname:"Eya",
    email:"madrid2ba@gmail.com",
    age:"29"
    
}

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */

me.licence= true

console.log(me);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */

delete me.age
console.log(me);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */

let friend = {
    name: "Ebuka",
    surname:"Eya",
    email:"madrid2eba@gmail.com",
    age:"29"
    
}

me.email===friend.email ? console.log("failed"):console.log("verified they are not the same");





/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */

let totalShoppingCart = 60

let chargedAmount = null

totalShoppingCart < 50 ? chargedAmount = totalShoppingCart + 10 : chargedAmount=totalShoppingCart

console.log(chargedAmount);



/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */

let totalShoppingCart2 = 60
let discount = (totalShoppingCart2)*0.2

let chargedAmount2 = null

totalShoppingCart2 < 50 ? chargedAmount2 = (totalShoppingCart2-discount) + 10 : chargedAmount2=totalShoppingCart2-discount

console.log(chargedAmount2);


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */

let car = {
    brand:"Volvo",
    model:"s12",
    licencePlate: 1234564432
}

counter = 0

let cloneCars=[]

while (counter <5){
    cloneCar ={}
    
    Object.assign(cloneCar,car)
    cloneCar.licencePlate += Math.floor(Math.random()*2000)
    cloneCars.push(cloneCar)
    counter++

}
//console.log(cloneCars);





/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */

let carsForRent = cloneCars
console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

let removedCar = carsForRent.pop()

let removedCar2 = carsForRent.splice(0,1,0)
console.log(carsForRent);


/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

console.log(typeof car );
console.log(typeof car.licencePlate );
console.log(typeof car.brand );

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

let carsForSale = []

car2 = {
    brand: "Tesla",
    model :"Sv"
}
car3 = {
    brand: "Tesla",
    model :"Sv"
}
car4 = {
    brand: "Tesla",
    model :"Sv"
}

carsForSale.push(car2,car3,car4)

console.log(carsForSale);


let totalCar = carsForRent.length +carsForSale.length

console.log(totalCar);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */


carsForSale.forEach(car => {
    
    console.log(car);
    
});


/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/