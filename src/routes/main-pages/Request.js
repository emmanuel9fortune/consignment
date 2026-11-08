import React from 'react'
import Header from '../../components/Navbar'
import { Link } from 'react-router-dom'
import BottomBar from '../../components/Footer'
import Quote from '../../components/Quote'
import SEO from '../../components/SEO'

function Request() {
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
                <h3>REQUEST A QUOTE</h3>
                <div style={{display:'flex', alignItems:'center', color:'white', alignItems:'center', margin:'20px 0'}}>
                    <Link to={'/'} style={{color:'white', margin:'0 5px', textDecoration:'none'}}>HOME </Link>
                    <p> | REQUEST A QUOTE</p>
                </div>
            </div>
        </div>
        <div style={{width:'100%', height:'50px'}} ></div>

        <Quote/>

        <BottomBar/>
    </div>
  )
}

export default Request