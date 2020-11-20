const { v4: uuidv4 } = require('uuid');

exports.get_UUID = (req, res, next) => {
    try {
        res.status(200).send(uuidv4());
    } catch (error) {
        res.status(204).send();
    }
}