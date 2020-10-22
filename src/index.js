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
    
  let arr = [];
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];

  for (let i = 0; i < expr.length; i=i+2) {arr.push(expr.slice(i, i + 2));}

    arr1 = arr.map(item => {
    if (item == "00") { return "_"}
    if (item == "10") { return "."}
    if (item == "11") { return "-"}
    if (item == "**") { return " "}
  });

 arr2 = arr1.reduce((acc, item) => acc = acc + item);

 for (let i = 0; i < arr2.length; i=i+5) {
  
    arr3.push(arr2.slice(i, i + 5).replace(/_/g,""));
 }

 for (let i = 0; i < arr3.length; i=i+1) {
  
  arr4.push(MORSE_TABLE[arr3[i]]);
  arr4.fill(" ", arr4.indexOf(undefined), arr4.indexOf(undefined)+1);
 }

 
return arr4.reduce((result, element) => result.concat(element));
}

module.exports = {
    decode
}