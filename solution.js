high = (sent) => {
    //1 string into array with each array a word
    const words = sent.trim().split(" ")
    var valArr = []
    var finArr = []
    var oneMoreArr = [];
    var arr4 = [];
    for (var i = 0; i < words.length; i++) {
        const x = words[i]

        valArr.push(x)
    }
    for (var j = 0; j < valArr.length; j++) {
        const x = valArr[j]
        // 2 word into value
        let val = new Map([
            ['a', 1],
            ['b', 2],
            ['c', 3],
            ['d', 4],
            ['e', 5],
            ['f', 6],
            ['g', 7],
            ['h', 8],
            ['i', 9],
            ['j', 10],
            ['k', 11],
            ['l', 12],
            ['m', 13],
            ['n', 14],
            ['o', 15],
            ['p', 16],
            ['q', 17],
            ['r', 18],
            ['s', 19],
            ['t', 20],
            ['u', 21],
            ['v', 22],
            ['w', 23],
            ['x', 24],
            ['y', 25],
            ['z', 26,]

        ]);
        let arr = []
        // take string into value
        for (var k = 0; k < x.length; k++) {
            let strVal = val.get(x[k].toLowerCase())
            arr.push(strVal)
        }
        finArr.push(arr.reduce((a, b) => a + b, 0))

    } for (var n = 0; n < finArr.length; n++) {
        let newVal = new Map([
            [finArr[n], valArr[n]]
        ]);
        let bigWord = newVal.get(Math.max(...finArr))
        oneMoreArr.push(bigWord)


    } for (var m = 0; m < oneMoreArr.length; m++) {
        if (oneMoreArr[m] != undefined) {
            arr4.push(oneMoreArr[m])
        }
    }
    return arr4[0]



}