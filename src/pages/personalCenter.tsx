import React, {useState, Fragment} from 'react'
import {Badge, NavBar, Swiper, TabBar} from 'antd-mobile'
import {BiBus,AiOutlineSave,BiMap,FiCornerUpRight} from "react-icons/all"
import {useLocation, useNavigate} from 'react-router-dom';

import {
  UserOutline,
} from 'antd-mobile-icons'


const tabs = [
  {
    key: 'home',
    title: 'findWay',
    icon: <BiMap />,
    badge: Badge.dot,
  },
  {
    key: 'Page2',
    title: 'goOut',
    icon: <BiBus />,
    badge: '5',
  },
  {
    key: 'Page3',
    title: 'SaveRoute',
    icon: <AiOutlineSave/>,
    badge: '99+',
  },
  {
    key: 'personalCenter',
    title: 'Mine',
    icon: <UserOutline />,
  },
]

export default function PersonalCenter() {
  const navigate =useNavigate()
  const location1 = useLocation()
  const { pathname } = location1
  const setRouteActive = (value: string) => {
    console.log(value)
    navigate(`../${value}`)
  }
  const url = localStorage.getItem("imageUrl")
  const familyName = localStorage.getItem("familyName")
  const givenName = localStorage.getItem("givenName")
  const colors = ['https://developers.google.com/static/maps/images/docs-landing-get-started-hero.png', 'https://nordvpn.com/wp-content/uploads/blog-social-line-vpn-ranking-country-map-1200x628-1.png',
    'https://lh3.googleusercontent.com/gYE0KowUZ6rICF8vtgJTWAGv3tr6Nnxh4aaWDLVgQPU0gtU7xGwp0VYT9oDmrAInBRJODEV0SAXWMEboQ1vtsl7OzoF8XPeVmFfVQtk=w450', 'https://ps.w.org/gmap-embed/assets/icon-256x256.jpg?rev=2521598']

  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div
        className="h-60 text-white flex justify-center items-center text-4xl select-none mt-4"
        style={{ backgroundImage: `url(${color})`, backgroundSize: "contain"}}
      >
        {index + 1}
      </div>
    </Swiper.Item>
  ))
  return (
    <div className="h-[100vh] w-[100vw] bg-white">
      <NavBar onBack={()=>navigate(-1)}>PersonalCenter</NavBar>
      <div className="ml-5 flex">
        <img src={url} className="rounded-full flex-initial w-20"/>
        <div className="flex-initial w-full ml-6 mt-2 text-xl">
          {familyName}{givenName}
          <p style={{color:"gray",fontSize:"1rem"}}>level:1</p>
        </div>
      </div>
      <Swiper autoplay>{items}</Swiper>
      <img src="https://static.vecteezy.com/system/resources/previews/002/392/527/non_2x/cartoon-illustration-of-open-empty-parcel-box-free-vector.jpg" alt="" style={{width:"50%",height:"30%",margin:"0 auto"}}/>
      <p style={{color:"black",fontSize:"1rem",width:"8rem",height:"30%",margin:"0 auto"}}>Nothing Posted</p>
      <TabBar className="absolute h-30 w-full z-50 bottom-0 bg-white cursor-pointer" activeKey={pathname} onChange={value => setRouteActive(value)}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}
