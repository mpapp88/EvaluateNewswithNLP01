//import { getMockAPI } from "../src/client/js/getMockAPI";
import { getMockAPI } from '../src/client';
import 'babel-polyfill';

describe("Testing MockAPI\'s functionality", () => {
    test ("Testing the data", () => {
        expect(getMockAPI('test')).resolves.toBe({
            'title': 'neutral',
            'message': 'this is a message',
            'time': 'now'
        });
    })
});
