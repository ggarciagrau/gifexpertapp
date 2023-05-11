import { GifGridItem } from "../components";
import { render } from "@testing-library/react";

describe("GifGridItem tests", () => {

    const container = render(
        <GifGridItem
            title="Google"
            url="https://google.es"
        />);

    test("Renders", () => {

        expect(container).toMatchSnapshot();
    });
});