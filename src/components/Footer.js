import React, { useState } from 'react'
import { FaAngleDown, FaAngleRight, FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/footer.css'

function BottomBar() {

    const [link1, setlink1] = useState(false)
    const [link2, setlink2] = useState(false)

    const navigate = useNavigate()

  return (
    <div className='about_sub' >

        <div className='bottom_bar' style={{backgroundColor:'#413686'}} >
            <div className='bottom_links'>

                <h2 style={{width:'100%'}} >ABOUT US</h2>
                <p>
                  You can use the icons above to access more 
                  information about our credentials, providing solutions 
                  in a host of specific industries. However, these are far 
                  from the only industries that SHIPPER has proudly served.
                </p>
            </div>

            <div className='bottom_links'>
                <div onClick={()=>link2 ? setlink2(false) : setlink2(true)} className='MOBILE_btm_link_hd' >
                    <h3>SERVICES</h3>
                </div>


                <div className='MOBILE_btm_links'>
                    <li onClick={()=>navigate('/')} >Aceon Freight</li>
                    <li onClick={()=>navigate('/')} >Storeage</li>
                    <li onClick={()=>navigate('/')} >Package Security</li>
                    <li onClick={()=>navigate('/')} >Air Freight</li>
                    <li onClick={()=>navigate('/')} >Warehousing</li>
                </div>
            </div>

            <div className='bottom_links'>
                <div onClick={()=>link2 ? setlink2(false) : setlink2(true)} className='MOBILE_btm_link_hd' >
                    <h3>QUICK LINKS</h3>
                </div>


                <ul className='MOBILE_btm_links'>
                    <li onClick={()=>navigate('/')} >Home</li>
                    <li onClick={()=>navigate('/about-us')} >About Us</li>
                    <li onClick={()=>navigate('/contact-us')} >Contact Us</li>
                    <li onClick={()=>navigate('/')} >Services</li>
                    <li onClick={()=>navigate('/')} >Terms and Conditions</li>
                </ul>
            </div>

            <div className='bottom_links'>


                <h3>FOLLOW US</h3>
                <div className='bottom_links_share'>
                
                    <Link style={{textDecoration:'none'}} to={'/'} target='/blank' >
                        <FaXTwitter className='bottom_links_share_icons'/>
                    </Link>

                    <FaFacebookF className='bottom_links_share_icons' />
                    <FaLinkedinIn className='bottom_links_share_icons' />

                    <Link style={{textDecoration:'none'}} to={'/'} target='/blank' >
                        <FaYoutube className='bottom_links_share_icons' />
                    </Link>
                    
                </div>
            </div>

        </div>

        
        <div className='bottom_bar_links'>
            <div className='bottom_bar_privacy_links'>
                <Link className='bottom_bar_privacy_link' >
                    <p>Legal</p>
                </Link>
                <Link className='bottom_bar_privacy_link'>
                    <p>Privacy Policy</p>
                </Link>
                <Link className='bottom_bar_privacy_link'>
                    <p>Cookie Policy</p>
                </Link>
                <Link className='bottom_bar_privacy_link'>
                    <p>Recruitment Privacy Policy</p>
                </Link>
            </div>

            <div className='bottom_bar_' style={{backgroundColor:'#fff'}}>
                <p>© 2025 ELITE GLOBAL TRANSIT</p>
            </div>
        </div>
    </div>
  )
}

export default BottomBar