import React from 'react'
import Login from '../../components/login/Login'
import { useSelector } from 'react-redux'
import HomeComponent from '../../components/Home'
import './Home.css'
import Nav from '../../components/Nav/Index'
// import {token} from '../../store/actions/index'

export default function Home() {
  const token_store = useSelector(state => state.token )
  // const dispatch = useDispatch()
  // const token_local = localStorage.getItem('token')

  // useEffect(() => {
  //   console.log();
  //   localStorage.getItem('token') ? dispatch(token(token_local)) : dispatch(token(null))
  // },[])
  
  return (
    <div className='home-page'>
      <div className='nav-page'>
        <Nav/>
      </div>
      <div className='body'>
        <div className='left-page'>left page</div>
        <div className='center-page'>
          <HomeComponent/> 
        </div>
        <div className='rigth-page'>rigth page</div>

      </div>
            
    </div>
  )
}
 