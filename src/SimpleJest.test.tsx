import { fireEvent, render } from "@testing-library/react"
import SimpleJest from "./SimpleJest"

describe("SimpleJest",()=>{
    it("is app loading", ()=> {
        const {baseElement} = render(<SimpleJest/>)
        expect(baseElement).toBeInTheDocument();
    })    
    it("Check if onChange event is working", ()=> {
        const {getByTestId} = render(<SimpleJest/>)
        const input = getByTestId("input");
        fireEvent.change(input, {target:{value:"geeks"}});
        expect(input).toHaveValue("geeks");
        const output = getByTestId("output");
        expect(output.innerHTML).toBe("hello geeks");
    })
    it("match snapshot testing", ()=> {
        const {baseElement} = render(<SimpleJest/>)
        expect(baseElement).toMatchSnapshot();
    })

})
