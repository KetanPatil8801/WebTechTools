import React from 'react';

const Login = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasaccount, setHasaccount, emailError, passwordError } = props;

    return (
        <section className="login">
             <div className="loginContainer">
              <label>Username</label>
              <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)}/>
              <p className="errormsg">{emailError}</p>
              <label>password</label>
              <input type="password" autoFocus required value={password} onChange={e => setPassword(e.target.value)}/>
              <p className="errormsg">{passwordError}</p>
              <div className="btnContainer">
                  {hasaccount ? (
                    <>
                      <button onClick={handleLogin}>Sign in</button>
                    <p>Don't have an account ? <span onClick={()=>setHasaccount(!hasaccount)}>Sign Up</span></p>         
                    </>
                  ):(
                      <>
                     <button onClick={handleSignup}>Sign up</button>
                      <p>have an account ? <span onClick={()=>setHasaccount(!hasaccount)}>Sign In</span></p>   
                      </>

                  )}</div>
             </div>
        </section>
    )
}

export default Login;