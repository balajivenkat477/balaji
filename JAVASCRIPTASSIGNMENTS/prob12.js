function camelize(str) {
    return str.split('-')
        // .map(
        //     (string, index) => index == 0 ? string[index].toUpperCase() + string.slice(1) : string[index].toLowerCase()
        // )
        .map(
            (string, index) => string[0].toUpperCase() + string.slice(1)
        )
        .join('');
}

console.log(camelize("my-short-string"));