var database = [
{
	username:"Kaushik",
	password:"123"
},
{
	username:"charan",
	password:"143"
},
{
	username:"reddy",
	password:"989"
}
];

var newsfeed = [
{
username:"bobby",
timeline:"So..tired"
},
{
<<<<<<< HEAD
	username:"karthik",
	timeline:"feeling soo luckyy!!"
=======
	news_username: "gopi sundar",
	comment:"Doing something greatt!!"
>>>>>>> 5b843fb758ec88b9e082c5ed0fb03d12a7d2a24e

},
{
	username:"max",
	timeline:"pizzass..yummyy.!!"

}

];

function Isvalid(userpro,passpro)
{
	for (var i = 0; i < database.length; i++) {
		if(database[i].username === userpro && database[i].password === passpro)
		{
			return true;
		}
	
											  }
            return false; 
}



var userpro = prompt("Username:");
var passpro = prompt("Password:");

function SignIn(username,password)
{ 
	
	
	if(Isvalid(userpro,passpro))
	{
		console.log(newsfeed);
	}
	else
	{
		alert("Wrong credentials");
	}
}

SignIn(userpro,passpro);