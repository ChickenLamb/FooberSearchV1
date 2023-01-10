import React from 'react'
import axios from 'axios'

import { navigate } from "vite-plugin-ssr/client/router";
export type IpData = {
    IPv4?: string;
    city?: string;
    country_code?: string;
    country_name?: string;
    latitude?: number;
    longitude?: number;
    postal?: number;
    state?: string;
}

export async function GetIpData(setIpData:React.Dispatch<any>|undefined) {
    //creating IP state
    let ip:IpData={};
    axios.get('https://geolocation-db.com/json/').then((res)=>setIpData?.(res.data));
    
    
}
export function SearchClick(InputQuery:string){
    InputQuery!==""?navigate("/search?q="+InputQuery):null
  }
export  function SearchEnter(e:React.KeyboardEvent<HTMLInputElement>,InputQuery:string){
    if(e.key === 'Enter') { 
      SearchClick(InputQuery)
     }
  }
