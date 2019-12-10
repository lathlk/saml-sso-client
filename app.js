const express = require('express')
const app = express()
var saml2 = require('saml2-js')

const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to XYZ hopital patient management system')
})

app.listen(port, () => {
    console.log('server started on port %d', port);
})