const {duplicates} = require('./code')

test('returns "(" for non duplicated values, and ")" for dupliated values', ()=> {
    const answer = duplicates("din");
    expect(answer).toBe("(((");

    const answer1 = duplicates("recede");
    expect(answer1).toBe("()()()");

    const answer2 = duplicates("(( @");
    expect(answer2).toBe("))((");

    const answer3 = duplicates("Success");
    expect(answer3).toBe(")())())");

});