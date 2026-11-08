import React, { useEffect, useState } from 'react'
import Header from '../../components/Navbar'
import '../../styles/sub.css'
import { Link, useNavigate } from 'react-router-dom'
import BottomBar from '../../components/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'
import { db } from '../../firebase'
import SEO from '../../components/SEO'

function TrackOrder() {

  const [id, setid] = useState('')

  const navigate = useNavigate()  
  const [ids, setids] = useState([])

  useEffect(()=>{
      db.collection('userchat').onSnapshot((snapshot)=>{
        setids(
          snapshot.docs.map((doc)=>({
            id : doc.id,
            data : doc.data()
          }))
        )
      })
  },[])   
  
  const handleTrack =async()=>{
    try {

        const prob = ids?.map((item)=>item.data)
        
        const  res = prob?.find((item)=> item?.tracker?.track_number === id)        
              
        if(res){            
          navigate(`/track-number/${id}`)
        }else if(!res){
          toast.error('TARCK NUMBER NOT FOUND')
        }
    } catch (error) {
        console.log(error);
        toast.error('NETWORK ERROR')
    }
  }

  return (
    <div>
        <SEO
        title="Elite Global Transit | International Shipping & Logistics"
        description="Discover reliable international shipping, freight forwarding, cargo transportation and logistics services with Elite Global Transit."
        path="/"
      />
        <Header/>
        <div className='sub_banner'>
            <div className='banner_container_overlay' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', paddingTop:'50px'}} >
                <div style={{width:'100%', height:'50px'}} ></div>
                <h3>TRACK ORDER</h3>
                <div style={{display:'flex', alignItems:'center', color:'white', alignItems:'center', margin:'20px 0'}}>
                    <Link to={'/'} style={{color:'white', margin:'0 5px', textDecoration:'none'}}>HOME </Link>
                    <p> | TRACK ORDER</p>
                </div>
            </div>
        </div>

        <div className='track_order'>
            <h1>TRACK ORDER</h1>
            <p>Enter Your Cargo Tracking, Door to Door Office Order Number.</p>
            
            <div className='banner_input_field'>
              <input value={id} onChange={(e)=>setid(e.target.value)} placeholder='ENTER YOUR TRACK NUMBER' />
              <button onClick={handleTrack}>TRACK ORDER</button>
            </div>
        </div>

        <BottomBar/>
    </div>
  )
}

export default TrackOrder