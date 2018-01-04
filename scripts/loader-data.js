import loadJsonFile from 'load-json-file'

let numbers = []
let maxes = []

function getJson(url) {
    return loadJsonFile(url)
}

async function loadData() {
    maxes = await getJson('mocks/random-10-k/maxes.json')
    numbers = await getJson('mocks/random-10-k/numbers.json')
    // maxes = await getJson('mocks/original-data/maxes.json')
    // numbers = await getJson('mocks/original-data/numbers.json')
}

loadData()

export { numbers, maxes}