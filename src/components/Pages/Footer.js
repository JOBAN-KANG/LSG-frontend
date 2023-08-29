import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import {BsInstagram} from "react-icons/bs";
import {FiTwitter} from "react-icons/fi";
import {AiOutlineYoutube} from "react-icons/ai";
import {AiOutlineFacebook} from "react-icons/ai";
export default function About() {
    return (
       
        <div className="">
     {/*
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.7286758426503!2d75.14215401462697!
        3d31.366465661864957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a
        2f7a43f51211%3A0xa974e5ab1e5bc6f1!2sJOBAN%20KANG!5e0!3m2!1sen!2sin!4v1661633960864!5m2!1sen!2sin
        " width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    */}
    
    <div className=""><div className="col-lg-10 col-lg-offset-1">
        <br/><br/>
			<br/><br/><br/><div className="col-lg-4"><h1 className="gopr">LSG STUDIO</h1><br/>
			<h4 className="items"> LSG STUDIO is a Punjabi Music Company. 
            This is a Official Website Of LSG STUDIO. 
            LSG STUDIO belives in Bringing World Close Together Through its MUSIC.  </h4><br/>
		</div>
		                                                             
          <div className="col-lg-2"><h4 className="last">Social Media</h4><br/><ul type="none">
          <li><Link to="/home" className="last"><AiOutlineHome/>Home</Link></li><br/>
          		<li ><a href="https://www.instagram.com/reel/CdcwFKCphSz/?utm_source=ig_web_copy_link" className="last"><BsInstagram/>instagram</a></li><br/>
          		<li ><a href="https://www.youtube.com/channel/UC3IJt1OnwHC88atjT4b54Mg" className="last"><AiOutlineYoutube/> Youtube</a></li><br/>
          			<li ><a href="https://youtu.be/coiRQREo7OE" className="last"><FiTwitter/>twitter</a></li><br/>
          				<li><a href="https://www.youtube.com/channel/UC3IJt1OnwHC88atjT4b54Mg" className="last"><AiOutlineFacebook/>facebook</a></li><br/>
          				

          </ul></div>
         <div className="col-lg-3"><h4 className="last">More About US</h4><br/><ul  type="none">
         <li ><Link to="/music" className="last">Music</Link></li><br/>
              <li ><Link to="/Live" className="last">Live Concert</Link></li><br/>
          		<li ><a href="" className="last">Team Members</a></li><br/>
          				<li><a href="" className="last">Up Coming Project</a></li><br/>

          				

          </ul></div>
          <div className="col-lg-3"><h4 className="last">Contact Us</h4><br/><ul className="items" type="none">
          	<h4>Goindwal Sahib </h4><h5> Dist:Tarn Taran (PUNJAB)</h5><br/><h4>PHONE:</h4><h5>+91 88725-62075</h5><br/>
<h4>EMAIL:</h4><h5>lyricalsingergoindwaliee@gmail.com</h5><br/>

          				</ul></div></div>
          				<div className=" col-lg-4 col-lg-offset-4 centr"><p> All Rights Reserved © Copyright <b>LSG STUDIO</b>.</p>Designed By 
<h3><b>JOBAN KANG</b></h3> <h3><b>SANJU THAKUR</b></h3></div></div>
 </div>
    );
}
