const configure = require('enzyme').configure;
const shallow = require('enzyme').shallow;
const Adapter = require('enzyme-adapter-react-16');

configure({
    adapter: new Adapter()
});

global.shallow = shallow;

test('INIT', () => console.log('testing initiated'));
