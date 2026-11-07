import React from 'react'
import '../styles/pack.css'
import { FaTrophy, FaUmbrella } from 'react-icons/fa'

function Latest() {
  return (
    <div className='pack_container'>
        <div className='pack_container_boxes'>
            <div className='latest_box'>
                <div className='latest_1' ></div>
                <div>
                    <h3>Social and demographic information</h3>
                    <p>There are no hidden costs associated with our transportation services.</p>
                    <div>
                        <p>READ MORE</p>
                    </div>
                </div>
            </div>
            <div className='latest_box'>
                <div>
                    <h3>Team member to discuss our meeting</h3>
                    <p>Offers you peace-of-mind that we’ll be on-hand to help whenever you need us.</p>
                    <div>
                        <p>READ MORE</p>
                    </div>
                </div>
                <div className='latest_2' ></div>
            </div>
            <div className='latest_box'>
                <div className='latest_3' ></div>
                <div>
                    <h3>Financial Institutions changes control</h3>
                    <p>As a company, we believe in operating as independent national carriers.</p>
                    <div>
                        <p>READ MORE</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='pat_contain'>
            <img src='/assets/pat1.jpg' alt='' />
            <img src='/assets/pat2.jpg' alt='' />
            <img src='/assets/pat3.jpg' alt='' />
            <img src='/assets/pat4.jpg' alt='' />
            <img src='/assets/pat5.jpg' alt='' />
            <img src='/assets/pat6.jpg' alt='' />
        </div>
        
        <div className='pat_contain'>
            <div className='pat_contain_'>
                <h1>ABOUT Elite Global Transit</h1>
                <p>
                    We have trained, experienced experts available for our full 
                    range of services including reefer, out-of-gauge, breakbulk 
                    and each of our trade services – each operating in tandem with 
                    your business. This gives us the ability to uphold the personal 
                    service we’re globally recognised
                </p>

                <div style={{width:'100%', height:'50px'}} ></div>

                <h3>FUN FACTS</h3>
                <div className='pat_contain_box'>
                    <div className='_header_box' >
                        <FaTrophy size={60} color='#ffba00' />
                        <div className='_header_txt'>
                            <p style={{color:'#ffba00'}}>GETTED AWARDS</p>
                            <h2>+ 1.246</h2>
                        </div>
                    </div>
    
                    <div className='_header_box' >
                        <FaUmbrella size={60} color='#ffba00' />
                        <div className='_header_txt'>
                            <p style={{color:'#ffba00'}}>CARRIED PACKAGE</p>
                            <h2>+ 2.638</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pat_contain_img'></div>
        </div>
    </div>
  )
}

export default Latest