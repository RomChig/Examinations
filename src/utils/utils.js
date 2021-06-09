const regexDeleteSign = /\$.+?\$/g;
const dollar = /\$/g;
export const PATH_TO_MAIN_PAGE = '/';
export const PATH_TO_TEST_PAGE = '/test';
export const PATH_TO_RESULT_PAGE = '/test/finish';
export const makeKeyWordBold = (string) => {
    const keyWords = string.match(regexDeleteSign);
    if (!keyWords || !string) {
        return string;
    }
    const arr = string.split(regexDeleteSign);
    return keyWords.reduce((ac, keyWord, index) => {
        const word = keyWord.replace(dollar, '');
        return [...ac, arr[index], <b>{word}</b>, arr[index + 1]];
    }, [])
}

export const shuffle = (array) => {
    if (array) {
        array.sort(() => Math.random() - 0.5);
    }
}