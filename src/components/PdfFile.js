import React from 'react'
import {Page, Text, Image, Document, StyleSheet, View, PDFViewer} from '@react-pdf/renderer'


const styles = StyleSheet.create({
  view:{
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    height:'365px'
  },  
  body:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  main:{
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth:'600px',
  },
  header:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  fst_writeups:{
    width: '100%',
    display: 'flex',
    flexDirection:'row',
    fontSize:'10px',
    fontWeight:'800',
    marginVertical: 10,
    justifyContent: 'center',
  },
  imag:{
    width:'50%'
  },
  imag2:{
    width:'50%'
  },
  header_bod:{
    width:'50%',
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
  },
  header_subbod:{
    width:'100%',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'row',
    marginVertical: 40,
  },
  mid_text:{
    display:'flex',
    width:'100%',
    textAlign:'center',
  },
  mid:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    marginVertical:40,
  },
  mid_box:{
    width: '30%',
    fontSize:'15px',
    marginHorizontal : 20,
  },
  mid_boxsub:{
    marginVertical:20,
    width:'100%'
  },
  mid_boxbar:{
    marginVertical:10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  min:{
    marginRight: 200,
  },
  copy:{
    transform : 'rotate(-45deg)',
    fontSize:'30px'
  },
  mid2:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
  },
  mid2_box:{
    fontSize:'9px',
    marginHorizontal: 10
  },
  tit:{
    fontSize:'12px',
  },
  titt:{
    fontSize:'9px',
  },
  name:{
    color:'orange',
    fontWeight:800,
  },
  bottom:{
    width:'100%',
    display:'flex',
    flexDirection:'row'
  },
  bottombox:{
    width:'50%',
    Margin:10,
    display:'flex',
    alignItems: 'center',
    marginTop : 30
  },
  bottomimg1:{
    width:'100%',
  },
  bottomimg2:{
    width:'40%',
  },
  mid2_box_txt:{
    width:'100px',
    flexWrap:'wrap'
  }
})



const Pdffile=({info})=>{
    return(
        <Document>
            <Page style={styles.body}>

            <View style={styles.main}>
            <View style={styles.header}>

                <View style={styles.fst_writeups}>
                <Text style={styles.min} >{info?.expect_arrival}</Text>
                <Text>Elite Global Transit | {info?.invoice}</Text>
                </View>

                <View style={styles.header_subbod}>
                <View style={styles.header_bod}>
                    <Image style={styles.imag} src={'/assets/logo.png'} />
                    <Text style={styles.name}>Elite Global Transit</Text>
                    <Text>Tracking Number : {info?.track_number}</Text>
                </View>

                <Image style={styles.imag2} src={'/assets/ban.png'} />
                </View>

            </View>


            <View style={styles.mid_text}>
            <Text style={styles.copy}>Certified True Copy</Text>
            <Text>Elite Global Transit</Text>
            <Text>Address : USA, CANADA, UK, ASIA & EUROPE</Text>
            <Text>Mail : info@eliteglobaltransit.com</Text>
            <Text>Company Website : www.eliteglobaltransit.com</Text>
            </View>


            <View style={styles.mid}>
                <View style={styles.mid_box}>
                <Text style={styles.tit}>FROM(SENDER)</Text>
                <Text style={styles.mid_boxsub}>{info?.send_name}</Text>
                {
                  info?.sender_phone ?
                    <Text style={styles.titt}>Phone : {info?.sender_phone}</Text>
                  : null
                }
                {
                  info?.sender_address !== 'PENDING' ?
                    <Text style={styles.titt}>Address : {info?.sender_address}</Text>
                  : null
                }
                <Text style={styles.titt}>Origin Office : Elite Global Transit </Text>
                </View>

                <View style={styles.mid_box}>
                <Text style={styles.tit}>TO(CONSIGNEE)</Text>
                <Text style={styles.mid_boxsub}>{info?.receiver_name}</Text>
                <Text style={styles.titt}>Phone : {info?.phone_number} </Text>
                <Text style={styles.titt}>Address : {info?.receiver_address}</Text>
                </View>

                <View style={styles.mid_box}>
                <View style={styles.mid_boxbar}>
                    <Image style={styles.imag} src={'/assets/bar.png'} />
                    <Text style={styles.titt}>{info?.track_number}</Text>
                </View>
                <Text style={styles.titt}>Orde ID : {info?.invoice} </Text>
                <Text style={styles.titt}>Payment Due : {info?.expected_arrival} </Text>
                </View>
            </View>



            <View style={styles.mid2}>
                <View style={styles.mid2_box}>
                  <Text>Description</Text>
                  <Text style={styles.mid2_box_txt} >{info?.description}</Text>
                </View>
                
                <View style={styles.mid2_box}>
                <Text>Qty</Text>
                <Text>{info?.quantity}</Text>
                </View>

                <View style={styles.mid2_box}>
                  <Text>Status</Text>
                  <Text>{info?.status}</Text>
                </View>
                {
                  info?.duty !== '0' &&
                  <View style={styles.mid2_box}>
                    <Text>Duties</Text>
                    <Text  style={styles.mid2_box_txt} >$ {info?.duty} {info?.duty ? info?.duty_amount_status ? "paid" : "unpaid" : null}</Text>
                  </View>
                }
                {
                  info?.tax !== '0' &&
                  <View style={styles.mid2_box}>
                    <Text>Taxes</Text>
                    <Text  style={styles.mid2_box_txt} >$ {info?.tax} {info?.tax ? info?.tax_amount_status ? "paid" : "unpaid" : null}</Text>
                  </View>
                }
                <View style={styles.mid2_box}>
                  <Text>Shipping Cost</Text>
                  <Text  style={styles.mid2_box_txt} >$ {info?.amount} {Number(info?.amount) !== 0 ? info?.ship_amount_status ? "paid" : "unpaid" : null}</Text>
                </View>
                
                <View style={styles.mid2_box}>
                  <Text>Total Cost</Text>
                  <Text style={styles.mid2_box_txt} >$ { 
                    !info?.ship_amount_status ? 
                      info?.amount : 
                      info?.duty_amount_status && info?.tax_amount_status ?
                      Number(info?.duty) + Number(info?.tax)
                      : info?.duty_amount_status ?
                        Number(info?.tax)
                      : info?.tax_amount_status ?
                        Number(info?.duty)
                      : 0
                    } {
                      info?.amount === 0 && info?.duty === 0 && info?.tax === 0 ? 
                        info?.ship_amount_status ? 
                          "paid" : 
                          info?.duty_amount_status && info?.tax_amount_status ?
                          "paid"
                          : "unpaid"
                      : null
                    } </Text>
                </View>
            </View>


            <View style={styles.bottom}>
                <View style={styles.bottombox}>
                <Text>Payment Methods: </Text>
                <Image style={styles.bottomimg1} src={'/assets/py.jpg'} /> 
                </View>

                <View style={styles.bottombox}>
                <Text>Official stamp / {new Date(info?.timestamp?.toDate()).toLocaleDateString()} : </Text>
                <Image style={styles.bottomimg2} src={'/assets/smtp.jpg'} /> 
                <Text style={styles.titt}>Stamp Duty:</Text>
                </View>
            </View>



            </View>
            </Page>
        </Document>
    )
}

export default Pdffile