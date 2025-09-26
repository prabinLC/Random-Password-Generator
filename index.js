let passwordSelect1 = document.getElementById("first-el")
let passwordSelect2 = document.getElementById("second-el")
let randPassArray = []
let userInput = document.getElementById("userNumber-el")


const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h",
    "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}",
    "]",",","|",":",";","<",">",".","?","/"
];


function randomChar(){
    let rand = characters[Math.floor(Math.random()*90)]
    return rand
}
function randomPassword(userValue = 15){
    let firsRandPass = "";
    let secondRandPass = "";
    for(let i = 0; i <userValue; i++){
        firsRandPass += randomChar()
        secondRandPass += randomChar()
    }
    randPassArray = [firsRandPass,secondRandPass]
    passwordSelect1.textContent = randPassArray[0]
    passwordSelect2.textContent = randPassArray[1]
}
function processInput(){
    let userValue = userInput.value 
    if(userValue === ''){
        return randomPassword(15)
    }else return randomPassword(userValue)
}




