import React,{useState} from "react";
import './Form.css'
import { Form,NavLink,useNavigate } from "react-router-dom";
import {FaUser,FaEnvelope,FaLock,FaEyeDropper,FaEye} from "react-icons/fa"

 

/*export async function action({request}) {
    const formData = await request.formData()
    const name = formData.get('userName')


 
 })
   
    return null
}*/



 

function SignUp() {
  const [users,setUsers] = useState([])
  const [error,setError] = useState('')
  const [formData,setFormData] = useState({email:'', password:'',username:''})
  const [eye,setEye] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setError('')

    const option = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email: formData.email,username:formData.username, password: formData.password })
    }
    try {

      const response = await fetch('https://weblify.onrender.com/v1/auth/register', option);
      const data = await response.json()
      setUsers(data.data)

      if (data?.data.id) { return navigate(" /home") }
    }

    catch (err) {
      setError(err)

    }
       
  };

  const handleEyeVisiblity = () =>{
    setEye(prevstate => !prevstate)
  }

  const handleinput = (e) =>{
      const { name, value } = e.target
      setFormData((prevdata) => ({
        ...prevdata,
        [name]: value
      }))
    }
  
    return (

        <div className="login-div">
        <section className="login-section">
        <div className="login-user"> <FaUser className="Fauser" /> </div> 
       
       <form onSubmit={handleSubmit} >
        <input type="text" name="username" placeholder="Username" value={formData.username} className="input1" onChange={handleinput} /> <br/>
        <FaUser className="login-username"/>
        <input type="email" placeholder="Email"name="email"className="input2" value={formData.email} onChange={handleinput} /><br/>
        <FaEnvelope className="login-envelope"/>
        <input type= {eye ? 'text' : 'password'} placeholder="Password" className="input3" value={formData.password} maxLength={10} onChange={handleinput}/><br/>
        <FaLock className="login-lock"/>
        <FaEye className="login-eye" onClick={handleEyeVisiblity}/>
        
        <button type="submit" className="login-btn">Create Account</button> 
        < p className="login-p">Already have an account?<span className="span"><NavLink to='/Login' className='login-sign'>Login</NavLink></span> </p>
       </form>
       
        </section>
        </div>
    )
}




export default SignUp;