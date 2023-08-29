import React from "react";
import png from 'C:/final/LSG-STUDIO/src/components/assets/img/png.PNG';
import axios from"axios";
import './css/Userlogin.css';
//import Navlogin from "./Navlogin";
export default function Userlogin(){
    var uri = "http://localhost:100/";
    function handleform(e){
     e.preventDefault()
         var data= new FormData(e.currentTarget);
         var name= data.get('name');
         var password= data.get('password');
         axios.post(uri +'checklogin', {
            Name: name,
            Password: password
        }).then((succ) => {
            console.log(succ.data);
            if(succ.data){
                alert('Login Successfull');            
                //fetch();
               login();
            }
            else {
                alert('PLEASE FILL VALID DATA');
            }
        })
            
       } 
      function login(){
       window.location="/home";
       }
       
    return (
        <div> 
             <a href="/signup" className="sign">
                                SIGN UP
                            </a>
             <br/><br/>
<div  className="col-lg-6 col-lg-offset-3 col-xs-10 col-xs-offset-1  border">
    <div className="col-lg-4 col-lg-offset-4 col-sm-4 col-sm-offset-4 col-xs-8 col-xs-offset-2 ">
       </div>
        <form className="form" onSubmit={handleform}> 
        <div className=" col-lg-8 col-lg-offset-2 col-xs-12  login1">
        <img className="img-responsive img" src={png} alt="lsg"/>
        <br/>
            <input type={'text'}  name="name" className="length1" placeholder="Username" required/><br/><br/>
        <input type={'password'}  name="password" className="length1" placeholder="Password" required/><br/><br/>
        <input type={'submit'}  name="submit" className="btn btn-info" value={"LOGIN"} />
        </div>
      
        </form>

</div>
       
     
        
         
           </div>
          
    

    )
}