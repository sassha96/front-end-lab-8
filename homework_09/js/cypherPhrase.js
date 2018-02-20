var charactersMap = { a: 'o', c: 'd', t: 'g' }
function cypherPhrase(object, string) {
    string = string.split('');
    let cypheredPhrase = [];
    cypheredPhrase = getTransformedArray(string, element => {
        Object.keys(object).forEach(key => {
            if (element === key) {
                element = object[element];
            }
        });
        return element;
    })
    return cypheredPhrase.join('');
}
cypherPhrase(charactersMap, 'kitty cat');