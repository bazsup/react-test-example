import {useState} from "react";
import { Calendar } from 'primereact/calendar';

function validateDateRange(startDate, endDate) {
  if (startDate == null) return true
  if (endDate == null) return true
  return startDate.getTime() <= endDate.getTime();
}

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useState({
    phoneNo: "",
    startDate: null,
    endDate: null
  })

  function formatPhoneNo(phoneNo) {
    const matched = phoneNo.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (matched) {
      return `${matched[1]}-${matched[2]}-${matched[3]}`;
    } else {
      return phoneNo;
    }
  }

  function handleStartDateChange(e) {
    setRegisterForm((prevState) => ({
      ...prevState,
      startDate: e.value
    }))
  }

  function handleEndDateChange(e) {
    setRegisterForm((prevState) => ({
      ...prevState,
      endDate: e.value
    }))
  }

  const isValidDate = validateDateRange(registerForm.startDate, registerForm.endDate)

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
      <div>
        <label htmlFor="startDate">Start date</label><br />
        <Calendar dateFormat="dd/mm/yy" value={registerForm.startDate} onChange={handleStartDateChange} placeholder="กรุณากรอกวันเริ่มต้น" />
      </div>
      <div>
        <label htmlFor="endDate">End date</label><br />
        <Calendar dateFormat="dd/mm/yy" value={registerForm.endDate} onChange={handleEndDateChange} placeholder="กรุณากรอกวันสิ้นสุด" />
      </div>
      {!isValidDate && (
        <p>วันที่ไม่ถูกต้อง</p>
      )}
    </div>
  )
}

export default RegisterForm
