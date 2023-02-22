const secrentphrases =["milad","you","dad","hello","break"];
let random_item = " ";
let clicked = [];
let result ="";
let mistake = 0 ;

// select random name
function selectrandomitem (){
    random_item = secrentphrases[Math.floor(Math.random()* secrentphrases.length)];
    console.log(random_item)
    document.getElementById("container").addEventListener("click",inputphrases)
    window.addEventListener("keydown",keyhander)
}
function setunderscorse (){
    let splitword = random_item.split("");
    let mapword = splitword.map(container => clicked.indexOf(container) >= 0 ? container : "_")
    console.log(mapword);
    result = mapword.join("")
    document.getElementById("clue").innerHTML = `<p>${result}</p>`
}

//heckifwon
function checkwin (){
    if(random_item === result){
        document.getElementById("Gameover").querySelector("p").style.display="block";
        document.getElementById("image").querySelector("img").src="./assets/winner.png";
    }
}
//user mistake
function userMistake (){
    if(mistake === 6){
        document.getElementById("Gameover").querySelector("p").style.display="block";
        document.getElementById("clue").querySelector("p").innerHTML=`<p>word is : ${random_item}</p>`
    }
}
function updateimagemistake (){
    const img = document.getElementById("image").querySelector("img")
    img.src = `./assets/hangman${mistake}.png`
}




// promp from phrases container
function contaierPhrases(container){
    container = container.toLowerCase();
    clicked.indexOf(container) === -1 ? clicked.push(container) : null ;
    document.getElementById(container.toUpperCase()).className = "used";
    if(random_item.indexOf(container) >= 0){
        setunderscorse();
        checkwin ();
    }else if(random_item.indexOf(container) === -1){
        mistake++;
        userMistake ();
        updateimagemistake ();
    }



}

//  input from mouse and Keyboard 
function inputphrases (l) {
    contaierPhrases(l.target.id)
    // console.log(l.target.id)

}
function keyhander (l) {
    contaierPhrases(l.key)
    // console.log(l.target.id)

}







selectrandomitem ();
setunderscorse ();
