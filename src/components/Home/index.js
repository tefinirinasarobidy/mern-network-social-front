import React from 'react'
import { useDispatch } from "react-redux";
import { token } from "../../store/actions";

export default function Index() {
    const dispatch = useDispatch()
    const deconnecter = () => {
        localStorage.removeItem('token');
        dispatch(token(null))
    }
  return (
    <div>
        <div>hommmeeeeeeeeeeeee</div>
        <div>
            <button onClick={deconnecter}> deconnecter </button>
        </div>
    </div>
  )
}
