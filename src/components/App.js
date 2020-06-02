import React from 'react';
import { Switch, Route } from "react-router-dom";

import Login from "../screens/Login";
import Events from "../screens/Events";
// alone done
import AboutEvent from "../screens/AboutEvent";
// alone done
import Register from "../screens/Register";
// alone done
import Registration from '../screens/Registration';
// alone done
import Payout from '../screens/Payout';
// alone done
import UserDetails from '../screens/UserDetails/UserDetails';
// alone done
import BookingHistory from "../screens/BookingHistory";

const App = () => {
  return (
    <>
        {/* <Login /> */}

        <Switch>

          {/* <Route exact path="/">
            <Login />
          </Route> */}

          <Route  path="/bookinghistory">
            <BookingHistory />
          </Route>



          

          <Route  path="/profile">
            <UserDetails />
          </Route>


          <Route path="/login" render={(): JSX.Element => <Login />} />
            
          <Route path="/teamregister">
            <Registration />
          </Route>

          <Route path="/register" render={(): JSX.Element => <Register />} />

          
          

          <Route exact path="/home">
            <Events />
          </Route>

          <Route path="/aboutevent">
            <AboutEvent/>
          </Route>

          <Route path="/pay">
             <Payout/>
          </Route>

          <Route exact path="/booking">
             <BookingHistory/>
          </Route>
        </Switch>
    </>
  );
};

export default App
