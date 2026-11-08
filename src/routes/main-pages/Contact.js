import React from 'react'
import Header from '../../components/Navbar'
import { Link } from 'react-router-dom'
import BottomBar from '../../components/Footer'
import SEO from '../../components/SEO'

function Contact() {
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
                <h3>CONTACT</h3>
                <div style={{display:'flex', alignItems:'center', color:'white', alignItems:'center', margin:'20px 0'}}>
                    <Link to={'/'} style={{color:'white', margin:'0 5px', textDecoration:'none'}}>HOME </Link>
                    <p> | CONTACT</p>
                </div>
            </div>
        </div>
        <div style={{width:'100%', height:'50px'}} ></div>
        
        <div className='quote_container'>
            <div className='quote_form' >
                <h1>ADDRESS INFOS</h1>
                <h4 style={{margin:'20px 0'}}>HEADQUARTER</h4>
                <p>Unit 27, Bon Accord Centre, George St, Aberdeen AB25 1HZ, United Kingdom</p>
    
                <div className='quote_form_field'>
                    <div className='quote_form_input_field' >
                        <label>Your Name</label>
                        <input placeholder='Enter Your Name'/>
                    </div>
                    <div className='quote_form_input_field' >
                        <label>Your Email</label>
                        <input placeholder='Your Email'/>
                    </div>
                </div>
    
                <div className='quote_form_field'>
                    <div className='quote_form_input_field' >
                        <label>Your Phone</label>
                        <input placeholder='Enter Your Phone'/>
                    </div>
                    <div className='quote_form_input_field' >
                        <label>Your Country</label>
                        <input placeholder='Total Weight'/>
                    </div>
                </div>
    
                <div className='quote_form_field'>
                    <textarea placeholder='Enter your message here' />
                </div>
                
                <div className='dropdown_slide_sign_btn' 
                    style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', margin:'20px 0'}}>
                    <h3 style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', margin:'10px'}}>SEND MESSAGE</h3>
                </div>
            </div>
            <div className='quote_img contact_img' ></div>
        </div>

        <BottomBar/>
    </div>
  )
}

export default Contact