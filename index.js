/*!
 * 
 * @author stephen oni.
 * Licensed under the MIT License.
 */

'use strict';


var fs  = require("fs");

module.exports = CountFileWord;
/**
*@param m:file to be inputed
*read the file synchronously and convert the buffer to string
*the file is then turn into an array using split  by space
*filter the file to remove newline'\n'
*loop through the filtered word and check if the word
*are seen before if yes increase by one 
*and if not ,equall to zero.
**/

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






