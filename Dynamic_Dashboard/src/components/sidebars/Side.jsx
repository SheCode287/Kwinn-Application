import SideCard from "./SideCard";
import logo from "../../../src/assets/Tesla.svg"
import { MdOutlineTrendingUp } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { PiListChecksFill } from "react-icons/pi";
import { IoBulb } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";


function Side() {
    return (
        <>
            <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
                    <div className="pt-4 mt-4 mb-4 space-y-2 font-medium  border-gray-600 dark:border-gray-700">
                        <img src={logo} alt="" />
                    </div>
                    <ul className="space-y-5 font-medium">
                        <SideCard navigate={'#'} icon={<MdOutlineTrendingUp style={{fontSize:'1.4rem'}}/>} title={'Reports'} />
                        <SideCard navigate={'#'} icon={<BsFillLightningChargeFill style={{fontSize:'1.4rem'}}/>} title={'Library'} />
                        <SideCard navigate={'#'} icon={<MdPeople style={{fontSize:'1.4rem'}}/>} title={'People'} />
                        <SideCard navigate={'#'} icon={<PiListChecksFill style={{fontSize:'1.4rem'}} />} title={'Activities'} />

                        <div className="pt-4 mt-4  space-y-2 font-medium borde-t border-gray-600 dark:border-gray-700">
                            <span className='flex-1 ms-3 whitespace-nowrap text-xl '>Support</span>
                            
                        </div>
                        <SideCard navigate={'#'} icon={<IoBulb style={{fontSize:'1.4rem'}} />} title={'Get Started'} />
                        <SideCard navigate={'#'} icon={<IoSettingsSharp  style={{fontSize:'1.4rem'}}/>} title={'Settings'} />

                    </ul>
                   
                  
                </div>
                
            </aside>



        </>
    )
}

export default Side
