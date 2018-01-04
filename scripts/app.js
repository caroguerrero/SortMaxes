const countLowerOrEqual = (maxes, numbers) => {
    console.time('way1')

    const sortMaxes = maxes.sort((x, y) => { return x - y })
    const sortNumbers = numbers.sort((x, y) => { return x - y })
    let maxPrev = sortMaxes[0]
    let countPrev = 0
    let count = 0
    let i = 0
    let result = sortMaxes.map((max, index) => {

        if (maxPrev == max && index != 0) {
            return count
        }else{
            count = 0
            while(i < sortNumbers.length && sortNumbers[i] <= max){
                count++
                i++
            }
            maxPrev = max
            count = count + countPrev
            countPrev = count
            return count
        }
    });
    console.timeEnd('way1')
    return result
}

const countLowerOrEqual2 = (maxes, numbers) => {
    console.time('way2')
    const sortMaxes = maxes.sort((x, y) => { return x - y })
    const sortNumbers = numbers.sort((x, y) => { return x - y })
    let maxPrev = sortMaxes[0]
    let countPrev = 0
    let count = 0
    let i = 0
    const iteratorNumbers = arrayIterable(sortNumbers)
    let result = sortMaxes.map((max, index) => {

        if (maxPrev == max && index != 0) {
            return count
        }else{
            count = 0
            while(iteratorNumbers.next() && sortNumbers[i] <= max) {
                count++
                i++
            }
            maxPrev = max
            count = count + countPrev
            countPrev = count
            return count
        }
    });
    console.timeEnd('way2')
    return result
}

function* arrayIterable (arr) {
    let i = 0
    while(i < arr.length)
        yield arr[i++]
}

export { countLowerOrEqual, countLowerOrEqual2 }
