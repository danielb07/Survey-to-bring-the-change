class Q2form {
    constructor(){}

    display(){
        var Q2 = createElement('h1');
        Q2.html("Q2:Do you think that the lockdown idea is perfect")
        Q2.position(displayWidth/2,displayHeight/4)

        var Yes = createButton('YES');
        var No = createButton('NO');

        Yes.position(displayWidth/2,displayHeight/4+100);
        No.position(displayWidth/2,displayHeight/4+200);
        Yes.mousePressed(() =>{
            // Yes.style.backgroundColor = "#000000"
            // database.ref('Q2').set({
            //     Yes : 1
            // })
        })
    }
}