import React, { useEffect } from 'react'
import Login from '../../components/login/Login'
import { useSelector,useDispatch } from 'react-redux'
import HomeComponent from '../../components/Home'
import {token} from '../../store/actions/index'

export default function Home() {
  const token_store = useSelector(state => state.token )
  const dispatch = useDispatch()
  const token_local = localStorage.getItem('token')

  useEffect(() => {
    console.log();
    localStorage.getItem('token') ? dispatch(token(token_local)) : dispatch(token(null))
  },[])
  
  return (
    <div className='home-page'>
      {
        token_store != null ? <HomeComponent/> : <Login/>
      }
            
    </div>
  )
}
 