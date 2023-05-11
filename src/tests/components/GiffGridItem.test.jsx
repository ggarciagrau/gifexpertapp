import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../components";

describe("GifGridItem tests", () => {

    const title = "Google";
    const url = "https://google.es/";

    test("Renders", () => {

        const { container } = render(
            <GifGridItem
                title={title}
                url={url}
            />);

        expect(container).toMatchSnapshot();
    });

    test("Must display the image and the ALT attribute", () => {

        render(
            <GifGridItem
                title={title}
                url={url}
            />);
        // screen.debug();

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test("Must display the title", () => {

        render(
            <GifGridItem
                title={title}
                url={url}
            />);

        expect(screen.getByText(title)).toBeTruthy();
    });
});