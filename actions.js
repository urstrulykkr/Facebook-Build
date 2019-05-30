var user = [
{
	username:"reddykaushik",
	password:"123"
}];

var usernameprompt=prompt("Enter username here ");
var passprompt=prompt("Enter password here ");

var newsfeed = [
{
	news_username: "ravi",
	comment:"Feeling blessed!"
},
{
	news_username: "mahesh",
	comment:"Doing something greatt!!"

},
{
	news_username: "tarak",
	comment:"Ah..life's so so cooll!!"
}
];

 function signIN(usernam, pass)
{
	if(usernam === user[0].username && 
		pass === user[0].password)
	{
		console.log(newsfeed);
	}
	else
	{
		alert("Please try again!!");
	}
}


