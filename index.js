const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
res.send('Hello BADD!');
res.send()
});
const bodyParser = require('body-parser'); //Using Body-Parser within index
app.use(bodyParser.json());
app.listen(port, () => {
console.log(`app listening at http://localhost:${port}`);
});
