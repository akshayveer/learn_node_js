var getUser = (id, callback) => {
	var user = {id : id, "name" : "Akshay"};
	callback(user);
};

getUser(31, (user) => {
	console.log(user);
});