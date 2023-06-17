import React,{lazy,Suspense} from "react";
import { RouteConfig } from "react-router-config";
import {Redirect} from 'react-router-dom'
import HomeLayout from "../layouts/HomeLayout";

//一级路由级别组件
const Tesla = lazy(()=>import('../pages/Tesla'))
const Find = lazy(()=>import('../pages/Find'))
const Shop = lazy(()=>import('../pages/Shop'))
const TesMap = lazy(()=>import('../pages/TesMap'))

//二级路由级别组件




const SuspenseComponent = (Component:any)=>(props:object)=>{
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const routes:RouteConfig[] = [
  {
    path:'/',
    component:HomeLayout as any,
    routes:[
      {
        path:'/',
        exact:true,
        render:()=><Redirect to={'/tesla'} />
      },
      {
        path:'/tesla',
        component:SuspenseComponent(Tesla)
      },
      {
        path:'/find',
        component:SuspenseComponent(Find)
      },
      {
        path:'/tesmap',
        component:SuspenseComponent(TesMap)
      },
      {
        path:'/shop',
        component:SuspenseComponent(Shop)
      }
    ]
  }
]

export default routes
