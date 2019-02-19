function getSecondsToday() {
    let present = new Date();


    let today = new Date(present.getFullYear(), present.getMonth(), present.getDate());

    let diff = present - today;
    return Math.round(diff / 1000);
}

console.log(getSecondsToday());