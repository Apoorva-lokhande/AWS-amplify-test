import React from "react";

import "./Footer.css"

class Footer extends React.Component{
	render(){
		if(this.props.login){
			return(
				<footer  style={{position: 'absolute',bottom: 0,marginTop: '15px',
    
    backgroundColor: 'transparent',
    height: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    width: '100%'}}>

            
            <p class="services"><b>About Us</b></p>
            <p class="services"><b>Services</b></p>
 <p class="services"><b>Future Plan</b></p>
  <p class="services"><b>Reach Us</b></p>
   <p class="services"><b>Terms and Conditions</b></p>
    <p class="services"><b>Privacy and Policies</b></p>
        </footer>)
		}
    return (
        <footer id="footer" >

            
            <p class="end">About Us</p>
            <p class="services">Services</p>
 <p class="services">Future Plan</p>
  <p class="services">Reach Us</p>
   <p class="services">Terms and Conditions</p>
    <p class="services">Privacy and Policies</p>
        </footer>
    );}
};

export default Footer;