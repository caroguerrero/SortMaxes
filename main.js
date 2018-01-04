import { countLowerOrEqual, countLowerOrEqual2 } from './scripts/app'
import { numbers, maxes } from './scripts/loader-data'

let express = require('express')
let app = express()

app.get('/count-lower-or-equal', (req, res) => {
    res.send(countLowerOrEqual(maxes, numbers))
})

app.get('/count-lower-or-equal-2', (req, res) => {
    res.send(countLowerOrEqual2(maxes, numbers))
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})