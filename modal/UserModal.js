const { Connection } = require('pg');
const { Sequelize, DataTypes, Model } = require('sequelize');

// postgresql connection check
//TODO: check process.env connection

const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;
console.log(process.env);
// sample usage to connect db ---> 'postgres://postgres:090519@localhost:5001/canan'

const sequelize = new Sequelize(
	`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
);

sequelize
	.authenticate()
	.then(() => {
		console.log('connection has been established successfully');
	})
	.catch((err) => {
		console.log('Unable to connect database', err);
	});

// 2 method of sequelize define & init
// Below define method usage

const UserModel = sequelize.define(
	'nominees',
	{
		//attributes
		firstName: {
			type: DataTypes.STRING(),
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING(),
			allowNull: false,
		},
	},
	{
		modelName : "nominees",
		tableName : "nominees",
		freezeTableName : true
	}
);


// Below init method with class structure
/*
class UserModel extends Model {
	// all User model methods and functions will be written here
}
UserModel.init({
	firstName : {
		type: DataTypes.STRING(),
		allowNull : false
	},
	lastName : {
		type : DataTypes.STRING(),
		allowNull : false
	},
},
{
	sequelize,
	modelName : "UserModal",
	tableName : "nominees",
	freezeTableName : true
	
})
*/
module.exports = UserModel;
