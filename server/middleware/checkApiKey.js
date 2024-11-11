require('dotenv').config;

const checkApiKey = (req, res, next) => {

    const api_key = req.header('x-api-key');

    if(api_key === process.env.API_KEY){
        next();
    }
    else{
        res.status(400).json({message: "API KEY inválida o faltante"});
    }

}

module.exports = checkApiKey;