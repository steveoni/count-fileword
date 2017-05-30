/*!
 * array-unique <https://github.com/steveoni/count-fileword>
 *
 * Copyright (c) 2017-2018, stephen oni.
 * Licensed under the MIT License.
 */

'use strict';


var fs  = require("fs");

module.exports = CountFileWord;

function CountFileWord(m){

	var m = m || process.argv[2];

	var count ={};

	var Arrdata =fs.readFileSync(m).toString().split(" ");

	var filt = Arrdata.filter((v)=>{
		return v !=="" && v !=="\n";
	});

	for(let i = 0, l =filt.length; i <l ; i++){

				if(filt[i] in count){
					count[filt[i]] +=1; 
				}
				else{
					count[filt[i]] = 1;
				}
		}
	return count;

}

module.exports = CountFileWord;

//console.log(CountFileWord());






