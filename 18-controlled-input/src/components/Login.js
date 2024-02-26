import { useState } from "react"

function Login() {
  const [data, setData] = useState({ userName: "", userPassword: "" })

  function handleForm(event) {
    event.preventDefault()
    alert(JSON.stringify(data))
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value })
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleForm}>
        <label>
          Username:
          <input
            type='text'
            value={data.userName}
            onChange={(e) => handleInputChange(e, "userName")}
          />
        </label>
        <label>
          Passsword:
          <input
            type='password'
            value={data.userPassword}
            onChange={(e) => handleInputChange(e, "userPassword")}
          />
        </label>
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login
