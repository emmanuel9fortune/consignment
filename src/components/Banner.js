import React, { useEffect, useState } from 'react'
import '../styles/banner.css'
import { FaShip, FaTrain } from 'react-icons/fa';
import { MdFlight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';
import { db } from '../firebase';

function Banner() {

  const [count, setcount] = useState(0)

  useEffect(()=>{
    const timer = setTimeout(() => {
      if(count === 3){
        setcount(0)
      }else{
        setcount(count + 1)
      }
    }, 4000);

    return () => clearTimeout(timer);
  },[count])

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
    
  // console.log(ids);
  
  

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
    <>
      <div className='banner' >
        <div className={count === 0 ? 'banner_container ban1' : count === 1 ? 'banner_container ban2' : 'banner_container ban3' }>
          <div className='banner_container_overlay' >
            
            <div style={{width:'100%', height:'50px'}} ></div>
            <h1>LOGISTICS</h1>
            <h3>Check your delivery easily & quickly</h3>

          
            <div style={{width:'100%', height:'50px'}} ></div>

            <div className='banner_input_field'>
              <input value={id} onChange={(e)=> setid(e.target.value)} placeholder='ENTER YOUR TRACK NUMBER' />
              <button onClick={handleTrack} >TRACK ORDER</button>
            </div>
          </div>
        </div>
      </div>

      <div className='pack_storage'>
        <div className='pack_storage_text' >
          <h1>PACKING & STORAGE</h1>

          <p>Bringing you industry-specific expertise; whatever you’re shipping, wherever you’re shipping it.</p>
          <ul>
            <li>Shipper delivers a professional, efficient service.</li>
            <li>Tailored to the specific needs of your business</li>
            <li>Our services are designed around you.</li>
          </ul>
        </div>

        <div className='pack_storage_boxes' >

          <div className='pack_storage_boxe'>
            <div>
              <img src='/assets/ship.png' />

              <h3>SEA SHIPPING</h3>
            </div>
            
            <p>We want to ensure that it’s as easy as possible to use the site to get.</p>
          </div>

          <div className='pack_storage_boxe'>
            <div>
              <img src='/assets/plane.png' />

              <h3>AIR SHIPPING</h3>
            </div>
            
            <p>Shipments moving, whether you’ve worked with us for years completely new.</p>
          </div>

          <div className='pack_storage_boxe'>
            <div>
              <img src='/assets/train.png' />

              <h3>LAND SHIPPING</h3>
            </div>
            
            <p>International shipping. For further assistance, please get in touch.</p>
          </div>


        </div>
      </div>
    </>
  )
}

export default Banner