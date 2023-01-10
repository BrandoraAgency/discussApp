import React from 'react'
import './CSS/VideoCall.css'
import firstPerson from './Images/firstPerson.png'
import SecondPerson from './Images/SecondPerson.png'
import ThirdPerson from './Images/ThirdPerson.png'
import FourthPerson from './Images/FourthPerson.png'
import { BiVideo } from 'react-icons/bi'
import { HiOutlineMicrophone } from 'react-icons/hi'
import { BsPinAngle } from 'react-icons/bs'
import { BsThreeDotsVertical } from 'react-icons/bs'
import share from './Images/share.svg'
import { TbPhone } from 'react-icons/tb'
import video from './Images/video.svg'
import mic from './Images/micc.svg'
import shareScreen from './Images/shareScreen.svg'
import TwoUsers from './Images/TwoUsers.svg'
import layOut from './Images/layOut.svg'
import chat from './Images/chat.svg'
import record from './Images/record.svg'
import menu from './Images/menu.svg'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import daniyal from './Images/daniyal.png'
import { BiSearch } from 'react-icons/bi'
import hostImg from './Images/hostImg.png'
import wajahatImg from './Images/eclipse.png'




export default function VideoCall() {
const [showchat,setshowchat]=useState(false);
const [showParticipants, setshowParticipants]=useState(false);
const [showInvite , setshowInvite]=useState(false);
const [message, setMessage]=useState("");
const [newMessage , setNewMessage]=useState([]);

const handleOnSubmit=(e)=>{
    e.preventDefault();
    const userMessage={message}
    if(message){
        setNewMessage((ms)=>[...ms,userMessage])
        setMessage("")
    }
}
  return (
    <>
      <div className="container-fluid">
      <div className='Container'>
         <div className="firstrow">
         <div className='firstPersonDiv'>
                <img src={ firstPerson } alt="" className='firstPerson'/>
                <p className='user'>You</p>
                <div className="rightIcons">
                    <span className='camera'>
                        <BiVideo/>
                    </span>
                    <span className='mic'>
                        <HiOutlineMicrophone/>
                    </span>
                    <span className='pin'>
                        <BsPinAngle/>
                    </span>
                    <span className='dots'>
                        <BsThreeDotsVertical/>
                    </span>
                </div>
            </div>
            <div className='SecondPersonDiv'>
                <img src={ SecondPerson } alt="" className='secondPerson'/>
                <p className='user'>Masab Mehmood</p>
                <div className="rightIcons">
                    <span className='camera'>
                        <BiVideo/>
                    </span>
                    <span className='mic'>
                        <HiOutlineMicrophone/>
                    </span>
                    <span className='pin'>
                        <BsPinAngle/>
                    </span>
                    <span className='dots'>
                        <BsThreeDotsVertical/>
                    </span>
                </div>
            </div>
            <div className='thirdPersonDiv'>
                <img src={ ThirdPerson } alt="" className='ThirdPerson'/>
                <p className='user'>Maham Bhabi</p>
                <div className="rightIcons">
                    <span className='camera'>
                        <BiVideo/>
                    </span>
                    <span className='mic'>
                        <HiOutlineMicrophone/>
                    </span>
                    <span className='pin'>
                        <BsPinAngle/>
                    </span>
                    <span className='dots'>
                        <BsThreeDotsVertical/>
                    </span>
                </div>
            </div>
            <div className='fourthPersonDiv'>
                <img src={ FourthPerson } alt="" className='FourthPerson'/>
                <p className='user'>Daniyal Nasir</p>
                <div className="rightIcons">
                    <span className='camera'>
                        <BiVideo/>
                    </span>
                    <span className='mic'>
                        <HiOutlineMicrophone/>
                    </span>
                    <span className='pin'>
                        <BsPinAngle/>
                    </span>
                    <span className='dots'>
                        <BsThreeDotsVertical/>
                    </span>
                </div>
            </div>
         </div>
            
        <div className="operationDiv">
        <img src={ share } alt="" className='connect'
          onClick={()=>{
            setshowInvite(!showInvite)
           }}
        />
        <div className="meetingID">
            <p>999 - 000 - 999 - 00</p>
            <span>Lorem Ipsum Dolor Sit Amet</span>
        </div>
        <div className="rightOperations">
            <div className="phone">
            <TbPhone/>
            </div>   
               <img src={ video } alt="" className='videoCamera'/>
               <img src={ mic } alt="" className='videoCamera'/>
               <img src={ shareScreen } alt="" className='videoCamera'/>
               <img src={ TwoUsers } alt="" className='videoCamera'
               onClick={()=>{
                setshowParticipants(!showParticipants)
               }}
               />
               <img src={ layOut } alt="" className='videoCamera'/>

               <img src={ chat } alt="" className='chat' onClick={()=>{
                setshowchat(!showchat)
               }}/>
               <img src={ record } alt="" className='videoCamera'/>
               <img src={ menu } alt="" className='videoCamera'/>
        </div>
        </div>


        </div>
        {
            showchat && <div className="chat-container">
            <div className="MeetingChat">
                <div className="meetingText">
                <h3>Meeting Chat</h3>
                <p>Lorem Ipsum Dolor Sit Amet</p>
                </div>
                <GrClose/>
            </div>
            <hr className='lineHR' />
    
            <div className="chat-area">
                <div className="daniyalChat">
                <img src={daniyal} alt="" className="dani" />
                <div className='User-name'>
                    <p>Daniyal Nasir</p>
                    <span>10:58 Am</span>
                </div>
                </div>
                <div className="sentMessage">
                <p>Wajahat! Here is the link</p>
                   <p><u>www.loremipsumdolorametcons.com</u></p>
                </div>

                <div className="wajahatChat">
                <div className='wajiUser-name'>
                    <p>You</p>
                    <span>10:58 Am</span>
                </div>
                <img src={wajahatImg} alt="" className="wajii" />
                </div>
                {
                    newMessage.map((m)=> <div className="WajisentMessage">
                <p>{m.message}</p>
                
                </div>)
                }
               

            



                
            </div>
            <hr className='messageHR' />

  <div className="formDiv">
  <form onSubmit={handleOnSubmit}>
    <input type="text" id="fname" name="message" placeholder="Enter a message to send" onChange={(e)=>setMessage(e.target.value)}/>
    </form>
    <button><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91245 9.99999H3.00045L1.02345 2.13499C1.01079 2.08928 1.00308 2.04234 1.00045 1.99499C0.978447 1.27399 1.77245 0.773987 2.46045 1.10399L21.0004 9.99999L2.46045 18.896C1.78045 19.223 0.996447 18.737 1.00045 18.029C1.00247 17.9657 1.01359 17.9031 1.03345 17.843L2.50045 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 </button>
  </div>
        </div>
        }
        {
        showParticipants && <div className="addParticipant">
        <div className="Participants">
        <div className="ParticipantsText">
        <h3><span>04</span> Participants</h3>
        <p>Lorem Ipsum Dolor Sit Amet</p>
      <div className="partipipantDiv">
      <div className="searchSvg">
            <BiSearch/>
        </div>
      <form action="/action_page.php">
         <input type="text" id="fname" name="firstname" placeholder="Search Participants"/>

        </form>
       
      </div>
        </div>
        <div className="closeSvg">
        <GrClose/>
        </div>
    </div>
    <hr className='lineHR' />

   <div className="participantsLists">
   <div className="participantsTile">
        <img src={hostImg} alt="" className='firstParticipant'/>
        <div className="hostInfo">
            <p>M. Wajahat (You)</p>
            <span>Host</span>
        </div>
        <div className="hostActions">
            <span className='cross'>
                <GrClose/>
            </span>
            <span className='threeDots'>
                <BsThreeDotsVertical/>
            </span>
        </div>
        
    </div>
    <hr className='lineHR' />
    <div className="participantsTile">
        <img src={hostImg} alt="" className='firstParticipant'/>
        <div className="hostInfo">
            <p>M. Wajahat (You)</p>
            <span>Host</span>
        </div>
        <div className="hostActions">
            <span className='cross'>
                <GrClose/>
            </span>
            <span className='threeDots'>
                <BsThreeDotsVertical/>
            </span>
        </div>
        
    </div>
    <hr className='lineHR' />

    <div className="participantsTile">
        <img src={hostImg} alt="" className='firstParticipant'/>
        <div className="hostInfo">
            <p>M. Wajahat (You)</p>
            <span>Host</span>
        </div>
        <div className="hostActions">
            <span className='cross'>
                <GrClose/>
            </span>
            <span className='threeDots'>
                <BsThreeDotsVertical/>
            </span>
        </div>
        
    </div>
    <hr className='lineHR' />

    <div className="participantsTile">
        <img src={hostImg} alt="" className='firstParticipant'/>
        <div className="hostInfo">
            <p>M. Wajahat (You)</p>
            <span>Host</span>
        </div>
        <div className="hostActions">
            <span className='cross'>
                <GrClose/>
            </span>
            <span className='threeDots'>
                <BsThreeDotsVertical/>
            </span>
        </div>
        
    </div>
    <hr className='lineHR' />

    <div className="participantsTile">
        <img src={hostImg} alt="" className='firstParticipant'/>
        <div className="hostInfo">
            <p>M. Wajahat (You)</p>
            <span>Host</span>
        </div>
        <div className="hostActions">
            <span className='cross'>
                <GrClose/>
            </span>
            <span className='threeDots'>
                <BsThreeDotsVertical/>
            </span>
        </div>
        
    </div>
    <hr className='lineHR' />
    <div className="participantsTile">
        <img src={hostImg} alt="" className='firstParticipant'/>
        <div className="hostInfo">
            <p>M. Wajahat (You)</p>
            <span>Host</span>
        </div>
        <div className="hostActions">
            <span className='cross'>
                <GrClose/>
            </span>
            <span className='threeDots'>
                <BsThreeDotsVertical/>
            </span>
        </div>
        
    </div>
    <hr className='lineHR' />
    <div className="participantsTile">
        <img src={hostImg} alt="" className='firstParticipant'/>
        <div className="hostInfo">
            <p>M. Wajahat (You)</p>
            <span>Host</span>
        </div>
        <div className="hostActions">
            <span className='cross'>
                <GrClose/>
            </span>
            <span className='threeDots'>
                <BsThreeDotsVertical/>
            </span>
        </div>
        
    </div>
    <hr className='lineHR' />
   </div>
   <hr className='messageHR' />
   <button>INVITE PEOPLE</button>
        </div>
        }
        {
            showInvite &&  <div className="shareMeeting">
            <div className="heading">
            <div className="onleft">
            <h4>Share Meeting / Invite People</h4>
            <p>Share this meeting link with others you want in the meeting</p>
            </div>
            <div className="onright">
            <GrClose/>
            </div>
            </div>
            <hr className='hr-line'/>
            <div className="copyLink">
             <form action="">
                 <input type="text" />
                 <button>COPY CODE</button>
             </form>
            </div>
            <hr class="hr-text" data-content="OR" className='or-hr'/>
            <div className="invite-email">
             <p>Or invite using their <span>Email Address</span> instead.</p>
             <form action="">
                 <input type="text" />
                 <button>INVITE</button>
             </form>
            </div>
            <hr className='hr-line'/>
            <div className="lastText">
            <p>People who use this meeting link must get your permission before 
             joining in.</p>
            </div>
         </div>
        }


      </div>

    </>
  )
}
