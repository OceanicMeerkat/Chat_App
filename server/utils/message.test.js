var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => 
    {
        var from ='Jen';
        var text = 'Some Message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        })

    })
});

describe('generateLocationMessage', () => {
    it('should generate correct Location message object', () => 
    {
        var from ='Jen';
        var lat = 13;
        var lng = 100;
        var url = 'https://www.google.com/maps?q=13,100'
        var message = generateLocationMessage(from, lat, lng);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            url
        })

    })
});