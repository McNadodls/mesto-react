<<<<<<< HEAD
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function ProtectedRoute ({component: Component, ...props}) {
  return (
  <Route>
    {()=>
      props.loggedIn ? <Component {...props} /> : <Redirect to="./sign-in" />
    }
  </Route>
  )
}

=======
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function ProtectedRoute ({component: Component, ...props}) {
  return (
  <Route>
    {()=>
      props.loggedIn ? <Component {...props} /> : <Redirect to="./sign-in" />
    }
  </Route>
  )
}

>>>>>>> c7baf28ad85f6f5949ab4e0648b2a5ad4030a529
export default ProtectedRoute;