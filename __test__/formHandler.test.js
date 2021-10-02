import { handleSubmit } from "../src/client";
import "babel-polyfill";

describe("Testing the form submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })
});