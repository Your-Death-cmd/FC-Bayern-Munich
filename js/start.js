const myElement = document.createElement("div");
myElement.textContent = "This is my new tag!!";
myElement.classList.add("my-class");
document.body.append(myElement)

const newParagraph = document.createElement("p");
newParagraph.textContent = "My first Element!";
document.body.append(newParagraph);

const button = document.querySelector("#button")
console.log(button);

button.addEventListener("mouseover", function(){
    // button.classList.add("button_one")
    button.classList.toggle("button_one")
})
// button.addEventListener("mouseout", function(){
//     button.classList.remove("button_one")
// })


// document.body.style.backgroundColor = "white"
// document.body.style.fontSize = "40px"
// document.body.style.fontFamily = "Helvetica"
// document.body.style.color = "black"
// const buttonElement = document.getElementById("button")
// console.log(document.querySelector("#button"));
// const weissachPaket = {
//     name: "Porsche Taycan 2026 Weissach Paket",
//     year: 2026,
//     isSeries: true,
//     engeneers: [
//         "Dr.Ing.Frank-Steffen Walliser",
//         "Andreas Preuninger",
//         "Jörg Bergmeister"],
//     ttk: {
//         maxSpeed: "305kmh",
//         PS: "1034ps",
//         acceleration: "2.2s"},
//     sound: function() {
//         console.log(`My name is ${this.name}.I make wrum-wrum-wrum.`)
//     }
// }
// console.log(weissachPaket);
// weissachPaket.sound()
// console.log(weissachPaket.ttk.maxSpeed)
// weissachPaket.sound()
// let userName = "00shadowslayerx"
// console.log(userName);
// userName = "MozartImGrab"
// console.log(userName)

// let age
// console.log(age);
// age = 10
// console.log(age);

// const height = 1.59
// console.log(height);

// function sayHi(name) {
//     console.log(`Hello ${name}!`);
// }
// sayHi("Anton")
// const number = prompt("Type a number")
// if (number > 0) {
//     console.log("+")
// }
// else if(number < 0) {
//     console.log("-") 
// }
// else if(number == 0) {
//     console.log(0)
// }
// else {
//     console.log("Please type in a number")
// }