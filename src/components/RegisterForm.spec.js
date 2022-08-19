import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event"
import RegisterForm from "./RegisterForm";


describe("RegisterForm", () => {
  it("phone number format 10 digits", () => {
    // arrange
    render(<RegisterForm />);

    // act
    // fill phone number 10 digits
    const phoneNoInput = screen.getByRole("textbox", { name: /เบอร์โทรศัพท์/i });
    user.type(phoneNoInput, "0901234567");

    // assert
    expect(phoneNoInput).toHaveValue("090-123-4567");
  });

  it("phone number format 6 digits", () => {
    // arrange
    render(<RegisterForm />);

    // act
    // fill phone number 10 digits
    const phoneNoInput = screen.getByRole("textbox", { name: /เบอร์โทรศัพท์/i });
    user.type(phoneNoInput, "090123");

    // assert
    expect(phoneNoInput).toHaveValue("090-123");
  });
})