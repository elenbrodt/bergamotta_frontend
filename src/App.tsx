import React, { useEffect } from 'react';
import Cookie from 'js-cookie'
import Routes from './Routes';
import {useDispatch} from 'react-redux';
import { setUser } from './store/modules/user';
import { setOwner } from './store/modules/owner';

function App() {

  const dispatch = useDispatch();
  useEffect (()=>{
    const user = Cookie.get("user")
    const owner = Cookie.get("owner")
    if (user){
      dispatch(setUser(JSON.parse(user)))
    }
    if (owner){
      dispatch(setOwner(JSON.parse(owner)))
    }

    }, [dispatch])
  return (
    <Routes/>   
  );
}

export default App;
