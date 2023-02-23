import React from 'react'
function Signup(){
    return(
<><form>
    <h3>Sign Up</h3>
    <label>Name</label><br/>
    <input type="text" placeholder="enter your name"/>
    <label>Email</label><br/>
    <input type="email" placeholder="enter your email"/>

    <label>Password</label><br/>
    <input type="text" placeholder="enter your password"/>
    <input type="checkbox"/>check me out
    <label>Phone</label><br/>
    <input type="text" placeholder="enter your number"/>

    < input type="submit"  value="Sign Up" className="btn1"/>
    <p>Already Registered<a href="/Login">Login</a></p>

    </form>
</>)}
export default Signup;