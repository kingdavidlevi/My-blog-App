import React,{useState,} from "react";
import { useOutletContext, useNavigate} from "react-router-dom";
import './Home.css'
import { FaUser } from "react-icons/fa";
function Posts () {
  const [postBody,setPostBody] = useState("")
   const {quote,setQuote,bell,setBell} = useOutletContext()
   const [users,setUsers] = useState("User1")
   const [username,setUserName] = useState('@User1')
   const navigate = useNavigate()

   const handlePost = (event) =>{
    const result = event.target.value
    setPostBody(result)

     
   }
    const handleSubmit = (event) => {
      event.preventDefault()
      const id = quote.length? quote[quote.length - 1].id + 1:1;
     const newPost = {id, comments:postBody, name:users, username:username}
     const allPost = [...quote,newPost]
     setQuote(allPost.reverse())
     setPostBody('')
     navigate('/')
    setTimeout(() => {
      if (bell === false) {
        setBell(true)
       }
    }, 1000);
    }


    return (
        <div className="posts-div">
          <div className="display-post">
            <div><FaUser className="profiles"/></div>
            <div> <p  className="white">{users} <span className="username">{username}</span></p></div>
          </div>
          <form onSubmit={handleSubmit}>
            <textarea placeholder="What's on your mind?"  className="textarea" value={postBody} required onChange={handlePost} autoFocus/><br/>

            <button type="submit" className="post-btn" onSubmit={handleSubmit}>Post</button>
            </form> 
            
        </div>
    )
}

export default Posts;