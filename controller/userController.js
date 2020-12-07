const UserModal = require('../modal/UserModal');

exports.getUser = async (req, res, next) => {
	try {
		const userList = await UserModal.findAll({});
		res.render('user', { userList });
	} catch (error) {
		console.log('getUserError', error);
	}
};

exports.show_add_user_form = async (req, res) => {
	try {
		await res.render('addUser');
	} catch (error) {
		console.log('addUserError', error);
	}
};

exports.add_user = async (req, res) => {
	try {
		await UserModal.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
		});
		res.redirect('/users');
	} catch (error) {
		console.log('addUserError', error);
	}
};

exports.delete_user = async (req, res) => {
	try {
		await UserModal.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.redirect('/users');
	} catch (error) {}
};

exports.show_update_user_form = (req, res) => {
	const id = req.params.id;
	const firstName = req.params.firstName;
	const lastName = req.params.lastName;
	// res.send('update user form')
	res.render('updateUser', { id, firstName, lastName });
};

exports.update_user = async (req, res) => {
	const id = req.params.id;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	try {
    await UserModal.update({firstName,lastName},{where: {id: id}});
    res.redirect('/users')
	} catch (error) {
		console.log('updateError', error);
	}
};
