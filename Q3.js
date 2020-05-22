class Q3form {
    constructor(){}

    display(){
        var Q3 = createElement('h1');
        Q3.html("Q3:Do you think that the lockdown idea is perfect")
        Q3.position(displayWidth/2,displayHeight/2)

        var Yes = createButton('YES');
        var No = createButton('NO');

        Yes.position(displayWidth/2,displayHeight/2+100);
        No.position(displayWidth/2,displayHeight/2+200);
        Yes.mousePressed(() =>{
            // Yes.style.backgroundColor = "#000000"
            // database.ref('Q3').set({
            //     Yes : 1
            // })
        })
    }
}