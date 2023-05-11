import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe('GifExpertApp tests', () => {

    test("Initial render", () => {

        const { container } = render(<GifExpertApp />);

        expect(screen.getByText('GifExpertApp')).toBeTruthy();
        expect(container).toMatchSnapshot();
    });

    test("Must add category", () => {

        const { container } = render(<GifExpertApp />);

        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'Birbo' } });
        fireEvent.submit(screen.getByRole('form'));

        expect(screen.getByText('Birbo')).toBeTruthy();
        expect(container).toMatchSnapshot();
    });

    test("Mustn't add repeated category", () => {

        const { container } = render(<GifExpertApp />);

        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'Dogo' } });
        fireEvent.submit(screen.getByRole('form'));

        fireEvent.change(input, { target: { value: 'Dogo' } });
        fireEvent.submit(screen.getByRole('form'));

        expect(screen.getAllByText('Dogo').length).toBe(1);
        expect(screen.getByText('Dogo')).toBeTruthy();
        expect(container).toMatchSnapshot();
    });
});