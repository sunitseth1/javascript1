
	function solution(a, b, n)
	{
		// traverse for all possible values
		for (let i = 0; i * a <= n; i++)
		{
	
			// check if it is satisfying the equation
			if ((n - (i * a)) % b == 0)
			{
				console.log("x = " + i +
								", y = " +
								(n - (i * a)) / b);
				
				return ;
			}
		}
	
		console.log("No solution");
	}


		let a = 2, b = 3, n = 7;
		solution(a, b, n);
		
	