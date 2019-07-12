function mash(){
    return "you will live in " + getHouse() + " and have " + getChildrenCount() + " kids you will drive a " + getCar();
}
function getHouse(){
    let homes = ["Mansion", "Apartment", "Shack", "House"];
    const item = process.argv[2];
    if (item == undefined || !isNaN(item)){
        throw "You need to add a home to the list"
    }
    homes.push(item);
    let random = Math.random() * 5;
    let real = Math.floor(random);
    let newHome = homes[real];
    return newHome;
}

function getChildrenCount(){
    const item2 = process.argv[3];
    let random1 = Math.random();
    let random2 = Math.floor(random1 * 100)
    let random3 = Math.random()
    if (item2 == undefined){
        throw "You need to put a number of kids in the list"
    }
    if (random3 < .5){
        return item2
    }
    else{
        return random2
    }
}
console.log(mash())

function getCar(){
    let cars = ["Lambo", "Rolls Royce", "Bugatti", "Honda Civic"];
    const car1 = process.argv[4];
    if (car1 == undefined || !isNaN(car1)){
        throw "You need to add a car to the list"
    }
    cars.push(car1);
    let random = Math.random() * 5;
    let real1 = Math.floor(random);
    let newCar = cars[real1];
    return newCar;
}
