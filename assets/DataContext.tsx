import React, { useContext, useState } from 'react'
import { IpData } from './othersFunction';

// Declare all Context here
// and import context ex :
// import {GlobalDatadef, GlobalDatafunc, GlobalData, SetGlobalData } from '../../assets/DataContext'
// use it with :
// const Data = useContext<GlobalDatadef|null>(GlobalData)
export type GlobalDatadef = {
    Ip?: string;
    SearchQuery?: string;
}
export type GlobalDatafunc = {
    SetIp: (x: string) => void;
    SetSearchQuery: (x: string) => void;
}
export const GlobalData = React.createContext<GlobalDatadef | null>(null)
export const SetGlobalData = React.createContext<GlobalDatafunc | null>(null)
export function GlobalDataProvider({ children }: { children: React.ReactNode }) {
    const [Globaldata, setGlobaldata] = useState<GlobalDatadef>({ Ip: "122.13.442", SearchQuery: "this is search query" });
    const [Globalfunction, setGlobalfunction] = useState<GlobalDatafunc>({ SetIp, SetSearchQuery });
    function SetIp(x: string): void {
        setGlobaldata((prevState) => ({
            ...prevState, Ip: x
        }))
    }
    function SetSearchQuery(x: string) {
        setGlobaldata((prevState) => ({
            ...prevState, SearchQuery: x
        }))
    }
    return (
        <GlobalData.Provider value={Globaldata}><SetGlobalData.Provider value={Globalfunction}>{children}</SetGlobalData.Provider></GlobalData.Provider>
    )

}