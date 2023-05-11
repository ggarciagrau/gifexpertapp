import { GifGridItem } from "../../components";
import { render } from "@testing-library/react";

describe("GifGridItem tests", () => {

    const title = "Google";
    const url = "https://google.es";

    test("Renders", () => {

        const { container } = render(
            <GifGridItem
                title="Google"
                url="https://google.es"
            />);

        expect(container).toMatchSnapshot();
    });
});