({
    baseUrl:"./RequireJsOptimizePractice/scripts",
    
	dir:"./RequireJsOptimizePractice/scripts-built",
	
	mainConfigFile:"./RequireJsOptimizePractice/scripts/main.js",
	
	modules:[
				{
					name:"main",
					include:[
							"text",
							"text!../templates/myAccount.xml",
							]
				}
			],
    optimize:"none",
	paths:{
            'underscore':'lib/underscore',
            'jquery':'lib/jquery-latest'
        },
	logLevel: 0
})