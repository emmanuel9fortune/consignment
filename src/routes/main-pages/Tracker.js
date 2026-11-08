import React, { useEffect, useState } from 'react'
import Header from '../../components/Navbar'
import { MdTraffic } from 'react-icons/md'
import TrafficLight from '../../components/Traffic'
import '../../styles/track.css'
import MyMap from '../../components/Map'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ErrorDisplay from '../../components/ErrorDisplay'
import { FaFilePdf } from 'react-icons/fa'
import Pdffile from '../../components/PdfFile'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { PDFViewer} from '@react-pdf/renderer'
import Loader from '../../Loader'
import { db } from '../../firebase'
import { collection, onSnapshot } from "firebase/firestore";
import SEO from '../../components/SEO'

function Tracker() {

    const {id} = useParams()
    const [info, setinfo] = useState({})
    const [loading, setloading] = useState(true)

    
    const [ids, setids] = useState([])

    useEffect(()=>{
        const unsub = onSnapshot(
            collection(db, 'userchat'),
            (snapshot) => {
                setids(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                );
            }
        );

        return () => unsub();
    },[])    

    

    useEffect(()=>{
        const func=async()=>{
            try {
                const prob = ids?.map((item)=>item?.data)
                
                const  res = prob?.find((item)=> item?.tracker?.track_number === id)  
                if (!res) {
                    setinfo(null);
                } else {
                    setinfo(res?.tracker);
                }
                setloading(false)

            } catch (error) {
                console.log(error);
                
                setloading(false)
            }
        }
        func()
    },[id, ids])
    

    if(info === null){
        return(
            <ErrorDisplay/>
        )
    }

    
      if(loading && !info){
        return <Loader/>
      }

  return (
    <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <SEO
            title="Elite Global Transit | International Shipping & Logistics"
            description="Discover reliable international shipping, freight forwarding, cargo transportation and logistics services with Elite Global Transit."
            path="/"
        />
        <Header track={true} />
        <div style={{width:'100%', height:'150px'}} ></div>

        <h1 style={{width:'100%', textAlign:'center', margin:'0 0 5px 0'}}>Shipment Status</h1>
        <div className='track_hd_line'></div>

        <div className='track_container' >
            <div className='track_box' >
                <div className='_header_box' >
                    <TrafficLight active={info?.fst_stage} />
                    <div className='_header_txt'>
                        <p>CONFIRMED</p>
                        <p style={{color:'grey'}}>PACKAGE CONFIRMED IN PORT</p>
                    </div>
                </div>

                <div className='_header_box' >
                    <TrafficLight active={info?.sec_stage}/>
                    <div className='_header_txt'>
                        <p>SHIPPED</p>
                        <p  style={{color:'grey'}}>PACKAGE IS ON THE WAY</p>
                    </div>
                </div>

                <div className='_header_box' >
                    <TrafficLight active={info?.trd_stage}/>
                    <div className='_header_txt'>
                        <p>SAILING</p>
                        <p  style={{color:'grey'}}>ON THE WAY</p>
                    </div>
                </div>

                <div className='_header_box' >
                    <TrafficLight active={info?.frt_stage}/>
                    <div className='_header_txt'>
                        <p>DESTINATION</p>
                        <p  style={{color:'grey'}}>PACKAGE DELIVERED</p>
                    </div>
                </div>
            </div>
            <div className='track_box' >
                <h3>SHIPMENT DETAILS</h3>
                <div className='trac_box_'>
                    <h4>INVOICE</h4>
                    <p>#{info?.invoice}</p>
                </div>
                <div className='trac_box_'>
                    <h4>STATUS</h4>
                    <p>{info?.status}</p>
                </div>
                <div className='trac_box_'>
                    <h4>EXPECTED ARRIVAL</h4>
                    <p>{info?.expected_arrival}</p>
                </div>
                <div className='trac_box_'>
                    <h4>TRACKING NO.</h4>
                    <p>{info?.track_number}</p>
                </div>
                <div className='trac_box_'>
                    <h4>QUANTITY</h4>
                    <p>{info?.quantity}</p>
                </div>
                <div className='trac_box_'>
                    <h4>SERVICE</h4>
                    <p>{info?.service}</p>
                </div>
                <div className='trac_box_'>
                    <h4>WEIGHT</h4>
                    <p>{info?.weight}</p>
                </div>
                <div className='trac_box_'  style={{width:'100%', display:'flex', flexDirection:'column'}}>
                    <h4 style={{width:'100%', marginBottom:'10px'}}>DESCRIPTION</h4>
                    <p>{info?.description}</p>
                </div>
            </div>
            <div className='track_box' >
                <MyMap info={info} />
            </div>
        </div>

        <div className='track_container_' >
            <div className='track_box2'>
                <h3>DESTINATION</h3>

                <div>
                    <h4>RECEIVER NAME</h4>
                    <p>-{info?.receiver_name}</p>
                </div>
                <div>
                    <h4>RECEIVER EMAIL</h4>
                    <p>- {info?.receiver_email}</p>
                </div>
                <div>
                    <h4>RECEIVER ADDRESS</h4>
                    <p>- {info?.receiver_address}</p>
                </div>
                <div>
                    <h4>EXPECTED DATE OF DELIVERY</h4>
                    <p>- {info?.expected_arrival}</p>
                </div>
            </div>

            <div className='track_box2'>
                <h3>ORIGIN</h3>

                <div>
                    <h4>SENDER NAME</h4>
                    <p>- {info?.send_name}</p>
                </div>
                {
                    info?.sender_email !== 'PENDING' ?
                    <div>
                        <h4>SENDER EMAIL</h4>
                        <p>- {info?.sender_email}</p>
                    </div>
                    : null
                }
                {
                    info?.sender_phone ?
                    <div>
                        <h4>SENDER PHONE NO.</h4>
                        <p>- {info?.sender_phone}</p>
                    </div>
                    : null
                }
                <div>
                    <h4>SENDER ADDRESS</h4>
                    <p>- {info?.sender_address}</p>
                </div>
                <div>
                    <h4>EXPECTED DATE OF DELIVERY</h4>
                    <p>- {info?.expected_arrival}</p>
                </div>
                <div>
                    <h4>SHIPMENT DATE</h4>
                    <p>- {info?.shipment_date}</p>
                </div>
            </div>
        </div>
        
        <div className='track_container_' style={{display:'flex', alignItems:'initial'}} >
                {
                    info?.img ?
            <div className='track_box2'>
                    <img 
                     src={`https://control.whitneyblack.com/public/${info?.img}`} 
                     style={{
                        width:'100%',
                        height:'400px'
                     }}
                     alt=''
                     />
            </div>
                : null
                }
            
            <div style={{height:'fit-content'}} className='track_box2'>
                
                <PDFViewer width="100%" height="365px">
                    <Pdffile info={info} />
                </PDFViewer>
                <p>DOWNLOAD RECEIPT FOR YOUR PARCEL</p>
                 <PDFDownloadLink 
                    document={<Pdffile info={info} />} 
                    fileName="elitelogistics.pdf"
                    style={{textDecoration:'none'}}
                >
                    <div style={{cursor:'pointer'}} className='about_us2_box1_'>
                        <FaFilePdf size={40}/>
                        <h3 style={{userSelect:'none'}}>DOWNLOAD PDF</h3>
                    </div>
                </PDFDownloadLink>
            </div>
        </div>

        
        <div style={{width:'100%', height:'150px'}} ></div>
    </div>
  )
}

export default Tracker