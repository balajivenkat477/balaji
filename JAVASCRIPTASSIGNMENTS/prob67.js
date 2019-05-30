
		function printNumbers(from,to) {
			let current = from;
			let timerId = setTimeout(function run(){
				console.log(current);
				if(current < to){
					setTimeout(run,1000);
				}
				current++;
			},1000);
		}
		printNumbers(5,10);