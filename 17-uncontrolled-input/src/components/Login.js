function Login() {
  function handleForm(event) {
    event.preventDefault()

    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    alert(JSON.stringify(userData))
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleForm}>
        <label>
          Username:
          <input type='text' name='username' />
        </label>
        <label>
          Passsword:
          <input type='password' name='password' />
        </label>
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login
