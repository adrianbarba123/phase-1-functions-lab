function distanceFromHqInBlocks(street){
    let distance = street - 42;
    if(distance < 0){
        distance *= -1;
    }
    return distance;
}

function distanceFromHqInFeet(street){
    let temp = distanceFromHqInBlocks(street) * 264;
    return temp;
}

function distanceTravelledInFeet(start, end){
    let distance = distanceFromHqInFeet(start) - distanceFromHqInFeet(end);
    if(distance < 0){
        distance *= -1;
    }
    return distance;
}

function calculatesFarePrice(start, end){
    let distance = distanceFromHqInFeet(start) - distanceFromHqInFeet(end);
    if(distance < 0){
        distance *= -1;
    }
    if(distance <= 400){
        return 0;
    } else if (distance > 400 && distance < 2000){
        distance = (distance - 400) * .02;
        return distance;
    } else if (distance >= 2000 && distance < 2500){
        return 25;
    } else if (distance >= 2500){
        return 'cannot travel that far';
    }
}