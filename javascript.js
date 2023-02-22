const secrentphrases =["milad","you","dad","hello","break"];
let random_item = " ";
let clicked = [];
// select random name
function selectrandomitem (){
    random_item = secrentphrases[Math.floor(Math.random()* secrentphrases.length)];
    console.log(random_item)
    document.getElementById("container").addEventListener("click",inputphrases)





}
// promp from phrases container
function contaierPhrases(container){
    container = container.toLowerCase();
    clicked.indexOf(container) === -1 ? clicked.push(container) : null ;
    document.getElementById(container.toUpperCase()).className = "used";



}

//  input from mouse and Keyboard 
function inputphrases (l) {
    contaierPhrases(l.target.id)
    // console.log(l.target.id)

}







selectrandomitem ()