import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'



const servicesData=[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        imgUrl:guideImg,
        title:"Best Guide",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    }
]

const ServiceList = () => {
  return (
    <>
        {
            servicesData.map((item,index)=><Col lg='3' sm='12' md='6' className='mb-4' key={index}>
                <ServiceCard item={item}/>
            </Col>)
        }
    </>
  )
}

export default ServiceList