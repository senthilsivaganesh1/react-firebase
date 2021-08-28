import { render } from "@testing-library/react";
import ApiMock from "./ApiMock";
import * as ApiRequest from "./ApiRequest";

describe("ApiMock",()=>{
    it("test without api",async ()=>{
        const mock = jest.spyOn(ApiRequest,"getNameApi");
        mock.mockImplementation(()=> Promise.resolve("geeks"));
        const {getByTestId} = await render(<ApiMock />);
        expect(mock).toHaveBeenCalledTimes(1);
        const output = getByTestId("output");
        expect(output.innerHTML).toBe("geeks");

    })
})