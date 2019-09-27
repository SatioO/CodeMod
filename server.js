const express = require('express')
const jscodeshift = require('jscodeshift')
const codemods = require('./js-codemod/transforms')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3001

app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/codemod/original', (req, res) => {
  return res.json({
    result: codemods.find(item => item.id === req.body.mode).value
  })
})

app.post('/codemod', (req, res) => {
  let transformed = req.body.source
  codemods.map(codemod => {
    try {
      if (codemod.id !== 'reactRmBind') {
        const transform = codemod.mode(
          { source: transformed },
          { jscodeshift },
          {}
        )
        transformed = transform
      }
    } catch (err) {
      console.log('error', err)
    }
  })
  return res.json({ result: transformed })
})

app.post('/codemod/transform', (req, res) => {
  let transformed = req.body.source
  const mode = req.body.mode
  if (mode === 'all') {
    codemods.map(codemod => {
      try {
        if (codemod.id !== 'reactRmBind') {
          const transform = codemod.mode(
            { source: transformed },
            { jscodeshift },
            {}
          )
          transformed = transform
        }
      } catch (err) {
        console.log('error', err)
      }
    })

    return res.json({ result: transformed })
  }

  const codemod = codemods.find(item => item.id === mode)
  const result = codemod.mode({ source: transformed }, { jscodeshift }, {})
  res.json({
    result
  })
})

app.listen(PORT, () => console.log(`App started listening on PORT ${PORT}`))
