class SurveyQ1 {
    constructor(){}

    display(){
        var Q1 = createElement('h1');
        Q1.html("Q1:Do you think that the lockdown idea is perfect")
        Q1.position(displayWidth/2,displayHeight/64)

        var Yes = createButton('YES');
        var No = createButton('NO');

        Yes.position(displayWidth/2,displayHeight/64+100);
        No.position(displayWidth/2,displayHeight/64+200);
        Yes.mousePressed(() =>{
            // Yes.style.backgroundColor = "#000000"
            // database.ref('Q1').set({
            //     Yes : 1
            // })
        })
    }
}