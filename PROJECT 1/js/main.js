
//Button Listing
const arrayofLetters = ["fa-star", "fa-gift", "fa-heart", "fa-lemon", "fa-star", "fa-gift", "fa-heart", "fa-lemon",
"fa-sun","fa-crown","fa-infinity","fa-ice-cream","fa-sun","fa-crown","fa-infinity","fa-ice-cream"];
const buttons = document.querySelectorAll('.button-row button');

//timer
let timer = document.querySelector('#timer');
let timerValue = 60;
timer.innerHTML = timerValue;

const countDown = setInterval(function(){
if(timerValue>0){
    timerValue--;
timer.innerHTML = timerValue;
}

if(timerValue === 0){
clearInterval(countDown);
alert("You Have Lost");
location.reload();


}else if(document.querySelectorAll('.button-row button').length === 0){
alert('You Have Won')
clearInterval(countDown);
location.reload()

}
},1000);


//Randomise the Array
let lastClickedButton = null;

for (let i = 0; i < buttons.length; i++) {
    const randomIndex = Math.floor(Math.random() * arrayofLetters.length);
    const randomIcon = arrayofLetters.splice(randomIndex, 1)[0];

    buttons[i].innerHTML = `<i class="fas ${randomIcon}"></i>`;
    //buttons[i].textContent = randomLetter;

    
   
   //Prevent double Clicking of Button and Matching of Button
    buttons[i].addEventListener('click', function() {
        // Check if the button is already 
        if (this.disabled) {
            return; 
        }

        
        //if (lastClickedButton && this.textContent === lastClickedButton.textContent)
        if (lastClickedButton && this.children[0].className === lastClickedButton.children[0].className) {
            
            this.remove();
            lastClickedButton.remove();

           
        
            
            lastClickedButton = null;
        } else {
            
            this.disabled = true;

            
            if (lastClickedButton) {
                lastClickedButton.disabled = false;
            }

            // Set the last clicked button to the current one
            lastClickedButton = this;
        }
    });
}










// if (lastClickedButton && this.textContent === lastClickedButton.textContent) {
            //     this.remove();
            //     lastClickedButton.remove();

       