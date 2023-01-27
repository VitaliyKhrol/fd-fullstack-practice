const bcrypt = require('bcrypt');
const {User} = require('../models');
const NotFoundError = require('../errors/NotFound');
const InvalidDataError = require('../errors/InvalidDataError');

module.exports.signUpUser = async (req, res, next) => {
    try {
        const {body, passwordHash} = req;
        const createdUser = await User.create({...body, passwordHash});
        res.status(201).send({data: createdUser});
    } catch(error) {
        next(error);
    }
}

module.exports.signInUser = async (req, res, next) => {
    try {
        const {body: {email, password}} = req;
        const foundUser = await User.findOne({
                email: email
        });
        if (foundUser) {
            const result = await bcrypt.compare(password, foundUser.passwordHash);
            // Або пароль правильний, або ні.
            console.log(result); 
            if (result) {
                res.status(200).send({data: foundUser});
            } else {
               throw new InvalidDataError('Invalid credentials')
            }
        } else {
            throw new NotFoundError('User not found');
        }
    } catch(error) {
        next(error)
    }
}

module.exports.getOneUser = async (req, res, next) => {
}