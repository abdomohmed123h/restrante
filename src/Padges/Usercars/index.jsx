import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function Cartuser() {
    const navigatio=useNavigate();

    const handelclice = () => {
        navigatio('/login')
    
      }
  return (
    <>
    <div
        className="col-12 d-flex justify-content-center align-items-center gap-3 mt-5 p-3 flex-column shadow bg-white rounded-3 mb-5 pt-4"
      
      >
        <FaUserCircle className="fs-1" />
        <h3>User Name</h3>
        <p>User Role</p>
        <button className="btn btn-primary" onClick={handelclice}>log out</button>
      </div>
    </>
    
  )
}
