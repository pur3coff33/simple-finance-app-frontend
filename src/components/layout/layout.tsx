import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../App";
import {BsMoonStarsFill, BsSunFill} from "react-icons/bs"
import {CiLogout} from "react-icons/ci"



export default function Layout(props: {
    children: ReactNode
}){

    const {theme, updateTheme, firebase}:any = useContext(ThemeContext)   

    return (
        <div className={` ${theme === 'default' ? 'bg-secondary' : 'bg-secondary-dark'} h-full`}>
            <nav className={`flex items-center h-14 ${theme === 'default' ? 'bg-primary' : 'bg-primary-dark'} p-3 shadow-md justify-between`}>
                <span className="text-xl">
                    Simple Finance
                </span>

                <span className="flex gap-3">
                    <button className="text-sm" onClick={() => updateTheme(theme === 'default' ? 'dark' : 'default')}>
                        {theme === 'default' ? <BsSunFill /> : <BsMoonStarsFill />}
                    </button>
                    <button className="text-xl bg-white text-black p-1 rounded-full" onClick={() => firebase.getAuth().signOut()}>
                        <CiLogout />
                    </button>

                </span>
              
            </nav>
            <div className="p-3">
                {props.children}
            </div>
        </div>
    )
}