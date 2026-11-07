import React from 'react'
import '../styles/nav-bar.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaGlobe } from 'react-icons/fa'
import { MdChat, MdLocationOn } from 'react-icons/md'

function Header({track}) {

    
    const navigate = useNavigate()
    const menuClick =()=>{
        const menu_icon = document.querySelector(".menu-icon")
        menu_icon.classList.toggle("open");
        const menu_dropdown = document.querySelector(".menu_dropDown")
        menu_dropdown.classList.toggle("dropDown");
    }

    const fstclick =()=>{
        navigate('/')
    }

    const secclick =()=>{
        navigate('/track-order')
    }

    const trdclick =()=>{
        navigate('/request-quote')
    }


    const handleAbt =()=>{
        navigate('/request-quote')
    }

    const handlePlan =()=>{
        navigate('/track-order')
    }

  return (
    <div className='header'>
        <div className='_desk_header_' ></div>
        <div className='_header'>
            <div className='_header_'>
                <Link to={'/'} style={{textDecoration:'none'}} className='_header_box' >
                    <img style={{width:'50px'}} src='/assets/logo.png' alt='' />
                    <div style={{width:'100px'}} className='_header_txt'>
                        <h3 style={{fontSize:'14px', fontWeight:'800', color:'#ffba00'}}>ELITE GLOBAL TRANSIT</h3>
                    </div>
                </Link>

                <div className='_header_box' >
                    <div className='_header_icon'>
                        <FaGlobe size={23} />
                    </div>
                    <div className='_header_txt'>
                        <p>OPENING HOURS</p>
                        <p>MON-FRI 07:00 - 18:00</p>
                    </div>
                </div>
                
                <div className='_header_box' >
                    <div className='_header_icon'>
                        <MdLocationOn size={23} />
                    </div>
                    <div className='_header_txt'>
                        <p>OUR LOCATION</p>
                        <p>Unit 27, Bon Accord Centre, George St, Aberdeen AB25 1HZ, United Kingdom.</p>
                    </div>
                </div>

                <div className='_header_box' >
                    <div className='_header_icon'>
                        <MdChat size={23} />
                    </div>
                    <div className='_header_txt'>
                        <p>QUICK SUPPORT</p>
                        <p>info@eliteglobaltransit.com</p>
                    </div>
                </div>
            </div>
        </div>

        {
            !track &&
            <div className='desk_header' > 
                <div className='desk_header_links'>
                    <div onClick={()=> navigate('/')} className='desk_header_links_drop'>
                        <div className='desk_header_links_drop_arrow' 
                        >
                            <h3>HOME</h3>
                        </div>
                    </div>

                    <div  onClick={handlePlan}className='desk_header_links_drop'>
                        <div className='desk_header_links_drop_arrow' >
                            <h3>TRACK ORDER</h3>
                        </div>
                    </div>
    
                    <div onClick={handleAbt} className='desk_header_links_drop'>
                        <div className='desk_header_links_drop_arrow' >
                            <h3>REQUEST QUOTE</h3>
                        </div>
                    </div>

                    <div onClick={()=> navigate('/about-us')} className='desk_header_links_drop'>
                        <div className='desk_header_links_drop_arrow' >
                            <h3>ABOUT US</h3>
                        </div>
                    </div>

                    <div className='desk_header_links_drop'>
                        <div onClick={()=> navigate('/services')} className='desk_header_links_drop_arrow' >
                            <h3>SERVICES</h3>
                        </div>
                    </div>

                    <div className='desk_header_links_drop'>
                        <div onClick={()=> navigate('/contact-us')} className='desk_header_links_drop_arrow' >
                            <h3>CONTACT US</h3>
                        </div>
                    </div>
                </div>
            </div>
        }

        <div className='mobile_header' >
            <Link to={'/'} style={{textDecoration:'none'}} className='_header_box' >
                <img style={{width:'50px'}} src='/assets/logo.png' alt='' />
                <div style={{width:'100px'}} className='_header_txt'>
                    <h3 style={{fontSize:'14px', fontWeight:'800', color:'#ffba00'}}>ELITE GLOBAL TRANSIT</h3>
                </div>
            </Link>
            
            <div className='desk_header_donate_btns'>
                <div onClick={menuClick} className="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>


            <div className='menu_dropDown' >

                <div onClick={()=> fstclick()} className='dropdown_slide'>
                    <h3>HOME</h3>
                </div>

                <div onClick={()=> secclick()} className='dropdown_slide'>
                    <h3>TRACK ORDER</h3>
                </div>
                    
                <div onClick={()=> trdclick()} className='dropdown_slide'>
                    <h3>REQUEST QUOTE</h3>
                </div>
                    
                <div onClick={()=> navigate('/about-us')} className='dropdown_slide'>
                    <h3>ABOUT US</h3>
                </div>

                <div onClick={()=> navigate('/services')} className='dropdown_slide'>
                    <h3>SERVICES</h3>
                </div>

                <div style={{margin:'40px 0'}} ></div>

                <div onClick={()=> navigate('/contact-us')} className='dropdown_slide_sign_btn'>
                    <h3>CONTACT US</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header