import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("GifGrid tests", () => {

    const category = "Doge";

    test('Renders (initial loading)', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        const { container } = render(<GifGrid category={category} />);
        
        expect(screen.getByText(category));
        expect(screen.getByText('Cargando...'));
        expect(container).toMatchSnapshot();
    });

    test("Must display items when images are loaded with useFetchGifs", () => {

        const gifsFixture = [{ id: "googl", title: "Google", url: "https://google.com"}, { id: "yt", title: "Youtube", url: "https://youtube.com"}];
        useFetchGifs.mockReturnValue({
            images: gifsFixture,
            isLoading: false
        });

        const { container } = render(<GifGrid category={category} />);

        expect(screen.getByText(gifsFixture[0].title));
        expect(screen.getByText(gifsFixture[1].title));
        expect(screen.getAllByRole("img").length).toBe(2);
        expect(container).toMatchSnapshot();
    });
});