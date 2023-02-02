import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"



function SignUp(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [campus,setCampus] = useState('')
    const [course,setCourse] = useState('')
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log("submitted")
        axios.post(`http://localhost:5005/auth/signup`, {username, password, campus, course})
            .then(response=>{
                const {user} = response.data
                console.log(user)

                
                setUsername('')
            setPassword('')
            setCampus('')
            setCourse('')
            navigate('/login')
            })
        
    }


    return(
        <div className="flex-r centered">
        <div className="flex-c">
            <div className="margin-l">
                <h1 className="t-align-l">IronProfile</h1>
                <p style={{width:450, textAlign:"left"}}>Sign up today to receive the latest news about the crypto industry</p>
            </div>
            <div>
                <form onSubmit={(e)=>handleSubmit(e)} className="form">
                    <label>Username:</label>
                    <input onChange={(e)=>setUsername(e.target.value)} className="form-input" type="text" name="username"></input>
                    <label>Password:</label>
                    <input onChange={(e)=>setPassword(e.target.value)}  className="form-input" type="password" name="password"></input>
                    <label>Campus:</label>
                    <select onChange={(e)=>setCampus(e.target.value)}  className="form-input" type="text" name="campus">
                    <option selected disabled>-- Select a City --</option>
                        <option value='Madrid'>Madrid</option>
                        <option value='Paris'>Paris</option>
                        <option value='Miami'>Miami</option>
                        <option value='Barcelona'>Barcelona</option>
                        <option value='Berlin'>Berlin</option>
                        <option value='Amsterdam'>Amsterdam</option>
                        <option value='Sao Paulo'>Sao Paulo</option>
                        <option value='México'>México</option>
                        <option value='Lisbon'>Lisbon</option>
                        <option value='Remote'>Remote</option>
                    </select>
                    <label>Course:</label>
                    <select onChange={(e)=>setCourse(e.target.value)}  className="form-input" type="text" name="course">
                    <option selected disabled>-- Select a Course --</option>
                        <option value='Web Dev'>Web Dev</option>
                        <option value='UX/UI'>UX/UI</option>
                        <option value='Data Analytics'>Data Analytics</option>
                        <option value='Cyber Security'>Cyber Security</option>
                    </select>
                    <button className="margin-t">Create Account</button>
                </form>
            </div>
            </div>
            <div className="margin-r">
                <h1>Hello!!</h1>
                <h2>Welcome to the IronPortal!</h2>
            </div>
            
            
            
        </div>  
    )
}

export default SignUp