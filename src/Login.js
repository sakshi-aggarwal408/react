import React from 'react'
function Login(){
    return(
<><form>
    <h3>Login</h3>

    <label>Email</label><br/>
    <input type="email" placeholder="enter your email"/>

    <label>Password</label><br/>
    <input type="text" placeholder="enter your password"/>

    < input type="submit"  value="Login" className="btn2"/>
    <p style={{marginTop:"5%"}}><a href="">Forgot password?</a><span>Not a member</span><a href="/Signup">Signup</a></p>

    </form>
</>)}
export default Login;