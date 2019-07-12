function mash(){
    return "you will be a " + getOccupation() + " and have " + getMoney() + " dollars you will live in a " + getHouse();
}
function getOccupation(){
    let jobs = ["Doctor", "Hobo", "Lawyer", "Cop"];
    const item = process.argv[2];
    if (item == undefined || !isNaN(item)){
        throw "You need to add an occupation to the list"
    }
    jobs.push(item);
    let random = Math.random() * 5;
    let real = Math.floor(random);
    let newJob = jobs[real];
    return newJob;
}

function getMoney(){
    const item2 = process.argv[3];
    let random1 = Math.random();
    let random2 = Math.floor(random1 * 1000000000000000)
    let random3 = Math.random()
    if (item2 == undefined || isNaN(item2)){
        throw "You need to put an amount of money in the list"
    }
    if (random3 < .5){
        return item2
    }
    else{
        return random2
    }
}
console.log(mash())

function getHouse(){
    let cars = ["Box", "Appartment", "Garbage Can", "Mansion"];
    const car1 = process.argv[4];
    if (car1 == undefined || !isNaN(car1)){
        throw "You need to add a living structure to the list"
    }
    cars.push(car1);
    let random = Math.random() * 5;
    let real1 = Math.floor(random);
    let newCar = cars[real1];
    return newCar;
}
