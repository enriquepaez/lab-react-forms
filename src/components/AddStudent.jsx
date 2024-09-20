import { useState } from "react";

function AddStudent({setStudents}) {

  const [ fullName, setFullName ] = useState("");
  const [ image, setImage ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ program, setProgram ] = useState("None");
  const [ graduationYear, setGraduationYear ] = useState(2024);
  const [ graduated, setGraduated ] = useState(false);

  const handleFullNameChange = (event) => setFullName(event.target.value)
  const handleImageChange = (event) => setImage(event.target.value)
  const handlePhoneChange = (event) => setPhone(event.target.value)
  const handleEmailChange = (event) => setEmail(event.target.value)
  const handleProgramChange = (event) => setProgram(event.target.value)
  const handleGraduationYearChange = (event) => setGraduationYear(event.target.value)
  const handleGraduatedChange = (event) => setGraduated(event.target.value)

  const handleAddStudent = (event) => {
    event.preventDefault()

    const newStudent = {
      fullName: fullName,
      image: image,
      phone: phone,
      email: email,
      program: program,
      graduationYear: graduationYear,
      graduated: graduated
    }
    
    setStudents((current) => [newStudent, ...current])
  }

  return (
    <form onSubmit={handleAddStudent}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input onChange={handleFullNameChange} value={fullName} name="fullName" type="text" placeholder="Full Name" />
        </label>

        <label>
          Profile Image
          <input
            onChange={handleImageChange}
            value={image}
            name="image"
            type="url"
            placeholder="Profile Image"
          />
        </label>

        <label>
          Phone
          <input
            onChange={handlePhoneChange}
            value={phone}
            name="phone"
            type="tel"
            placeholder="Phone"
          />
        </label>

        <label>
          Email
          <input
            onChange={handleEmailChange}
            value={email}
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            onChange={handleProgramChange}
            checked={program}
            name="program"
          >
            <option value="">-- None --</option>
            <option value="Web Dev">Web Dev</option>
            <option value="UXUI">UXUI</option>
            <option value="Data">Data</option>
          </select>
        </label>

        <label>
          Graduation Year
          <input
            onChange={handleGraduationYearChange}
            value={graduationYear}
            name="graduationYear"
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
          />
        </label>

        <label>
          Graduated
          <input
            onChange={handleGraduatedChange}
            value={graduated}
            name="graduated"
            type="checkbox"
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
