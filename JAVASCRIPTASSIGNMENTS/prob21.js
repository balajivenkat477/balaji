function unique(arr){
    var answer = [];
    for(let str of arr){
        if(!answer.includes(str)){
           answer.push(str);

        }
    }
    return answer;
}

    let arr = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    console.log(unique(arr));

/*alternate solution
 function unique(arr){
     return Array.from(new Set(arr));

 }

 let arr = ["Hare","Krishna","Hare","Krishna","Krishna","Krishna","Krishna","Krishna","Hare","Hare",":-O"];
 console.log(unique(arr));*/