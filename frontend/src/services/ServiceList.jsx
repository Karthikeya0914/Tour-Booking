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
        desc:"Accurate weather forecast."
    },
    {
        imgUrl:guideImg,
        title:"Best Guide",
        desc:"Throughout the tour."
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"According to your need and interest."
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
