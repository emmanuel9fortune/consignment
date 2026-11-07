import React from 'react'
import Header from '../../components/Navbar'
import { Link } from 'react-router-dom'
import BottomBar from '../../components/Footer'
import { FaBox, FaFile, FaPlane, FaShip } from 'react-icons/fa6'
import { FaCar, FaFilePdf } from 'react-icons/fa'

function About() {
  return (
    <div>
        <Header/>
        <div className='sub_banner'>
            <div className='banner_container_overlay' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', paddingTop:'50px'}} >
                <div style={{width:'100%', height:'50px'}} ></div>
                <h3>ABOUT US</h3>
                <div style={{display:'flex', alignItems:'center', color:'white', alignItems:'center', margin:'20px 0'}}>
                    <Link to={'/'} style={{color:'white', margin:'0 5px', textDecoration:'none'}}>HOME </Link>
                    <p> | ABOUT US</p>
                </div>
            </div>
        </div>

        <div style={{width:'100%', height:'50px'}} ></div>

        <div className='about_us'>
            <div className='about_us1'>
                <h1>Elite Global Transit</h1>

                <h3>One of the leaders in the heavy haulage and abnormal load business</h3>
                <p>
                    Back in 1971, recognising an opportunity to serve the northeast 
                    fishing community, Steve and Helen Hardy launched a road haulage 
                    company called S & H Hardy. In direct competition with Charles Crouch 
                    and Partners, who were then one of the the biggest haulage companies 
                    in Scotland, their fleet of 25 vehicles transported fresh fish from 
                    Peterhead to Humberside and Tyneside on a daily basis. Moving from 
                    their base in Laurencekirk into Aberdeen in 1980 to purchase Tullos 
                    Cold Store the company was able to diversify into hauling both fresh 
                    and frozen goods all over the UK and Europe.
                </p>

                <p className='about_usp'>
                    1984 saw a severe downturn in the fish industry, which led the company 
                    to diversify again into the oil industry. The cold store side of the 
                    business was sold in 1988 to concentrate on the oil and paper industries 
                    throughout the UK and Europe.
                </p>

                <p>
                    In 1990 Steve and Helen son Mark joined the firm and MGS Transport was 
                    established. The following year, the first Stepframe trailer was purchased 
                    to specialise in heavy haulage and abnormal loads for the oil industry. 
                    With the addition of the first Lowloader in 1996, the company has become 
                    one of the leaders in the heavy haulage and abnormal load business.
                </p>

                <h1>OUR PROFESSIONS</h1>

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
                    <div className='about_us2_img1'></div>
                    <p>Member of the Road Haulage Association</p>
                </div>
                <div className='about_us2_box1_'>
                    <FaFilePdf size={40}/>
                    <h3>DOWNLOAD PDF</h3>
                </div>
                <div className='about_us2_img2'></div>
            </div>
        </div>

        <div className='members_container'>
            <h1>BOARD MEMBERS</h1>

            <p>
                Saw the opening of an office in Uithoorn in the 
                Netherlands to service a growing European market and 
                in 2005 opened a base in Great Yarmouth to service 
                the busy oil industry to and from Aberdeen.
            </p>

            <div className='members'>
                <div className='members_box'>
                    <div className='members_box_img1'></div>
                    <h3>John Harris</h3>
                    <p>Business Analist</p>
                </div>
                <div className='members_box'>
                    <div className='members_box_img2'></div>
                    <h3>Louise O’Donnell</h3>
                    <p>Marketting Manager</p>
                </div>
                <div className='members_box'>
                    <div className='members_box_img3'></div>
                    <h3>Bernard Crotty</h3>
                    <p>Senior Partner</p>
                </div>
                <div className='members_box'>
                    <div className='members_box_img4'></div>
                    <h3>Melanie Saunders</h3>
                    <p>Accounting</p>
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

        <div style={{width:'100%', height:'50px'}} ></div>

        <BottomBar/>
    </div>
  )
}

export default About