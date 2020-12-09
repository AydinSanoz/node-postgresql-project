const { Connection } = require('pg');
const { Sequelize, DataTypes } = require('sequelize');

// postgresql connection check
//TODO: check process.env connection

const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;
console.log("🚀 ~ file: UserModal.js ~ line 7 ~ DB_USERNAME", DB_USERNAME)
console.log("🚀 ~ file: UserModal.js ~ line 9 ~ DB_PASSWORD", DB_PASSWORD)
console.log("🚀 ~ file: UserModal.js ~ line 11 ~ DB_HOST", DB_HOSTNAME)
console.log("🚀 ~ file: UserModal.js ~ line 13 ~ DB_PORT", DB_PORT)
console.log("🚀 ~ file: UserModal.js ~ line 15 ~ DB_NAME", DB_NAME)
// sample usage to connect db ---> 'postgres://postgres:090519@localhost:5001/canan'


const sequelize = new Sequelize(
    // `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
	'postgres://postgres:090519@localhost:5001/canan'
);

sequelize
	.authenticate()
	.then(() => {
		console.log('connection has been established successfully');
	})
	.catch((err) => {
		console.log('Unable to connect database', err);
	});

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
	{}
);

module.exports = UserModel;
