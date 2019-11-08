var q1, q2, q3, q4, q5, q6, q7, button, yourName, age
var done = false


function setup() {
    createCanvas(720,720);
    textSize(18);
    text("To create your personal Mind-Map, you will need to rate 7 categories on a scale from 0 to 5, based on the impact they have on your daily life. \nClick 's' once you're done to save the image." ,15 ,25, 650,100);
    button = createButton("Start questionnaire")
    button.position(25,100)
    console.log(done)
    button.mousePressed(start)
    function start() {
        button.remove()
        q1 = parseInt(window.prompt("family: "))*35;
        q2 = parseInt(window.prompt("work: "))*35;
        q3 = parseInt(window.prompt("friends: "))*35;
        q4 = parseInt(window.prompt("health: "))*35;
        q5 = parseInt(window.prompt("politics: "))*35;
        q6 = parseInt(window.prompt("social media/ TV: "))*35
        q7 = parseInt(window.prompt("love: "))*35
        yourName = window.prompt("Please enter your first name: ")
        age = window.prompt("How old are you?")

        done = true
        clear()
    }
}

function draw(){
    p1 = [140,260]
    p2 = [350,290]
    p3 = [595,580]
    p4 = [380,470]
    p5 = [240,95]
    p6 = [570,150]
    p7 = [105,605]
    mid = (p3[1]+p6[1])
    mid2 = (p1[1]+p7[1])
    
    if(done) {
        let b = map(age,10,100,255,0)
        background(b)
        stroke("black")
        let midmap = map(mid,0,1440,150,350)
        strokeWeight((q6*q3)/1000)
        // line(p3[0],p3[1],p3[0],midmap)
        line(p6[0],p6[1],p6[0],p2[1])
        // line(p6[0],midmap,p3[0],midmap)
        let mid2map = map(mid2,0,1440,350,605)
        strokeWeight((q1*q7)/1000)
        line(p1[0],p1[1],p1[0],mid2map)
        line(p7[0],p7[1],p7[0],mid2map)
        line(p7[0],mid2map,p1[0],mid2map)
        strokeWeight((q2*q4)/1000)
        line(p2[0],p2[1],p4[0],p4[1])
        strokeWeight((q2*q3)/1000)
        // line(p2[0],p2[1],p3[0],p3[1])
        line(p2[0],p2[1],p3[0],p2[1])
        line(p3[0],p3[1],p3[0],p2[1])
        strokeWeight((q1*q4)/1000)
        line(p1[0],p1[1],p4[0],p4[1])
        strokeWeight((q2*q5)/1000)
        line(p2[0],p2[1],p5[0],p5[1])
        // strokeWeight((q5*q6)/1000)
        // line(p5[0],p5[1],p6[0],p6[1])
        // strokeWeight((q1*q7)/1000)
        // line(p1[0],p1[1],p7[0],p7[1])

        noStroke()
        fill(78, 88, 199)
        ellipse(p1[0],p1[1],q1,q1)
        fill(73, 128, 56)
        ellipse(p2[0],p2[1],q2,q2)
        fill(214, 43, 71)
        ellipse(p3[0],p3[1],q3,q3)
        fill(255, 152, 18)
        ellipse(p4[0],p4[1],q4,q4)
        fill(7, 38, 84)
        ellipse(p5[0],p5[1],q5,q5)
        fill("yellow")
        ellipse(p6[0],p6[1],q6,q6)
        fill(136, 23, 153)
        ellipse(p7[0],p7[1],q7,q7)
        fill("black")
        textAlign(RIGHT)
        textSize(24)
        text(yourName, 700, 700)
    }
    
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(yourName, 'jpg');
  }
