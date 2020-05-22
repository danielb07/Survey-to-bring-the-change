var database;
var q1;
var form
function setup(){
    database = firebase.database();
    createCanvas(displayWidth,displayHeight);
    
    // console.log(database);
    Q1 = database.ref('question/q1 ')
    Q1.on("value",readquestion)
    Question1 = new SurveyQ1();
    Question2 = new Q2form();
    Question3 = new Q3form();
    // q1.on("value");
    
}
 
function draw() {
    Question1.display();
    Question2.display();
    Question3.display();
   
}

function readquestion(data){
    question = data.val();
    


}


// function writequestion(x, y){
//     database.ref('voting/Q1').set({

//     })
// }
// function readposition(data){
//     text(data.val(), 200, 200)
// }