const { MongoClient } = require("mongodb");
const url = 'mongodb://vismay:root@localhost:27017/?authMechanism=DEFAULT';  //Local Database 
const databasename = "admin";  //Database Name
MongoClient.connect(url).then((client) => {

	const connect = client.db(databasename);
	// Connect to collection
	const collection = connect.collection("shop");

	collection.find({ "name": "The Sea Explorer" }).toArray().then((ans) => {
			console.log(ans);
		});
}).catch((err) => {
	console.log(err.Message);
})
