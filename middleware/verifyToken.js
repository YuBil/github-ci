module.exports = function verifyToken(req, res, next) {
    const REQ_TOKEN = req.header("Authorization");
    const VERIFIED_TOKEN = 'Bearer tuwnVFNKyqgo';

    if (REQ_TOKEN === VERIFIED_TOKEN) {
        next();
    } else {
        res.sendStatus(401);
    }
};
