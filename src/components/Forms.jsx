import React, {useState} from 'react'

const Forms = () => {
    const [values , setValues] = useState({
        firstName:"",
        lastName:"",
        email: "",
        password: ""
    })

    const [submitted, setSubmitted] = useState(false)

    const handleFirstNameInputChange = (event) => {
        setValues({...values, firstName: event.target.value})}
    
    const handleLastNameInputChange = (event) => {
        setValues({...values, lastName: event.target.value})}

    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})}

    const handlePasswordInputChange = (event) => {
        setValues({...values, password: event.target.value})}

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <>
          <div className ="register form">
            <form action="/submit" method="post" onSubmit={handleSubmit}>  
            {submitted ? <div>Success! thanks for registering</div> : null}
            
              <label htmlFor="name">First Name:</label>
              <input onChange={handleFirstNameInputChange}
                    value={values.firstName}
                    type="text"
                    id="fname"
                    name="fname"required />

              <label htmlFor="name"> Last Name:</label>
              <input onChange={handleLastNameInputChange} value={values.lastName} type="text" id="lname" name="lname" required />
      
              <label htmlFor="email">Email:</label>
              <input onChange={handleEmailInputChange} value ={values.email} type="email" id="email" name="email" required />
      
              <label htmlFor="password">Password:</label>
              <input onChange = {handlePasswordInputChange} value ={values.password}type="password" id="password" name="password" required />
      
              {/* <p>Gender:</p>
              <label>
                <input type="radio" name="gender" value="male" /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" /> Female
              </label>
      
              <label>
                <input type="checkbox" name="subscribe" value="yes" /> Subscribe to newsletter
              </label>
      
              <label htmlFor="country">Country:</label>
              <select id="State" name="state">
                <option value="nsw">New South Wales</option>
                <option value="qld">Queensland</option>
                <option value="vic">Victoria</option>
              </select>
      
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea> */}
      
              <button type="submit">Submit</button>
            </form>
          </div>
        </>
      );
}
      
export default Forms;