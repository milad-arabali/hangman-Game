const secrentphrases =["milad","you","dad","hello","break"];
let random_item = " ";
let clicked = [];
let result ="";
// select random name
function selectrandomitem (){
    random_item = secrentphrases[Math.floor(Math.random()* secrentphrases.length)];
    console.log(random_item)
    document.getElementById("container").addEventListener("click",inputphrases)
}
function setunderscorse (){
    let splitword = random_item.split("");
    let mapword = splitword.map(container => clicked.indexOf(container) >= 0 ? container : "_")
    console.log(mapword);
    result = mapword.join("")
    document.getElementById("clue").innerHTML = `<p>${result}</p>`
}


// promp from phrases container
function contaierPhrases(container){
    container = container.toLowerCase();
    clicked.indexOf(container) === -1 ? clicked.push(container) : null ;
    document.getElementById(container.toUpperCase()).className = "used";
    if(random_item.indexOf(container) >= 0){
        setunderscorse()
    }else if(random_item.indexOf(container) === -1){

    }



}

//  input from mouse and Keyboard 
function inputphrases (l) {
    contaierPhrases(l.target.id)
    // console.log(l.target.id)

}







selectrandomitem ();
setunderscorse ();