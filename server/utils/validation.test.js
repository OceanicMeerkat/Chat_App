const expect = require('expect');
const {isRealString} = require('./validation')

var name ="";
var room =""


describe('isRealString', () => {
    it('Should reject non-string values', () => {
        name = 123;
        expect(isRealString(name)).toBeFalsy();
    });

    it('Should reject string with only spaces', () => {
        room ="  "        
        expect(isRealString(room)).toBeFalsy();
    })

    it('Should allow string with non-space characters', ()=> {
        var test_room = " test"        
        expect(isRealString(test_room)).toBeTruthy();
        
    })

})