const { Connection } = require('pg');
const { Sequelize, DataTypes } = require('sequelize');

// postgresql connection check

const sequelize = new Sequelize(
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
