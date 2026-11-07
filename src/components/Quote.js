import React, { useState } from 'react'
import '../styles/quote.css'
import CustomSelect from './CustomSelect'

function Quote() {

    const [firght, setfright] = useState('')

  return (
    <div className='quote_container'>
        <div className='quote_form' >
            <h3>REQUEST A FREE QUOTE</h3>

            <div className='quote_form_field'>
                <div className='quote_form_input_field' >
                    <label>Fright Type</label>
                    <CustomSelect
                        options={[
                            {label: 'Air fright' , value: 'Air fright'},
                            {label: 'Ocean fright' , value: 'Ocean fright'},
                            {label: 'Road fright' , value: 'Road fright'},
                        ]} 
                        onChange={(value)=> setfright(value)}
                        placeholder='Select Fright Type'
                    />
                </div>
                <div className='quote_form_input_field' >
                    <label>Email Address</label>
                    <input placeholder='Enter Email' />
                </div>
            </div>

            <div className='quote_form_field'>
                <div className='quote_form_input_field' >
                    <label>Departure Country</label>
                    <input placeholder='Enter Departure Country'/>
                </div>
                <div className='quote_form_input_field' >
                    <label>Total Weight (KG)</label>
                    <input placeholder='Total Weight'/>
                </div>
            </div>

            <div className='quote_form_field'>
                <div className='quote_form_input_field' >
                    <label>Recipient's Country</label>
                    <input placeholder='Enter Recipients Country' />
                </div>
                <div className='quote_form_input_field' >
                    <label>Expected Delivery Date</label>
                    <input type='date' />
                </div>
            </div>
            
            <div className='dropdown_slide_sign_btn' 
                style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', margin:'20px 0'}}>
                <h3 style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', margin:'10px'}}>CONTACT US</h3>
            </div>
        </div>
        <div className='quote_img' ></div>
    </div>
  )
}

export default Quote