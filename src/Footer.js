import React,{useEffect, useState} from "react";
import { NavLink,useNavigate} from "react-router-dom";
import { FaHome,FaSearch,FaUserPlus,FaEnvelope, FaBell,FaPlus} from "react-icons/fa";
import './Footer.css'
function Footer ({ showDelete,setShowDelete,bell,setBell}){
const navigate = useNavigate()
const [showEnvelope,setShowEnvelope] = useState(false)
const [addition,setAddition] = useState(1)

    const removeHandleVisibility = () =>{
     
        if (showDelete === true){
          setShowDelete(false)
        }
        else{
          setShowDelete(null)
        }
     
        
     }
    

     const notification = () => {
         navigate('Notifications')
       
     }
     const home = () => {
       
        if (bell){
          setBell(false)
         }
       
         navigate('/')
     }
     const handleEnvelope = () =>{
      setShowEnvelope(prevstate => !prevstate)
      
  
     }
     setTimeout(() => {
      if (showEnvelope === true){
       setShowEnvelope(false)
      }
   }, 3000);
   

     const post = () => {
      navigate('/:id')
     }
    return(
        <footer>
        
        <div className="footer-div" onMouseDown={removeHandleVisibility}>
       <div className="footer-home">
        <FaHome className="home" onClick={home}/> 
        {bell && ( <div className="home-icon"></div>)}
       </div>
       <div className="footer-search">
      <FaSearch className="search"/>
       </div>
       <div className="footer-user">
     <FaUserPlus className="userplus"/> 
       </div>
       <div className="footer-bell">
   <FaBell className="bell" onClick={notification}/> 
     <div className="bell-icon"><p className="bell-p">1</p></div>
      {showEnvelope &&  <div className="envelope-icon" onClick={post}><FaPlus className="plus"/></div> }
       </div>
       <div className="footer-envelope">
   <FaEnvelope className="envelope" onClick={handleEnvelope}/> 
   
       </div>
        </div>
        
        </footer>
    )
}

export default Footer;