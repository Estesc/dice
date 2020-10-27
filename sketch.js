let dice = [];

function setup() {
    createCanvas(600, 400);
	for(let i = 0; i < 10; i++){
		dice[i] = new Dice();
	}
}


function draw() {
    background(211,211,211);
	for(let i = 0; i < dice.length; i++) {
        dice[i].show();
        dice[i].move();
        if(dice[i].y > 400){
            dice[i] = new Dice();

        }
	}
}

class Dice {
	constructor() {
		this.color1 = (int)(random(256));
        this.color2 = (int)(random(256));
        this.color3 = (int)(random(256));
        this.num = (int)(random(1,7));
        this.x = (int)(random(600));
        this.y = 0;
	}
	
	show() {
		stroke(0);
		fill(this.color1, this.color2, this.color3);
		rect(this.x, this.y, 40, 40, 5);
        textSize(20);
        fill(0);
		text(this.num, this.x + 15, this.y +25);
	}
	
	move() {
		this.y = this.y + 3;

	}

}