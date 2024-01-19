

const arrayofLetters = ["A", "B", "C", "D", "A", "B", "C", "D",1,2,3,4,1,2,3,4];
const buttons = document.querySelectorAll('.button-row button');



for (let i = 0; i < buttons.length; i++) {
    const randomIndex = Math.floor(Math.random() * arrayofLetters.length);
    const randomLetter = arrayofLetters.splice(randomIndex, 1)[0];

    buttons[i].textContent = randomLetter;


    buttons[i].addEventListener('click', function() {
       
    
    
    
    })
}
