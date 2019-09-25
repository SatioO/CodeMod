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
    let mode = req.body.mode;

    if (!code || code.length === 0) {
        return res.json({ code: '' });
    }

    if (mode && mode !== 'all') {
        const codemod = codemods.find(item => item.id === mode);
        const transformed = codemod.value(
            { source: code },
            { jscodeshift },
            {}
        );

        return res.json({ code: transformed });
    } else {
        codemods.map(codemod => {
            try {
                if (
                    codemod.id !== 'fnToClass' &&
                    codemod.id !== 'reactRmBind'
                ) {
                    const transform = codemod.value(
                        { source: code },
                        { jscodeshift },
                        {}
                    );
                    code = transform;
                }
            } catch (error) {
                console.log(error);
            }
        });

        return res.json({ code });
    }
});

app.listen(PORT, () => console.log(`App started listening on PORT ${PORT}`));
