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

  it("startDate after endDate should show 'วันที่ไม่ถูกต้อง' -byPlaceHolderText", () => {
    render(<RegisterForm />);

    expect(screen.queryByText("วันที่ไม่ถูกต้อง")).not.toBeInTheDocument();

    user.type(screen.getByPlaceholderText("กรุณากรอกวันเริ่มต้น"), "02/08/2022");
    user.type(screen.getByPlaceholderText("กรุณากรอกวันสิ้นสุด"), "01/08/2022");

    expect(screen.getByText("วันที่ไม่ถูกต้อง")).toBeInTheDocument();
  })

  it("startDate after endDate should show 'วันที่ไม่ถูกต้อง' -byRole", () => {
    render(<RegisterForm />);

    expect(screen.queryByText("วันที่ไม่ถูกต้อง")).not.toBeInTheDocument();

    // ดึง input จาก label ---> <label htmlFor="endDate">วันสิ้นสุด</label>
    // map กันด้วย htmlFor ของ label กับ inputId ของ Calendar
    user.type(screen.getByRole("textbox", {name: /วันเริ่มต้น/i }), "02/08/2022");
    user.type(screen.getByRole("textbox", {name: /วันสิ้นสุด/i }), "01/08/2022");
    /*
    
    กรณีนี้ไม่สามารถใช้ data-testid ได้ เพราะ component ของ primereact ไม่ได้ pass ค่าใส่ input
    <span
      class="p-calendar p-component p-inputwrapper p-inputwrapper-filled"
      data-testid="startDate" 👈 data-testid ไปอยู่ตรงนี้ ❌
    >
      <input 👈 แต่เราอยากให้ data-testid อยู่แถวนี้
        autocomplete="off"
        class="p-inputtext p-component p-filled"
        id="startDate"
        inputmode="none"
        placeholder="กรุณากรอกวันเริ่มต้น"
        type="text"
      />
    </span>
    */

    expect(screen.getByText("วันที่ไม่ถูกต้อง")).toBeInTheDocument();
  })

})