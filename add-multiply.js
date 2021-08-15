function woodCalcu(chairQuan, tableQuan, bedQuan) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairNeed = chairQuan * perChairWood;
    const tableNeed = tableQuan * perTableWood;
    const bedNeed = bedQuan * perBedWood;

    const totalWoodNeed = chairNeed + tableNeed + bedNeed;

    return totalWoodNeed;
}

const totalWood = woodCalcu(2, 3, 1);
console.log(totalWood);