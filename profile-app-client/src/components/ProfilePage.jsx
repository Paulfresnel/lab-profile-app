import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/auth.context"
import axios from "axios"


function ProfilePage(){
    const {logOutUser, user,setIsLoading, setUser} = useContext(AuthContext)
    const [imageUrl,setImageUrl] = useState('')

  

    const uploadImage = (file) => {
        return axios.post("http://localhost:5005/api/upload", file)
          .then(res => res.data)
          .catch(err=>console.log(err));
      }

    const handleFileUpload= (e)=>{
        const uploadData = new FormData();
 

    uploadData.append("imageUrl", e.target.files[0]);
    uploadImage(uploadData)
        .then(response=>{
            setImageUrl(response.fileUrl)
        })
        .catch(err=>console.log(err))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:5005/api/upload/${user._id}`, {user, imageUrl})
            .then(resp=>{
                console.log(resp.data.user)
                setUser(resp.data.user)
            })
    }

    const logOut =()=>{
        logOutUser()
    }

    return(
        <div className="flex-row centered">
            <div className="flex-column sized">
                <div className="align-left">
                    <h1 className="green">Profile</h1>
                    <h3 className="sub">Username</h3>
                    <h2>{user.username}</h2>
                    <h3 className="sub">Campus</h3>
                    <h2>{user.campus}</h2>
                    <h3 className="sub">Course</h3>
                    <h2>{user.course}</h2>
                </div>
                <div>
                    <button className="logout" onClick={logOut}>Logout</button>
                </div>
            </div>
            <div className="plus">
                <div className="aligned">
                    {user.image ? <img className="upload-img" src={user.image}/>
                    : <img className="upload-img" src="data:image/jpeg;base64,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"/>
                    }
                    <input className="margined" type="file" onChange={(e) => handleFileUpload(e)} />
                    <button onClick={(e)=>handleSubmit(e)} className="edit-img">Edit Image</button>
                </div>
                <div className="small">
                    <p>The user is able to upload a new profile picture, using Node.js and Multer uploader.</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage