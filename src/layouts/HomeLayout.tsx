import React, { useState } from "react"
import { useLocation,NavLink,useHistory } from "react-router-dom"
import {Tab,TabItem} from './HomeLayout.style'
import { renderRoutes } from "react-router-config";

import find from '../assets/Icon-font/find.png'
import findActive from '../assets/Icon-font/findActive.png'
import tesla from '../assets/Icon-font/tesla.png'
import teslaActive from '../assets/Icon-font/teslaActive.png'
import map from '../assets/Icon-font/map.png'
import mapActive from '../assets/Icon-font/mapActive.png'
import shop from '../assets/Icon-font/shop.png'
import shopActive from '../assets/Icon-font/shopActive.png'



interface IProps {
  route:{
    routes:RouteItem[]
  }
}
interface RouteItem{
  path:string
}
interface routeListItem{
  name:string,
  path:string,
  routeIndex:number
}

function Home(props:IProps){
  const {route} = props
  const [currentIndex,setCurrentIndex] = useState(1)
  const routeList = [
    {
      name:'Tesla',
      path:'/tesla',
      routeIndex:1,
      activeImg:teslaActive,
      img:tesla
    },
    {
      name:'发现',
      path:'/find',
      routeIndex:2,
      activeImg:findActive,
      img:find
    },
    {
      name:'地图',
      path:'/tesmap',
      routeIndex:3,
      activeImg:mapActive,
      img:map
    },
    {
      name:'商城',
      path:'/shop',
      routeIndex:4,
      activeImg:shopActive,
      img:shop
    },
  ]
  const history = useHistory()
  function changePath(route:routeListItem){
    history.push(route.path)
    setCurrentIndex(route.routeIndex)
  }
  
  return (
    <>
      <Tab>
        {routeList.map((item,keyIndex)=>
          <NavLink onClick={()=>changePath(item)} key={keyIndex} to={item.path} activeClassName="selected">
            <TabItem>
              <img alt="主页" src={currentIndex===item.routeIndex?item.activeImg:item.img} />
              <span>{item.name}</span>
            </TabItem>
          </NavLink>
        )}
      </Tab>
      {renderRoutes(route.routes)}
    </>
  )
}


export default React.memo(Home)