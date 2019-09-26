const express = require('express');
const jscodeshift = require('jscodeshift');
const codemods = require('./js-codemod/transforms');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/codemod', (req, res) => {
    let transformed = req.body.source;
    let mode = req.body.mode;

    if (mode) {
        const codemod = codemods.find(item => item.id === mode);

        const transform = codemod.mode(
            { source: codemod.value },
            { jscodeshift },
            {}
        );

        transformed = transform;

        return res.json({ transformed, original: codemod.value });
    } else {
        if (!transformed || transformed.length === 0) {
            return res.json({ transformed: '' });
        }
        codemods.map(codemod => {
            try {
                if (
                    codemod.id !== 'fnToClass' &&
                    codemod.id !== 'reactRmBind'
                ) {
                    const transform = codemod.mode(
                        { source: transformed },
                        { jscodeshift },
                        {}
                    );
                    transformed = transform;
                }
            } catch (error) {
                console.log(error);
            }
        });

        return res.json({ transformed });
    }
});

app.listen(PORT, () => console.log(`App started listening on PORT ${PORT}`));
