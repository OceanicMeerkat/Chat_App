const path = require('path');

const publicPath = path.join(__dirname,'../public')

/*
console.log(__dirname + '/../public');
console.log(publicPath);
*/
const express = require('express');
const app = express();
const port = process.env.PORT || port;



app.use(express.static(publicPath));

/*
app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: www });
});
*/


app.listen(port, () => console.log(`listening on ${port}`));
