const UserModal = require('../modal/UserModal');

exports.getUser = async (req, res, next) => {
	try {
		const userList = await UserModal.findAll({});
    res.render('user', { userList });
	} catch (error) {
		console.log('getUserError', error);
	}
};
