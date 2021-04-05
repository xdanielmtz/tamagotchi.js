function DigitalPal() {
    this.hungry = false;
    this.sleepy = false; 
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = 100;
}

DigitalPal.prototype.feed = function () {
    if(this.hungry){
        console.log("This was yummy!")
        this.hungry = false;
        this.sleepy = true;
    }
    else{
        console.log("No thanks! I'm full.")
    }
};

DigitalPal.prototype.sleepy = function (){
    if(this.sleepy){
        console.log("ZZZzzzzZZZzz");
        this.sleepy = false;
        this.bored = true;
        this.increaseAge();
    }
    else{
        console.log("No Way! I'm tired!");
    }0
}

DigitalPal.prototype.play = function(){
    if(this.bored){
        console.log("Yay, lets play :)");
        this.bored = false;
        this.hungry = true;
    }
    else{
        console.log("Not right now, Later.");
    }
};

DigitalPal.prototype.increaseAge = function() {
    this.age = this.age + 1;
    console.log(`Happy birthday to me! I am ${this.age} old!`)
}

DigitalPal.prototype.bark = function () {
    console.log("Woof! Woof!");
}

DigitalPal.prototype.goOutside = function () {
    if(this.outside === false){
        console.log("Yay! I love the outdoors.");
        this.outside = true;
        this.bark();
    }
    else{
        console.log("We are already outside though");
    }
};

DigitalPal.prototype.goInside = function () {
    if (this.outside){
        console.log("Do we have to? Fine...")
        this.outside = false; 
    }
    else{
        console.log("I am already inside...");
    }
}

DigitalPal.prototype.meow = function () {
    console.log ("Meow! Meow!");
}

DigitalPal.prototype.destroyFurniture = function () {
    if(this.houseCondition > 0){
        this.houseCondition = this.houseCondition - 10;
        console.log("MUAHHHAHHA! Tale that furniture");
        this.bored = false;
        this.sleepy = true;
    }
}

DigitalPal.prototype.buyNewFurniture = function () {
    this.houseCondition = this.houseCondition + 50;
    console.log("Are you sure about that?");
}


const dog = new DigitalPal();

const cat = new DigitalPal();

dog.meow();