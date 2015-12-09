/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances(objects) of User.

var users = [];


//Now create and push into your users array 3 separate instances of User using the
//data from above in that exact order

var tyler = new User ('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');

console.log(tyler);
//Console.log all of Tylers information

var cahlan = new User ('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags' );

console.log(Cahlan);

//Now console.log all of Lennys information

var lenny = new User ('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');

console.log(lenny);

users.push(tyler); users.push(cahlan); users.push(lenny);


//Now create another instance of User using your own information and then add that to your users array.

var geordyn = new User ('Geordyn', 'geordyn@gmail.com', 'passw0rd');

users.push(geordyn);

console.log('All my users names are ' + users[0].name + ' '+ users[1].name + ' '+ users[2].name+ ' '+users[3].name);
//Now loop through your users Array and console.log every users name.

function getUsersNames (users) {
  for(var i =0; i < users.length; i++) {
    console.log(users[i].name);
  }
}
