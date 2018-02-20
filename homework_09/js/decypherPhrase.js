var charactersMap = { a: 'o', c: 'd', t: 'g' }
decypherPhrase = (object, string) => {
    const obj1 = {};
    Object.keys(object).forEach(key => {
        obj1[object[key]] = key;
    });
    return cypherPhrase(obj1, string);
};
decypherPhrase(charactersMap, 'kiggy dog');