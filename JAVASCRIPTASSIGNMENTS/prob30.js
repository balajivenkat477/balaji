function getSecondsToTomorrow() {
    let present = new Date();


    let tmw = new Date(present.getFullYear(), present.getMonth(), present.getDate() + 1);

    let diff = tmw - present;
    return Math.round(diff / 1000);
}

console.log(getSecondsToTomorrow());
