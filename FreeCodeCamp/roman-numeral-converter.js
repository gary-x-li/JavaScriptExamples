/**
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/

function convertToRoman(num) {
  if (num > 3999 || num < 1) {
    return 'Not supported';
  }

  var arr = num.toString().split('');
  var ones = arr.pop();
  var tens = arr.pop();
  var hundreds = arr.pop();
  var thousands = arr.pop();

  var result = '';

  if (thousands !== undefined) {
    switch (thousands) {
      case '1':
        result.concat('M');
        break;
      case '2':
        result.concat('MM');
        break;
      case '3':
        result.concat('MMM');
        break;
      default:

    }
  }

  if (hundreds !== undefined) {
    switch (hundreds) {
      case '1':
        result.concat('C');
        break;
      case '2':
        result.concat('CC');
        break;
      case '3':
        result.concat('CCC');
        break;
      case '4':
        result.concat('CD');
        break;
      case '5':
        result.concat('D');
        break;
      case '6':
        result.concat('DC');
        break;
      case '7':
        result.concat('DCC');
        break;
      case '8':
        result.concat('DCCC');
        break;
      case '9':
        result.concat('CM');
        break;
      default:

    }
  }

  return num;
}
