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