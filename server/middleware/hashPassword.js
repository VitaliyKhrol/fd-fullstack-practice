const bcrypt = require('bcrypt');

const SALT_ROUND = 1;

module.exports.hashPass = async (req,res,next) => {
    try {
        const{body:{password}} = req;
        const hash = await bcrypt.hash(password, SALT_ROUND);
        req.passwordHash = hash;
        // console.log(req.passwordHash);
        next();
    } catch (error) {
        next(error);
    }
}