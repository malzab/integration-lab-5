const {sum,parzystosc} =require('./index.js');

test('',()=>{
    expect(sum(2,3)).toBe(5);
});

test('',()=>{
    expect(parzystosc(3)).toBe(false);
});