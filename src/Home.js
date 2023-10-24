import React,{useEffect, useState, } from "react";
import {FaUser, FaWifi,FaBars,FaTimes,FaThumbsUp, FaHeart, FaEllipsisV} from "react-icons/fa"
import './Home.css'
import { useOutletContext,useLocation, Link, useNavigate} from "react-router-dom";
 

function Home (){
const [hamburger,setHambuger] = useState(false)
 const {quote,setQuote,showDelete,setShowDelete,setIsLiked,isliked,setIsLoved,isloved} = useOutletContext()
const BLOG_URL = ' http://localhost:3001/Blogs'
const [checkLiked,setCheckLiked] = useState(false)
const [checkLoved,setCheckLoved] = useState(false)
const navigate = useNavigate()
 

 const handleHumburger = () => {
  setHambuger(prevHandle => !prevHandle)
 
 }
 
  
 const thumbs = (id) => {
  setCheckLiked(prevstate => !prevstate)
 
  const updatedArray = quote.map((items) => {
    if (items.id === id ){
      
      return{...items, likes: checkLiked ? items.likes + 1 : items.likes - 1}
    }
    return items;
    
  });
  setQuote(updatedArray)

   
 }
 


 const toggleheart = (id) => {
  setCheckLoved(prevstate => !prevstate)
   const selectedItem = quote.map((item) => item.id === id)
     
    if ( selectedItem || isloved === true){
   setIsLoved(prevstate => prevstate + 1)
     
}
if(selectedItem || isloved === false){
  setIsLoved(prevstate => prevstate - 1)
}
 

 }

 const handleDelete = (id) =>{

 }
const handlePost = () => {
  navigate('/:id')
}


    return(
        <div className="main-component"   >
           
        
           <div className="header-home">
          <div>
       <h2 className="home-h2">Tech-Blog-Post</h2>
       </div>
          <div onClick={handleHumburger}>
          {hamburger ?  <FaTimes className="times"/> : <FaBars className="burger"/>}
       </div>
         </div>
       
      
       <div className='search-div' onClick={handlePost}>
        <div className="div-user"><FaUser className="user"/></div>
        <div className="search-input"> <p className="paragraph-home">What's on your mind? </p></div>
        <div className="blog-home"><FaWifi className="wifi"/></div>
       </div>
        

      
        <div className="flex">
          
             {quote.map((pages)=> {
               const {id,name,username,comments, likes,love} = pages ;
               return(

                  <section key={id}>
                  {quote.length ?
                     <div   className="display-flex" >
                    <div ><FaUser className="profile"/></div> 
                    <div  className="maincomponent" >
                        <p  className="white">{name} <span className="username">{username}</span></p>
                        <p className="comment">{comments}</p>
                        <div className="icons">
                         <div  onClick={() => thumbs (id)} className="same" >  <FaThumbsUp className='thumbs'/> <span className="likes">{isliked}</span></div>

                          <div   className="same" onClick={() => toggleheart (id)}><FaHeart className="heart"/><span className="love">{isloved}</span></div>
                        </div>
                        <div className="dots-div" ><FaEllipsisV className="dots"  /></div>
                        
                        {showDelete && (
                        <div className="edit-div">
                          <li className="edit"><Link to='/'/>Edit</li>
                          <li onClick={() => handleDelete (id)} className="delete"> Delete</li>
                        </div>
                      )}
                    </div>
                  
                    </div>
                    : 
                    <p>No blog post </p>
                    }

                    </section>
                     
             )})}

        </div>

         
       

      

        </div>
    )
}

export default Home;