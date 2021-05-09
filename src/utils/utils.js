const regexDeleteSign = /\$.+?\$/g;
const dollar = /\$/g;
export const makeKeyWordBold = (string) => {
   const keyWords = string.match(regexDeleteSign);
   if(!keyWords || !string) {
      return string;
   }
   const arr = string.split(regexDeleteSign);
   return keyWords.reduce((ac, keyWord, index) => {
      const word = keyWord.replace(dollar, '');
      return [...ac, arr[index], <b>{word}</b>, arr[index + 1]];
   }, [])
}