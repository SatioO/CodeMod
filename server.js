const express = require('express');
const jscodeshift = require('jscodeshift');
const codemods = require('./js-codemod/transforms');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/codemod', (req, res) => {
    let code = req.body.source;
    codemods.map(codemod => {
        try {
            const transform = codemod({ source: code }, { jscodeshift }, {});
            code = transform;
        } catch (error) {
            console.log(error);
        }
    });

    res.json({ code });
});

app.listen(PORT, () => console.log(`App started listening on PORT ${PORT}`));
