function animalCount(miles) {
    const first10MileAnimal = 10;
    const second10MileAnimal = 50;
    const thirdRestMileAnimal = 100;
    if (miles <= 10) {
        const totalAnimalFirst10 = miles * first10MileAnimal;

        return totalAnimalFirst10;
    }
    else if (miles <= 20) {
        totalAnimalFirst10 = first10MileAnimal * 10;
        const restMile = miles - 10;
        const totalAnimalSecond10 = totalAnimalFirst10 + restMile * second10MileAnimal;

        return totalAnimalSecond10;
    }
    else {
        totalAnimalFirst10 = first10MileAnimal * 10;
        totalAnimalSecond10 = second10MileAnimal * 10;
        restMile = miles - 20;
        const totalAnimalRest = totalAnimalFirst10 + totalAnimalSecond10 + restMile * thirdRestMileAnimal;

        return totalAnimalRest;
    }
}

const totalMile = animalCount(11);
console.log(totalMile);