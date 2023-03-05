import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../App";
import {BsMoonStarsFill, BsSunFill} from "react-icons/bs"


export default function Layout(props: {
    children: ReactNode
}){

    const {theme, updateTheme}:any = useContext(ThemeContext)
    
    return (
        <div className={` ${theme === 'default' ? 'bg-secondary' : 'bg-secondary-dark'} h-full`}>
            <nav className={`flex items-center h-14 ${theme === 'default' ? 'bg-primary' : 'bg-primary-dark'} p-3 shadow-md justify-between`}>
                <span className="text-xl">
                    Simple Finance
                </span>

                <button className="text-xl" onClick={() => updateTheme(theme === 'default' ? 'dark' : 'default')}>
                    {theme === 'default' ? <BsSunFill /> : <BsMoonStarsFill />}
                </button>
            </nav>
            <div className="p-3">
                {props.children}
            </div>
        </div>
    )
}