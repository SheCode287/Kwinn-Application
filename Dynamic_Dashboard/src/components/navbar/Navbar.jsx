import { IoMdDownload } from "react-icons/io";

function Navbar() {
    return (
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                    
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Reports</span>
                </div>

                <button  type="button" class="flex items-center  w-[10rem] gap-2 h-10 justify-center text-md text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" >
                    <span >Download</span>
                    <IoMdDownload />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
