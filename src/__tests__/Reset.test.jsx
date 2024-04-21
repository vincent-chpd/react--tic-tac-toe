import { fireEvent, render, screen } from "@testing-library/react"
import Reset from "../components/Reset"

describe("Reset", ()  => {
  it("should have a button element", () => {
    render(<Reset />)
    const component = screen.queryByRole("button", {name:"Reset"});
    expect(component).not.toBe(null);
  })

  it("should call the `onResetClick` prop when the button is clicked", () => {
    const onResetClick = jest.fn();
    render(<Reset onResetClick={onResetClick} />)

    const component = screen.queryByRole("button", {name:"Reset"});
    fireEvent.click(component);
    expect(onResetClick).toBeCalled()
  })
})
