const express = require('express');
const bodyParser = require('body-parser');
const skiRoutes = require('../src/routes/skier.routes');
const resRoutes = require('../src/routes/resort.routes');
const ApiError = require('../src/utils/ApiError');
const index = require('../src/models/index');
const httpStatus = require("http-status");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const PORT = process.env.PORT || 5000;

try {
    index.testConnection();

} catch (error) {
    console.error(error);
}
app.get('/', (req,res) => res.send("TEST"));
app.use('/skiers', skiRoutes );
app.use('/resorts', resRoutes );

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

index.syncModels({alter: true})
    .then(() =>{
        console.log('db synced successfully')
        app.listen(PORT, console.log(`Server radi na portu ${PORT}`));
    })
// app.listen(PORT, console.log(`Server radi na portu ${PORT}`));