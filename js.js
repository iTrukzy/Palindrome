let string =
  "anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero";

const revPalindrome = (string) => {
  let reverse = string.split("").reverse().join("");
  return string == reverse;
};


const palindrome = (string) => {
  let length = 3;
  let result = [];

  for (let i = 0; i < string.length; i++) {
    let catn = string.substr(i, string.length);

    for (let j = catn.length; j >= 0; j--) {
      let SubsString = catn.substr(0, j);

      if (revPalindrome(SubsString)) {
        if (SubsString.length > length) {
          result.push(SubsString);
        }
      }
    }
  }
  return result;
};

console.log(palindrome(string));
