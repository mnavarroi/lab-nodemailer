const express = require('express');
const router  = express.Router();
const mailer = require('../helpers/mailer');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('./auth/signup');
});

router.post('/', (req,res) => {
    const options = req.body;
    options.filename = "verify";
    console.log("post",req.body)
    mailer.send(options)
        .then(()=>{
            res.status(200).send("El correo se envió")
        })
        .catch(err => {
            res.status(500).json({err, "msg": "Algo salió mal"})
        })
});

module.exports = router;