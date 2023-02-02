import { useState } from "react"
import axios from "axios"




function Login(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

        const handleSubmit = (e)=>{
            e.preventDefault()
            axios.post(`http://localhost:5005/auth/login`, {username, password})
                .then(response=>{
                    console.log("response" + " "+response)
                })
        }


    return(
        <div className="flex-r centered">
        <div className="flex-c">
            <div className="margin-l">
                <h1 className="t-align-l">IronProfile</h1>
                <p style={{width:450, textAlign:"left"}}>Log in to enjoy all of our website's features and functionalities</p>
            </div>
            <div>
                <form onSubmit={(e)=>handleSubmit(e)} className="form">
                    <label>Username:</label>
                    <input onChange={(e)=>setUsername(e.target.value)} className="form-input" type="text" name="username"></input>
                    <label>Password:</label>
                    <input onChange={(e)=>setPassword(e.target.value)}  className="form-input" type="password" name="password"></input>
                    <button className="margin-t">Login</button>
                </form>
            </div>
            </div>
            <div className="margin-r">
                <img className="login-img" src="https://media.giphy.com/media/IgLIVXrBcID9cExa6r/giphy.gif"/>
            </div>
            
            
            
        </div> 
    )
}

export default Login