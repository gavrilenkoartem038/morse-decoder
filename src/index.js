const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = []
    let j = 0
    let arr1 = []
    for (let i = 0; i < expr.length; i += 10) {
      arr[j] = expr.slice(expr.indexOf('1', i), i + 10) 
      let a = ''
      if (arr[j] == '') {
        a += ' '
      } else {
        for (let k = 0; k < arr[j].length; k += 2) {
        arr[j].slice(k, k + 2) == '10' ? a += '.' : a +='-'
        }
      }
      arr1.push(a)
      j++
    }
    return arr1.map(e => MORSE_TABLE[e] || ' ').join('')
  }
  

module.exports = {
    decode
}