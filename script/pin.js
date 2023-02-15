
/**
 * It generates a random number between 0 and 10000, converts it to a string, and if the string is 4
 * characters long, returns the number. If the string is not 4 characters long, it calls itself again.
 * @returns A function that returns a random number.
 */

function generatePin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else {    
        return generatePin();
    }
}

/* Adding an event listener to the button with the id of generate-pin. When the button is clicked, it
will call the function that is passed to the event listener. The function will generate a pin, and
then set the value of the input field with the id of display-pin to the pin. */

document.getElementById('generate-pin').addEventListener('click', function(){
   
    const pin = generatePin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;

});

/* Adding an event listener to the element with the id of calculator. When the element is clicked, it
will call the function that is passed to the event listener. The function will get the number that
was clicked, and then set the value of the input field with the id of typed-numbers to the number. */

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

/* Adding an event listener to the element with the id of verify-pin. When the element is clicked, it
will call the function that is passed to the event listener. The function will get the value of the
input field with the id of display-pin, and then set the value of the variable currentPin to the
value of the input field. The function will also get the value of the input field with the id of
typed-numbers, and then set the value of the variable typedNumber to the value of the input field.
If the value of currentPin is equal to the value of typedNumber, the function will set the display
property of the element with the id of pin-success to block, and the display property of the element
with the id of pin-failure to none. If the value of currentPin is not equal to the value of
typedNumber, the function will set the display property of the element with the id of pin-failure to
block, and the display property of the element with the id of pin-success to none. */

document.getElementById('verify-pin').addEventListener('click', function(){
   
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    if(currentPin === typedNumber){
        document.getElementById("pin-success").style.display = "block";
        document.getElementById("pin-failure").style.display = "none";
    }
    else{
        document.getElementById("pin-failure").style.display = "block";
        document.getElementById("pin-success").style.display = "none";
    }
});


