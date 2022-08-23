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

  it("endDate before startDate should show error", () => {
    render(<RegisterForm />);

    expect(screen.queryByText("วันที่ไม่ถูกต้อง")).not.toBeInTheDocument();

    user.type(screen.getByPlaceholderText("กรุณากรอกวันเริ่มต้น"), "02/08/2022");
    user.type(screen.getByPlaceholderText("กรุณากรอกวันสิ้นสุด"), "01/08/2022");

    expect(screen.getByText("วันที่ไม่ถูกต้อง")).toBeInTheDocument();
  })

})