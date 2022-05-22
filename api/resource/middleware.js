const Resource = require("./model")

const validateResource = (req, res, next) => {
    const { resource_name } = req.body
    if(!resource_name){
        next({ status: 400, message: "resource_name is missing" })
    } else {
        next()
    }
}

const checkExisting = async (req, res, next) => {
    try{
    const existing = await Resource.getResourceByName(req.body.resource_name)
    if( !existing ) {
        next()
    } else {
        next({ 
            status: 400, 
            message: "a resource with that name already exists"
         })
    }
    } catch(err){
        next(err)
    }
}

module.exports = { validateResource, checkExisting }