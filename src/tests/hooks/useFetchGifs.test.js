import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("useFetchGifs tests", () => {

    test("Initial state", () => {

        const { result } = renderHook(() => useFetchGifs("Doge"));

        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBe(true);
    });

    test("Array with at least one image and isLoading in false", async () => {

        const { result } = renderHook(() => useFetchGifs("Doge"));


        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 5000
            }
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeLessThanOrEqual(10);
        expect(isLoading).toBe(false);
    });
});