import React from 'react'
import '../styles/pack.css'

function Pack() {
  return (
    <div className='pack_container'>
        <div className='pack_container_boxes'>
            <div className='pack_container_box'>
                <h1>01</h1>
                <div>
                    <h1>PACKING</h1>
                    <h3>STORAGES</h3>

                    <div>
                        <p>READ MORE</p>
                    </div>
                </div>
            </div>

            <div className='pack_container_box2'>
                <h1>02</h1>
                <div>
                    <h1>LANDING</h1>
                    <h3>FEATURES</h3>

                    <div>
                        <p>READ MORE</p>
                    </div>
                </div>
            </div>

            <div className='pack_container_box3'>
                <h1>03</h1>
                <div>
                    <h1>DELIVERY</h1>
                    <h3>SERVICES</h3>

                    <div>
                        <p>READ MORE</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pack