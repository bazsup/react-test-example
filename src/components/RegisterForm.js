import {useState} from "react";

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useState({
    phoneNo: ""
  })

  function formatPhoneNo(phoneNo) {
    const matched = phoneNo.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (matched) {
      return `${matched[1]}-${matched[2]}-${matched[3]}`;
    } else {
      return phoneNo;
    }
  }

  function handleFormChange(e) {
    setRegisterForm((prevState) => {
      return {
        ...prevState,
        phoneNo: formatPhoneNo(e.target.value)
      }
    })
  }

  return (
    <div>
      Register Form
      <div>
        <label htmlFor="phoneNumber">เบอร์โทรศัพท์</label><br />
        <input name="phoneNo" id="phoneNumber" value={registerForm.phoneNo} onChange={handleFormChange} />
      </div>
    </div>
  )
}

export default RegisterForm
