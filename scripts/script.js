import {substractNumbers} from "./substract.js";
import { formatDistanceToNow } from "date-fns";

console.log(substractNumbers(10,7))

const result = formatDistanceToNow(
    new Date(2024, 7, 29)
)

console.log(result)

const welcomeText = "Hello, future Frontend developer!";
console.log(welcomeText);

const sectionDescription = document.querySelector('.section__description')
console.log(sectionDescription.innerHTML)
sectionDescription.innerHTML = 'WTF - What the frontend course'
sectionDescription.style.color = 'darkgreen'
console.log(sectionDescription.innerHTML)

function sayHello(user, age) {
    return `Hello ${user} and you are ${age} years old`
}

console.log(sayHello('Klaudia', 27))

sayHello = (user, age) => {
    return `Hello ${user} and you are ${age} years old too`
}

console.log(sayHello('Klaudia', 27))

const hamburgerBtn = document.querySelector('.button-open-js');
hamburgerBtn.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation--js')
    navigation.classList.toggle('navigation-open')
})