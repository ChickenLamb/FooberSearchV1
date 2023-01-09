import React, { useContext, useState } from 'react'
import { IpData } from './othersFunction';
export type InterfaceData = {
    SearchQuery: string;
    IpData: IpData;
}

const GlobalData = React.createContext<InterfaceData | null>(null)
const SetGlobalData = React.createContext<React.Dispatch<any> | null>(null)
export function DataProvider({ children }: { children: React.ReactNode }) {
    const [Data, setData] = useState({ SearchQuery: "", IpData: {} });
    function set(x: any) {
        setData(x);
    }
    return (
        <GlobalData.Provider value={Data}><SetGlobalData.Provider value={set}>{children}</SetGlobalData.Provider></GlobalData.Provider>
    )

}