import React from "react";
import {Link,Redirect} from "react-router-dom"
import "./Register.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import background from "./images/background.jpg"


import f from "./images/f.png"
import g from "./images/g.png"
class Register extends React.Component{
    constructor(props) {
      super(props);
       this.responseGoogle=this.responseGoogle.bind(this)
       this.signup=this.signup.bind(this)
      const email=localStorage.getItem("email")
      let login=true
      if(email==null){
        login=false
      }
   
      this.state = {firstname:"",lastname:"",email:"",password:"",gender:"",username:""};
    }
    async responseGoogle(response){
  var res=await fetch("http://localhost:8000/checkemail/",{
    method: 'POST',
    
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "email="+response.profileObj.email
  })
  var data=await res.json()
  if (data.registered=="true"){
    alert("Already registered")
  
  
    
  }else{
    this.setState({usernamepop:true,email:response.profileObj.email,name:response.profileObj.name,password:response.profileObj.googleId})
  }
 //this.setState({usernamepop:true})
  //console.log(response.profileObj);
}
   async signup(){
        var res=await fetch("http://localhost:8000/register/",{
           method: 'POST',
    
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "email="+this.state.email+"&password="+this.state.password+"&gender="+this.state.gender+"&name="+this.state.name+"&username="+this.state.username

        })
      alert("Signup done")
      localStorage.setItem("email",this.state.email)
    localStorage.setItem("username",this.state.username)
    localStorage.setItem("gender",this.state.gender)
    localStorage.setItem("name",this.state.name)
      this.setState({usernamepop:false})
      this.setState({done:true})
    }
    
render(){
  if (this.state.done){
    return <Redirect to="/home"/>
  }
    return (
      <>
       <img src={background} class="backimg"></img> 
       <div class="welcomeback">
        <lable class="welcombacktext">Welcome to Gamersback !</lable>
        </div> 
       <Header  />

       
        <div className="registe">
           
            
            <div className="register-for">
            <h1 className="createacc"><b>Create Account</b></h1>
            <img src={g} id="g" style={{width:"55px",marginTop: '30px'}} alt="logo"/>
            <img src={f} id="f" style={{width:"55px",marginTop: '30px'}} alt="logo"/>
            <br/>
            <lable class="hellp"><b>or use email for registration</b></lable>
            <div class="inputholder">
                   
                   
                    <input type="text" class="form-contr" id="inputFname" placeholder="First Name" value = {this.state.firstname} onChange={e => this.setState({firstname: e.target.value})}/>
                 
            

            
                  
                    <input type="text" class="form-contr"  placeholder="Last Name" value = {this.state.lastname} onChange={e => this.setState({lastname: e.target.value})}/>
        
                 
                  
                    <input type="text" class="form-contr"  placeholder="Gender" value = {this.state.gender} onChange={e => this.setState({gender: e.target.value})}/>
               
                   
                    <input type="text" class="form-contr"  placeholder="Username" value = {this.state.username} onChange={e => this.setState({username: e.target.value})}/>
                  
                   
                    <input type="text" class="form-contr"  placeholder="Email" value = {this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                  
                   
                    <input type="text" class="form-contr" placeholder="Password" value = {this.state.password} onChange={e => this.setState({password: e.target.value})}/>
                   
                </div>
               
                
           
             
                 
                   
                    <button type="submit" class="btnn" onClick={this.signup}>Sign Up</button>
                   
                
             
              
                    
              
            </div>
      
        </div>

     </>
    );}
};
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    backgroundColor: '#000000',
    transform             : 'translate(-50%, -50%)'
  }
};
export default Register;