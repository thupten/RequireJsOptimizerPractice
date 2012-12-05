({
    baseUrl:"./RequireJsOptimizePractice/scripts",
    
	dir:"./RequireJsOptimizePractice/scripts-built",
	
	name:"main",
	
	mainConfigFile:"./RequireJsOptimizePractice/scripts/main.js",
    /*out:"main-built.js",*/
	include:[
			"text",
			"text!../templates/myAccount.xml",
			],
    optimize:"none",
	paths:{
            'underscore':'lib/underscore',
            'jquery':'lib/jquery-latest'
        },
	logLevel: 0
})