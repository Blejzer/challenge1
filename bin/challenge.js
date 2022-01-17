const express = require('express');
const bodyParser = require('body-parser');
const ApiError = require('../src/utils/ApiError');
const index = require('../src/models/index');
const httpStatus = require("http-status");
const router = require('../src/routes/router');
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(router);


const PORT = process.env.PORT || 3000;

try {
    index.testConnection();

} catch (error) {
    console.error(error);
}

app.get('/', (req,res) => res.send("TEST"));


// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'API request not found'));
});

index.syncModels({alter: true})
    .then(() =>{
        console.log('db synced successfully')
        app.listen(PORT, console.log(`Server radi na portu ${PORT}`));
    })
// app.listen(PORT, console.log(`Server radi na portu ${PORT}`));