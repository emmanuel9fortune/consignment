import React from 'react'
import Header from '../../components/Navbar'
import { Link } from 'react-router-dom'
import BottomBar from '../../components/Footer'
import { FaBox, FaFile, FaPlane, FaShip } from 'react-icons/fa6'
import { FaCar, FaFilePdf } from 'react-icons/fa'

function Services() {
  return (
    <div>
        <Header/>
        <div className='sub_banner'>
            <div className='banner_container_overlay' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', paddingTop:'50px'}} >
                <div style={{width:'100%', height:'50px'}} ></div>
                <h3>SERVICES</h3>
                <div style={{display:'flex', alignItems:'center', color:'white', alignItems:'center', margin:'20px 0'}}>
                    <Link to={'/'} style={{color:'white', margin:'0 5px', textDecoration:'none'}}>HOME </Link>
                    <p> | SERVICES</p>
                </div>
            </div>
        </div>

        <div style={{width:'100%', height:'50px'}} ></div>

            <div className='about_us'>
                <div className='about_us1'>
                    <h1>TRADE SERVICES</h1>

                    <h3  style={{fontWeight:'500'}}>
                        What makes our service stand out from the crowd, however, 
                        is our ability to provide in-depth, expert knowledge of 
                        individual geographic trades and markets.
                    </h3>
                    <p>
                        Regardless of your ocean freight needs, SHIPPER Logistics of New York can provide customized, high quality Logistical Solutions for all import shipping tasks. Whether it be large or small, valuable or not, or come with a high degree of complexity our worldwide network of experienced offices and agents can make even the most complex transportation scenario simple and trouble free.
                    </p>

                    <p className='about_usp'>
                        MTS Logistics is licensed as a Non-Vessel Operating Common Carrier or NVOCC. As such we can offer a comprehensive range of services including:
                    </p>

                    <ul>
                        <li>Customized freight solutions at competitive pricing</li>
                        <li>Timely alerts and notices with track-and-trace monitoring</li>
                        <li>ISF filing and full customs clearance</li>
                        <li>Local trucking and door-to-door delivery</li>
                        <li>Storage and warehouse options</li>
                        <li>Complete purchase order management</li>
                    </ul>

                    <div className='about_img_' ></div>

                    <p>
                        If you would like to contact us and discuss the import and cargo services we can offer, please feel free to write, call or fax us with any questions or concerns you may have.
                    </p>

                    <p>
                        Supply chain sustainability is a trending topic nowadays because of people’s growing awareness to keeping the Earth. The container shipping industry’s been very unprofitable over the past 3-5 years. Making things worse, earnings have.
                    </p>

                    <h1>OTHER FEATURES</h1>

                    <div>
                        <div>
                            <FaPlane size={40} color='#ffba00'/>
                            <h3>AIR SHIPPING</h3>
                            <p>We can also offer outside storage facilities in Aberdeen and both outside and inside storage in Cowdenbeath.</p>
                        </div>
                        <div>
                            <FaCar size={40} color='#ffba00'/>
                            <h3>GROUND LOGISTIC</h3>
                            <p>We can also offer outside storage facilities in Aberdeen and both outside and inside storage in Cowdenbeath.</p>
                        </div>
                        <div>
                            <FaShip size={40} color='#ffba00'/>
                            <h3>AIR SHIPPING</h3>
                            <p>We can also offer outside storage facilities in Aberdeen and both outside and inside storage in Cowdenbeath.</p>
                        </div>
                        <div>
                            <FaBox size={40} color='#ffba00'/>
                            <h3>AIR SHIPPING</h3>
                            <p>We can also offer outside storage facilities in Aberdeen and both outside and inside storage in Cowdenbeath.</p>
                        </div>
                    </div>
                </div>

                
                <div className='about_us2'>
                    <div className='about_us2_box1'>
                        <h3>Trade Services</h3>
                        <h3>Dry Cargo</h3>
                        <h3>Reefer Cargo</h3>
                        <h3>Oversized & Breakbulk Cargo</h3>
                        <h3>Intermodal</h3>
                        <h3>Warehousing & Storage</h3>
                        <h3>Cross Trading</h3>
                        <h3>Cargo Trailers</h3>
                    </div>

                    <div className='about_us2_img3'></div>
                    <div className='about_us2_box1_'>
                        <FaFilePdf size={40}/>
                        <h3>DOWNLOAD PDF</h3>
                    </div>
                </div>
            </div>



        <div style={{width:'100%', height:'50px'}} ></div>
        <BottomBar/>
    </div>
  )
}

export default Services