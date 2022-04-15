import React from 'react'

const Login = () => {
  return (
    <div className='row' style={{marginTop:"200px"}}>
        <div className='col-6 offset-3'>
            <h1>Login </h1>

            <input type="text" className="form-control"/><br/>
            <input type="text" className="form-control"/><br/>

            <button className='btn btn-success'>

                Login

            </button>


        </div>


    </div>
  )
}

export default Login