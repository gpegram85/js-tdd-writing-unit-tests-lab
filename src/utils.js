// Your code here

export function isPalindrome(input) {
    // return string === string.split('').reverse().join('')

    
    if(typeof input !== 'string') {
        throw new Error('Input must be a string')
    }

    if (/[^a-zA-Z0-9]/.test(input)) {
        throw new Error('Input contains special characters');
    }

    if (input.length === 0) {
        return false;
      }

    const lowerCaseStr = input.toLowerCase();
    const alphanumericStr = lowerCaseStr.replace(/[^a-z0-9]/g, '');
    const reversedStr = alphanumericStr.split('').reverse().join('');
    return alphanumericStr === reversedStr;
}