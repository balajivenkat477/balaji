let i = 0;
		let start = Date.now();
		let timerId = setInterval(count);
		function count() {
			if (i == 1000000000) {
				alert("Done in " + (Date.now() - start) + 'ms');
				clearInterval(timerId);
			}
			
			for(let j = 0; j < 1000000; j++) {
				i++;
			}
			
		} 
		count();