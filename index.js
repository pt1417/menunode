const express = require('express')
const axios = require('axios')
const app = express()
 
app.use('/', express.static('client/dist'))
app.use(function(req, res, next)  {
    console.log("Proxying : "+req.path)
    var libraryserviceUrl = "http://173.193.75.86:30084"
    axios.get(libraryserviceUrl+req.path)
        .then((libres) => {
            res.json(libres)
        })
        .catch((err) => {
            console.log("Failed to proxy: "+err)
            res.send(500, "Proxy failed");
        })
})
console.log("Starting server @ port 3000")
app.listen(3000)