import { useState,useEffect } from "react";
import Footer from "./Footer";
import { Outlet , useLocation} from "react-router-dom";




function MainLayout () {

    const [quote,setQuote] = useState(
        [
     
        {
          id:1,
          name: "Kelvin",
          username :"@kelvin-tech",
          comments: "When you’re on top of the world you feel motivated to do a great job at work. However we all have those days when we need a little bit of extra motivation. Here are the top 10 tech quotes to inspire you…. or at the very least, put a smile on your face!",
          likes: 50,
          love:60
        },
        {
          id:2,
          name: "King_david",
          username :"@dave-tech",
          comments : " The ability to take data – to be able to understand it, to process it, to extract value from it, to visualise it, to communicate it – is going to be a hugely important skill in the next decades.",
          likes:70,
          love:61
        },
        {
          id:3,
          name: "Levi",
          username :"@Code_king",
          comments : "Torture the data and it will confess to anything. ",
          likes: 65,
          love:90
        },
        {
          id:4,
          name: "romeo",
          username :"@romeo2",
          comments : "I have no data yet. It is a capital mistake to theorise before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.” ",
          likes:76,
          love :16,
        },
        {
          id:5,
          name: "Saint",
          username :"@paris",
          comments : " The ability to take data – to be able to understand it, to process it, to extract value from it, to visualise it, to communicate it – is going to be a hugely important skill in the next decades. ",
          likes : 54,
          love : 29,
     
        },
        {
          id:6,
          name: "Thomas",
          username :"@code_war",
          comments : " Torture the data and it will confess to anything.  ",
          likes: 43,
          love : 67,
        },
        {
          id:7,
          name: "Prosper",
          username :"@pro_tech",
          comments :  "“If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.”" ,
          likes:500,
          love:76,
        },
        {
          id:8,
          name: "Melody",
          username :"@Meldriod",
          comments : " The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life. ",
          likes:5,
          love:87
        },
        {
          id:9,
          name: "Olokwa",
          username :"@Police_tech",
          comments : "Technology is a useful servant but a dangerous master ",
          likes:5,
          love:87
        },
        {
          id:10,
          name: "Joshua",
          username :"@Blackscript",
          comments : " Design is not just what it looks like and feels like .Design is how it works ",
          likes:5,
          love:87
        },
        {
          id:11,
          name: "Patrick",
          username :"@Tech_mage",
          comments : " Any sufficiently advanced technology is indistinguishable from magic. ",
          likes: 43,
          love : 67,
        },
        {
          id:12,
          name: "Obinna",
          username :"@Write_code",
          comments: " Design is not just what it looks like and feels like .Design is how it works ",
          likes: 43,
          love : 67,
        },
        {
          id:13,
          name: "Jasper",
          username :"@jaspee",
          comments : " One machine can do the work of fifity ordinary men .No machine can do the work of one extraordinary man ",
          likes: 43,
          love : 67,
        },
        {
          id:14,
          name: "philip",
          username :"@philpee",
          comments: "I have no data yet. It is a capital mistake to theorise before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.” ",
          likes: 43,
          love : 67,
        },
        {
          id:15,
          name: "Newbie",
          username :"@newbie",
          comments : "I have no data yet. It is a capital mistake to theorise before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.” ",
          likes: 43,
          love : 67,
        },
        {
          id:16,
          name: "Newbie",
          username :"@newbie",
          comments : "I have no data yet. It is a capital mistake to theorise before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.” ",
          likes: 43,
          love :67,
        },
        {
          id:17,
          name: "Newbie",
          username :"@newbie",
          comments : "I have no data yet. It is a capital mistake to theorise before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.” ",
          likes: 43,
          love :67,
        },
        {
          id:18,
          name: "Newbie",
          username :"@newbie",
          comments : "I have no data yet. It is a capital mistake to theorise before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.” ",
          likes: 43,
          love : 67,
        },
        {
          id:19,
          name: "Newbie",
          username :"@newbie",
          comments : "I have no data yet. It is a capital mistake to theorise before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.” ",
          likes: 43,
          love : 67,
        },
        {
          id:20,
          name: "Newbie",
          username :"@newbie",
          comments : "I have no data yet. It is a capital mistake to theorise before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.” ",
          likes: 43,
          love : 67,
        },
        {
          id:21,
          name: "Newbie",
          username:"@newbie",
          comments : "I have no data yet. It is a capital mistake to theorise before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.” ",
          likes: 43,
          love : 67,
        },
        {
          id:22,
          name: "Newbie",
          username :"@newbie",
          comments : "I have no data yet. It is a capital mistake to theorise before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.” ",
          likes: 43,
          love: "67",
        },
        {
          id:23,
          name: "Newbie",
          username :"@newbie",
          comments : "I have no data yet. It is a capital mistake to theorise before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.” ",
          likes: 9,
          love : 67,
        }])  

const [visible, setVisible] = useState(false)
const [showDelete,setShowDelete] = useState(false)
const location = useLocation();
const [isliked,setIsLiked] = useState(null)
const [isloved,setIsLoved] = useState(null)
const [bell,setBell] = useState(false)

useEffect(() =>{
    window.scroll(0,0)
},[location])

    return(
        <>
        <Outlet context={{visible,isliked,isloved,setIsLiked,setIsLoved,setVisible,quote,setQuote,showDelete,setShowDelete,bell,setBell}}/>

        <Footer visible={visible} setVisible={setVisible} showDelete={showDelete} setShowDelete={setShowDelete} bell={bell} setBell={setBell}/>
       </>
    )
}

export default MainLayout;