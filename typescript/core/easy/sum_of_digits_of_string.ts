function getLucky(s: string, k: number): number {
  const alphabet: { [key: string]: number } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  }
  let outputString = ''
  for (let i = 0; i < s.length; i++) {
    outputString += `${alphabet[s[i]]}`

  }
  let output: number
  if (k === 1) {
    output = 0
    for (let i = 0; i < outputString.length; i++) {
      output += +outputString[i]
    }
    return output
  } else {
    output = 0
    for (let j = 0; j < k; j++) {
      for (let i = 0; i < outputString.length; i++) {
        output += +outputString[i]
      }
      outputString = `${output}`
      if (j === k - 1) {
        return output
      }
      output = 0
    }
  }
  return 0
}

console.log(getLucky("iiii", 1))