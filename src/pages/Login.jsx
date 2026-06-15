import { Form } from "react-router-dom"

const Login = () => {
  return (
    <>
        <form method="post">
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" />
            </div>
            <button type="submit">Login</button>
        </form>
    </>
  )
}

export default Login