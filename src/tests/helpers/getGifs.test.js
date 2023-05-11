import { render } from "@testing-library/react";
import { getGifs } from "../../helpers/getGifs";

describe("getGifs tests", () => {

    test("API call", async () => {

        const gifs = await getGifs("One Punch");

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs.length).toBeLessThanOrEqual(10);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
       
    });
});