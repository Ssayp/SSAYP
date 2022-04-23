
const validator = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if(error === undefined) 
        return next();
    
    const { details } = error;

    const message = details.map((item) => item.message.replace(/['"]+/g, '')).join(',');

    return res.status(400).json({
        statusCode: 400,
        success: false,
        message
    })

}

module.exports = {
    validator
}