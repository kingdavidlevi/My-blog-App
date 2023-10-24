import React,{useState} from "react";
import './Form.css'
import { Form,NavLink,useNavigate } from "react-router-dom";
import {FaUser,FaEnvelope,FaLock,FaEyeDropper,FaEye} from "react-icons/fa"

export async function action({request}) {
       const formData = await request.formData()
       const name = formData.get('userName')
     
       console.log(name)

       return null
}





function Login () {

  const [eye,setEye] = useState(false)
const [error,setError] = useState('')
const navigate = useNavigate()
const [formData, setFormData] = useState({ username: '', email: '', password: '' });
const [users,setUsers] = useState([])



const handleSubmit = async (e) => {
  e.preventDefault()
  setError("")


  const option = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ email: formData.email, password: formData.password, username:formData.username })
  }
  try {

    const response = await fetch('https://weblify.onrender.com/v1/auth/login', option);
    const data = await response.json()
    setUsers(data)
    if (data?.data.id) { return navigate('home') }

   
 
  }

  catch (err) {
    setError(err)

  }
  setFormData('')

};
 

const handleInput = (e) =>{
  const { name, value } = e.target
  setFormData((prevdata) => ({
    ...prevdata,
    [name]: value
  }))
}




  const handleEyeVisiblity = () =>{
    setEye(prevstate => !prevstate)
  }


    return (

        <div className="login-div">
        <section className="login-section">
        <div className="login-user"> <FaUser className="Fauser" /> </div> 
       
       <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} className="input1" onChange={handleInput} /> <br/>
        <FaUser className="login-username"/>
        <input type="email" placeholder="Email"name="email"className="input2" value={formData.email} onChange={handleInput} /><br/>
        <FaEnvelope className="login-envelope"/>
        <input type= {eye ? 'text' : 'password'} placeholder="Password" value={formData.password} className="input3" onChange={handleInput} maxLength={10}/><br/>
        <FaLock className="login-lock"/>
        <FaEye className="login-eye" onClick={handleEyeVisiblity}/>
        
        <button type="submit" className="login-btn">Login</button> 
        < p className="login-p">Don't have an account?<span className="span"><NavLink to='/Signup' className='login-sign'>SignUp</NavLink></span> </p>
       </form>
       
        </section>
        </div>
    )
}

export default Login;