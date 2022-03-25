const UnauthorizedError = require('../errors/unauthorized.error');

module.exports = (req, res, next) => {
    const apiKey = req.headers['api-key'];
    if (!apiKey || apiKey !== process.env.API_KEY) {
        throw new UnauthorizedError('You are not allowed to visit this url.');
    }

    next();
}