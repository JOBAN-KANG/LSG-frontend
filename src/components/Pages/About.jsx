import React from 'react';
import './css/About.scss';
import c3 from 'C:/final/LSG-STUDIO/src/components/assets/img/c3.JPEG';
import Container from "../fragment/Container";


const About = () => {
    return (
        <Container>
            <div className={"About"}>
            <img className="avt" src={c3} alt="LSG" />
               <h1 className="main"> LSG STUDIO is a Punjabi Music Company which was established five years ago. 
            This is an Official Website Of LSG STUDIO. LSG STUDIO belives in bringing world close together
             through its MUSIC. LSG STUDIO have its office in GOINDWAL SAHIB in MAJHA region. LSG STUDIO introduced their team which includes two singers and lyricists,
              singers named JOGI and SAGAR KALYAN and lyricists are JOBAN KANG and JOGI. ARSHDEEP SINGH is
               the hard backbone of LSG STUDIO. In our team we also have AMOL SINGH and AKASHDEEP SINGH  who 
               play's an important role in the growth of LSG STUDIO's. Contact us if you want build your carrier in Punjabi Music Industry .
             </h1>
             <div className="col-lg-3"><h1 className="lastt">Contact Us</h1>
          	<p><h3 className="last">Goindwal Sahib </h3><h3 className="last"> Dist:Tarn Taran (PUNJAB)</h3></p><p><h2 className="last">PHONE:</h2><h3 className="last">+91 88725-62075</h3>
              </p><h2 className="last">EMAIL:</h2><h3 className="last">lyricalsingergoindwaliee@gmail.com</h3>

          <br/>    <hr/></div>
                          <div className=" col-lg-4 col-lg-offset-4 centr"><p> All Rights Reserved © Copyright <b>LSG STUDIO</b>.</p>Designed By 
              <h3><b>JOBAN KANG</b></h3> <h3><b>SANJU THAKUR</b></h3>
                          </div><br/><br/></div>
          			
          
              
        </Container>
          	
    );
}

export default About;
