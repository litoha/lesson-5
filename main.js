//№1
//var str = isPalindrome('abcdedcba'); 
//
//function isPalindrome(str) {
//     
//    for (var i = 0; i < str.length/2; i++) {
//      if (str.charAt(i) === str.charAt(str.length - 1 - i)) { 
//        console.log('yes');
//      } else {
//        console.log('no');
//      }
//    }
//  }

//№2
//function Anagramma (a, b) {
//  return a.toLowerCase().split('').sort().join('') === b.toLowerCase().split('').sort().join('');
//}
//Anagramma ('воз', 'зов');

//№3
//function countLetters (text) {
//  text = text.toLowerCase();
//  
//  var LettersArray =['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
//  textArray = text.split ('');
//  counter = 0;  
//  
//  textArray.forEach (function (letter){
//    LettersArray.includes(letter) && counter++;
//  });
//  return counter;
//}
//countLetters ('домашнее задание');


