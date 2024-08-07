function numberToWords(num: number): string {
    if (num === 0) return 'Zero'
    const belowTwenty = [
        '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 
        'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 
        'Eighteen', 'Nineteen'
    ]
    const tens = [
        '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ]
    const thousands = ['', 'Thousand', 'Million', 'Billion']

    const helper = (n: number): string => {
        if (n === 0) return ''
        else if (n < 20) return belowTwenty[n] + ' '
        else if (n < 100) return tens[Math.floor(n / 10)] + ' ' + helper(n % 10)
        else return belowTwenty[Math.floor(n / 100)] + ' Hundred ' + helper(n % 100)
    }

    let result = ''
    let unit = 1
    for (let i = 0; i < thousands.length; i++) {
        if (Math.floor(num / unit) % 1000 !== 0) {
            result = helper(Math.floor((num / unit) % 1000)) + thousands[i] + ' ' + result
        }
        unit *= 1000
    }

    return result.trim()
}

console.log(numberToWords(123))
