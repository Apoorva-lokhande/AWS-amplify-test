import React from "react";
import ImageUploader from 'react-images-upload';
import "./Registration.css";
import Header from "../components/Header";

import {Redirect} from 'react-router-dom'
class Registration extends React.Component
{
constructor(props) {
  super(props);
this.register=this.register.bind(this)
this.submit=this.submit.bind(this)
  this.state = {phonenotif:"",squadname:"",logo:"",name:"",email:"",team1:"",team2:"",team3:"",team4:"",team5:"",team6:"",game1:"",game2:"",game3:"",game4:"",game5:"",game6:"",password:"",phone:""};
}
    account = (
        <ul class="nav navbar-nav navbar-right">
        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="fas fa-user"></i> Hello, Esha<span class="caret"></span></a>
        <ul class="dropdown-menu">
            <li><a href="#">Account Info</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#" onClick={this.logout}><i class="fas fa-sign-out-alt"  ></i> LogOut</a></li>
        </ul>
        </li>
    </ul>
    );
   async register(){
         var res= await fetch("http://gamersbackp.herokuapp.com/teamreg/",{
    method: 'POST',
    
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "fullname="+this.state.name+"&squadname="+this.state.squadname+"&squadlogo="+this.state.logo+"&team1name="+this.state.team1+"&team2name="+this.state.team2+"&team3name="+this.state.team3+"&team4name="+this.state.team4+"&team5name="+this.state.team5+"&team6name="+this.state.team6+"&team1id="+this.state.game1+"&team2id="+this.state.game2+"&team3id="+this.state.game3+"&team4id="+this.state.game4+"&team5id="+this.state.game5+"&team6id="+this.state.game6+"&emailid="+this.state.email+"&phone="+this.state.phone+"&notifphone="+this.state.phonenotif
  })
  var data=await res.json()
  alert(data.msg)
    }
async submit(){
    await this.register()
}
    render()
    {
        return (
            <div id="registration">
                <Header rightElement={this.account} />
                <lable className="registration-head">REGISTRATION INFORMATION</lable>
 <div id="underline"></div>
                <div className="register-form" id="full">
                <label for="inputFname">Full Name</label>

                <div class="form-row">

                        <div class="form-group col-md-12">
                      
                        <input type="text" id="inputsssfull"  value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
                        </div>
                       
                    </div>

                    <div >

                    <label for="inputSquad">Squad Name and Logo</label>

                        <div class="input-group ">

                        <input type="text" id="inputsss" value={this.state.squadname} onChange={(e)=>this.setState({squadname:e.target.value})}   />
                       
                           
                         <button id="uuuuu">   upload</button>
                         
                      
                        </div>
                    </div>

                    <div className="form-row" id="holder-sqname">

                    <label for="">Squad Members Name and Id</label>
  
                        <div class="input-group" id="titlesquadname">
                        
                        <input type="text" id="inputsss" value={this.state.team1} onChange={(e)=>this.setState({team1:e.target.value})}  />
                        <div class="gameappend">
                        <input type="text" class="gameappendi" value={this.state.gameid1} onChange={(e)=>this.setState({gameid1:e.target.value})} />
                        </div>
                        </div>
                        <div class="input-group ">
                        <input type="text" id="inputsss" value={this.state.team2} onChange={(e)=>this.setState({team2:e.target.value})} />
                        <div class="gameappend">
                        <input type="text" class="gameappendi" value={this.state.gameid2} onChange={(e)=>this.setState({gameid2:e.target.value})}  />
                        </div>
                        </div>
                        <div class="input-group ">
                        <input type="text" id="inputsss"  value={this.state.team3} onChange={(e)=>this.setState({team3:e.target.value})}/>
                        <div class="gameappend">
                        <input type="text"  class="gameappendi" value={this.state.gameid3} onChange={(e)=>this.setState({gameid3:e.target.value})}/>
                        </div>
                        </div>
                        <div class="input-group ">
                        <input type="text" id="inputsss"  value={this.state.team4} onChange={(e)=>this.setState({team4:e.target.value})}/>
                        <div class="gameappend">
                        <input type="text"  class="gameappendi" value={this.state.gameid4} onChange={(e)=>this.setState({gameid4:e.target.value})}/>
                        </div>
                        </div>
                        <div class="input-group mb-3">
                        <input type="text" id="inputsss"  value={this.state.team5} onChange={(e)=>this.setState({team5:e.target.value})}/>
                        <div class="gameappend">
                        <input type="text"  class="gameappendi" value={this.state.gameid5} onChange={(e)=>this.setState({gameid5:e.target.value})} />
                        </div>
                        </div>
                        <div class="input-group mb-3">
                        <input type="text" id="inputsss" value={this.state.team6} onChange={(e)=>this.setState({team6:e.target.value})}/>
                        <div class="gameappend">
                        <input type="text"   class="gameappendi" value={this.state.gameid6} onChange={(e)=>this.setState({gameid6:e.target.value})}/>
                        </div>
                        </div>
                    </div>
   <label id="emaillable">Email Id</label>
                    <div >
                     
                        <input type="email" id="inputsssem" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
                    </div>
 <label >Phone Number</label>
 <span id="divider"/>
                    <div >
                       
                        <input type="tel" id="inputsssem" value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})}/>
                    </div>
 <label >Phone Number (for notification)</label>
                    <div >
                       
                        <input type="tel" id="inputsssem" value={this.state.phonenotif} onChange={(e)=>this.setState({phonenotif:e.target.value})}/>
                    </div>

                    
                        <button  id="paynowbtn" onClick={this.submit}>Pay Now</button>
                  
                </div>
              
            </div>
        );
    }

}

export default Registration; 