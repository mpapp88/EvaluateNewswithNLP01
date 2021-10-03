//import { checkForUrl } from "../src/client/js/UrlValidation";
import { checkForUrl } from '../src/client';
import 'babel-polyfill';

describe("Testing the URL Validation", () => {
    Test("Testing the checkForUrl() function", () => {
        expect(checkForUrl('www.google.com')).toBe(true);
        expect(checkForUrl('1.2.3.4')).toBe(false)
    })
});