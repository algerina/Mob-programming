function compareTriplets(a, b) {
    let rewardA = 0;
    let rewardB = 0;
    for (let i = 0; i < a.length; i ++) {
        if (a[i] > b[i]) {
            rewardA++;
        } else if (a[i] < b[i]) {
            rewardB++;
        }
    }
    return [rewardA, rewardB];


}
console.log(compareTriplets([8, 6, 1], [3, 6, 7]));