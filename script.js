// complete the given function

function palindrome(str){
	let str=str.replace(/\s/g, '' );
	
	let i=0,j=str.length-1;
	while(i<j){
		if (str[i]!==str[j]) {
			return false;
		}
		i++;
		j++;
	}
	return true;
	
}
module.exports = palindrome
