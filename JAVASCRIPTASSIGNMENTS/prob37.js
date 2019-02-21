function aclean(arr) {
    var map = new Map();
    for (var item of arr) {
        var anagram = item.toLowerCase().split('').sort().join();
        console.log(map.set(anagram, item));         ;
    }
    return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));