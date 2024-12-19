const yup = require('yup')

const validate = async (req,res,next)=>{
try {
    const schema = yup.object().shape({
        msg: yup.string().required(),
    })
    await schema.validate(req.body, { abortEarly: false})
    next()
} catch (error) {
    res.json({
        error : error.errors
    })
}
}

module.exports = validate