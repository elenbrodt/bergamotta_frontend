import React, { useEffect } from 'react';
import Cookie from 'js-cookie'
import Routes from './Routes';
import {useDispatch} from 'react-redux';
import { setUser } from './store/modules/user';

function App() {

  const dispatch = useDispatch();
  useEffect (()=>{
    const user = Cookie.get("user")
  
    if (user){
      dispatch(setUser(JSON.parse(user)))
    }

    }, [dispatch])
  return (
    <Routes/>   
  );
}

export default App;
