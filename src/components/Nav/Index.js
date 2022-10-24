import React from 'react'
import { useDispatch } from 'react-redux';
import './Index.css'
import { token } from "../../store/actions";

export default function Index() {
  const dispatch = useDispatch()
    const deconnecter = () => {
        localStorage.removeItem('token');
        dispatch(token(null))
    }
  return (
    <div className='nav'>
        <div className='left'>Lorem </div>
        <div className='right'>
            <span className='button'>Message</span>
            <span className='button'>Notification</span>
            <span className='button' onClick={deconnecter}>Deconnecter</span>
        </div>
    </div>
  )
}
