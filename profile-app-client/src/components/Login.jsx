import { useState, useContext, useEffect } from "react"
import axios from "axios"
import { AuthContext } from "../context/auth.context"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


function Login(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()


    const {user, isLoggedIn, authentificateUser, storeToken} = useContext(AuthContext)

        const handleSubmit = (e)=>{
            e.preventDefault()
            axios.post(`http://localhost:5005/auth/login`, {username, password})
                .then(response=>{
                    storeToken(response.data.authToken)
                    authentificateUser()    
                    navigate("/profile")
                })
        }

        
    return(
        <div className="flex-r centered">
        <div className="flex-c">
            <div className="margin-l">
            <div className="flexing">
            <Link to={"/"}>
            <img className="smally" src="https://cdn-icons-png.flaticon.com/512/25/25694.png"/>
            </Link>
            <h1 className="t-align-l">IronProfile</h1>
                </div>
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