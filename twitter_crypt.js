// ****!!!!READ ME!!!!****

// The "KEY" will be passed to the encode and decode 
// KEY:'REGKFJHUMWBOAXCDPLSQIYZTNV'


// 1) Place the Encode Function Below

function encode(key, tweet) {
   
    if (tweet.length > 140) prompt("please input less than 140 characters");

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var coded = "";
    
    tweet = tweet.toUpperCase();
	for (var i = 0; i < tweet.length; i++) {
	    var index = alphabet.indexOf(tweet[i]);
	    if (index === -1) {
	    	coded += tweet[i];
	    } else {
	    coded += key[index];
	    }
	}
	return coded
}
encryptTweet("hello");


function decode(key, tweet) {
    
var coded =""
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    tweet = tweet.toUpperCase();
	for (var i = 0; i < tweet.length; i++) {
	    var index = key.indexOf(tweet[i]);
	     if (index === -1) {
	    	coded += tweet[i];
	    } else {
	    coded += alphabet[index]; 
		}
	}
	return coded
}