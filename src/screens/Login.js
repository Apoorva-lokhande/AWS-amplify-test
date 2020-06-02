
import React from "react";
import "./Login.css";
import Header from "../components/Header";
import validator from "validator";
import { Link, Redirect } from "react-router-dom"
import Footer from "../components/Footer";
import youtube from "./images/youtube.png"
import instagram from "./images/instagram.png"
import discord from "./images/discord1.png"

import background from "./images/background.jpg"


class Login extends React.Component
{
  constructor(props) {
    super(props);
  this.login=this.login.bind(this)
  this.handleSubmit=this.handleSubmit.bind(this)
  this.responseGoogle=this.responseGoogle.bind(this)
  this.signup=this.signup.bind(this)
    this.state = {gender:"",username:"",email: "", password: "",usernamepop:false,name:"",done:false};
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
    alert("Login Done")
    localStorage.setItem("email",this.state.email)
    localStorage.setItem("username",this.state.username)
    localStorage.setItem("gender",this.state.gender)
    localStorage.setItem("name",this.state.name)
    this.setState({done:true})
    
  }else{
    this.setState({usernamepop:true,email:response.profileObj.email,name:response.profileObj.name,password:response.profileObj.googleId})
  }
 //this.setState({usernamepop:true})
  //console.log(response.profileObj);
}
  validateForm = () => {
    return validator.isEmail(this.state.email) && this.state.password.length > 6;
  };
async login(){
  var res=await fetch("http://localhost:8000/login/",{
    method: 'POST',
    
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "email="+this.state.email+"&password="+this.state.password
  })
  //var data=await res.json()
  var data =await res.json()
  if (data.msg!=undefined){
alert(data.msg)
  }else{
   alert("Login Sucsess")
   localStorage.setItem("email",data.email)
    localStorage.setItem("username",data.username)
    localStorage.setItem("gender",data.gender)
    localStorage.setItem("name",data.name)
   this.setState({done:true})
  }
  
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
  async handleSubmit() 
  {
    await this.login()
    
  }
  
  register = (
    <>
    <span class="navbar-text icons">
      <div className="form-inline">
        <div className="form-group social-icon">
        <a href="https://www.instagram.com/gamersbackglobal/"><img src={instagram} style={{width:"30px"}} alt="logo"/></a>
        </div>
        <div className="form-group social-icon">
        <a href="https://www.youtube.com/channel/UCibcdFoWrXPn_a-h-K_fvaQ"><img src={youtube} style={{width:"35px"}} alt="logo"/></a>
        </div>
        <div className="form-group social-icon">
        <a><img src={discord} style={{width:"40px"}} alt="logo"/></a>
        </div>
      </div>
    </span>
    <div>
     <span class="navbar-text">
     </span>
    </div>
      <button  
      class="regbutton" >
      <Link to="/register"><span class="rg">Register</span></Link>
      </button>
    </>
   );

  render()
  { 
    if (this.state.done){
      return <Redirect to="/home"/>
    }
    
    return (
        <>
        <img src={background} class="backimg"></img>  
            <Header 
            leftElement={this.login}
            rightElement={this.register} style={{width: '100%',position: 'absolute',height: '30%' }}/>
          
   
 
       
          <div className="branding">
          <lable className="brand">Gamersback</lable>
          <lable className="help">Create an account to register for tournaments</lable>
          </div>
            <div className="Login">
        
          
          <div className="center-heading">
            <p className="main-head"><b>Welcome back !</b></p>
            <p className="p1"><b>We're happy to serve you again!</b></p>
          </div>
            

  <div class="form-group" id="inputform">
  
    <input type="email" class="form-contro" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username or Email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
    
  </div>
  <div class="form-group">
  
    <input type="password" class="form-contro" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
   <lable className="forgott"><b>Forgot Password?</b></lable>
  </div>
  
  <button type="submit" id="login" class="bt" onClick={this.handleSubmit}>Login</button>

            
        
            </div>
     <Footer login={true}/>
        </>
          
      );
  }
}
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

export default Login;

