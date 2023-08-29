import React from "react";
import axios from"axios";
import './css/Userlogin.css';
//import Navlogin from "./Navlogin";
export default function Signup(){
    var uri = "http://localhost:100/";
  
    function handleform(e){
     e.preventDefault()
         var data= new FormData(e.currentTarget);
         var name= data.get('name');
         var password= data.get('password');
         var email= data.get('email');
         var datas= {
             Name: name,
             Password: password,
             Email: email

         }
       
        axios.post(uri +'signup', datas).then((succ) => {
            console.log(succ.data);
            if(succ.data.acknowledged === true){
           //  localStorage.setItem('Name', name);
              //  localStorage.setItem('Password', pwd);
                //localStorage.setItem('Confirmed', conf);
                //localStorage.setItem('Email', mail);
                alert('REGISTERED');
                //fetch();
               login();
            }
            else {
                alert('Something Went Wrong');
            }
        })
            
     }   
       function login(){
       window.location="/home";
       }
       
    return (
        <div> 
        <a href="/login" className="sign1">
                                  LOGIN
                            </a>
             <br/><br/>
<div  className="col-lg-6 col-lg-offset-3 col-xs-10 col-xs-offset-1 border1">
   <h1 className="center"><b>SIGN UP</b></h1>
        <form className="form" onSubmit={handleform}>
            
        <div className=" col-lg-8 col-lg-offset-2 col-xs-12  login1">
            <input type={'text'}  name="name" className="length1" placeholder="Name" required/><br/><br/>
        <input type={'password'}  name="password" className="length1" placeholder="Password" required/><br/><br/>
        <input type={'email'}  name="email" className="length1" placeholder="Enter Your Email" required/><br/><br/>
        <input type={'submit'} name="submit" className="btn btn-info" value={"SIGN UP"} />
        </div>
      
        </form>

</div>
       
     
        
         
           </div>
          
    

    )
}