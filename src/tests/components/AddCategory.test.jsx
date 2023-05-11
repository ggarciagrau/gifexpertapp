import { render, fireEvent, screen } from "@testing-library/react";
import { AddCategory } from "../../components";

describe("AddCategory tests", () => {

    const onNewCategory = () => { };

    test("Renders", () => {

        const { container } = render(<AddCategory onNewCategory={onNewCategory} />);

        expect(container).toMatchSnapshot();
    });

    test("Must change the input value", () => {

        const value = "Hello World";
        const { container } = render(<AddCategory onNewCategory={onNewCategory}/>);

        // const input = screen.getByRole('textbox');
        const input = container.querySelector('input');

        fireEvent.change(input, { target: { value } });

        expect(input.value).toBe(value);
    });

    test("Must call onNewCategory if the input has a value", () => {
        const value = "Hello World";
        const { container } = render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');
        // const form = container.querySelector('form');
        const input = container.querySelector('input');

        fireEvent.change(input, { target: { value } });
        fireEvent.submit(form);

        expect(input.value).toBe("");
    })
});