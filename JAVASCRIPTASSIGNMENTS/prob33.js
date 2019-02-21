function checkSpam(str){

    let str1 = str.toLowerCase();
    return str1.includes('viagra') || str1.includes('xxx');

}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));