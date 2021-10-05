import { checkForUrl } from "../src/client/js/urlValidation";
import 'babel-polyfill';

describe("Testing the URL Validation", () => {
    test("Testing the checkForUrl() function", () => {
        expect(checkForUrl).toBeDefined();
    })
});