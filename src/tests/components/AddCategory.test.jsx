import { render, fireEvent, screen } from "@testing-library/react";
import { AddCategory } from "../../components";

describe("AddCategory tests", () => {
    
    const onNewCategory = () => { };
    const onNewCategoryMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });
    
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
        const { container } = render(<AddCategory onNewCategory={onNewCategoryMock}/>);

        const form = screen.getByRole('form');
        // const form = container.querySelector('form');
        const input = container.querySelector('input');

        fireEvent.change(input, { target: { value } });
        fireEvent.submit(form);

        expect(input.value).toBe("");
        expect(onNewCategoryMock).toHaveBeenCalledTimes(1);
        expect(onNewCategoryMock).toHaveBeenCalledWith(value);
    });

    test("Mustn't call onNewCategory if the input hasn't a value", () => {

        const value = "";
        const { container } = render(<AddCategory onNewCategory={onNewCategoryMock}/>);

        const form = screen.getByRole('form');
        const input = container.querySelector('input');

        fireEvent.change(input, { target: { value } });
        fireEvent.submit(form);

        expect(input.value).toBe("");
        // expect(onNewCategoryMock).toHaveBeenCalledTimes(0);
        expect(onNewCategoryMock).not.toHaveBeenCalled();
    });
});