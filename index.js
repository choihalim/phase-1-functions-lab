function distanceFromHqInBlocks(value) {
    let street = 42;
    return Math.abs(street - value);
}

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264);
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let price;
    if (distance < 400) {
        price = 0;
    }
    if (distance >= 400 && distance <= 2000) {
        price = 0.02 * (distance - 400);
    }
    else if (distance > 2000 && distance < 2500) {
        price = 25;
    }
    else if (distance > 2500) {
        price = "cannot travel that far";
    }
    return price;
}